import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";

export const metadata: Metadata = {
  title: "Veelgestelde Vragen | MOVE Coaching Rick Vianen",
  description:
    "Antwoorden op al je vragen over MOVE Coaching: het programma, prijzen, resultaten en meer. Ontdek of MOVE bij jou past.",
};

const sections = [
  { id: "over-move", label: "Over MOVE", icon: "info" },
  { id: "programma", label: "Het programma", icon: "calendar_month" },
  { id: "prijzen", label: "Prijzen & investering", icon: "payments" },
  { id: "praktisch", label: "Praktisch", icon: "build" },
  { id: "bezwaren", label: "Twijfels & bezwaren", icon: "psychology_alt" },
];

const overMoveFaqs = [
  {
    question: "Wat is MOVE precies?",
    answer: "MOVE is een 100-dagen peer-group coachingtraject voor ambitieuze professionals. In kleine groepen van maximaal 8 deelnemers werk je gelijktijdig aan sport, mindset en business — onder begeleiding van Rick Vianen. Het is geen cursus, geen online programma, maar een gestructureerd traject met wekelijkse accountability.",
  },
  {
    question: "Voor wie is MOVE bedoeld?",
    answer: "Voor professionals tussen de 30 en 50 jaar die goed presteren aan de buitenkant, maar merken dat gezondheid, energie en structuur achterblijven. Denk aan ondernemers, leidinggevenden en ambitieuze professionals die weten wat ze moeten doen — maar het niet consistent doen.",
  },
  {
    question: "Voor wie is MOVE niet bedoeld?",
    answer: "MOVE is niet voor mensen in acute crisis of met een klinische diagnose — daarvoor zijn andere professionals beter toegerust. Het is ook niet voor mensen die een quick fix zoeken of niet bereid zijn elke week te verschijnen. MOVE werkt door consistentie en commitment.",
  },
  {
    question: "Hoe verschilt MOVE van andere coaching?",
    answer: "De meeste coaching focust op één domein: sport, mindset of business. MOVE integreert alle drie als één systeem. Bovendien is de groep het mechanisme — niet de coach alleen. 11 van de 11 geïnterviewde klanten noemen de groep als het #1 werkende element.",
  },
  {
    question: "Wie is Rick Vianen?",
    answer: "Rick ging van feestbeest naar IRONMAN finisher. Die transformatie werd de basis voor MOVE: performance coaching die sport, mindset en business als één geheel beschouwt. Hij heeft 200 professionals gecoacht en is opgeleid door Dusan Djukich (Straight Line Leadership). KvK: 94159475.",
  },
];

const programmaFaqs = [
  {
    question: "Hoe ziet een typische MOVE-week eruit?",
    answer: "Elke week volgt dezelfde MOVE-cyclus: Master (kort kennismoment, 3-10 min), Operate (praktische opdracht direct toepassen), Validate (terugkijken op resultaten), Elevate (verfijnen en verbeteren). Daarnaast is er op donderdag een live groeps-Q&A en train je volgens je schema. Totaal 2-3 uur per week.",
  },
  {
    question: "Wat als ik een week mis?",
    answer: "Het leven gebeurt. Je krijgt de opname en opdracht achteraf. Maar MOVE werkt door consistentie — de groep houdt je scherp en mist het als je er niet bent. Dat is juist de kracht van peer-group coaching.",
  },
  {
    question: "Hoe groot is de groep?",
    answer: "Maximaal 8 professionals per cohort. Groot genoeg voor diversiteit aan perspectieven, klein genoeg zodat niemand zich kan verstoppen. Rick coacht elk cohort persoonlijk — meer dan 8 is niet mogelijk zonder kwaliteitsverlies.",
  },
  {
    question: "Welke resultaten kan ik verwachten na 100 dagen?",
    answer: "Zichtbaar fysiek resultaat, meer energie, betere focus en een werkend systeem dat je vasthoudt. De eerste shift is voelbaar binnen 2 weken door de kick-off en structuur. Na 100 dagen: van 'ik moet mezelf motiveren' naar 'ik heb een structuur die het werk voor mij doet'.",
  },
  {
    question: "Wat is de MOVE methode?",
    answer: "MOVE staat voor Master, Operate, Validate, Elevate. Het is een wekelijkse cyclus: je leert iets (Master), past het direct toe (Operate), kijkt eerlijk terug (Validate) en verfijnt je aanpak (Elevate). Na 100 dagen is dit een tweede natuur.",
  },
  {
    question: "Wat houdt de proces-garantie in?",
    answer: "Als je elke stap uitvoert — check-ins, metingen, opdrachten, trainingsschema — en na 100 dagen geen aantoonbare vooruitgang ziet op de doelen die jullie bij intake hebben vastgelegd, dan werkt Rick kosteloos extra tijd met je door. Bij Ultimate gaan ook de 1-op-1 sessies door.",
  },
  {
    question: "Kan ik na 100 dagen doorgaan?",
    answer: "Ja. Er zijn 4 cohorten per jaar. Veel deelnemers doen meerdere trajecten, maar het programma is zo gebouwd dat 100 dagen al een complete cyclus is. Je hoeft niet te verlengen om resultaat te houden.",
  },
];

const prijzenFaqs = [
  {
    question: "Wat kost MOVE?",
    answer: "MOVE Core: €1.497. MOVE Performance: €2.497 (meest gekozen). MOVE Ultimate: €4.997. Alle prijzen zijn eenmalig voor het volledige 100-dagen traject, inclusief kick-off en eindevenement.",
  },
  {
    question: "Wat is het verschil tussen Core, Performance en Ultimate?",
    answer: "Core is de eerlijke instap: wekelijkse content, groeps kick-off en eindevenement. Performance voegt wekelijkse Q&A's, trainingsschema op maat en 3 jaar Notion-toegang toe — dit is het vlaggenschip. Ultimate is alles uit Performance plus wekelijks 60 minuten privé coaching met Rick.",
  },
  {
    question: "Is dit een eenmalige betaling?",
    answer: "Ja. MOVE is een eenmalige investering voor het volledige 100-dagen traject — geen abonnement, geen terugkerende kosten. Je betaalt één keer en krijgt het complete programma inclusief kick-off en eindevenement.",
  },
  {
    question: "Kan ik in termijnen betalen?",
    answer: "Bespreek dit tijdens het kennismakingsgesprek met Rick. In sommige gevallen is een betalingsregeling mogelijk.",
  },
  {
    question: "Is dit aftrekbaar als zakelijke kosten?",
    answer: "In veel gevallen wel. Performance coaching is een investering in professionele ontwikkeling. Raadpleeg je boekhouder voor jouw specifieke situatie. Rick staat geregistreerd bij de KvK (94159475).",
  },
  {
    question: "Waarom is Performance het meest gekozen?",
    answer: "Performance bevat de volle stack: alles uit Core plus wekelijkse Q&A's voor context-verdieping, een trainingsschema op maat dat elke 4 weken wordt bijgesteld, en 3 jaar toegang tot het Notion-systeem. De totale waarde is €8.358 — je investeert eenmalig €2.497.",
  },
  {
    question: "Wat als ik na een paar weken wil stoppen?",
    answer: "MOVE is geen abonnement — het is een eenmalige investering en een commitment van 100 dagen. De groep rekent op jouw aanwezigheid en jij op die van hen. Twijfel je of MOVE bij je past? Daarom begint elk traject met een kennismakingsgesprek.",
  },
];

const praktischFaqs = [
  {
    question: "Hoe begin ik?",
    answer: "Met een kennismakingsgesprek van 30 minuten. Geen verkooppitch — Rick kijkt eerlijk of MOVE bij jou past. Daarna besluit je zelf.",
  },
  {
    question: "Wanneer start het volgende cohort?",
    answer: "Het beta cohort heeft nog 3 plekken beschikbaar. Er zijn 4 cohorten per jaar. Na sluiting kom je op de wachtlijst voor het volgende cohort.",
  },
  {
    question: "Waar vinden de sessies plaats?",
    answer: "De wekelijkse lessen en Q&A's zijn online, zodat je overal kunt deelnemen. De kick-off en het eindevenement zijn live events in de regio Utrecht.",
  },
  {
    question: "Welke tools gebruik ik tijdens het traject?",
    answer: "Je krijgt toegang tot een Notion-systeem voor tracking en opdrachten, een accountability-tool voor dagelijkse check-ins, en een besloten kanaal voor directe communicatie met de groep en Rick. Bij Performance en Ultimate houd je 3 jaar Notion-toegang na afloop.",
  },
  {
    question: "Hoeveel tijd kost het per week?",
    answer: "Reken op 2-3 uur per week: een kennismoment (3-10 min), je opdracht uitvoeren, de groeps-Q&A op donderdag, en je trainingen. MOVE is gebouwd voor drukke professionals — 1 prioriteit per week.",
  },
];

const allFaqsForSchema = [
  ...overMoveFaqs,
  ...programmaFaqs,
  ...prijzenFaqs,
  ...praktischFaqs,
];

const objections = [
  {
    objection: "“Het is veel geld.”",
    response: "Klopt. Wat kost het je als er niets verandert? Je zei net dat je al drie keer bent vastgelopen op dit patroon. Wat kost dat je inmiddels — in energie, in werk, in relatie? Het geld is niet het probleem. Weer een jaar in hetzelfde patroon zitten is het probleem.",
  },
  {
    objection: "“Kan ik het ook zelf?”",
    response: "Als je het zelf kon, had je het al gedaan. Wat is er anders aan je 10e poging? MOVE biedt wat je zelf niet kunt organiseren: een groep die je niet laat zitten, wekelijkse structuur, en iemand die eerlijk tegen je is.",
  },
  {
    objection: "“Klinkt zweverig.”",
    response: "MOVE is het tegenovergestelde. Metingen, doelen, wekelijkse check-ins. Als er één ding is wat we niet doen, is het vaagheid. Je krijgt een Notion-systeem met harde data, een trainingsschema en meetbare doelen.",
  },
  {
    objection: "“Ik moet er nog over nadenken.”",
    response: "Prima. Wat moet je precies afwegen? Vaak komt iemand erachter dat er niets te overwegen valt — of juist dat er iets specifieks is waar je op kunt ingaan. Het kennismakingsgesprek is vrijblijvend.",
  },
  {
    objection: "“Is het goed voor mijn relatie?”",
    response: "Groeien maakt je een betere partner, geen andere. De vraag is: wat zit er onder deze vraag? MOVE helpt je om op alle levensdomeinen controle te krijgen — inclusief hoe je je verhoudt tot de mensen om je heen.",
  },
  {
    objection: "“Ik heb geen tijd.”",
    response: "Tijd is niet het echte bezwaar — prioriteit is het bezwaar. MOVE kost 2-3 uur per week. Je kijkt nu al Netflix, scrollt al door je telefoon. Het gaat niet om tijd. Het gaat om wat je belangrijk genoeg vindt.",
  },
];

export default function VeelgesteldeVragenPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ===== HERO ===== */}
      <section className="gradient-hero pt-36 pb-16 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[400px] h-[400px] rounded-full bg-primary/[0.03] blur-[80px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative">
          <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm">
            FAQ
          </span>
          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-6">
            Veelgestelde <span className="text-primary italic">vragen</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl">
            Alles wat je wilt weten over MOVE, het programma, de investering en
            wat je kunt verwachten. Geen verkooppraatjes — eerlijke antwoorden.
          </p>
        </div>
      </section>

      {/* ===== ANCHOR NAV ===== */}
      <section className="sticky top-[72px] z-30 bg-surface/95 backdrop-blur-md border-b border-outline-variant/15 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <nav className="flex gap-1 overflow-x-auto py-3 -mx-2 px-2 no-scrollbar">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold text-on-surface-variant hover:bg-surface-container hover:text-primary transition-all whitespace-nowrap shrink-0"
              >
                <span className="material-symbols-outlined text-lg">{s.icon}</span>
                {s.label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ===== OVER MOVE ===== */}
      <section id="over-move" className="py-20 px-8 md:px-16 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              info
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tight">
              Over MOVE
            </h2>
          </div>
          <Faq items={overMoveFaqs} />
        </div>
      </section>

      {/* ===== HET PROGRAMMA ===== */}
      <section id="programma" className="py-20 px-8 md:px-16 gradient-warm scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              calendar_month
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tight">
              Het programma
            </h2>
          </div>
          <Faq items={programmaFaqs} />
        </div>
      </section>

      {/* ===== PRIJZEN ===== */}
      <section id="prijzen" className="py-20 px-8 md:px-16 scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              payments
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tight">
              Prijzen &amp; investering
            </h2>
          </div>
          <Faq items={prijzenFaqs} />
        </div>
      </section>

      {/* ===== PRAKTISCH ===== */}
      <section id="praktisch" className="py-20 px-8 md:px-16 gradient-warm scroll-mt-32">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <span className="material-symbols-outlined text-primary text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>
              build
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tight">
              Praktisch
            </h2>
          </div>
          <Faq items={praktischFaqs} />
        </div>
      </section>

      {/* ===== BEZWAREN / OBJECTIONS ===== */}
      <section id="bezwaren" className="py-24 md:py-32 px-8 md:px-16 scroll-mt-32">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Eerlijk antwoord
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-4">
              Twijfels? <span className="text-primary italic">Goed.</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl mx-auto">
              De bezwaren die je nu hebt, had elke MOVE-deelnemer ook. Hier zijn
              eerlijke antwoorden — geen verkooptrucs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {objections.map((item, i) => (
              <div
                key={i}
                className="gradient-dark rounded-2xl p-8 md:p-10 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/[0.06] blur-[40px] pointer-events-none" />
                <div className="relative z-10">
                  <p className="font-[family-name:var(--font-headline)] text-xl md:text-2xl font-black text-white mb-4 leading-tight">
                    {item.objection}
                  </p>
                  <div className="w-10 h-0.5 bg-primary rounded-full mb-4" />
                  <p className="text-surface-container-highest/70 leading-relaxed">
                    {item.response}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="gradient-cta rounded-3xl p-12 md:p-20 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/[0.06] blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-black tracking-tighter mb-4">
                Nog vragen?
              </h2>
              <p className="text-on-surface-variant text-lg mb-8 max-w-lg mx-auto">
                Plan een kennismakingsgesprek. 30 minuten, geen pitch.
                Rick beantwoordt alles persoonlijk.
              </p>
              <Link
                href="/intake"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block px-10 py-4 text-base font-bold rounded-xl"
              >
                Plan een kennismakingsgesprek
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FaqJsonLd items={allFaqsForSchema} />
    </div>
  );
}
