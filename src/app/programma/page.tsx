import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title: "Programma | MOVE Coaching",
  description:
    "Het MOVE programma: peer-group methode, radicale accountability en elite coaching. Ontdek de groepsdynamiek van Rick Vianen.",
};

export default function ProgrammaPage() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ===== HERO SECTION ===== */}
      <section className="px-8 md:px-16 pt-36 pb-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-end">
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded mb-6">
              Peer-Group Coaching
            </span>
            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-8">
              Niet nog een coach <br />
              <span className="text-primary">die je vertelt</span> wat je al weet.
            </h1>
            <p className="text-xl md:text-2xl font-medium text-on-surface-variant max-w-xl">
              Een groep gelijkgestemden die je niet laat zitten. 4-8
              professionals per cohort. 13 weken. Confronterend, meetbaar,
              blijvend.
            </p>
          </div>
          <div className="relative w-full md:w-1/3">
            <div className="bg-primary text-white p-6 rounded-xl relative z-10">
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
                8 plekken per cohort
              </p>
              <p className="text-sm opacity-90">Mei 2026 — bijna vol</p>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-surface-container -z-10 rounded-xl" />
          </div>
        </div>
      </section>

      {/* ===== PEER-GROUP METHODE — Bento Grid ===== */}
      <section className="bg-surface-container-low py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold mb-4">
              De Groep is het Mechanisme
            </h2>
            <div className="w-24 h-1 bg-secondary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Radicale Accountability */}
            <div className="md:col-span-8 bg-surface-container p-12 rounded-xl flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1">
                <h3 className="font-[family-name:var(--font-headline)] text-3xl font-bold mb-4">
                  Radicale Accountability
                </h3>
                <p className="text-lg leading-relaxed text-on-surface-variant">
                  Niet Rick die je bij de hand neemt — een groep gelijkgestemden
                  die je niet laat zitten. 11 van de 11 ge&iuml;nterviewde
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
            <div className="md:col-span-4 bg-secondary text-white p-12 rounded-xl flex flex-col justify-center text-center">
              <span className="text-6xl font-black mb-2">-80%</span>
              <span className="font-bold text-xl leading-tight">
                Minder terugval door groepsaccountability vs. solo coaching
              </span>
            </div>

            {/* Strategisch Sparren */}
            <div className="md:col-span-5 bg-surface-container-high p-12 rounded-xl">
              <span className="material-symbols-outlined text-secondary text-4xl mb-4">
                hub
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold mb-4">
                Strategisch Sparren
              </h3>
              <p className="text-on-surface-variant">
                Directe feedback op je business- en mindsetuitdagingen van
                ondernemers die in dezelfde loopgraven staan.
              </p>
            </div>

            {/* Quote */}
            <div className="md:col-span-7 bg-white p-12 rounded-xl shadow-sm flex flex-col justify-center">
              <p className="italic text-2xl leading-relaxed text-on-surface mb-6">
                &ldquo;Het begint bij de switch in sport, omdat je daar fysiek
                jezelf onder controle krijgt, krijg je veel andere dingen in je
                leven ook onder controle.&rdquo;
              </p>
              <span className="text-sm font-bold not-italic text-secondary">
                Maarten
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===== KIES JE TRAJECT — Pricing ===== */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
        <div className="mb-24">
          <h2 className="font-[family-name:var(--font-headline)] text-5xl font-extrabold mb-4">
            Kies je Traject.
          </h2>
          <p className="text-xl text-on-surface-variant">
            Alle trajecten duren 13 weken (1 kwartaal). Inclusief kick-off en
            afsluitevent.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-0 items-center">
          {/* Core */}
          <div className="bg-surface-container-low p-10 rounded-lg flex flex-col h-full">
            <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight">
              MOVE Core
            </p>
            <p className="text-on-surface-variant text-sm mt-1">De Basis</p>

            <div className="mt-8 mb-10">
              <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                &euro;1.497
              </span>
              <span className="text-on-surface-variant text-sm ml-1">/kwartaal</span>
            </div>

            <ul className="space-y-5 flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">1-op-1 onboardingsgesprek</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">Wekelijkse les + opdracht</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">Live Q&amp;A donderdag (groep)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">Kick-off &amp; afsluitevent</span>
              </li>
            </ul>

            <Link
              href="/intake"
              className="mt-10 block text-center border-2 border-primary text-primary font-bold text-sm py-3.5 rounded-lg hover:bg-primary hover:text-white transition-colors"
            >
              Kies Core
            </Link>
          </div>

          {/* Plus (Featured) */}
          <div className="relative bg-white p-12 rounded-lg shadow-xl lg:scale-105 z-20 flex flex-col">
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold tracking-wider uppercase px-5 py-2 rounded-full whitespace-nowrap">
              MEEST GEKOZEN
            </span>

            <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight text-primary">
              MOVE Plus
            </p>
            <p className="text-on-surface-variant text-sm mt-1">Meest Gekozen</p>

            <div className="mt-8 mb-10">
              <span className="font-[family-name:var(--font-headline)] text-6xl font-black tracking-tighter">
                &euro;2.497
              </span>
              <span className="text-on-surface-variant text-sm ml-1">/kwartaal</span>
            </div>

            <ul className="space-y-5 flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">bolt</span>
                <span className="text-on-surface-variant leading-relaxed">Alles uit MOVE Core</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">Op maat trainingsschema</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">Dagelijkse trainingen via app</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">bolt</span>
                <span className="text-on-surface-variant leading-relaxed">Accountability-tool toegang</span>
              </li>
            </ul>

            <Link
              href="/intake"
              className="mt-10 block text-center bg-primary text-white font-bold text-sm py-3.5 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Kies Plus
            </Link>
          </div>

          {/* Ultimate */}
          <div className="bg-surface-container-low p-10 rounded-lg flex flex-col h-full">
            <p className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight">
              MOVE Ultimate
            </p>
            <p className="text-on-surface-variant text-sm mt-1">Maximaal Resultaat</p>

            <div className="mt-8 mb-10">
              <span className="font-[family-name:var(--font-headline)] text-5xl font-black tracking-tighter">
                &euro;4.997
              </span>
              <span className="text-on-surface-variant text-sm ml-1">/kwartaal</span>
            </div>

            <ul className="space-y-5 flex-1">
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">Alles uit MOVE Plus</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">Wekelijks 1-op-1 met Rick</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0">check_circle</span>
                <span className="text-on-surface-variant leading-relaxed">Directe toegang tot Rick</span>
              </li>
            </ul>

            <Link
              href="/intake"
              className="mt-10 block text-center border-2 border-on-surface text-on-surface font-bold text-sm py-3.5 rounded-lg hover:bg-on-surface hover:text-white transition-colors"
            >
              Kies Ultimate
            </Link>
          </div>
        </div>
        </div>
      </section>

      {/* ===== SOCIAL PROOF — Testimonials ===== */}
      <section className="bg-surface-container-low py-32 overflow-hidden px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl font-bold max-w-md">
              Echte resultaten. Eigen woorden.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Testimonial 1 */}
            <div className="bg-white p-12 rounded-2xl">
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
                &ldquo;Ik was iemand die dacht dat coaching niets voor mij was,
                maar niets bleek minder waar.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/simon.png"
                  alt="Simon"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Simon</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-12 rounded-2xl">
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
                &ldquo;Niet voor mezelf kiezen was mijn grootste
                bottleneck.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/marc.jpg"
                  alt="Marc"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Marc</p>
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
          Veelgestelde Vragen
        </h2>
        <Faq
          items={[
            {
              question: "Waarom heb ik er een ander voor nodig? Ik moet het zelf kunnen.",
              answer: "Hulp zoeken is niet zwak — het is slim. Als je het zelf kon, had je het al gedaan. De groep is het mechanisme, niet Rick alleen.",
            },
            {
              question: "Werkt dit echt, of val ik opnieuw terug?",
              answer: "13 weken herhaling + wekelijkse structuur + groepsaccountability zijn specifiek gebouwd zodat je niet terugvalt. De methode werkt op gedrag, niet op motivatie.",
            },
            {
              question: "Ik heb geen tijd.",
              answer: "Tijd is niet het echte bezwaar — prioriteit is het bezwaar. MOVE is gebouwd voor drukke mensen: 1 prioriteit per week.",
            },
          ]}
        />
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-inverse-surface rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10" />
            <div className="relative z-10">
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black text-white mb-6">
                Klaar om te bewegen?
              </h2>
              <p className="text-surface-container-highest/60 text-lg md:text-xl mb-12 max-w-2xl mx-auto">
                De volgende cohort start in mei. 8 plekken. Daarna is het
                najaar.
              </p>
              <div className="inline-flex flex-col items-center gap-4">
                <Link
                  href="/intake"
                  className="bg-primary hover:bg-primary-dark text-white px-12 py-5 rounded-full text-xl font-bold transition-all shadow-2xl"
                >
                  Plan een Kennismakingsgesprek
                </Link>
                <p className="text-surface-container-highest/40 text-sm font-medium tracking-wide uppercase">
                  30 minuten. Geen pitch. Daarna weet je het.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
