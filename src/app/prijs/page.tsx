import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { Aanbod } from "@/components/aanbod";

export const metadata: Metadata = {
  title: "Prijs | MOVE Coaching",
  description:
    "Kies het MOVE Coaching traject dat bij jou past: het groepstraject of 1-op-1 coaching met Rick voor een half jaar of een jaar.",
};

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
const prijsFaqs = [
  {
    question: "Is dit een eenmalige betaling?",
    answer: "Het groepstraject is een eenmalige investering voor het volledige 100-dagen traject. Geen abonnement, geen terugkerende kosten. Je betaalt één keer en krijgt het complete programma inclusief kick-off en eindevenement. Voor het 1-op-1 traject bespreken we de investering en betaalwijze in het kennismakingsgesprek.",
  },
  {
    question: "Kan ik in termijnen betalen?",
    answer: "Neem contact op met Rick via het kennismakingsgesprek. In sommige gevallen is een betalingsregeling mogelijk, maar de volledige investering vooraf zorgt voor de sterkste commitment.",
  },
  {
    question: "Wat als ik na een paar weken wil stoppen?",
    answer: "MOVE is geen abonnement dat je opzegt. Het groepstraject is een commitment van 100 dagen, het 1-op-1 traject van een half jaar of een jaar. De groep rekent op jouw aanwezigheid en jij rekent op die van hen. Twijfel je? Daarom begint elk traject met een kennismakingsgesprek. En voel je na 2 weken geen richting of zie je geen vooruitgang? Dan krijg je je geld terug, bij zowel het groepstraject als 1-op-1.",
  },
  {
    question: "Is dit aftrekbaar als zakelijke kosten?",
    answer: "In veel gevallen wel. Performance coaching is een investering in je professionele ontwikkeling. Raadpleeg je boekhouder of accountant voor jouw specifieke situatie. Rick staat geregistreerd bij de KvK (94159475).",
  },
  {
    question: "Groep of 1-op-1: wat past bij mij?",
    answer: "Het groepstraject is voor wie wil groeien met een kleine groep die elkaar scherp houdt: 100 dagen, wekelijkse Q&A's, trainingsschema op maat en 3 jaar Notion-toegang. Het 1-op-1 traject is voor wie wekelijks privé met Rick wil werken, voor een half jaar of een jaar. Twijfel je? In het kennismakingsgesprek kijken we samen wat het beste past.",
  },
];

export default function PrijsPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ============================================================ */}
      {/*  1 — HERO                                                    */}
      {/* ============================================================ */}
      <section className="gradient-hero pt-40 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-secondary/[0.03] blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto py-20 md:py-28 relative">
          {/* Badge */}
          <span className="inline-block bg-secondary-container/80 text-on-secondary-container text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
            Investeer in jezelf
          </span>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            Twee trajecten.
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
              Samen in een groep van <span className="text-primary">max 8</span>, of <span className="text-primary">1-op-1</span> met Rick
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2 — AANBOD                                                  */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <Aanbod />
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COMPARISON TABLE                                            */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tight text-center mb-4">
            Groep of 1-op-1?
          </h2>
          <p className="text-on-surface-variant text-center text-lg mb-12 max-w-2xl mx-auto">
            Bekijk in &eacute;&eacute;n oogopslag wat er in elk traject zit.
          </p>

          <div className="overflow-x-auto -mx-8 px-8">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="border-b-2 border-outline-variant/30">
                  <th className="text-left py-4 pr-4 font-[family-name:var(--font-headline)] text-sm font-bold text-on-surface-variant uppercase tracking-wider w-1/2">
                    Feature
                  </th>
                  <th className="py-4 px-2 text-center font-[family-name:var(--font-headline)] text-sm font-bold text-primary uppercase tracking-wider">
                    Groep
                  </th>
                  <th className="py-4 px-2 text-center font-[family-name:var(--font-headline)] text-sm font-bold uppercase tracking-wider">
                    1-op-1
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Persoonlijke kick-off (1-op-1 intake)", groep: true, individueel: true },
                  { feature: "Trainingsschema op maat (elke 4 weken)", groep: true, individueel: true },
                  { feature: "3 jaar toegang Notion-systeem", groep: true, individueel: true },
                  { feature: "Bibliotheek met trainingen & inspiratie", groep: true, individueel: true },
                  { feature: "MOVE Foodguide", groep: true, individueel: true },
                  { feature: "Metingen bij start en afsluiting", groep: true, individueel: true },
                  { feature: "12 weken MOVE cyclus met exclusieve content", groep: true, individueel: false },
                  { feature: "12× wekelijkse groeps-Q&A + context-verdieping", groep: true, individueel: false },
                  { feature: "Groeps kick-off en eindevenement", groep: true, individueel: false },
                  { feature: "Kleine groep die elkaar support (max 8)", groep: true, individueel: false },
                  { feature: "Wekelijkse 1-op-1 sessie met Rick", groep: false, individueel: true },
                  { feature: "Directe toegang tot Rick (24/7)", groep: false, individueel: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/15">
                    <td className="py-4 pr-4 text-sm text-on-surface-variant">{row.feature}</td>
                    <td className="py-4 px-2 text-center bg-primary/[0.02]">
                      {row.groep ? (
                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      ) : (
                        <span className="text-outline text-sm font-bold">&times;</span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {row.individueel ? (
                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      ) : (
                        <span className="text-outline text-sm font-bold">&times;</span>
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="border-b border-outline-variant/15">
                  <td className="py-4 pr-4 text-sm text-on-surface-variant">Looptijd</td>
                  <td className="py-4 px-2 text-center text-sm font-bold text-on-surface bg-primary/[0.02]">100 dagen</td>
                  <td className="py-4 px-2 text-center text-sm font-bold text-on-surface">6 of 12 maanden</td>
                </tr>
                <tr className="border-t-2 border-outline-variant/30">
                  <td className="py-6 pr-4 font-[family-name:var(--font-headline)] font-bold text-on-surface">Prijs</td>
                  <td className="py-6 px-2 text-center font-[family-name:var(--font-headline)] font-black text-lg text-primary bg-primary/[0.02]">&euro;2.497</td>
                  <td className="py-6 px-2 text-center font-[family-name:var(--font-headline)] font-black text-lg">Op aanvraag</td>
                </tr>
              </tbody>
            </table>
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
              <p className="text-lg italic text-on-surface mb-6">&ldquo;Rick heeft me gepusht om niet alleen te finishen, maar ook daar een tijd aan te verbinden. Het idee dat ik sterker ben dan ik denk, is iets wat ik echt geleerd heb.&rdquo;</p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/laura.jpg"
                  alt="Laura"
                  width={40}
                  height={40}
                  className="avatar"
                />
                <div>
                  <p className="text-sm font-bold text-on-surface">Laura</p>
                  <p className="text-xs text-on-surface-variant">Arts</p>
                </div>
              </div>
            </div>
            {/* quote 2 */}
            <div className="bg-surface-container-low p-8 rounded-xl">
              <p className="text-lg italic text-on-surface mb-6">&ldquo;Rick is eerlijk, vriendelijk maar geen mooiprater, toegewijd en niet te stoppen. Zijn feedback is scherpzinnig en gericht op groei.&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center"><span className="font-bold text-primary text-xs">C</span></div>
                <div>
                  <p className="text-sm font-bold text-on-surface">Chantal</p>
                  <p className="text-xs text-on-surface-variant">Raadsheer</p>
                </div>
              </div>
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
                  11/11
                </p>
                <h3 className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black tracking-tight mt-4 leading-tight">
                  Noemen de groep als #1 werkend element.
                </h3>
                <p className="text-on-surface-variant mt-4 leading-relaxed max-w-md">
                  Het groepstraject is meer dan coaching. Het is een
                  gecureerde omgeving van gelijkgestemde professionals die elkaar
                  accountable houden.
                </p>
              </div>

              {/* Quote / avatar */}
              <div className="flex items-center gap-4 mt-10 pt-8 border-t border-outline-variant/30">
                <Image
                  src="/images/inge.jpg"
                  alt="Inge"
                  width={56}
                  height={56}
                  className="avatar-lg"
                />
                <div>
                  <p className="text-sm text-on-surface-variant italic leading-relaxed">
                    &ldquo;Ik heb nu afspraken met mezelf. Het belangrijkste dat ik meeneem is het motto van Rick: Het is simpel, maar niet gemakkelijk!&rdquo;
                  </p>
                  <p className="text-xs font-bold text-on-surface mt-1">Inge &middot; Directiesecretariaat</p>
                </div>
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
                  Fysieke prestatie architectuur
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
                  Mentale veerkracht &amp; focus
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
                  Strategische groei &amp; leiderschap
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  5 — FAQ                                                      */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold mb-4">
            Vragen over prijzen
          </h2>
          <p className="text-on-surface-variant text-lg mb-12">
            Alles wat je wilt weten over je investering.
          </p>
          <Faq items={prijsFaqs} />
          <div className="text-center mt-10">
            <Link
              href="/veelgestelde-vragen"
              className="inline-flex items-center gap-2 text-primary font-bold group link-hover"
            >
              Bekijk alle vragen
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
        <FaqJsonLd items={prijsFaqs} />
      </section>

      {/* ============================================================ */}
      {/*  6 — FINAL CTA                                               */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16 pb-24 md:pb-32">
        <div className="max-w-7xl mx-auto relative overflow-hidden gradient-cta rounded-2xl py-20 md:py-28 px-8 text-center">
          {/* Decorative blur circles */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-primary/[0.06] blur-[60px] pointer-events-none" />
          <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black tracking-tighter leading-[0.95]">
              Start jouw{" "}
              <span className="text-primary italic underline decoration-primary/30 underline-offset-4">
                traject
              </span>{" "}
              vandaag.
            </h2>
            <p className="text-on-surface-variant mt-6 leading-relaxed max-w-lg mx-auto">
              Elke groep heeft maximaal 8 deelnemers. Plan een gesprek en kijk of MOVE bij jou past.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                href="/intake"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-bold text-sm px-8 py-3.5 rounded-lg"
              >
                Plan een kennismakingsgesprek
              </Link>
              <Link
                href="/programma"
                className="btn-secondary font-bold text-sm px-8 py-3.5 rounded-lg"
              >
                Bekijk het programma
              </Link>
            </div>
            <Link href="/wachtlijst" className="mt-4 inline-flex items-center gap-1 text-sm text-on-surface-variant hover:text-primary transition-colors">
              Later starten? Zet je op de wachtlijst
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
