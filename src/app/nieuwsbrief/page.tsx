import type { Metadata } from "next";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { KlaviyoForm } from "@/components/klaviyo-form";
import { MetaLeadEvent } from "@/components/meta-lead-event";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";
import { SuppressKlaviyoPopup } from "./suppress-popup";

export const metadata: Metadata = {
  title: "Nieuwsbrief | MOVE Coaching",
  description:
    "Schrijf je in voor de MOVE nieuwsbrief en ontvang wekelijks inzichten over sport, mindset en business.",
};

const nieuwsbriefFaqs = [
  {
    question: "Hoe vaak krijg ik de nieuwsbrief?",
    answer:
      "Eén keer per week. Kort en praktisch, zodat je het meteen kan toepassen. Geen dagelijkse mails, geen spam.",
  },
  {
    question: "Is de nieuwsbrief echt gratis?",
    answer:
      "Ja, volledig gratis. Geen verborgen kosten en geen verplichtingen. Je krijgt gewoon elke week een inzicht in je inbox.",
  },
  {
    question: "Waar gaat de nieuwsbrief over?",
    answer:
      "Over sport, mindset en business, de drie pijlers van de MOVE methode. Praktische inzichten die je direct kan gebruiken, geen theorie.",
  },
  {
    question: "Kan ik me altijd afmelden?",
    answer:
      "Ja. Onderaan elke e-mail staat een afmeldlink. Één klik en je staat er direct af, zonder vragen.",
  },
];

export default function NieuwsbriefPage() {
  return (
    <div className="pb-24 md:pb-0">
      <SuppressKlaviyoPopup />
      <Suspense>
        <MetaLeadEvent formId="UmT95r" />
      </Suspense>

      {/* ===== HERO + FORMULIER ===== */}
      <section
        id="inschrijven"
        className="gradient-hero px-8 md:px-16 pt-32 pb-16 md:pt-44 md:pb-24 relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[80px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative">
          <div className="max-w-2xl mx-auto">
            <span className="inline-block px-3 py-1 bg-surface-container-high/80 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm">
              Gratis &middot; wekelijks &middot; direct toepasbaar
            </span>

            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-6xl font-black tracking-tighter leading-[0.95] text-on-surface mb-5">
              Elke week een duwtje <span className="text-primary italic">in de juiste richting.</span>
            </h1>

            <p className="text-lg text-on-surface-variant leading-relaxed mb-10 max-w-lg mx-auto">
              Praktische inzichten over sport, mindset en business. Recht in je inbox, elke week opnieuw.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 editorial-shadow text-left">
            <KlaviyoForm formId="UmT95r" />
          </div>

          <div className="flex items-center justify-center gap-2 mt-6 text-sm text-on-surface-variant">
            <span
              className="material-symbols-outlined text-secondary text-lg"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              lock
            </span>
            Je gegevens zijn veilig. Afmelden kan altijd met &eacute;&eacute;n klik.
          </div>
        </div>
      </section>

      {/* ===== TRUST BAR ===== */}
      <section className="bg-surface py-10 px-8 md:px-16 border-y border-outline-variant/10">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[
            { icon: "groups", text: "200+ professionals gecoacht" },
            { icon: "military_tech", text: "IRONMAN finisher" },
            { icon: "school", text: "Opgeleid door Dusan Djukich" },
          ].map((item) => (
            <div key={item.text} className="flex items-center justify-center gap-2">
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {item.icon}
              </span>
              <span className="text-sm font-bold text-on-surface">{item.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ===== WAT JE KRIJGT ===== */}
      <section className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
              Wat je elke week <span className="text-primary">in je inbox</span> krijgt
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Geen theorie, maar inzichten die je direct kan toepassen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "fitness_center",
                title: "Sportieve inzichten",
                text: "Praktische tips om energie en structuur in je trainingsroutine te krijgen.",
              },
              {
                icon: "psychology",
                title: "Mindset shifts",
                text: "Denkpatronen die je tegenhouden, en hoe je ze doorbreekt.",
              },
              {
                icon: "insights",
                title: "Business lessen",
                text: "Wat werkt in de praktijk. Concrete stappen, geen ellenlange theorie.",
              },
              {
                icon: "groups",
                title: "Achter de schermen",
                text: "Persoonlijke verhalen van Rick en klanten uit het MOVE traject.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="p-8 bg-white rounded-2xl card-hover border border-outline-variant/10"
              >
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">
                  {item.icon}
                </span>
                <h3 className="font-[family-name:var(--font-headline)] font-bold text-xl mb-2 text-on-surface">
                  {item.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== VOOR WIE ===== */}
      <section className="gradient-warm py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Deze nieuwsbrief is voor jou als...
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Je goed presteert aan de buitenkant, maar energie en structuur voelt achterblijven",
              "Je op zoek bent naar praktische inzichten in plaats van lange theorie",
              "Je sport, mindset en business als één geheel wil aanpakken",
              "Je elke week een duwtje in de juiste richting kan gebruiken",
            ].map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-outline-variant/10"
              >
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

      {/* ===== WIE IS RICK ===== */}
      <section className="bg-surface py-24 md:py-32 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[80px] pointer-events-none" />

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-[280px_1fr] gap-12 items-center relative">
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <Image
                src="/images/rick-portrait.png"
                alt="Rick Vianen - Founder MOVE Coaching"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <p className="text-secondary uppercase tracking-[0.2em] text-sm font-bold mb-4">
              Van wie krijg je deze mails
            </p>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface mb-4">
              Rick Vianen
            </h2>
            <p className="text-on-surface-variant leading-relaxed mb-6">
              Van feestbeest naar IRONMAN finisher. Die transformatie plantte het zaadje voor MOVE, een coachingfilosofie die sport, mindset en business als &eacute;&eacute;n geheel beschouwt. Rick coachte inmiddels 200 professionals en deelt wekelijks wat écht werkt.
            </p>
            <Link
              href="/over-rick-vianen"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm group link-hover"
            >
              Lees het volledige verhaal
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WAT LEZERS ZEGGEN ===== */}
      <section className="bg-surface-container-low py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
              Wat klanten over Rick zeggen
            </h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Geen marketingpraat. Echte woorden van echte deelnemers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl editorial-shadow card-hover">
              <p className="italic leading-relaxed text-on-surface mb-6">
                &ldquo;Het vinden van balans, en daarmee rust, overzicht en controle op mijn leven. Verandering kwam vooral door te doen.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image src="/images/barbara.jpg" alt="Barbara" width={44} height={44} className="avatar" />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-sm">Barbara</p>
                  <p className="text-xs text-on-surface-variant">Ambachtelijk Kleermaker</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl editorial-shadow card-hover">
              <p className="italic leading-relaxed text-on-surface mb-6">
                &ldquo;Weet je wat je doel is? Dan is Rick de beste coach om daar te komen. Hij vergoelijkt niet, maar zet je op scherp.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image src="/images/koen.png" alt="Koen" width={44} height={44} className="avatar" />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-sm">Koen</p>
                  <p className="text-xs text-on-surface-variant">Strategisch Communicatieadviseur</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl editorial-shadow card-hover">
              <p className="italic leading-relaxed text-on-surface mb-6">
                &ldquo;Was iemand die dacht dat coaching niets voor mij was. Niets bleek minder waar.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image src="/images/simon.png" alt="Simon" width={44} height={44} className="avatar" />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-sm">Simon</p>
                  <p className="text-xs text-on-surface-variant">Horecaondernemer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-on-surface-variant text-lg">
              Alles wat je wil weten voordat je je inschrijft.
            </p>
          </div>
          <Faq items={nieuwsbriefFaqs} />
        </div>
        <FaqJsonLd items={nieuwsbriefFaqs} />
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-16 md:py-24 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="gradient-cta rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/[0.06] blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />

            <div className="relative">
              <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-extrabold tracking-tighter text-on-surface">
                Klaar voor wekelijkse inzichten die je echt verder helpen?
              </h2>
              <p className="text-on-surface-variant mt-4 text-lg leading-relaxed max-w-lg mx-auto">
                Gratis, praktisch en met &eacute;&eacute;n klik weer uit als het niet past.
              </p>
              <a
                href="#inschrijven"
                className="btn-primary inline-block mt-8 px-10 py-4 text-base font-bold rounded-xl"
              >
                Schrijf je nu in
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
