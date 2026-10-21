"use client";

import { useState } from "react";
import Link from "next/link";
import { CalendlyPopupCta } from "@/components/calendly-popup-cta";

/**
 * On the "site" variant this navigates to /intake. On the "landing" variant it
 * opens Calendly in a popup, so an ad visitor never leaves the nav-free page.
 */
function BookCallCta({
  variant,
  className,
  children,
}: {
  variant: "site" | "landing";
  className: string;
  children: React.ReactNode;
}) {
  if (variant === "landing") {
    return <CalendlyPopupCta className={className}>{children}</CalendlyPopupCta>;
  }
  return (
    <Link href="/intake" className={className}>
      {children}
    </Link>
  );
}

/* ------------------------------------------------------------------ */
/*  VALUE ITEM                                                         */
/* ------------------------------------------------------------------ */
function ValueItem({
  children,
  value,
  icon = "check_circle",
  highlight = false,
}: {
  children: React.ReactNode;
  value?: string;
  icon?: string;
  highlight?: boolean;
}) {
  return (
    <li className="flex items-center justify-between gap-3 py-3 border-b border-outline-variant/15 last:border-0">
      <div className="flex items-start gap-3 flex-1">
        <span
          className={`material-symbols-outlined text-lg mt-0.5 shrink-0 ${highlight ? "text-secondary" : "text-primary"}`}
          style={highlight ? { fontVariationSettings: "'FILL' 1" } : undefined}
        >
          {icon}
        </span>
        <span className="text-on-surface-variant text-sm leading-relaxed">{children}</span>
      </div>
      {value && (
        <span className={`text-sm font-bold shrink-0 ${highlight ? "text-secondary" : "text-on-surface/60"}`}>
          {value}
        </span>
      )}
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  1-OP-1 LOOPTIJDEN                                                  */
/* ------------------------------------------------------------------ */
const looptijden = {
  halfjaar: {
    label: "Half jaar",
    duur: "6 maanden",
    tagline: "Een stevige reset. Zes maanden om een nieuw ritme neer te zetten dat blijft.",
  },
  jaar: {
    label: "Jaar",
    duur: "12 maanden",
    tagline: "Een volledig jaar bouwen, bijsturen en borgen. Voor wie het blijvend wil verankeren.",
  },
} as const;

type Looptijd = keyof typeof looptijden;

/* ------------------------------------------------------------------ */
/*  AANBOD                                                             */
/* ------------------------------------------------------------------ */
export function Aanbod({ variant = "site" }: { variant?: "site" | "landing" }) {
  const [looptijd, setLooptijd] = useState<Looptijd>("halfjaar");
  const gekozen = looptijden[looptijd];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* ── MOVE Groepstraject (Featured) ── */}
        <div className="relative bg-white rounded-2xl shadow-xl z-20 overflow-hidden flex flex-col border-2 border-primary/20">
          <span className="absolute -top-0 left-0 right-0 bg-primary text-white text-xs font-bold tracking-wider uppercase py-2.5 text-center">
            MEEST GEKOZEN · MAX 8 DEELNEMERS
          </span>

          <div className="p-10 pb-6 pt-14">
            <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight text-primary">
              MOVE Groepstraject
            </p>
            <p className="text-on-surface-variant text-sm mt-1 mb-6">
              100 dagen met een kleine groep die je scherp houdt. Voor wie klaar is met alleen proberen.
            </p>

            <div className="mb-6">
              <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                &euro;2.497
              </span>
              <span className="text-on-surface-variant text-sm ml-1">eenmalig</span>
            </div>

            <div className="flex items-center gap-2 mb-6">
              <span className="text-xs text-on-surface-variant line-through">&euro;6.594 waarde</span>
              <span className="text-xs font-bold text-white bg-secondary px-2 py-0.5 rounded-full">Bespaar 62%</span>
            </div>

            <BookCallCta
              variant={variant}
              className="block w-full text-center btn-primary font-bold text-sm py-3.5 rounded-lg"
            >
              Kies het groepstraject
            </BookCallCta>
          </div>

          <div className="border-t border-outline-variant/20 p-10 pt-6 flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">Wat je krijgt</p>
            <ul>
              <ValueItem icon="bolt">12 weken MOVE cyclus met exclusieve content</ValueItem>
              <ValueItem value="€2.364" icon="bolt">12&times; wekelijkse Q&amp;A + context-verdieping</ValueItem>
              <ValueItem value="€501">Trainingsschema op maat (elke 4 weken bijgesteld)</ValueItem>
              <ValueItem value="€1.497" icon="bolt">3 jaar toegang Notion-systeem (ook na stop)</ValueItem>
            </ul>
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4 mt-6">Bonussen</p>
            <ul>
              <ValueItem value="€397" icon="card_giftcard" highlight>Persoonlijke kick-off (1-op-1 intake)</ValueItem>
              <ValueItem value="€597" icon="card_giftcard" highlight>Groeps kick-off (max 8)</ValueItem>
              <ValueItem value="€647" icon="card_giftcard" highlight>Eindevenement + metingen</ValueItem>
              <ValueItem value="€297" icon="card_giftcard" highlight>Directe vraagstelmogelijkheid via kanaal</ValueItem>
              <ValueItem value="€197" icon="card_giftcard" highlight>Bibliotheek trainingen &amp; inspiratie</ValueItem>
              <ValueItem value="€97" icon="card_giftcard" highlight>MOVE Foodguide</ValueItem>
              <ValueItem value="∞" icon="favorite" highlight>Kleine groep die elkaar support</ValueItem>
            </ul>
          </div>
        </div>

        {/* ── MOVE 1-op-1 ── */}
        <div className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col lg:mt-10">
          <div className="p-10 pb-6">
            <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight">
              MOVE 1-op-1
            </p>
            <p className="text-on-surface-variant text-sm mt-1 mb-6">
              Private coaching. Voor wie wekelijks 1-op-1 met Rick wil werken.
            </p>

            {/* Looptijd keuze */}
            <div
              role="group"
              aria-label="Kies je looptijd"
              className="grid grid-cols-2 gap-1 p-1 bg-white rounded-lg border border-outline-variant/20 mb-6"
            >
              {(Object.keys(looptijden) as Looptijd[]).map((key) => {
                const actief = looptijd === key;
                return (
                  <button
                    key={key}
                    type="button"
                    aria-pressed={actief}
                    onClick={() => setLooptijd(key)}
                    className={`py-2.5 rounded-md text-sm font-bold transition-all duration-300 cursor-pointer ${
                      actief ? "bg-on-surface text-white" : "text-on-surface-variant hover:text-on-surface"
                    }`}
                  >
                    {looptijden[key].label}
                  </button>
                );
              })}
            </div>

            <div className="mb-2">
              <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                {gekozen.duur}
              </span>
            </div>
            <p className="text-on-surface-variant text-sm mb-6 min-h-[2.5rem]">{gekozen.tagline}</p>

            <BookCallCta
              variant={variant}
              className="block w-full text-center border-2 border-on-surface text-on-surface font-bold text-sm py-3.5 rounded-lg hover:bg-on-surface hover:text-white transition-all duration-300"
            >
              Plan een gesprek over 1-op-1
            </BookCallCta>
            <p className="text-xs text-on-surface-variant text-center mt-3">Prijs op aanvraag. Bespreken we in het kennismakingsgesprek.</p>
          </div>

          <div className="border-t border-outline-variant/20 p-10 pt-6 flex-1">
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">Wat je krijgt</p>
            <ul>
              <ValueItem icon="bolt">Wekelijkse 1-op-1 sessie met Rick</ValueItem>
              <ValueItem icon="bolt">Directe toegang tot Rick (24/7)</ValueItem>
              <ValueItem>Persoonlijke kick-off (intake + doelen)</ValueItem>
              <ValueItem>Trainingsschema op maat (elke 4 weken bijgesteld)</ValueItem>
              <ValueItem>3 jaar toegang Notion-systeem (ook na stop)</ValueItem>
            </ul>
            <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4 mt-6">Bonussen</p>
            <ul>
              <ValueItem icon="card_giftcard" highlight>Persoonlijke afsluiting + metingen</ValueItem>
              <ValueItem icon="card_giftcard" highlight>Bibliotheek trainingen &amp; inspiratie</ValueItem>
              <ValueItem icon="card_giftcard" highlight>MOVE Foodguide</ValueItem>
            </ul>
          </div>
        </div>
      </div>

      <p className="mt-10 flex items-center justify-center gap-2 text-sm font-bold text-on-surface text-center">
        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>
          shield
        </span>
        Op beide trajecten: niet tevreden na 2 weken? Je krijgt je geld terug.
      </p>
    </div>
  );
}
