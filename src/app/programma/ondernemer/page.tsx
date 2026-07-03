import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";

export const metadata: Metadata = {
  title: "MOVE Programma voor Ondernemers | MOVE Coaching",
  description:
    "Als ondernemer run je alles zelf. MOVE geeft je de structuur, het systeem en de groep die je scherp houdt. 100 dagen. Meetbaar resultaat. Plan een gesprek met Rick.",
};

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

const ondernemerFaqs = [
  {
    question: "Ik heb het al druk. Hoeveel tijd kost dit?",
    answer: "2 tot 3 uur per week. Geen vage losse sessies maar een vaste structuur: een kort kennismoment (3-10 min), een praktische opdracht die je direct toepast, en op donderdag een live Q&A. Je investeert minder uren dan je nu kwijt bent aan uitstellen.",
  },
  {
    question: "Zit ik in een groep met andere ondernemers?",
    answer: "De groep bestaat uit professionals die begrijpen hoe het is om veel te dragen. ZZP-ers, managers, ondernemers. Geen zaalvullers. Maximaal 8 per cohort. Iedereen in dezelfde fase: capabel, druk en klaar voor een andere aanpak.",
  },
  {
    question: "Hoe groot is de groep?",
    answer: "Maximaal 8 professionals per cohort. Groot genoeg voor verschillende perspectieven, klein genoeg zodat niemand zich kan verstoppen. Rick coacht elk cohort persoonlijk.",
  },
  {
    question: "Wat als ik een week mis door mijn werk?",
    answer: "Onverwachte verplichtingen horen erbij als ondernemer. Als je een sessie mist, krijg je de opname en de opdracht achteraf. Maar consistentie is precies waar MOVE over gaat. De groep merkt het als je er niet bent. Dat is de kracht.",
  },
  {
    question: "Wat is het verschil tussen Core, Performance en Ultimate?",
    answer: "Core is de eerlijke instap: het fundament. Performance is het vlaggenschip met wekelijkse Q&A's, een trainingsschema op maat en 3 jaar Notion-toegang. Ultimate voegt wekelijks 1-op-1 coaching met Rick toe. Voor ondernemers die directe sparring partner willen.",
  },
  {
    question: "Wat is de garantie?",
    answer: "Je kunt na 2 weken stoppen. Voel je geen richting of zie je geen vooruitgang? Dan krijg je je geld terug. No questions asked.",
  },
];

export default function ProgrammaOndernemer() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ===== HERO ===== */}
      <section className="gradient-hero px-8 md:px-16 pt-44 pb-24 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[80px] pointer-events-none" />
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-center relative">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm">
              Peer-Group Traject &middot; 100 dagen &middot; Voor ondernemers
            </span>
            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[1.05] mb-8">
              Je bent druk.<br />
              <span className="text-primary">Maar ben je ook bezig met wat ertoe doet?</span>
            </h1>
            <p className="text-xl md:text-2xl font-medium text-on-surface-variant max-w-xl">
              Als ondernemer run je alles zelf. Rick geeft je de structuur, het systeem en de groep die je scherp houdt. 100 dagen. Meetbaar. Blijvend.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/intake"
                className="btn-primary px-8 py-4 rounded-lg font-bold text-lg text-center"
              >
                Plan een gesprek met Rick
              </Link>
              <p className="text-sm text-on-surface-variant self-center">
                30 minuten. Open gesprek, geen verplichtingen.
              </p>
            </div>
          </div>
          <div className="w-full md:w-[300px] shrink-0">
            <div className="aspect-[9/16] rounded-2xl overflow-hidden shadow-2xl">
              <video
                src="/videos/ondernemer-intro.mp4"
                controls
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== VOOR WIE ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-surface-container text-on-surface-variant font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                Voor wie
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-8">
                Dit programma is voor jou als je...
              </h2>
              <ul className="space-y-4">
                {[
                  "Je bedrijf goed draait, maar jezelf erbij vergeet",
                  "Al weet wat je moet doen maar het niet volhoudt",
                  "Geen zin hebt in vaag gecoach, maar concrete resultaten wil",
                  "Liever in een kleine groep werkt dan alleen stoeien",
                  "Klaar bent met starten en stoppen en eindelijk wil doorzetten",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-primary mt-0.5 shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-on-surface-variant leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-on-surface rounded-2xl p-10 text-white">
              <span className="material-symbols-outlined text-primary text-4xl mb-4">
                format_quote
              </span>
              <p className="text-xl italic leading-relaxed mb-6">
                &ldquo;Geen excuses meer bedenken om niet te gaan sporten maar gewoon doen. We voelen ons heerlijk, zowel fysiek als mentaal. Minder last van kleine kwaaltjes. Beter humeur en helderder.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm shrink-0">R</div>
                <div>
                  <p className="font-bold">Ronald</p>
                  <p className="text-sm text-white/60">ZZP-er</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== HORIZONTAL TIMELINE ===== */}
      <section className="gradient-warm py-24 md:py-32 px-8 md:px-16 overflow-hidden">
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
                  desc: "30 minuten met Rick. Open gesprek, geen verplichtingen. We kijken of MOVE bij jou past.",
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
                  when: "Week 1 tot 12",
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

          {/* MOVE Cycle */}
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
              De meeste programma's zijn te kort om iets te laten beklijven, of zo lang dat het vaag wordt. 100 dagen is bewust gekozen: lang genoeg om echte patronen te doorbreken, kort genoeg om gefocust en concreet te blijven.
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

      {/* ===== PEER-GROUP METHODE ===== */}
      <section className="py-32 px-8 md:px-16">
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
                  Als ondernemer val je niemand af als je een dag niets doet. Behalve jezelf. MOVE geeft je een groep die je dat niet laat doen. 11 van de 11 ge&iuml;nterviewde klanten noemen de groep als het #1 werkende element.
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

            {/* Stat */}
            <div className="md:col-span-4 text-white p-12 rounded-2xl flex flex-col justify-center text-center" style={{ background: "linear-gradient(165deg, #b868c7 0%, #A559B4 50%, #8a3d9a 100%)" }}>
              <span className="text-6xl font-black mb-2">-80%</span>
              <span className="font-bold text-xl leading-tight">
                Minder terugval door groepsaccountability vs. solo coaching
              </span>
            </div>

            {/* Sparren */}
            <div className="md:col-span-5 bg-white p-12 rounded-2xl card-hover border border-outline-variant/10">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                hub
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-4">
                Strategisch sparren
              </h3>
              <p className="text-on-surface-variant">
                Directe feedback van mensen die begrijpen hoe het voelt om alles zelf te dragen. Geen theorie, maar echte gesprekken van mensen in dezelfde fase.
              </p>
            </div>

            {/* Rick quote */}
            <div className="md:col-span-7 bg-white p-12 rounded-2xl editorial-shadow flex flex-col justify-center">
              <p className="italic text-2xl leading-relaxed text-on-surface mb-6">
                &ldquo;Weten is niet het probleem. Doen is het probleem. Ik help ondernemers die alles zelf doen om grip te krijgen op zichzelf. Het systeem dat werkt als de motivatie er even niet is.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">R</div>
                <div>
                  <span className="text-sm font-bold not-italic text-primary">
                    Rick Vianen
                  </span>
                  <p className="text-xs text-on-surface-variant">Coach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRICING ===== */}
      <section className="gradient-warm py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <h2 className="font-[family-name:var(--font-headline)] text-5xl font-extrabold mb-4">
              Kies je traject.
            </h2>
            <p className="text-xl text-on-surface-variant max-w-2xl">
              Alle trajecten duren 100 dagen. Eenmalige investering, inclusief kick-off en afsluitevent. Plan een gesprek om te bespreken wat het beste bij jou past.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* MOVE Core */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
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
                  Plan een gesprek
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
                  <ValueItem value="&infin;" icon="favorite" highlight>Kleine groep die elkaar support</ValueItem>
                </ul>
              </div>
            </div>

            {/* MOVE Performance */}
            <div className="relative bg-white rounded-2xl shadow-xl lg:scale-[1.03] z-20 overflow-hidden flex flex-col border-2 border-primary/20">
              <span className="absolute -top-0 left-0 right-0 bg-primary text-white text-xs font-bold tracking-wider uppercase py-2.5 text-center">
                MEEST GEKOZEN &middot; HET VLAGGENSCHIP
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
                  <span className="text-xs text-on-surface-variant line-through">&euro;6.594 waarde</span>
                  <span className="text-xs font-bold text-white bg-secondary px-2 py-0.5 rounded-full">Bespaar 57%</span>
                </div>
                <Link
                  href="/intake"
                  className="block text-center btn-primary font-bold text-sm py-3.5 rounded-lg"
                >
                  Plan een gesprek
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
                  <ValueItem value="€647" icon="card_giftcard" highlight>Eindevenement + metingen</ValueItem>
                  <ValueItem value="€297" icon="card_giftcard" highlight>Directe vraagstelmogelijkheid via kanaal</ValueItem>
                  <ValueItem value="€197" icon="card_giftcard" highlight>Bibliotheek trainingen &amp; inspiratie</ValueItem>
                  <ValueItem value="€97" icon="card_giftcard" highlight>MOVE Foodguide</ValueItem>
                  <ValueItem value="&infin;" icon="favorite" highlight>Kleine groep die elkaar support</ValueItem>
                </ul>
              </div>
            </div>

            {/* MOVE Ultimate */}
            <div className="bg-white rounded-2xl overflow-hidden flex flex-col">
              <div className="p-10 pb-6">
                <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight">
                  MOVE Ultimate
                </p>
                <p className="text-on-surface-variant text-sm mt-1 mb-6">
                  Private. Voor ondernemers die wekelijks 1-op-1 met Rick willen werken.
                </p>
                <div className="mb-6">
                  <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                    &euro;4.997
                  </span>
                  <span className="text-on-surface-variant text-sm ml-1">eenmalig</span>
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs text-on-surface-variant line-through">&euro;11.558 waarde</span>
                  <span className="text-xs font-bold text-white bg-secondary px-2 py-0.5 rounded-full">Bespaar 57%</span>
                </div>
                <Link
                  href="/intake"
                  className="block text-center border-2 border-on-surface text-on-surface font-bold text-sm py-3.5 rounded-lg hover:bg-on-surface hover:text-white transition-all duration-300"
                >
                  Plan een gesprek
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
                  <ValueItem value="€647" icon="card_giftcard" highlight>Eindevenement + metingen</ValueItem>
                  <ValueItem value="€197" icon="card_giftcard" highlight>Bibliotheek trainingen &amp; inspiratie</ValueItem>
                  <ValueItem value="€97" icon="card_giftcard" highlight>MOVE Foodguide</ValueItem>
                  <ValueItem value="&infin;" icon="favorite" highlight>Kleine groep die elkaar support</ValueItem>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GARANTIE ===== */}
      <section className="py-24 md:py-32 px-8 md:px-16">
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
            We geloven zo sterk in het traject dat je na 2 weken mag stoppen. Voel je geen richting of zie je geen vooruitgang? Dan krijg je je geld terug. No questions asked.
          </p>
          <div className="inline-flex items-center gap-3 bg-surface-container-low px-6 py-4 rounded-xl editorial-shadow">
            <span className="material-symbols-outlined text-primary text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              shield
            </span>
            <p className="text-sm font-bold text-on-surface">
              Niet tevreden na 2 weken? Je krijgt je geld terug. No questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="gradient-warm py-32 overflow-hidden px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold max-w-md">
              Echte resultaten. Eigen woorden.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold mb-16">
            Veelgestelde vragen
          </h2>
          <Faq items={ondernemerFaqs} />
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
        <FaqJsonLd items={ondernemerFaqs} />
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/[0.08] blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black text-white mb-6">
                Klaar om het gesprek aan te gaan?
              </h2>
              <p className="text-surface-container-highest/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                Plan een kennismaking met Rick en ontdek wat MOVE voor jou kan betekenen.
              </p>
              <div className="inline-flex flex-col items-center gap-4">
                <Link
                  href="/intake"
                  className="btn-primary px-12 py-5 rounded-full text-xl font-bold"
                >
                  Plan een gesprek met Rick
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
            href="/challenge/ondernemer"
            className="inline-flex items-center gap-2 text-primary font-bold group link-hover"
          >
            Begin met de MOVE Challenge voor ondernemers
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
