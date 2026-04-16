import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prijs | MOVE Coaching",
  description:
    "Kies het MOVE Coaching traject dat bij jou past. Core, Plus of Ultimate — investeer in jouw momentum.",
};

/* ------------------------------------------------------------------ */
/*  FEATURE LIST ITEM                                                  */
/* ------------------------------------------------------------------ */
function Feature({
  icon = "check_circle",
  children,
}: {
  icon?: string;
  children: React.ReactNode;
}) {
  return (
    <li className="flex items-start gap-3">
      <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">
        {icon}
      </span>
      <span className="text-on-surface-variant leading-relaxed">{children}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
export default function PrijsPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ============================================================ */}
      {/*  1 — HERO                                                    */}
      {/* ============================================================ */}
      <section className="pt-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto py-20 md:py-28">
          {/* Badge */}
          <span className="inline-block bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8">
            Investeer in Jezelf
          </span>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            Drie Trajecten.
            <br />
            <span className="text-primary italic">Eén Doel.</span>
          </h1>

          {/* Urgency bar */}
          <div className="mt-12 inline-flex items-center gap-4 border-l-4 border-primary pl-6 py-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              error
            </span>
            <p className="font-bold text-lg text-on-surface">
              Mei-cohort: nog <span className="text-primary">4 plekken</span> beschikbaar
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2 — PRICING TIERS                                           */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 items-center">
          {/* ---- MOVE Core ---- */}
          <div className="bg-surface-container-low p-10 rounded-lg flex flex-col h-full">
            <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight">
              MOVE Core
            </p>
            <p className="text-on-surface-variant text-sm mt-1">
              De Basis
            </p>

            <div className="mt-8 mb-10">
              <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                &euro;1.497
              </span>
              <span className="text-on-surface-variant text-sm ml-1">/kwartaal</span>
            </div>

            <ul className="space-y-5 flex-1">
              <Feature>1-op-1 onboardingsgesprek</Feature>
              <Feature>Wekelijkse les + opdracht</Feature>
              <Feature>Live Q&A donderdag (groep)</Feature>
              <Feature>Kick-off &amp; afsluitevent</Feature>
            </ul>

            <Link
              href="/intake"
              className="mt-10 block text-center border-2 border-primary text-primary font-bold text-sm py-3.5 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Kies Core
            </Link>
          </div>

          {/* ---- MOVE Plus (featured) ---- */}
          <div className="relative bg-white p-12 rounded-lg shadow-xl lg:scale-105 z-20 flex flex-col">
            {/* Badge */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold tracking-wider uppercase px-5 py-2 rounded-full whitespace-nowrap">
              MEEST GEKOZEN
            </span>

            <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight text-primary">
              MOVE Plus
            </p>
            <p className="text-on-surface-variant text-sm mt-1">
              Meest Gekozen
            </p>

            <div className="mt-8 mb-10">
              <span className="font-[family-name:var(--font-headline)] text-6xl font-black tracking-tighter">
                &euro;2.497
              </span>
              <span className="text-on-surface-variant text-sm ml-1">/kwartaal</span>
            </div>

            <ul className="space-y-5 flex-1">
              <Feature icon="bolt">Alles uit MOVE Core</Feature>
              <Feature>Op maat trainingsschema</Feature>
              <Feature>Dagelijkse trainingen via app</Feature>
              <Feature icon="bolt">Accountability-tool toegang</Feature>
            </ul>

            <Link
              href="/intake"
              className="mt-10 block text-center bg-primary text-white font-bold text-sm py-3.5 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Kies Plus
            </Link>
          </div>

          {/* ---- MOVE Ultimate ---- */}
          <div className="bg-surface-container-low p-10 rounded-lg flex flex-col h-full">
            <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight">
              MOVE Ultimate
            </p>
            <p className="text-on-surface-variant text-sm mt-1">
              Maximaal Resultaat
            </p>

            <div className="mt-8 mb-10">
              <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                &euro;4.997
              </span>
              <span className="text-on-surface-variant text-sm ml-1">/kwartaal</span>
            </div>

            <ul className="space-y-5 flex-1">
              <Feature>Alles uit MOVE Plus</Feature>
              <Feature>Wekelijks 1-op-1 met Rick</Feature>
              <Feature>Directe toegang tot Rick</Feature>
            </ul>

            <Link
              href="/intake"
              className="mt-10 block text-center border-2 border-on-surface text-on-surface font-bold text-sm py-3.5 rounded-lg hover:bg-on-surface hover:text-white transition-colors"
            >
              Kies Ultimate
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  3 — TESTIMONIAL STRIP                                       */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* quote 1 */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-lg italic text-on-surface mb-4">&ldquo;Er was een leven voor MOVE, en een leven na MOVE.&rdquo;</p>
              <p className="text-sm font-bold text-on-surface-variant">&mdash; Oud-klant MOVE</p>
            </div>
            {/* quote 2 */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-lg italic text-on-surface mb-4">&ldquo;Rick leeft naar wat hij zegt.&rdquo;</p>
              <p className="text-sm font-bold text-on-surface-variant">&mdash; Chantal</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  4 — METHODOLOGY BENTO GRID                                  */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto bg-on-surface p-1 rounded-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
            {/* Left: Stat panel */}
            <div className="md:col-span-6 bg-surface-container-low p-10 md:p-12 rounded-lg flex flex-col justify-between">
              <div>
                <p className="font-[family-name:var(--font-headline)] text-7xl font-black tracking-tighter text-secondary">
                  70%
                </p>
                <h3 className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black tracking-tight mt-4 leading-tight">
                  Hogere succesratio door Peer-Groep Dynamiek.
                </h3>
                <p className="text-on-surface-variant mt-4 leading-relaxed max-w-md">
                  De MOVE methode is geen individuele coaching &mdash; het is een
                  gecureerde omgeving van gelijkgestemde professionals die elkaar
                  accountable houden.
                </p>
              </div>

              {/* Quote / avatar */}
              <div className="flex items-center gap-4 mt-10 pt-8 border-t border-outline-variant/30">
                <div className="w-14 h-14 rounded-full bg-secondary-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-secondary-container text-2xl">
                    groups
                  </span>
                </div>
                <p className="text-sm text-on-surface-variant italic leading-relaxed">
                  &ldquo;De groep zorgde ervoor dat ik eindelijk die stap zette
                  waar ik al twee jaar over twijfelde.&rdquo;
                </p>
              </div>
            </div>

            {/* Right: 3 stacked pillar rows */}
            <div className="md:col-span-6 flex flex-col gap-1">
              {/* 01 */}
              <div className="bg-surface-container p-8 rounded-lg flex-1">
                <span className="font-[family-name:var(--font-headline)] text-sm font-bold text-primary tracking-wider">
                  01
                </span>
                <h4 className="font-[family-name:var(--font-headline)] text-lg font-bold tracking-tight mt-2">
                  Sport
                </h4>
                <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                  Fysieke Prestatie Architectuur
                </p>
              </div>

              {/* 02 */}
              <div className="bg-surface-container p-8 rounded-lg flex-1">
                <span className="font-[family-name:var(--font-headline)] text-sm font-bold text-primary tracking-wider">
                  02
                </span>
                <h4 className="font-[family-name:var(--font-headline)] text-lg font-bold tracking-tight mt-2">
                  Mindset
                </h4>
                <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                  Mentale Veerkracht &amp; Focus
                </p>
              </div>

              {/* 03 */}
              <div className="bg-surface-container p-8 rounded-lg flex-1">
                <span className="font-[family-name:var(--font-headline)] text-sm font-bold text-primary tracking-wider">
                  03
                </span>
                <h4 className="font-[family-name:var(--font-headline)] text-lg font-bold tracking-tight mt-2">
                  Business
                </h4>
                <p className="text-on-surface-variant text-sm mt-2 leading-relaxed">
                  Strategische Groei &amp; Leiderschap
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5 — FINAL CTA                                               */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto relative overflow-hidden bg-surface-container-high rounded-lg py-20 md:py-28 px-8 text-center">
          {/* Decorative blur circles */}
          <div
            className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              Start jouw{" "}
              <span className="text-primary italic underline decoration-primary/30 underline-offset-4">
                traject
              </span>{" "}
              vandaag.
            </h2>
            <p className="text-on-surface-variant mt-6 leading-relaxed max-w-lg mx-auto">
              Mei-cohort start binnenkort. 8 plekken per groep. Geen
              wachtlijst &mdash; vol is vol.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                href="/intake"
                className="bg-primary text-white font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Plan een Kennismakingsgesprek
              </Link>
              <Link
                href="/programma"
                className="border-2 border-primary text-primary font-bold text-sm px-8 py-3.5 rounded-lg hover:bg-primary hover:text-white transition-colors"
              >
                Bekijk het Programma
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
