import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";

export const metadata: Metadata = {
  title: "Prijs | MOVE Coaching",
  description:
    "Kies het MOVE Coaching traject dat bij jou past. Core, Performance of Ultimate — investeer in jouw momentum.",
};

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
  value: string;
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
      <span className={`text-sm font-bold shrink-0 ${highlight ? "text-secondary" : "text-on-surface/60"}`}>
        {value}
      </span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/*  PAGE                                                               */
/* ------------------------------------------------------------------ */
const prijsFaqs = [
  {
    question: "Is dit een eenmalige betaling?",
    answer: "Ja. MOVE is een eenmalige investering voor het volledige 100-dagen traject — geen abonnement, geen terugkerende kosten. Je betaalt één keer en krijgt het complete programma inclusief kick-off en eindevenement.",
  },
  {
    question: "Kan ik in termijnen betalen?",
    answer: "Neem contact op met Rick via het kennismakingsgesprek. In sommige gevallen is een betalingsregeling mogelijk, maar de volledige investering vooraf zorgt voor de sterkste commitment.",
  },
  {
    question: "Wat als ik na een paar weken wil stoppen?",
    answer: "MOVE is geen abonnement dat je opzegt. Het is een commitment van 100 dagen. De groep rekent op jouw aanwezigheid en jij rekent op die van hen. Twijfel je? Daarom begint elk traject met een kennismakingsgesprek.",
  },
  {
    question: "Is dit aftrekbaar als zakelijke kosten?",
    answer: "In veel gevallen wel. Performance coaching is een investering in je professionele ontwikkeling. Raadpleeg je boekhouder of accountant voor jouw specifieke situatie. Rick staat geregistreerd bij de KvK (94159475).",
  },
  {
    question: "Waarom is Performance het meest gekozen?",
    answer: "Performance bevat de volle stack: wekelijkse Q&A's, trainingsschema op maat en 3 jaar Notion-toegang. Core is een eerlijke instap maar mist de verdieping. Ultimate is voor wie wekelijks 1-op-1 met Rick wil. Performance zit precies in de sweet spot.",
  },
];

export default function PrijsPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ============================================================ */}
      {/*  1 — HERO                                                    */}
      {/* ============================================================ */}
      <section className="gradient-hero pt-32 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full bg-secondary/[0.03] blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto py-20 md:py-28 relative">
          {/* Badge */}
          <span className="inline-block bg-secondary-container/80 text-on-secondary-container text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-8 backdrop-blur-sm">
            Investeer in jezelf
          </span>

          {/* Headline */}
          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
            Drie trajecten.
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
              30 mei: nog <span className="text-primary">4 plekken</span> beschikbaar
            </p>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  2 — PRICING TIERS                                           */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* ── MOVE Core ── */}
            <div className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col">
              <div className="p-10 pb-6">
                <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight">
                  MOVE Core
                </p>
                <p className="text-on-surface-variant text-sm mt-1 mb-6">
                  De eerlijke instap. Voor wie wil proeven wat implementatie echt betekent.
                </p>

                <div className="mb-6">
                  <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                    &euro;1.497
                  </span>
                  <span className="text-on-surface-variant text-sm ml-1">eenmalig</span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs text-on-surface-variant line-through">&euro;4.193 waarde</span>
                  <span className="text-xs font-bold text-white bg-secondary px-2 py-0.5 rounded-full">Bespaar 64%</span>
                </div>

                <Link
                  href="/intake"
                  className="block text-center btn-secondary font-bold text-sm py-3.5 rounded-lg"
                >
                  Kies Core
                </Link>
              </div>

              <div className="border-t border-outline-variant/20 p-10 pt-6 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">Wat je krijgt</p>
                <ul>
                  <ValueItem value="€397">Persoonlijke kick-off (1-op-1 intake + doelen)</ValueItem>
                  <ValueItem value="€597">Groeps kick-off (start cohort, max 8)</ValueItem>
                  <ValueItem value="€1.764">12 weken exclusieve content</ValueItem>
                  <ValueItem value="€647">Eindevenement (afsluiting + metingen)</ValueItem>
                </ul>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4 mt-6">Bonussen</p>
                <ul>
                  <ValueItem value="€197" icon="card_giftcard" highlight>Notion volgsysteem</ValueItem>
                  <ValueItem value="€297" icon="card_giftcard" highlight>Directe vraagstelmogelijkheid via kanaal</ValueItem>
                  <ValueItem value="€197" icon="card_giftcard" highlight>Bibliotheek met trainingen &amp; inspiratie</ValueItem>
                  <ValueItem value="€97" icon="card_giftcard" highlight>MOVE Foodguide</ValueItem>
                  <ValueItem value="∞" icon="favorite" highlight>Kleine groep die elkaar support</ValueItem>
                </ul>
              </div>
            </div>

            {/* ── MOVE Performance (Featured) ── */}
            <div className="relative bg-white rounded-2xl shadow-xl lg:scale-[1.03] z-20 overflow-hidden flex flex-col border-2 border-primary/20">
              <span className="absolute -top-0 left-0 right-0 bg-primary text-white text-xs font-bold tracking-wider uppercase py-2.5 text-center">
                MEEST GEKOZEN — HET VLAGGENSCHIP
              </span>

              <div className="p-10 pb-6 pt-14">
                <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight text-primary">
                  MOVE Performance
                </p>
                <p className="text-on-surface-variant text-sm mt-1 mb-6">
                  De volle stack. Voor wie klaar is met alleen proberen.
                </p>

                <div className="mb-6">
                  <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                    &euro;2.497
                  </span>
                  <span className="text-on-surface-variant text-sm ml-1">eenmalig</span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs text-on-surface-variant line-through">&euro;8.358 waarde</span>
                  <span className="text-xs font-bold text-white bg-secondary px-2 py-0.5 rounded-full">Bespaar 70%</span>
                </div>

                <Link
                  href="/intake"
                  className="block text-center btn-primary font-bold text-sm py-3.5 rounded-lg"
                >
                  Kies Performance
                </Link>
              </div>

              <div className="border-t border-outline-variant/20 p-10 pt-6 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">Alles uit Core, plus</p>
                <ul>
                  <ValueItem value="€2.364" icon="bolt">12&times; wekelijkse Q&amp;A + context-verdieping</ValueItem>
                  <ValueItem value="€501">Trainingsschema op maat (elke 4 weken bijgesteld)</ValueItem>
                  <ValueItem value="€1.497" icon="bolt">3 jaar toegang Notion-systeem (ook na stop)</ValueItem>
                </ul>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4 mt-6">Bonussen</p>
                <ul>
                  <ValueItem value="€397" icon="card_giftcard" highlight>Persoonlijke kick-off (1-op-1 intake)</ValueItem>
                  <ValueItem value="€597" icon="card_giftcard" highlight>Groeps kick-off (max 8)</ValueItem>
                  <ValueItem value="€1.764" icon="card_giftcard" highlight>12 weken exclusieve content</ValueItem>
                  <ValueItem value="€647" icon="card_giftcard" highlight>Eindevenement + metingen</ValueItem>
                  <ValueItem value="€297" icon="card_giftcard" highlight>Directe vraagstelmogelijkheid via kanaal</ValueItem>
                  <ValueItem value="€197" icon="card_giftcard" highlight>Bibliotheek trainingen &amp; inspiratie</ValueItem>
                  <ValueItem value="€97" icon="card_giftcard" highlight>MOVE Foodguide</ValueItem>
                  <ValueItem value="∞" icon="favorite" highlight>Kleine groep die elkaar support</ValueItem>
                </ul>
              </div>
            </div>

            {/* ── MOVE Ultimate ── */}
            <div className="bg-surface-container-low rounded-2xl overflow-hidden flex flex-col">
              <div className="p-10 pb-6">
                <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight">
                  MOVE Ultimate
                </p>
                <p className="text-on-surface-variant text-sm mt-1 mb-6">
                  Private. Voor wie wekelijks 1-op-1 met Rick wil werken.
                </p>

                <div className="mb-6">
                  <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                    &euro;4.997
                  </span>
                  <span className="text-on-surface-variant text-sm ml-1">eenmalig</span>
                </div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs text-on-surface-variant line-through">&euro;13.322 waarde</span>
                  <span className="text-xs font-bold text-white bg-secondary px-2 py-0.5 rounded-full">Bespaar 62%</span>
                </div>

                <Link
                  href="/intake"
                  className="block text-center border-2 border-on-surface text-on-surface font-bold text-sm py-3.5 rounded-lg hover:bg-on-surface hover:text-white transition-all duration-300"
                >
                  Kies Ultimate
                </Link>
              </div>

              <div className="border-t border-outline-variant/20 p-10 pt-6 flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4">Alles uit Performance, plus</p>
                <ul>
                  <ValueItem value="€4.764" icon="bolt">12&times; wekelijkse 1-op-1 sessie met Rick</ValueItem>
                  <ValueItem value="€497" icon="bolt">Directe toegang tot Rick (24/7)</ValueItem>
                </ul>
                <p className="text-xs font-bold uppercase tracking-wider text-on-surface mb-4 mt-6">Inclusief uit Performance</p>
                <ul>
                  <ValueItem value="€2.364" icon="card_giftcard" highlight>12&times; wekelijkse Q&amp;A + verdieping</ValueItem>
                  <ValueItem value="€501" icon="card_giftcard" highlight>Trainingsschema op maat</ValueItem>
                  <ValueItem value="€1.497" icon="card_giftcard" highlight>3 jaar Notion-systeem</ValueItem>
                  <ValueItem value="€1.764" icon="card_giftcard" highlight>12 weken exclusieve content</ValueItem>
                  <ValueItem value="€647" icon="card_giftcard" highlight>Eindevenement + metingen</ValueItem>
                  <ValueItem value="€197" icon="card_giftcard" highlight>Bibliotheek trainingen &amp; inspiratie</ValueItem>
                  <ValueItem value="€97" icon="card_giftcard" highlight>MOVE Foodguide</ValueItem>
                  <ValueItem value="∞" icon="favorite" highlight>Kleine groep die elkaar support</ValueItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COMPARISON TABLE                                            */}
      {/* ============================================================ */}
      <section className="px-8 md:px-16 py-24 md:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tight text-center mb-4">
            Vergelijk de trajecten
          </h2>
          <p className="text-on-surface-variant text-center text-lg mb-12 max-w-2xl mx-auto">
            Bekijk in &eacute;&eacute;n oogopslag wat er in elk traject zit.
          </p>

          <div className="overflow-x-auto -mx-8 px-8">
            <table className="w-full min-w-[600px]">
              <thead>
                <tr className="border-b-2 border-outline-variant/30">
                  <th className="text-left py-4 pr-4 font-[family-name:var(--font-headline)] text-sm font-bold text-on-surface-variant uppercase tracking-wider w-1/2 md:w-2/5">
                    Feature
                  </th>
                  <th className="py-4 px-2 text-center font-[family-name:var(--font-headline)] text-sm font-bold uppercase tracking-wider">
                    Core
                  </th>
                  <th className="py-4 px-2 text-center font-[family-name:var(--font-headline)] text-sm font-bold text-primary uppercase tracking-wider">
                    Performance
                  </th>
                  <th className="py-4 px-2 text-center font-[family-name:var(--font-headline)] text-sm font-bold uppercase tracking-wider">
                    Ultimate
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Persoonlijke kick-off (1-op-1 intake)", core: true, performance: true, ultimate: true },
                  { feature: "Groeps kick-off (max 8 deelnemers)", core: true, performance: true, ultimate: true },
                  { feature: "12 weken exclusieve content", core: true, performance: true, ultimate: true },
                  { feature: "Eindevenement (afsluiting + metingen)", core: true, performance: true, ultimate: true },
                  { feature: "Notion volgsysteem", core: true, performance: true, ultimate: true },
                  { feature: "Directe vraagstelmogelijkheid via kanaal", core: true, performance: true, ultimate: true },
                  { feature: "Bibliotheek met trainingen & inspiratie", core: true, performance: true, ultimate: true },
                  { feature: "MOVE Foodguide", core: true, performance: true, ultimate: true },
                  { feature: "Kleine groep die elkaar support", core: true, performance: true, ultimate: true },
                  { feature: "12× wekelijkse Q&A + context-verdieping", core: false, performance: true, ultimate: true },
                  { feature: "Trainingsschema op maat (elke 4 weken)", core: false, performance: true, ultimate: true },
                  { feature: "3 jaar toegang Notion-systeem", core: false, performance: true, ultimate: true },
                  { feature: "12× wekelijkse 1-op-1 sessie met Rick", core: false, performance: false, ultimate: true },
                  { feature: "Directe toegang tot Rick (24/7)", core: false, performance: false, ultimate: true },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-outline-variant/15">
                    <td className="py-4 pr-4 text-sm text-on-surface-variant">{row.feature}</td>
                    <td className="py-4 px-2 text-center">
                      {row.core ? (
                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      ) : (
                        <span className="text-outline text-sm font-bold">&times;</span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center bg-primary/[0.02]">
                      {row.performance ? (
                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      ) : (
                        <span className="text-outline text-sm font-bold">&times;</span>
                      )}
                    </td>
                    <td className="py-4 px-2 text-center">
                      {row.ultimate ? (
                        <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      ) : (
                        <span className="text-outline text-sm font-bold">&times;</span>
                      )}
                    </td>
                  </tr>
                ))}
                <tr className="border-t-2 border-outline-variant/30">
                  <td className="py-6 pr-4 font-[family-name:var(--font-headline)] font-bold text-on-surface">Prijs</td>
                  <td className="py-6 px-2 text-center font-[family-name:var(--font-headline)] font-black text-lg">&euro;1.497</td>
                  <td className="py-6 px-2 text-center font-[family-name:var(--font-headline)] font-black text-lg text-primary bg-primary/[0.02]">&euro;2.497</td>
                  <td className="py-6 px-2 text-center font-[family-name:var(--font-headline)] font-black text-lg">&euro;4.997</td>
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
                  De MOVE methode is geen individuele coaching &mdash; het is een
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
              Mei-cohort start binnenkort. 8 plekken per groep. Geen
              wachtlijst &mdash; vol is vol.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-10">
              <Link
                href="https://calendly.com/rick-rickvianen/kennismaking"
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
          </div>
        </div>
      </section>
    </div>
  );
}
