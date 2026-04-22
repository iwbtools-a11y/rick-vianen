import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";

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

            {/* Subtitle — concrete outcome promise */}
            <p className="text-on-surface-variant text-lg md:text-xl max-w-xl leading-relaxed">
              In 13 weken van &lsquo;ik weet het&rsquo; naar &lsquo;ik doe het&rsquo;. Sport, mindset en business als &eacute;&eacute;n systeem &mdash; met een groep die je niet laat zitten.
            </p>

            {/* CTAs — primary + secondary */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/intake"
                className="bg-primary text-white px-8 py-4 text-base font-bold rounded-xl hover:bg-primary-dark transition-colors"
              >
                Plan een Gratis Kennismakingsgesprek
              </Link>
              <Link
                href="/programma"
                className="border-2 border-primary text-primary px-8 py-4 text-base font-bold rounded-xl hover:bg-primary hover:text-white transition-colors"
              >
                Bekijk het Programma
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
                veranderd. Ik ben 12 kilo afgevallen en run mijn bedrijf met meer focus dan ooit.&rdquo;
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
                  <p className="font-[family-name:var(--font-headline)] font-bold">
                    Simon
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Restaurant Eigenaar &middot; MOVE Plus deelnemer
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
                  &mdash; Jaap Willem, CEO
                </p>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-surface p-8 rounded-2xl">
              <p className="text-on-surface italic leading-relaxed mb-6">
                &ldquo;Rust, overzicht en controle op mijn leven &mdash; dat was
                mijn grote winst. Na 8 weken sliep ik beter, trainde ik 4x per week en nam ik betere beslissingen op werk.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/barbara.jpg"
                  alt="Barbara"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-sm">
                    Barbara
                  </p>
                  <p className="text-xs text-on-surface-variant">Ambachtelijk Kleermaker</p>
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-surface p-8 rounded-2xl">
              <p className="text-on-surface italic leading-relaxed mb-6">
                &ldquo;Mijn werk wint het de hele tijd van het sporten. Ik kies
                gewoon voor gemak.&rdquo; &mdash; zo dacht ik. Tot MOVE.
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/koen.png"
                  alt="Koen"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-sm">
                    Koen
                  </p>
                  <p className="text-xs text-on-surface-variant">Strategisch Communicatieadviseur</p>
                </div>
              </div>
            </div>

            {/* Quote 4 */}
            <div className="bg-surface p-8 rounded-2xl">
              <p className="text-on-surface italic leading-relaxed mb-6">
                &ldquo;Rick leeft naar wat hij zegt. Dat is de reden waarom ik
                instapte. Na 13 weken voelde ik me sterker dan in jaren.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/images/chantal.jpg"
                  alt="Chantal"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-sm">
                    Chantal
                  </p>
                  <p className="text-xs text-on-surface-variant">Raadsheer</p>
                </div>
              </div>
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

      {/* ───────────────── WIE IS RICK? ───────────────── */}
      <section className="bg-surface py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
              <Image
                src="/images/rick-portrait.png"
                alt="Rick Vianen - Founder MOVE Coaching"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-secondary uppercase tracking-[0.2em] text-sm font-bold mb-4">
              Je Coach
            </p>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-6">
              Wie is Rick Vianen?
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Van feestbeest naar IRONMAN 70.3 finisher. Die transformatie plantte het zaad voor MOVE: een coachingfilosofie die sport, mindset en business als &eacute;&eacute;n geheel beschouwt.
              </p>
              <p>
                Rick coacht ambitieuze professionals die goed presteren aan de buitenkant, maar merken dat gezondheid, energie en structuur achterblijven. Confronterend, meetbaar, blijvend.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span className="text-sm font-bold">500+ professionals gecoacht</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span className="text-sm font-bold">IRONMAN 70.3 finisher</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span className="text-sm font-bold">70% succesratio peer-groups</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">verified</span>
                <span className="text-sm font-bold">KvK geregistreerd</span>
              </div>
            </div>

            <Link
              href="/over-rick-vianen"
              className="inline-flex items-center gap-2 mt-8 text-primary font-bold text-sm hover:text-primary-dark transition-colors group"
            >
              Lees het volledige verhaal
              <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── PRIJS INDICATIE ───────────────── */}
      <section className="bg-surface-container-low py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
            Investeer in Jezelf
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
            Drie trajecten. E&eacute;n doel: jou in beweging krijgen en houden. 13 weken, inclusief kick-off en afsluitevent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-surface p-8 rounded-xl">
              <p className="font-[family-name:var(--font-headline)] font-bold text-lg mb-1">MOVE Core</p>
              <p className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tighter">&euro;1.497</p>
              <p className="text-on-surface-variant text-sm">/kwartaal</p>
            </div>
            <div className="bg-primary text-white p-8 rounded-xl relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full">Populair</span>
              <p className="font-[family-name:var(--font-headline)] font-bold text-lg mb-1">MOVE Plus</p>
              <p className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tighter">&euro;2.497</p>
              <p className="text-white/80 text-sm">/kwartaal</p>
            </div>
            <div className="bg-surface p-8 rounded-xl">
              <p className="font-[family-name:var(--font-headline)] font-bold text-lg mb-1">MOVE Ultimate</p>
              <p className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tighter">&euro;4.997</p>
              <p className="text-on-surface-variant text-sm">/kwartaal</p>
            </div>
          </div>

          <Link
            href="/prijs"
            className="inline-flex items-center gap-2 text-primary font-bold hover:text-primary-dark transition-colors group"
          >
            Vergelijk alle trajecten
            <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* ───────────────── FAQ — Top Bezwaren ───────────────── */}
      <section className="bg-surface py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
              Veelgestelde Vragen
            </h2>
            <p className="text-on-surface-variant text-lg">
              De vragen die iedereen stelt maar niemand durft te vragen.
            </p>
          </div>
          <Faq
            items={[
              {
                question: "Waarom heb ik een ander nodig? Ik moet het zelf kunnen.",
                answer: "Hulp zoeken is niet zwak — het is slim. Als je het zelf kon, had je het al gedaan. De groep is het mechanisme: 11 van de 11 klanten noemen de groep als het #1 werkende element.",
              },
              {
                question: "Ik heb geen tijd voor nog iets erbij.",
                answer: "Tijd is niet het echte bezwaar — prioriteit is het bezwaar. MOVE is gebouwd voor drukke professionals: 1 les per week van 3-10 minuten, 1 groepssessie, 1 opdracht. Minder dan 2 uur per week.",
              },
              {
                question: "Werkt dit echt, of val ik weer terug na 13 weken?",
                answer: "13 weken herhaling + wekelijkse structuur + groepsaccountability zijn specifiek gebouwd zodat je niet terugvalt. De methode werkt op gedrag, niet op motivatie. 70% van onze deelnemers houdt de routine vast na het traject.",
              },
              {
                question: "Is dit niet gewoon een dure sportschool?",
                answer: "Nee. Sport is het startpunt — niet het doel. MOVE integreert sport, mindset en business als één systeem. De fysieke resultaten zijn het bewijs dat de methode werkt, de echte winst zit in je hele leven.",
              },
              {
                question: "Wat als het niet bij mij past?",
                answer: "Daarom begint elk traject met een gratis kennismakingsgesprek van 30 minuten. Geen pitch — Rick benoemt eerlijk wat hij ziet. Daarna weet je of MOVE bij je past.",
              },
            ]}
          />
        </div>
      </section>

      {/* ───────────────── URGENCY + CTA SECTION ───────────────── */}
      <section id="intake" className="bg-surface-container-low py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Urgency message */}
          <div className="text-center mb-12">
            <p className="text-on-surface-variant text-lg italic leading-relaxed max-w-xl mx-auto">
              Elke maand zonder systeem is een maand waarin je weet wat je moet doen &mdash; maar het niet doet. Hoeveel maanden heb je nog?
            </p>
          </div>

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
