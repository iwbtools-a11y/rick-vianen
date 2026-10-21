'use client';

import {
  GOLDEN_TICKET_KICKOFF_SHORT_LABEL,
  GOLDEN_TICKET_ORIGINAL_PRICE,
  GOLDEN_TICKET_PRICE,
  GOLDEN_TICKET_PUBLIC_PRICE,
  GOLDEN_TICKET_TOTAL,
} from '@/lib/golden-ticket';
import { useGoldenTicketPhase } from '@/lib/use-golden-ticket-phase';

export function GoldenTicketVisual() {
  const phase = useGoldenTicketPhase();
  // Vóór hydratie (phase === null) tonen we de exclusieve prijs, dezelfde
  // aanname die de rest van de pagina ook aanhoudt.
  const isPublicPhase = phase === 'closing' || phase === 'closed';
  const strikePrice = isPublicPhase ? GOLDEN_TICKET_PRICE : GOLDEN_TICKET_ORIGINAL_PRICE;
  const activePrice = isPublicPhase ? GOLDEN_TICKET_PUBLIC_PRICE : GOLDEN_TICKET_PRICE;

  // Ponsgaatjes als echte uitsparing in het ticket (CSS mask), niet een
  // kleur die moet matchen met wat erachter staat. Werkt op elke
  // achtergrond, en levert bij een PNG-export ook echte transparantie op.
  // De positie (100% - stub-breedte) moet in de pas blijven met de
  // breedte van de stub hieronder (w-28 / md:w-32).
  const notchMask =
    'radial-gradient(circle 10px at calc(100% - var(--stub-w)) 0%, transparent 9px, #000 10px), ' +
    'radial-gradient(circle 10px at calc(100% - var(--stub-w)) 100%, transparent 9px, #000 10px)';

  return (
    <div className="mx-auto max-w-2xl">
      <div
        className="relative flex rounded-2xl overflow-hidden editorial-shadow gradient-golden-ticket [--stub-w:7rem] md:[--stub-w:8rem]"
        style={{
          maskImage: notchMask,
          WebkitMaskImage: notchMask,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      >
        {/* Hoofdpaneel */}
        <div className="flex-1 p-8 md:p-10 flex flex-col items-center justify-center text-center">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#e8c98a] mb-3">
            Rick Vianen presenteert
          </p>
          <p className="font-[family-name:var(--font-headline)] text-lg md:text-xl font-black tracking-tight text-white/80 mb-1">
            MOVE
          </p>
          <h2 className="font-[family-name:var(--font-headline)] text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-[0.92] text-white mb-6 md:whitespace-nowrap">
            Golden Ticket
          </h2>
          <div className="flex items-baseline gap-3">
            <span className="text-white/40 line-through text-base">{strikePrice}</span>
            <span className="font-[family-name:var(--font-headline)] text-4xl font-black text-[#f0d9a8]">
              {activePrice}
            </span>
          </div>
          <p className="text-[11px] text-white/45 mt-1.5 uppercase tracking-wide font-medium">
            Eenmalig &middot; incl. btw
          </p>
          <p className="text-[11px] text-[#e8c98a] mt-2 uppercase tracking-wide font-bold">
            {`Kick-off ${GOLDEN_TICKET_KICKOFF_SHORT_LABEL}`}
          </p>
        </div>

        {/* Perforatielijn */}
        <div className="w-0 border-l-2 border-dashed border-white/20" />

        {/* Stub */}
        <div className="w-28 md:w-32 shrink-0 gradient-gold-stub flex flex-col items-center justify-center text-[#241611] py-8 px-2 text-center">
          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#241611]/70 mb-2">
            Toegang
          </span>
          <span className="font-[family-name:var(--font-headline)] text-4xl font-black leading-none">
            {GOLDEN_TICKET_TOTAL}
          </span>
          <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#241611]/70 mt-2 leading-tight">
            exclusieve plekken
          </span>
        </div>
      </div>
    </div>
  );
}
