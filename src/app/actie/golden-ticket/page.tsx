import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { GoldenTicketOffer } from "@/components/golden-ticket-offer";
import { GoldenTicketCta } from "@/components/golden-ticket-cta";
import { GOLDEN_TICKET_ORIGINAL_PRICE, GOLDEN_TICKET_PRICE, GOLDEN_TICKET_TOTAL } from "@/lib/golden-ticket";

export const metadata: Metadata = {
  title: "Golden Ticket · MOVE 100 dagen | Rick Vianen",
  description: `${GOLDEN_TICKET_TOTAL} tickets voor het MOVE-traject van 100 dagen, eenmalig ${GOLDEN_TICKET_PRICE} incl. btw in plaats van ${GOLDEN_TICKET_ORIGINAL_PRICE}. Wie het eerst claimt, heeft de plek.`,
  robots: {
    index: false,
    follow: false,
  },
};

const actieFaqs = [
  {
    question: "Hoe werkt de Golden Ticket-actie?",
    answer: `Er zijn ${GOLDEN_TICKET_TOTAL} tickets beschikbaar voor het volledige MOVE-traject, eenmalig ${GOLDEN_TICKET_PRICE} incl. btw in plaats van ${GOLDEN_TICKET_ORIGINAL_PRICE}. Geen loting of beoordeling: wie claimt, is binnen. Dat is bewust, want dit traject draait om in actie komen, en dat begint al bij het claimen van je ticket.`,
  },
  {
    question: "Wat als de tickets op zijn voor ik claim?",
    answer: "Dan is deze ronde vol. Je kunt je aanmelden voor de wachtlijst en hoort als eerste wanneer er een volgende kans komt.",
  },
  {
    question: "Wanneer start het traject?",
    answer: `Zodra de groep van ${GOLDEN_TICKET_TOTAL} compleet is, nemen we contact op om de startdatum en intake in te plannen.`,
  },
  {
    question: "Kan ik dit ticket later nog krijgen tegen deze prijs?",
    answer: `Nee. Dit is een eenmalig aanbod voor deze groep van ${GOLDEN_TICKET_TOTAL}. Zodra de tickets op zijn, keert deze prijs niet terug.`,
  },
  {
    question: "Moet ik al ondernemer zijn om mee te doen?",
    answer: "Deze actie is gericht op ondernemers die hun energie en sportroutine weer op orde willen krijgen, maar iedereen die serieus wil werken aan structuur en energie mag meedoen.",
  },
  {
    question: "Is de betaling veilig?",
    answer: "Ja, het claimen van je ticket verloopt via een beveiligde checkout van PlugAndPay.",
  },
];

// Zelfde vragen als hierboven (voor de JSON-LD structured data, platte tekst),
// maar met een interne link in het wachtlijst-antwoord voor de zichtbare FAQ.
const visualFaqs = actieFaqs.map((item) =>
  item.question === "Wat als de tickets op zijn voor ik claim?"
    ? {
        ...item,
        answer: (
          <>
            Dan is deze ronde vol. Je kunt je aanmelden voor de{" "}
            <Link
              href="/wachtlijst"
              className="text-primary font-semibold underline underline-offset-2 hover:no-underline"
            >
              wachtlijst
            </Link>{" "}
            en hoort als eerste wanneer er een volgende kans komt.
          </>
        ),
      }
    : item
);

export default function GoldenTicketPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ===== HERO ===== */}
      <section className="bg-surface px-8 md:px-16 pt-44 md:pt-52 pb-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            {`Slechts ${GOLDEN_TICKET_TOTAL} tickets · eenmalig`}
          </span>

          <div className="text-on-surface-variant text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 space-y-4">
            <p>
              Ben jij (zelfstandig) ondernemer en heb je het gevoel dat je niet alles eruit haalt? Je bedrijf draait prima, maar je gezondheid, je gezin en/of je eigen geluk lijden eronder. Dan is MOVE de beste investering die je ooit in jezelf zal doen.
            </p>
            <p>
              {`100 dagen, ${GOLDEN_TICKET_TOTAL} ambitieuze personen, recht op je doel af. Waarom in een groep? Omdat dat krachtiger is dan alleen. Gelijkgestemden die hun doelen najagen, dat geeft kracht en energie. MOVE is het framework dat zorgt voor blijvende impact.`}
            </p>
          </div>

          <GoldenTicketOffer />
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
              Vanuit die ervaring ontwikkelde hij MOVE: geen individueel traject meer, maar een compleet 100-dagen programma gebouwd rond een kleine groep die elkaar scherp houdt.
            </p>
            <p className="font-semibold text-on-surface">
              {`Met dit Golden Ticket geeft Rick ${GOLDEN_TICKET_TOTAL} mensen de kans om daar meteen bij te horen, tegen een fractie van de normale prijs.`}
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

      {/* ===== WAT JE KRIJGT / WAT WE VRAGEN ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              De deal
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
              Wat je krijgt. <span className="text-primary italic">En wat we vragen.</span>
            </h2>
            <p className="text-on-surface-variant leading-relaxed max-w-2xl mx-auto">
              {`MOVE is geen los programmaatje, maar een compleet traject van 100 dagen. Met je Golden Ticket betaal je ${GOLDEN_TICKET_PRICE} in plaats van de normale ${GOLDEN_TICKET_ORIGINAL_PRICE}, en daar staat wat tegenover.`}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-outline-variant/15 editorial-shadow">
            {/* Wat je krijgt */}
            <div className="bg-white p-8 md:p-10">
              <h3 className="font-[family-name:var(--font-headline)] font-black text-lg tracking-tight mb-6">
                Wat je krijgt
              </h3>
              <ul className="space-y-4">
                {[
                  "Persoonlijke kick-off met heldere doelen",
                  "100 dagen begeleiding in een kleine groep",
                  "7 live Q&A-sessies met Rick",
                  "Wekelijkse accountability en bijsturing",
                  "Trainingsschema afgestemd op jouw energie",
                  "Notion volgsysteem en trainingsbibliotheek",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-primary text-lg mt-0.5 shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-on-surface-variant text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Wat we van jou vragen */}
            <div className="bg-surface-container-low p-8 md:p-10 border-t md:border-t-0 md:border-l border-outline-variant/15">
              <h3 className="font-[family-name:var(--font-headline)] font-black text-lg tracking-tight mb-6">
                Wat we van jou vragen
              </h3>
              <ul className="space-y-4">
                {[
                  "2 tot 3 uur per week: kennismoment, opdracht, trainen en inchecken",
                  "Aanwezig bij de live Q&A's, de groep rekent op jou",
                  "100 dagen volhouden, geen tussentijds opzeggen",
                  "De volledige investering vooraf, dat is bewust",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="material-symbols-outlined text-secondary text-lg mt-0.5 shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="text-on-surface-variant text-sm leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="text-center text-on-surface-variant text-sm mt-8 max-w-xl mx-auto leading-relaxed">
            Wie claimt, is binnen. Niet omdat we het spannend willen maken, maar omdat dit traject draait om in actie komen. Dat beloont Rick liever dan lang twijfelen.
          </p>
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
              Dit ticket is voor jou als...
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
              In 4 stappen
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Claim je ticket", desc: `Betaal direct en veilig ${GOLDEN_TICKET_PRICE} incl. btw via de checkout.`, icon: "confirmation_number" },
              { step: "2", title: "Bevestiging", desc: "Je ontvangt direct een bevestiging per e-mail met de vervolgstappen.", icon: "mail" },
              { step: "3", title: "Intake", desc: "We plannen een kort intakegesprek om je doelen scherp te krijgen.", icon: "flag" },
              { step: "4", title: "Cohort start", desc: `Zodra de groep van ${GOLDEN_TICKET_TOTAL} compleet is, starten jullie samen aan het traject.`, icon: "rocket_launch" },
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

      {/* ===== TESTIMONIALS ===== */}
      <section className="gradient-warm py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-xs font-bold tracking-[0.14em] uppercase text-primary mb-10">
            Wat anderen zeggen
          </p>

          <div className="bg-white rounded-2xl p-8 md:p-10 border border-outline-variant/10 mb-6">
            <p className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black italic leading-snug mb-6">
              &ldquo;De eerste stap was de sportieve uitdaging aangaan. Toen bleek verandering vooral te komen door te doen.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">B</div>
              <div className="text-left">
                <p className="font-bold text-sm">Barbara</p>
                <p className="text-xs text-on-surface-variant">Ambachtelijk Kleermaker &middot; MOVE deelnemer</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl p-7 border border-outline-variant/10">
              <p className="text-on-surface-variant italic leading-relaxed mb-5 text-sm">
                &ldquo;Was iemand die dacht: coaching niets voor mij. Niets bleek minder waar. Belangrijkste wat ik meeneem: je hebt maar 1 lichaam en geest, zorg daarvoor.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">S</div>
                <div>
                  <p className="font-bold text-sm">Simon</p>
                  <p className="text-xs text-on-surface-variant">Horecaondernemer</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-7 border border-outline-variant/10">
              <p className="text-on-surface-variant italic leading-relaxed mb-5 text-sm">
                &ldquo;Weet je wat je doel is? Dan is Rick de beste coach om daar te komen. Hij vergoelijkt niet, maar zet je op scherp.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">K</div>
                <div>
                  <p className="font-bold text-sm">Koen</p>
                  <p className="text-xs text-on-surface-variant">Strategisch Communicatieadviseur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLAIM ===== */}
      <section id="claim" className="py-24 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Claim je ticket
          </span>
          <h2 className="font-[family-name:var(--font-headline)] text-4xl font-black tracking-tight mb-4 leading-tight">
            Wie claimt, is binnen
          </h2>
          <p className="text-on-surface-variant leading-relaxed mb-8 max-w-md mx-auto">
            Geen loting, geen beoordeling. Dit traject draait om in actie komen, en dat begint met deze knop.
          </p>
          <GoldenTicketCta size="large" />
        </div>
      </section>

      {/* ===== VOORWAARDEN ===== */}
      <section className="py-16 px-8 md:px-16">
        <div className="max-w-3xl mx-auto bg-surface-container-low rounded-2xl p-8 md:p-10">
          <h3 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-4">
            Actievoorwaarden
          </h3>
          <ul className="space-y-2 text-sm text-on-surface-variant leading-relaxed list-disc pl-5">
            <li>{`Er zijn in totaal ${GOLDEN_TICKET_TOTAL} Golden Tickets beschikbaar, voor ${GOLDEN_TICKET_PRICE} incl. btw per ticket.`}</li>
            <li>Wie het eerst betaalt, heeft de plek. Er is geen loting of beoordeling.</li>
            <li>Zodra alle tickets zijn geclaimd, vervalt dit aanbod en keert deze prijs niet terug.</li>
            <li>{`Het cohort start zodra de groep van ${GOLDEN_TICKET_TOTAL} compleet is.`}</li>
            <li>De actie is niet inwisselbaar voor geld of een ander product.</li>
            <li>Per persoon is één ticket geldig.</li>
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
          <Faq items={visualFaqs} />
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
                {`${GOLDEN_TICKET_TOTAL} tickets · eenmalig ${GOLDEN_TICKET_PRICE}`}
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black text-white mb-4">
                Bouw de energie <span className="text-primary italic">die jouw ambitie verdient.</span>
              </h2>
              <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                {`${GOLDEN_TICKET_TOTAL} tickets, eenmalig ${GOLDEN_TICKET_PRICE} incl. btw. Wie het eerst claimt, heeft de plek.`}
              </p>
              <GoldenTicketCta size="large" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
