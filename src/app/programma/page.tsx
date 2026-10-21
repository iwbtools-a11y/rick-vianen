import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { QuizCTA } from "@/components/quiz-cta";
import { Aanbod } from "@/components/aanbod";

export const metadata: Metadata = {
  title: "Programma | MOVE Coaching",
  description:
    "Het MOVE programma: peer-group methode, radicale accountability en elite coaching. Ontdek de groepsdynamiek van Rick Vianen.",
};

const programmaFaqs = [
  {
    question: "Hoe ziet een typische MOVE-week eruit?",
    answer: "Elke week volgt dezelfde structuur: een kort kennismoment (3-10 min), een praktische opdracht die je direct toepast, en op donderdag een live groeps-Q&A. Daarnaast train je volgens je schema en check je in via de accountability-tool. Totaal 2-3 uur per week.",
  },
  {
    question: "Wat als ik een week mis?",
    answer: "Het leven gebeurt. Als je een sessie mist, krijg je de opname en de opdracht achteraf. Maar: MOVE werkt door consistentie. De groep houdt je scherp en mist het als je er niet bent. Dat is juist de kracht.",
  },
  {
    question: "Hoe groot is de groep?",
    answer: "Maximaal 8 professionals per cohort. Dit is geen marketing-getal maar een bewuste keuze: groot genoeg voor diversiteit aan perspectieven, klein genoeg zodat niemand zich kan verstoppen. Rick coacht elk cohort persoonlijk.",
  },
  {
    question: "Welke resultaten kan ik verwachten na 100 dagen?",
    answer: "Zichtbaar fysiek resultaat, meer energie, betere focus en een werkend systeem dat je vasthoudt. De echte verschuiving: van 'ik moet mezelf motiveren' naar 'ik heb een structuur die het werk voor mij doet'. De eerste shift is voelbaar binnen 2 weken.",
  },
  {
    question: "Wat is het verschil tussen het groepstraject en 1-op-1?",
    answer: "Het groepstraject duurt 100 dagen met een kleine groep van maximaal 8, inclusief wekelijkse Q&A's, trainingsschema op maat en 3 jaar Notion-toegang. Bij het 1-op-1 traject werk je wekelijks privé met Rick, voor een half jaar of een jaar, met directe toegang tot Rick.",
  },
  {
    question: "Wat is de garantie?",
    answer: "We geloven zo sterk in onze trajecten dat je na 2 weken mag stoppen, of je nu kiest voor de groep of 1-op-1. Voel je geen richting of zie je geen vooruitgang? Dan krijg je je geld terug. No questions asked.",
  },
];

export default function ProgrammaPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ===== HERO SECTION ===== */}
      <section className="gradient-hero px-8 md:px-16 pt-44 pb-24 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-end relative">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm">
              Peer-Group Traject
            </span>
            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              Niet nog iemand <br />
              die je vertelt <span className="text-primary">wat je al weet.</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-on-surface-variant max-w-xl">
              Een kleine groep die je scherp houdt als jij dat zelf even niet doet. Maximaal 8
              professionals per cohort. 100 dagen. Confronterend, meetbaar,
              blijvend.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/intake" className="btn-primary px-8 py-4 rounded-lg font-bold text-lg text-center">
                Plan een gesprek met Rick
              </Link>
              <p className="text-sm text-on-surface-variant self-center">30 minuten. Open gesprek, geen verplichtingen.</p>
            </div>
          </div>
          <div className="relative w-full md:w-1/3">
            <div className="btn-primary p-6 rounded-xl relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="material-symbols-outlined text-white"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  group
                </span>
                <span className="font-bold text-sm">COMMUNITY STATUS</span>
              </div>
              <p className="text-3xl font-black italic mb-1">
                Max 8 deelnemers per cohort
              </p>
              <p className="text-sm opacity-90">Kleine groepen · persoonlijke aandacht</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-surface-container -z-10 rounded-xl" />
          </div>
        </div>
      </section>

      {/* ===== HORIZONTAL TIMELINE ===== */}
      <section className="py-24 md:py-32 px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Hoe het werkt
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight">
              Jouw 100 dagen in <span className="text-primary italic">5 stappen</span>
            </h2>
          </div>

          <div className="overflow-x-auto pb-4 -mx-8 px-8 md:mx-0 md:px-0">
            <div className="flex items-start gap-0 min-w-[900px]">
              {[
                {
                  step: "01",
                  title: "Kennismaking",
                  desc: "30 minuten. Open gesprek, geen verplichtingen. We kijken of MOVE bij jou past.",
                  icon: "handshake",
                  when: "Voor de start",
                },
                {
                  step: "02",
                  title: "Persoonlijke kick-off",
                  desc: "1-op-1 intake met Rick. Doelen stellen, metingen vastleggen, jouw startpunt bepalen.",
                  icon: "person",
                  when: "Week 0",
                },
                {
                  step: "03",
                  title: "Groeps kick-off",
                  desc: "Start van jouw cohort. Maximaal 8 professionals. Jullie groep wordt gevormd.",
                  icon: "groups",
                  when: "Week 1",
                },
                {
                  step: "04",
                  title: "12 weken MOVE cyclus",
                  desc: "Elke week dezelfde structuur: Master, Operate, Validate, Elevate. Wekelijkse les, opdracht en Q&A.",
                  icon: "cycle",
                  when: "Week 1–12",
                },
                {
                  step: "05",
                  title: "Eindevenement",
                  desc: "Afsluiting, eindmetingen, resultaten vieren en jouw volgende stap bepalen.",
                  icon: "emoji_events",
                  when: "Week 13",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start flex-1 min-w-[170px]">
                  <div className="flex flex-col items-center w-full">
                    {/* Node + line */}
                    <div className="flex items-center w-full mb-6">
                      <div className={`h-0.5 flex-1 ${i === 0 ? "bg-transparent" : "bg-gradient-to-r from-outline-variant/40 to-primary/40"}`} />
                      <div className="w-14 h-14 rounded-full bg-white border-[3px] border-primary flex items-center justify-center shrink-0 shadow-md relative z-10">
                        <span
                          className="material-symbols-outlined text-primary text-2xl"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {item.icon}
                        </span>
                      </div>
                      <div className={`h-0.5 flex-1 ${i === 4 ? "bg-transparent" : "bg-gradient-to-r from-primary/40 to-outline-variant/40"}`} />
                    </div>

                    {/* Content */}
                    <div className="text-center px-3">
                      <span className="text-xs font-bold text-primary tracking-wider uppercase">
                        {item.when}
                      </span>
                      <h3 className="font-[family-name:var(--font-headline)] text-lg font-bold mt-1 mb-2 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOVE Cycle detail */}
          <div className="mt-16 bg-on-surface p-1 rounded-xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1">
              {[
                { letter: "M", label: "Master", desc: "Kort, scherp kennismoment van 3-10 minuten. Exact wat je nodig hebt." },
                { letter: "O", label: "Operate", desc: "Directe toepassing in je leven, business of gezondheid. Praktisch en onmiddellijk uitvoerbaar." },
                { letter: "V", label: "Validate", desc: "Eerlijk terugkijken. Wat werkte? Wat brak af? Observeer je gedrag en resultaten." },
                { letter: "E", label: "Elevate", desc: "Verfijn en verbeter. Beter dan vorige week. Vooruitgang zit in de aanpassingen." },
              ].map((m, i) => (
                <div key={i} className="bg-surface-container-low p-8 rounded-lg">
                  <span className="font-[family-name:var(--font-headline)] text-4xl font-black text-primary">
                    {m.letter}
                  </span>
                  <h4 className="font-[family-name:var(--font-headline)] text-lg font-bold tracking-tight mt-2 mb-2">
                    {m.label}
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAAROM GROEP + 100 DAGEN ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Waarom in een groep */}
          <div className="bg-white rounded-2xl p-10 border border-outline-variant/10">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Waarom in een groep?
            </span>
            <h3 className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tight mb-4">
              Alleen weten is niet genoeg. <span className="text-primary">Je hebt mensen nodig die je niet laten zakken.</span>
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Als ondernemer val je niemand af als je een dag niets doet. Behalve jezelf. En dat blijkt niet te werken. Een groep verandert dat. Niet omdat mensen je aanspreken, maar omdat je ze niet teleur wil stellen.
            </p>
            <ul className="space-y-4">
              {[
                { icon: "groups", text: "Max 8 mensen in dezelfde fase, die snappen wat jij meemaakt" },
                { icon: "trending_up", text: "Alle deelnemers noemen de groep als het #1 werkende element" },
                { icon: "hub", text: "Strategisch sparren met mensen die begrijpen hoe het voelt om alles zelf te dragen" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm text-on-surface-variant leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Waarom 100 dagen */}
          <div className="bg-white rounded-2xl p-10 border border-outline-variant/10">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Waarom 100 dagen?
            </span>
            <h3 className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tight mb-4">
              30 dagen verandert niets. <span className="text-primary">100 dagen verandert gewoontes.</span>
            </h3>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              De meeste programma&apos;s zijn te kort om iets te laten beklijven, of zo lang dat het vaag wordt. 100 dagen is bewust gekozen: lang genoeg om echte patronen te doorbreken, kort genoeg om gefocust en concreet te blijven.
            </p>
            <ul className="space-y-4">
              {[
                { icon: "loop", text: "12 weken cyclus, elke week hetzelfde ritme, steeds op een hoger niveau" },
                { icon: "psychology", text: "Wetenschappelijk onderbouwd: gedragsverandering vraagt herhaling, niet één inzicht" },
                { icon: "flag", text: "Duidelijk begin en einde, met eindmetingen zodat je ziet wat er werkelijk veranderd is" },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <span className="text-sm text-on-surface-variant leading-relaxed">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* ===== PEER-GROUP METHODE — Bento Grid ===== */}
      <section className="gradient-warm py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold mb-4">
              De groep is het mechanisme
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary to-primary rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Radicale Accountability */}
            <div className="md:col-span-8 bg-white p-12 rounded-2xl flex flex-col md:flex-row gap-12 items-center card-hover border border-outline-variant/10">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-headline)] text-3xl font-bold mb-4">
                  Radicale accountability
                </h3>
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  Niet Rick die je bij de hand neemt, maar een kleine groep die je
                  scherp houdt als jij dat zelf even niet doet. 11 van de 11 ge&iuml;nterviewde
                  klanten noemen de groep als het #1 werkende element.
                </p>
              </div>
              <div className="w-full md:w-72 h-48 bg-surface-container-highest rounded-lg overflow-hidden shrink-0 relative">
                <Image
                  src="/images/rick-coaching.jpg"
                  alt="MOVE peer-group sessie"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* -80% stat */}
            <div className="md:col-span-4 text-white p-12 rounded-2xl flex flex-col justify-center text-center" style={{ background: "linear-gradient(165deg, #b868c7 0%, #A559B4 50%, #8a3d9a 100%)" }}>
              <span className="text-6xl font-black mb-2">-80%</span>
              <span className="font-bold text-xl leading-tight">
                Minder terugval als je het niet alleen hoeft te doen
              </span>
            </div>

            {/* Strategisch Sparren */}
            <div className="md:col-span-5 bg-white p-12 rounded-2xl card-hover border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                hub
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-4">
                Strategisch sparren
              </h3>
              <p className="text-on-surface-variant">
                Directe feedback op je business- en mindsetuitdagingen van
                ondernemers die in dezelfde loopgraven staan.
              </p>
            </div>

            {/* Quote */}
            <div className="md:col-span-7 bg-white p-12 rounded-2xl editorial-shadow flex flex-col justify-center">
              <p className="italic text-2xl leading-relaxed text-on-surface mb-6">
                &ldquo;Geen excuses meer bedenken om niet te gaan sporten maar gewoon doen. We voelen ons heerlijk qua licht en geest. Minder last van kleine kwaaltjes. Beter humeur en helderder.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">R</div>
                <div>
                  <span className="text-sm font-bold not-italic text-secondary">
                    Ronald
                  </span>
                  <p className="text-xs text-on-surface-variant">ZZP-er</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ENRICHED PRICING — Value Stacks ===== */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="font-[family-name:var(--font-headline)] text-5xl font-extrabold mb-4">
              Kies je traject.
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl">
              Samen in een groep van 100 dagen, of 1-op-1 met Rick voor een half jaar of
              een jaar. Bekijk precies wat je krijgt.
            </p>
          </div>

          <Aanbod />
        </div>
      </section>

      {/* ===== GARANTIE ===== */}
      <section className="gradient-warm py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <span
            className="material-symbols-outlined text-secondary text-6xl mb-6"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-6">
            Twee weken proberen. Niet overtuigd? Geld terug.
          </h2>
          <p className="text-lg text-on-surface-variant leading-relaxed max-w-2xl mx-auto mb-8">
            We geloven zo sterk in onze trajecten dat je na 2 weken mag stoppen, of je nu kiest voor de groep of 1-op-1.
            Voel je geen richting of zie je geen vooruitgang? Dan krijg je je
            geld terug. No questions asked.
          </p>
          <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-xl editorial-shadow">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield
            </span>
            <p className="text-sm font-bold text-on-surface">
              Niet tevreden na 2 weken? Je krijgt je geld terug. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF — Testimonials ===== */}
      <section className="py-32 overflow-hidden px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold max-w-md">
              Echte resultaten. Eigen woorden.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-12 rounded-2xl card-hover editorial-shadow">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-xl italic mb-8">
                &ldquo;Het belangrijkste dat ik meeneem is het motto van Rick: Het is simpel, maar niet gemakkelijk! Het verliezen van 20 kg lichaamsgewicht was het grootste resultaat.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/inge.jpg"
                  alt="Inge"
                  width={44}
                  height={44}
                  className="avatar"
                />
                <div>
                  <p className="font-bold">Inge</p>
                  <p className="text-xs text-on-surface-variant">Management Assistent</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-12 rounded-2xl card-hover editorial-shadow">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-xl italic mb-8">
                &ldquo;Het idee dat ik sterker ben dan ik denk, is iets wat ik echt geleerd heb door zijn coaching. Uiteindelijk de kwart triathlon in 3 uur en 5 minuten gelopen!&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/laura.jpg"
                  alt="Laura"
                  width={44}
                  height={44}
                  className="avatar"
                />
                <div>
                  <p className="font-bold">Laura</p>
                  <p className="text-xs text-on-surface-variant">Arts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="gradient-warm py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold mb-16">
            Veelgestelde vragen
          </h2>
          <Faq items={programmaFaqs} />
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
        <FaqJsonLd items={programmaFaqs} />
      </section>

      {/* ===== QUIZ CTA ===== */}
      <section className="py-12 md:py-16">
        <QuizCTA variant="card" />
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/[0.08] blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black text-white mb-6">
                Klaar om te bewegen?
              </h2>
              <p className="text-surface-container-highest/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Elke groep heeft maximaal 8 deelnemers. Plan een gesprek en kijk of MOVE bij jou past.
              </p>
              <div className="inline-flex flex-col items-center gap-4">
                <Link
                  href="/intake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary px-12 py-5 rounded-full text-xl font-bold"
                >
                  Plan een kennismakingsgesprek
                </Link>
                <p className="text-surface-container-highest/40 text-sm font-medium tracking-wide uppercase">
                  30 minuten. Open gesprek, geen verplichtingen.
                </p>
                <Link href="/wachtlijst" className="mt-2 inline-flex items-center gap-1 text-sm text-surface-container-highest/40 hover:text-surface-container-highest transition-colors">
                  Later starten? Zet je op de wachtlijst
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CHALLENGE REFERENTIE ===== */}
      <section className="pb-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-on-surface-variant text-sm mb-3">Nog niet klaar voor het volledige programma?</p>
          <Link
            href="/challenge"
            className="inline-flex items-center gap-2 text-primary font-bold group link-hover"
          >
            Begin met MOVE the Challenge voor &euro;100
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
