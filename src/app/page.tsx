import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="bg-surface pt-32 pb-20 md:pt-48 md:pb-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left column */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            {/* Badge */}
            <div className="inline-flex self-start items-center bg-surface-container-high text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest">
              13 weken. 8 plekken. Geen jojo meer.
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-on-surface">
              Je weet wat je moet doen.
              <br />
              <span className="text-primary">Maar doe je het ook?</span>
            </h1>

            {/* Subtitle */}
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
              MOVE cre&euml;ert beweging &mdash; in je lijf, je hoofd en je
              leven. Voor professionals die klaar zijn met alleen beginnen.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <Link
                href="/intake"
                className="bg-primary text-white px-8 py-4 text-base font-bold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Plan een Kennismakingsgesprek
              </Link>
            </div>

            {/* Urgency indicator */}
            <div className="flex items-center gap-3 text-on-surface-variant text-sm">
              <span className="material-symbols-outlined text-lg text-secondary">
                group
              </span>
              <span>
                Mei-cohort: nog{" "}
                <strong className="text-on-surface">4 plekken</strong>{" "}
                beschikbaar
              </span>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5 relative">
            <div className="aspect-[4/5] rounded-xl w-full overflow-hidden relative">
              <Image
                src="/images/rick-hero.png"
                alt="Rick Vianen - Performance Coach"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Floating stat box */}
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest rounded-xl p-5 editorial-shadow">
              <div className="flex items-baseline gap-2">
                <span className="font-[family-name:var(--font-headline)] text-4xl font-extrabold text-secondary">
                  70%
                </span>
              </div>
              <p className="text-on-surface-variant text-sm mt-1 max-w-[180px] leading-snug">
                Succes ratio in onze peer-groups
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── DE MOVE METHODE ───────────────── */}
      <section className="bg-surface-container-low py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left */}
          <div className="md:w-1/3 shrink-0">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface leading-tight">
              De <span className="text-primary">MOVE</span>
              <br />
              Methode
            </h2>
            <div className="h-1 w-20 bg-primary mt-6 mb-6 rounded-full" />
            <p className="text-on-surface-variant leading-relaxed">
              Geen theorie, werkende structuur. Elke week dezelfde cyclus
              &mdash; totdat het een tweede natuur wordt.
            </p>
          </div>

          {/* Right — 2x2 grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-8 bg-surface rounded-lg">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">
                school
              </span>
              <h3 className="font-[family-name:var(--font-headline)] font-bold text-xl mb-2 text-on-surface">
                <span className="text-primary">M</span>aster
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Kort, scherp kennismoment van 3-10 minuten. Exact wat je nodig
                hebt, geen fluff.
              </p>
            </div>

            <div className="p-8 bg-surface rounded-lg">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">
                play_arrow
              </span>
              <h3 className="font-[family-name:var(--font-headline)] font-bold text-xl mb-2 text-on-surface">
                <span className="text-primary">O</span>perate
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Directe toepassing in je leven, business of gezondheid.
                Praktisch en onmiddellijk uitvoerbaar.
              </p>
            </div>

            <div className="p-8 bg-surface rounded-lg">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">
                fact_check
              </span>
              <h3 className="font-[family-name:var(--font-headline)] font-bold text-xl mb-2 text-on-surface">
                <span className="text-primary">V</span>alidate
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Eerlijk terugkijken. Wat werkte? Wat brak af? Observeer je
                gedrag en resultaten.
              </p>
            </div>

            <div className="p-8 bg-surface rounded-lg">
              <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">
                trending_up
              </span>
              <h3 className="font-[family-name:var(--font-headline)] font-bold text-xl mb-2 text-on-surface">
                <span className="text-primary">E</span>levate
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Verfijn en verbeter. Beter dan vorige week. Vooruitgang zit in
                de aanpassingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── DRIE PIJLERS ───────────────── */}
      <section className="bg-surface py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Drie Pijlers. <span className="text-secondary">E&eacute;n Systeem.</span>
            </h2>
            <p className="text-on-surface-variant mt-4 text-lg leading-relaxed">
              <span className="text-primary font-bold">Sport</span>, <span className="text-secondary font-bold">mindset</span> en <span className="text-on-surface font-bold">business</span> als &eacute;&eacute;n geheel &mdash;
              niet als losse trajecten.
            </p>
          </div>

          {/* Pillar cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Sport */}
            <div className="group relative p-10 bg-surface-container rounded-2xl">
              <span className="material-symbols-outlined text-6xl text-secondary/20 absolute top-10 right-10">
                fitness_center
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold tracking-tight text-on-surface mb-4">
                Sport
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                Een fit lijf is geen luxe maar een vereiste voor een succesvol
                leven. Fysiek resultaat binnen 13 weken als bewijs dat de
                methode werkt.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-on-surface-variant leading-relaxed">
                    Gepersonaliseerde trainingsschema&apos;s
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-on-surface-variant leading-relaxed">
                    Voeding &amp; herstelprotocollen
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-on-surface-variant leading-relaxed">
                    Wekelijkse groepstraining
                  </span>
                </li>
              </ul>
            </div>

            {/* Mindset — elevated purple */}
            <div className="group relative p-10 bg-secondary rounded-2xl translate-y-0 lg:translate-y-[-24px] editorial-shadow">
              <span className="material-symbols-outlined text-6xl text-white/20 absolute top-10 right-10">
                psychology
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold tracking-tight text-white mb-4">
                Mindset
              </h3>
              <p className="text-white/90 leading-relaxed text-sm mb-6">
                Van &lsquo;iemand die het probeert&rsquo; naar &lsquo;iemand die
                dit doet&rsquo;. De interne saboteur herkennen en hanteren.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-white/80 text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-white/90 leading-relaxed">
                    Cognitieve performance coaching
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-white/80 text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-white/90 leading-relaxed">
                    Focus &amp; besluitvaardigheid
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-white/80 text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-white/90 leading-relaxed">
                    Emotionele regulatie
                  </span>
                </li>
              </ul>
            </div>

            {/* Business */}
            <div className="group relative p-10 bg-surface-container rounded-2xl">
              <span className="material-symbols-outlined text-6xl text-secondary/20 absolute top-10 right-10">
                insights
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold tracking-tight text-on-surface mb-4">
                Business
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                Resultaten in de gym vertalen naar de boardroom. Strategie
                zonder executie is een hobby.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-on-surface-variant leading-relaxed">
                    Strategische business reviews
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-on-surface-variant leading-relaxed">
                    Peer-accountability partnerships
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-primary text-lg mt-0.5">
                    arrow_forward
                  </span>
                  <span className="text-on-surface-variant leading-relaxed">
                    Netwerk van high-performers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── WAT KLANTEN ZEGGEN ───────────────── */}
      <section className="bg-surface-container-low py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Wat Klanten Zeggen
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Geen marketing-praat. Echte woorden van echte deelnemers.
            </p>
          </div>

          {/* Testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Quote 1 — large featured */}
            <div className="md:col-span-2 bg-surface p-10 rounded-2xl editorial-shadow">
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined text-primary text-lg"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              <p className="text-xl md:text-2xl italic leading-relaxed text-on-surface mb-8">
                &ldquo;Er was een leven v&oacute;&oacute;r MOVE, en een leven na
                MOVE. De combinatie van sport, mindset en business heeft alles
                veranderd.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/rick-square.png"
                  alt="Rick Vianen"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold">
                    Oud-deelnemer MOVE
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Ondernemer
                  </p>
                </div>
              </div>
            </div>

            {/* Rick card — compact */}
            <div className="bg-surface rounded-2xl overflow-hidden editorial-shadow">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/rick-action.jpg"
                  alt="Rick Vianen coaching"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="material-symbols-outlined text-secondary text-lg">
                    verified_user
                  </span>
                  <span className="font-[family-name:var(--font-headline)] font-bold text-sm">
                    Rick Vianen
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm italic">
                  &ldquo;Een liefdevolle pitbull was wat ik nodig had.&rdquo;
                  &mdash; Maarten
                </p>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-surface p-8 rounded-2xl">
              <p className="text-on-surface italic leading-relaxed mb-6">
                &ldquo;Rust, overzicht en controle op mijn leven &mdash; dat was
                mijn grote winst.&rdquo;
              </p>
              <p className="font-[family-name:var(--font-headline)] font-bold text-sm">
                Barbara
              </p>
            </div>

            {/* Quote 3 */}
            <div className="bg-surface p-8 rounded-2xl">
              <p className="text-on-surface italic leading-relaxed mb-6">
                &ldquo;Mijn werk wint het de hele tijd van het sporten. Ik kies
                gewoon voor gemak.&rdquo; &mdash; zo dacht ik. Tot MOVE.
              </p>
              <p className="font-[family-name:var(--font-headline)] font-bold text-sm">
                Remco
              </p>
            </div>

            {/* Quote 4 */}
            <div className="bg-surface p-8 rounded-2xl">
              <p className="text-on-surface italic leading-relaxed mb-6">
                &ldquo;Rick leeft naar wat hij zegt. Dat is de reden waarom ik
                instapte.&rdquo;
              </p>
              <p className="font-[family-name:var(--font-headline)] font-bold text-sm">
                Chantal
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-surface p-6 rounded-xl text-center">
              <span className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black text-primary">
                500+
              </span>
              <p className="text-on-surface-variant text-sm mt-1">
                Levens in Beweging
              </p>
            </div>
            <div className="bg-surface p-6 rounded-xl text-center">
              <span className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black text-secondary">
                13
              </span>
              <p className="text-on-surface-variant text-sm mt-1">
                Weken per Traject
              </p>
            </div>
            <div className="bg-surface p-6 rounded-xl text-center">
              <span className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black text-on-surface">
                4-8
              </span>
              <p className="text-on-surface-variant text-sm mt-1">
                Professionals per Groep
              </p>
            </div>
            <div className="bg-surface p-6 rounded-xl text-center">
              <span className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black text-on-surface">
                11/11
              </span>
              <p className="text-on-surface-variant text-sm mt-1">
                Noemen de Groep als #1
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── CTA SECTION ───────────────── */}
      <section id="intake" className="bg-surface py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface-container-high rounded-3xl p-10 md:p-16 text-center">
            <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Het probleem is niet wat je weet. Het probleem is dat je het niet
              doet.
            </h2>
            <p className="text-on-surface-variant mt-4 text-lg leading-relaxed max-w-lg mx-auto">
              30 minuten. Geen pitch. Daarna weet je het.
            </p>
            <Link
              href="/intake"
              className="inline-block mt-8 bg-primary text-white px-10 py-4 text-base font-bold rounded-xl hover:bg-primary-dark transition-colors"
            >
              Plan een Gratis Kennismakingsgesprek
            </Link>
            <p className="mt-5 text-on-surface-variant text-sm flex items-center justify-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg">
                schedule
              </span>
              Mei-cohort: nog{" "}
              <strong className="text-on-surface">4 plekken</strong>{" "}
              beschikbaar
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
