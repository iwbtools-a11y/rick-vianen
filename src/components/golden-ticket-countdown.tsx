'use client';

import { useSyncExternalStore } from 'react';
import { GOLDEN_TICKET_DEADLINE_ISO, GOLDEN_TICKET_PUBLIC_DEADLINE_ISO } from '@/lib/golden-ticket';

type TimeLeft = {
  expired: boolean;
  label: string;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const now = Date.now();
  const exclusiveDeadline = new Date(GOLDEN_TICKET_DEADLINE_ISO).getTime();
  const publicDeadline = new Date(GOLDEN_TICKET_PUBLIC_DEADLINE_ISO).getTime();

  // Vóór de exclusieve deadline telt de klok daarnaartoe af, daarna
  // schakelt hij automatisch door naar de publieke deadline.
  const isExclusivePhase = now < exclusiveDeadline;
  const target = isExclusivePhase ? exclusiveDeadline : publicDeadline;
  const label = isExclusivePhase ? 'Exclusieve toegang sluit over' : 'Aanmelden sluit over';

  const diff = target - now;
  const clamped = Math.max(0, diff);
  return {
    expired: now >= publicDeadline,
    label,
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
  };
}

// useSyncExternalStore vergelijkt snapshots op referentie: getSnapshot moet
// dus dezelfde waarde teruggeven zolang er niets veranderd is, anders
// rendert React oneindig door. Daarom een gecachet snapshot dat alleen bij
// elke tick vervangen wordt, in plaats van getTimeLeft() bij elke render.
let cachedSnapshot: TimeLeft = getTimeLeft();

function subscribe(callback: () => void) {
  const interval = setInterval(() => {
    cachedSnapshot = getTimeLeft();
    callback();
  }, 1000);
  return () => clearInterval(interval);
}

function getSnapshot(): TimeLeft {
  return cachedSnapshot;
}

// De pagina wordt statisch geëxporteerd (output: "export"), dus de server
// kent geen actuele tijd. Server en eerste client-render tonen daarom niets,
// pas na hydratie vult useSyncExternalStore de echte klok in.
function getServerSnapshot(): TimeLeft | null {
  return null;
}

export function GoldenTicketCountdown() {
  const time = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  // Ook na de publieke deadline: laat 'm dan gewoon helemaal weg, in plaats
  // van een "gesloten"-melding die daarna voor altijd blijft staan.
  if (!time || time.expired) return null;

  const units = [
    { value: time.days, label: 'dagen' },
    { value: time.hours, label: 'uur' },
    { value: time.minutes, label: 'min' },
    { value: time.seconds, label: 'sec' },
  ];

  return (
    <div className="inline-flex flex-col items-center gap-3 gradient-dark rounded-2xl px-6 py-5 md:px-10 md:py-6">
      <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-primary">
        {time.label}
      </p>
      <div className="flex items-center gap-2.5 md:gap-4">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-2.5 md:gap-4">
            <div className="text-center w-12 md:w-16">
              <div className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-black text-white tabular-nums leading-none">
                {String(u.value).padStart(2, '0')}
              </div>
              <div className="text-[9px] md:text-[10px] text-white/50 uppercase tracking-wide mt-1.5">
                {u.label}
              </div>
            </div>
            {i < units.length - 1 && (
              <span className="text-white/20 text-2xl md:text-3xl font-black -mt-3">:</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
