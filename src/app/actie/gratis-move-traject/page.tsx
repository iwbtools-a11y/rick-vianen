import type { Metadata } from "next";
import { ActieForm } from "@/components/actie-form";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";

// ─── Nog aan te scherpen zodra de actievoorwaarden definitief zijn ───
// - Waarde van het traject: nu een indicatie, check het exacte bedrag
const DEADLINE = "13 september 2026";
const START_DATE = "zaterdag 3 oktober 2026";

export const metadata: Metadata = {
  title: "Win een gratis MOVE traject (4 plekken) | Rick Vianen",
  description:
    "We geven 4 volledige MOVE trajecten weg. Meld je aan voor de deadline en maak kans op gratis toegang tot 100 dagen structuur, energie en resultaat.",
  robots: {
    index: false,
    follow: false,
  },
};

const actieFaqs = [
  {
    question: "Hoe worden de 4 winnaars gekozen?",
    answer: `Rick beoordeelt persoonlijk alle inschrijvingen op basis van je motivatie. We kiezen de 4 personen voor wie MOVE nu het grootste verschil kan maken. Geen loting, maar een bewuste keuze.`,
  },
  {
    question: "Wanneer hoor ik of ik heb gewonnen?",
    answer: `Na de deadline van ${DEADLINE} nemen we binnen een paar dagen contact op met de winnaars via e-mail en telefoon.`,
  },
  {
    question: "Wanneer start het traject?",
    answer: `Het cohort van de 4 winnaars start gezamenlijk op ${START_DATE}.`,
  },
  {
    question: "Wat als ik niet win?",
    answer: "Dan blijf je gewoon op de mailinglijst staan en hoor je als eerste over nieuwe acties, content en de mogelijkheid om zelf in te stappen in MOVE. Afmelden kan altijd.",
  },
  {
    question: "Moet ik al ondernemer zijn om mee te doen?",
    answer: "Deze actie is gericht op ondernemers die hun energie en sportroutine weer op orde willen krijgen, maar iedereen die serieus wil werken aan structuur en energie mag meedoen.",
  },
  {
    question: "Kost meedoen aan de actie iets?",
    answer: "Nee, meedoen is volledig gratis. Alleen de 4 winnaars ontvangen het volledige MOVE traject zonder kosten.",
  },
];

export default function GratisMoveTrajectPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ===== HERO ===== */}
      <section className="gradient-hero px-8 md:px-16 pt-36 pb-20 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
        <div className="max-w-4xl mx-auto relative text-center">
          <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm">
            Tijdelijke actie &middot; 4 gratis plekken
          </span>

          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.95] mb-5">
            Win een gratis <span className="text-primary italic">MOVE traject.</span>
          </h1>

          <p className="text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed mb-10">
            We geven het volledige MOVE traject weg aan 4 ondernemers die hun energie en sportroutine weer serieus willen aanpakken. 100 dagen structuur, begeleiding en resultaat. Volledig gratis.
          </p>

          <a
            href="#actie-formulier"
            className="btn-primary inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-lg font-bold"
          >
            Meld je nu aan
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
          <p className="text-sm text-on-surface-variant/70 mt-4">
            Inschrijven kan tot en met {DEADLINE} &middot; het cohort start op {START_DATE}
          </p>
        </div>
      </section>

      {/* ===== WAAROM DEZE ACTIE ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Waarom deze actie
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight leading-tight">
              Waarom Rick dit traject <span className="text-primary italic">is gaan bouwen.</span>
            </h2>
          </div>

          <div className="space-y-6 text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto">
            <p>
              Rick coachte meer dan 150 mensen 1-op-1. Goede resultaten, maar ook een patroon dat zich steeds herhaalde: zodra het even tegenzat, viel iemand alleen op zichzelf terug. En dat bleek niet genoeg.
            </p>
            <p>
              Toen hij overstapte naar het begeleiden van groepen, zag hij het verschil direct. Niet Rick alleen die je scherp houdt, maar een kleine groep mensen met vergelijkbare doelen die je niet teleur wil stellen. Die gedeelde accountability maakte voor veel van zijn klanten het verschil dat 1-op-1 coaching niet gaf.
            </p>
            <p>
              Vanuit die ervaring ontwikkelde hij MOVE: geen individueel traject meer, maar een compleet 100-dagen programma gebouwd rond een kleine groep die elkaar scherp houdt. Dat traject staat nu klaar.
            </p>
            <p className="font-semibold text-on-surface">
              En Rick wil dit graag aangaan met 4 mensen die net zo hard in dit traject geloven als hij.
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-on-surface mt-12 max-w-2xl mx-auto">
            <div className="aspect-video">
              <iframe
                src="https://www.youtube.com/embed/P4CL11eOM5M"
                title="Rick legt het zelf uit"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== WAT JE WINT ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Wat je wint
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Het volledige MOVE traject. <span className="text-primary">100 dagen.</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              MOVE is geen los programmaatje, maar een compleet traject van 100 dagen waarin je structuur, energie en resultaat opbouwt op sport, mindset en business. Precies wat je normaal als eenmalige investering betaalt, krijgen 4 winnaars deze keer volledig gratis.
            </p>
          </div>
          <div className="bg-surface-container-low rounded-2xl p-10">
            <div className="space-y-4">
              {[
                { icon: "flag", text: "Persoonlijke kick-off met heldere doelen" },
                { icon: "groups", text: "100 dagen begeleiding in een kleine groep" },
                { icon: "bolt", text: "Wekelijkse accountability en bijsturing" },
                { icon: "fitness_center", text: "Trainingsschema afgestemd op jouw energie" },
                { icon: "card_giftcard", text: "Notion volgsysteem en trainingsbibliotheek" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span
                    className="material-symbols-outlined text-primary text-xl shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    {item.icon}
                  </span>
                  <p className="text-on-surface font-medium">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== VOOR WIE ===== */}
      <section className="gradient-warm py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Voor wie
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight">
              Deze actie is voor jou als...
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {[
              "Je bedrijf draait, maar je energie is op en dat begint zich te wreken",
              "Sport en herstel al maanden onderaan je lijst staan",
              "Je weet dat structuur het verschil maakt, maar mist het systeem",
              "Je zoekt geen quick fix, maar 100 dagen waarin het echt beklijft",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-outline-variant/10">
                <span
                  className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <p className="text-on-surface-variant leading-relaxed text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOE HET WERKT ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Hoe het werkt
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight">
              In 5 stappen
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Meld je aan", desc: "Vul het formulier in en vertel kort waarom jij mee wil doen.", icon: "edit_note" },
              { step: "2", title: "Deadline sluit", desc: `Inschrijven kan tot en met ${DEADLINE}.`, icon: "event" },
              { step: "3", title: "4 winnaars gekozen", desc: "Rick beoordeelt persoonlijk alle inschrijvingen.", icon: "military_tech" },
              { step: "4", title: "Je hoort van ons", desc: "Winnaars krijgen bericht via e-mail en telefoon.", icon: "mail" },
              { step: "5", title: "Cohort start", desc: `Op ${START_DATE} beginnen de 4 winnaars samen aan hun traject.`, icon: "rocket_launch" },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 border border-outline-variant/10 card-hover flex flex-col">
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
                  Stap {item.step}
                </span>
                <span
                  className="material-symbols-outlined text-3xl text-secondary mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {item.icon}
                </span>
                <h3 className="font-[family-name:var(--font-headline)] text-lg font-black tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section className="gradient-warm py-16 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black italic leading-snug mb-8">
            &ldquo;De eerste stap was de sportieve uitdaging aangaan. Toen bleek verandering vooral te komen door te doen.&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">B</div>
            <div className="text-left">
              <p className="font-bold text-sm">Barbara</p>
              <p className="text-xs text-on-surface-variant">Ambachtelijk Kleermaker &middot; MOVE deelnemer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FORMULIER ===== */}
      <section id="actie-formulier" className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Doe mee
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-black tracking-tight mb-4 leading-tight">
              Meld je aan voor {DEADLINE}
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Vul het formulier in en vertel kort waarom dit traject nu voor jou het verschil kan maken. Win je niet? Dan blijf je gewoon op de hoogte via onze mailings en kan je je op elk moment alsnog aanmelden voor MOVE.
            </p>
            <div className="flex items-center gap-2 text-sm text-on-surface-variant">
              <span
                className="material-symbols-outlined text-primary text-lg"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                lock
              </span>
              Je gegevens worden alleen gebruikt voor deze actie en de mailings van Rick Vianen.
            </div>
          </div>
          <ActieForm />
        </div>
      </section>

      {/* ===== VOORWAARDEN ===== */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-3xl mx-auto bg-surface-container-low rounded-2xl p-8 md:p-10">
          <h3 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-4">
            Actievoorwaarden
          </h3>
          <ul className="space-y-2 text-sm text-on-surface-variant leading-relaxed list-disc pl-5">
            <li>Inschrijven kan tot en met {DEADLINE}.</li>
            <li>Er worden in totaal 4 volledige MOVE trajecten weggegeven.</li>
            <li>Winnaars worden persoonlijk geselecteerd door Rick Vianen op basis van de motivatie in het formulier.</li>
            <li>Winnaars ontvangen na de deadline bericht via e-mail en telefoon.</li>
            <li>Het cohort van de 4 winnaars start gezamenlijk op {START_DATE}.</li>
            <li>De actie is niet inwisselbaar voor geld of een ander product.</li>
            <li>Per persoon is één inschrijving geldig.</li>
            <li>Deelname aan deze actie betekent akkoord met deze voorwaarden.</li>
          </ul>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="gradient-warm py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold mb-16">
            Veelgestelde vragen
          </h2>
          <Faq items={actieFaqs} />
        </div>
        <FaqJsonLd items={actieFaqs} />
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/[0.08] blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-8">
                4 plekken &middot; gratis
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black text-white mb-4">
                Bouw de energie <span className="text-primary italic">die jouw ambitie verdient.</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Meld je aan voor {DEADLINE} en maak kans op een volledig gratis MOVE traject.
              </p>
              <a
                href="#actie-formulier"
                className="btn-primary px-14 py-5 rounded-full text-xl font-bold inline-flex items-center gap-2.5"
              >
                Meld je nu aan
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
