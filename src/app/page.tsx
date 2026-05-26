import Image from "next/image";
import Link from "next/link";
import { Faq } from "@/components/faq";
import { FaqJsonLd } from "@/components/faq-jsonld";

const homeFaqs = [
  {
    question: "Wat is MOVE precies?",
    answer: "MOVE is een 100-dagen peer-group coachingtraject voor ambitieuze professionals. In kleine groepen van maximaal 8 deelnemers werk je gelijktijdig aan sport, mindset en business — onder begeleiding van Rick Vianen.",
  },
  {
    question: "Voor wie is MOVE bedoeld?",
    answer: "Voor professionals (30-50 jaar) die goed presteren aan de buitenkant, maar merken dat gezondheid, energie en structuur achterblijven. Je weet wat je moet doen, maar je doet het niet consistent. MOVE biedt de structuur en de groep om dat te veranderen.",
  },
  {
    question: "Hoe verschilt MOVE van andere coaching?",
    answer: "De meeste coaching focust op één domein: sport óf mindset óf business. MOVE integreert alle drie als één systeem. Bovendien is de groep het mechanisme — niet de coach alleen. 11 van de 11 geïnterviewde klanten noemen de groep als het #1 werkende element.",
  },
  {
    question: "Hoe begin ik?",
    answer: "Met een kennismakingsgesprek van 30 minuten. Geen verkooppitch — Rick kijkt eerlijk of MOVE bij jou past en wat je wilt bereiken. Daarna besluit je zelf.",
  },
];

export default function Home() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ───────────────────────── HERO ───────────────────────── */}
      <section className="gradient-hero pt-32 pb-20 md:pt-44 md:pb-32 px-8 md:px-16 relative overflow-hidden">
        {/* Soft ambient glow */}
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.03] blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-secondary/[0.04] blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center relative">
          {/* Left — Text + CTAs */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center bg-surface-container-high/80 text-primary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm mb-6">
              100 dagen. 8 plekken. Geen excuses meer.
            </div>

            {/* Headline */}
            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] text-on-surface">
              Je weet wat je moet doen.
              <br />
              <span className="text-primary">Maar doe je het ook?</span>
            </h1>

            {/* Subtitle */}
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed mt-6 max-w-lg">
              Performance coaching voor ambitieuze professionals die sport, mindset en business als &eacute;&eacute;n geheel willen aanpakken.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-start gap-4 mt-8">
              <Link
                href="/intake"
                className="btn-primary px-8 py-4 text-base font-bold rounded-xl"
              >
                Plan een kennismakingsgesprek
              </Link>
              <Link
                href="/programma"
                className="btn-secondary px-8 py-4 text-base font-bold rounded-xl"
              >
                Bekijk het programma
              </Link>
            </div>

            {/* Urgency */}
            <div className="flex items-center gap-2 mt-6 text-sm text-on-surface-variant">
              <span className="material-symbols-outlined text-lg text-secondary">group</span>
              <span>
                Exclusieve mogelijkheid: We zijn opzoek naar nog{" "}
                <strong className="text-on-surface">3 mensen</strong>{" "}
                voor de beta versie van het vernieuwde traject
              </span>
            </div>
          </div>

          {/* Right — Rick photo */}
          <div className="relative w-full lg:w-[340px] xl:w-[400px]">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl">
              <Image
                src="/images/rick-hero.png"
                alt="Rick Vianen - Performance Coach"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── DE MOVE METHODE ───────────────── */}
      <section className="gradient-warm py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          {/* Left */}
          <div className="md:w-1/3 shrink-0">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface leading-tight">
              De <span className="text-primary">MOVE</span>
              <br />
              methode
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary mt-6 mb-6 rounded-full" />
            <p className="text-on-surface-variant leading-relaxed">
              Geen theorie, werkende structuur. Elke week dezelfde cyclus
              &mdash; totdat het een tweede natuur wordt.
            </p>
          </div>

          {/* Right — 2x2 grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { icon: "school", letter: "M", title: "aster", text: "Kort, scherp kennismoment van 3-10 minuten. Exact wat je nodig hebt." },
              { icon: "play_arrow", letter: "O", title: "perate", text: "Directe toepassing in je leven, business of gezondheid. Praktisch en onmiddellijk uitvoerbaar." },
              { icon: "fact_check", letter: "V", title: "alidate", text: "Eerlijk terugkijken. Wat werkte? Wat brak af? Observeer je gedrag en resultaten." },
              { icon: "trending_up", letter: "E", title: "levate", text: "Verfijn en verbeter. Beter dan vorige week. Vooruitgang zit in de aanpassingen." },
            ].map((step) => (
              <div key={step.letter} className="p-8 bg-white rounded-2xl card-hover border border-outline-variant/10">
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">
                  {step.icon}
                </span>
                <h3 className="font-[family-name:var(--font-headline)] font-bold text-xl mb-2 text-on-surface">
                  <span className="text-primary">{step.letter}</span>{step.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── DRIE PIJLERS ───────────────── */}
      <section className="bg-surface py-24 md:py-32 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-gradient-to-b from-surface-container-low/50 to-transparent pointer-events-none" />

        <div className="max-w-7xl mx-auto relative">
          {/* Header */}
          <div className="mb-16 max-w-2xl">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Drie pijlers. <span className="text-secondary">E&eacute;n systeem.</span>
            </h2>
            <p className="text-on-surface-variant mt-4 text-lg leading-relaxed">
              <span className="text-primary font-bold">Sport</span>, <span className="text-secondary font-bold">mindset</span> en <span className="text-on-surface font-bold">business</span>{" "}als &eacute;&eacute;n geheel &mdash; niet als losse trajecten.
            </p>
          </div>

          {/* Pillar cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Sport */}
            <div className="group relative p-10 bg-white rounded-2xl card-hover border border-outline-variant/10">
              <span className="material-symbols-outlined text-6xl text-secondary/15 absolute top-10 right-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-secondary/25">
                fitness_center
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold tracking-tight text-on-surface mb-4">
                Sport
              </h3>
              <p className="text-on-surface-variant leading-relaxed text-sm mb-6">
                Een vitale levensstijl is geen luxe maar een vereiste voor een succesvol leven. Als je fit bent ben je:
              </p>
              <ul className="space-y-4">
                {["Productiever", "Ervaar je meer energie", "Kun je beter met stress omgaan"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">arrow_forward</span>
                    <span className="text-on-surface-variant leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mindset — elevated purple */}
            <div className="group relative p-10 rounded-2xl translate-y-0 lg:translate-y-[-24px] editorial-shadow overflow-hidden" style={{ background: "linear-gradient(165deg, #b868c7 0%, #A559B4 50%, #8a3d9a 100%)" }}>
              <span className="material-symbols-outlined text-6xl text-white/15 absolute top-10 right-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-white/25">
                psychology
              </span>
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-extrabold tracking-tight text-white mb-4">
                Mindset
              </h3>
              <p className="text-white/85 leading-relaxed text-sm mb-6">
                Van &lsquo;iemand die het probeert&rsquo; naar &lsquo;iemand die
                dit doet&rsquo;. De interne saboteur herkennen en hanteren.
              </p>
              <ul className="space-y-4">
                {["Versla de stem in je hoofd die je klein houdt", "Laat emoties niet meer je acties beïnvloeden"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-white/70 text-lg mt-0.5">arrow_forward</span>
                    <span className="text-white/85 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business */}
            <div className="group relative p-10 bg-white rounded-2xl card-hover border border-outline-variant/10">
              <span className="material-symbols-outlined text-6xl text-secondary/15 absolute top-10 right-10 transition-transform duration-500 group-hover:scale-110 group-hover:text-secondary/25">
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
                {["Maakt afspraken die worden nagekomen", "Haalt omzetcijfers", "Licht, opgewekt en effectief door het bedrijfsleven"].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-lg mt-0.5">arrow_forward</span>
                    <span className="text-on-surface-variant leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── VIDEO PRESENTATIE ───────────────── */}
      <section className="gradient-warm py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-secondary uppercase tracking-[0.2em] text-sm font-bold mb-4">
              Bekijk de presentatie
            </p>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
              Rick legt het <span className="text-primary">zelf</span> uit.
            </h2>
            <div className="text-on-surface-variant text-lg max-w-2xl mx-auto space-y-4 text-center">
              <p className="leading-relaxed">
                In mijn werk met ondernemers en professionals zie ik vrijwel altijd hetzelfde patroon:<br />
                We dromen groot, maar laten ons vervolgens verlammen door de angst om de verkeerde keuze te maken. Of we wachten op het perfecte plan of moment. Er is altijd een reden te bedenken waarom het ambitieuze doel niet tot uitvoering komt.
              </p>
              <p className="leading-relaxed">
                Maar het eindeloze wachten en iets slechts een droom laten levert later alleen maar frustratie en energieverlies op. De toekomstige &lsquo;&lsquo;jij&rsquo;&rsquo; gaat zitten met een gevoel... &lsquo;had ik toen maar...&rsquo;
              </p>
              <p className="leading-relaxed">
                In deze video deel ik de belangrijkste shift die ik de afgelopen jaren leerde en waarom ik MOVE beschouw als mijn huidige levenswerk!
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-on-surface">
            <div className="aspect-video">
              <video
                src="/videos/move-presentatie.mp4"
                controls
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────── WAT KLANTEN ZEGGEN ───────────────── */}
      <section className="bg-surface-container-low py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
              Wat klanten zeggen
            </h2>
            <p className="text-on-surface-variant max-w-md">
              Geen marketingpraat. Echte woorden van echte deelnemers.
            </p>
          </div>

          {/* Testimonial grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Quote 1 — large featured */}
            <div className="md:col-span-2 bg-white p-10 rounded-2xl editorial-shadow card-hover">
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
                &ldquo;Het vinden van balans, en daarmee rust, overzicht en controle op mijn leven. De eerste stap was de sportieve uitdaging aangaan &mdash; en toen bleek verandering vooral te komen door te doen.&rdquo;
              </p>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/barbara.jpg"
                  alt="Barbara"
                  width={44}
                  height={44}
                  className="avatar"
                />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold">
                    Barbara
                  </p>
                  <p className="text-xs text-on-surface-variant">
                    Ambachtelijk Kleermaker
                  </p>
                </div>
              </div>
            </div>

            {/* Rick card */}
            <div className="bg-white rounded-2xl overflow-hidden editorial-shadow card-hover">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/rick-action.jpg"
                  alt="Rick Vianen coaching"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
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
                  &ldquo;Rick helpt je niet: hij helpt je verder. Verder dan je voor mogelijk hield.&rdquo;
                  &mdash; Koen
                </p>
              </div>
            </div>

            {/* Quote 2 */}
            <div className="bg-white p-8 rounded-2xl card-hover border border-outline-variant/10">
              <p className="text-on-surface italic leading-relaxed mb-6">
                &ldquo;Was iemand die dacht, coaching niets voor mij, niets bleek minder waar. Belangrijkste wat ik meeneem: je hebt maar 1 lichaam en geest, zorg daarvoor en haal er zo het maximale uit.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <Image src="/images/simon.png" alt="Simon" width={44} height={44} className="avatar" />
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-sm">Simon</p>
                  <p className="text-xs text-on-surface-variant">Horecaondernemer</p>
                </div>
              </div>
            </div>

            {/* Quote 3 */}
            <div className="bg-white p-8 rounded-2xl card-hover border border-outline-variant/10">
              <p className="text-on-surface italic leading-relaxed mb-6">
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

            {/* Quote 4 */}
            <div className="bg-white p-8 rounded-2xl card-hover border border-outline-variant/10">
              <p className="text-on-surface italic leading-relaxed mb-6">
                &ldquo;Door Rick ben ik me bewuster van mijn mogelijkheden. Rick leeft naar wat hij zegt.&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-surface-container-high flex items-center justify-center"><span className="font-bold text-primary text-sm">C</span></div>
                <div>
                  <p className="font-[family-name:var(--font-headline)] font-bold text-sm">Chantal</p>
                  <p className="text-xs text-on-surface-variant">Raadsheer</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "200", color: "text-primary", label: "Levens in beweging" },
              { value: "100", color: "text-secondary", label: "Dagen per traject" },
              { value: "4-8", color: "text-on-surface", label: "Professionals per groep" },
              { value: "11/11", color: "text-on-surface", label: "Noemen de groep als #1" },
            ].map((stat) => (
              <div key={stat.label} className="bg-white p-6 rounded-xl text-center card-hover border border-outline-variant/10">
                <span className={`font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black ${stat.color}`}>
                  {stat.value}
                </span>
                <p className="text-on-surface-variant text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────── WIE IS RICK? ───────────────── */}
      <section className="bg-surface py-24 md:py-32 px-8 md:px-16 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-primary/[0.02] blur-[80px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative">
          {/* Photo */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden relative shadow-2xl">
              <Image
                src="/images/rick-portrait.png"
                alt="Rick Vianen - Founder MOVE Coaching"
                fill
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/10 to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 -z-10" />
          </div>

          {/* Text */}
          <div>
            <p className="text-secondary uppercase tracking-[0.2em] text-sm font-bold mb-4">
              Je coach
            </p>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-6">
              Wie is Rick Vianen?
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Van feestbeest naar IRONMAN finisher. Die transformatie plantte het zaadje voor MOVE: een coachingfilosofie die sport, mindset en business als &eacute;&eacute;n geheel beschouwt.
              </p>
              <p>
                Rick coacht ambitieuze professionals die goed presteren aan de buitenkant, maar merken dat gezondheid, energie en structuur achterblijven. Confronterend, meetbaar, blijvend.
              </p>
              <p>
                Rick investeerde bijna &euro;100.000 om getraind te worden als coach, onder leiding van Dusan Djukich, een van de grootste business coaches van Amerika, schrijver van het boek en founder van Straight Line Leadership. Hiervoor is hij onder andere meerdere weekenden naar Amerika geweest om te trainen en het werk zelf te implementeren.
              </p>
              <p>
                Naast de coaching is Rick zelf IRONMAN finisher en ervaarde zelf de waarde van het behalen van zo&rsquo;n groot doel voor zijn persoonlijke en zakelijke leven.
              </p>
              <p>
                Dit samen is de grondslag van MOVE. De combinatie van sport en business coaching.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "200 professionals gecoacht",
                "IRONMAN finisher",
                "Opgeleid door Dusan Djukich",
                "KvK geregistreerd",
              ].map((cred) => (
                <div key={cred} className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low/50">
                  <span className="material-symbols-outlined text-primary text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                  <span className="text-sm font-bold">{cred}</span>
                </div>
              ))}
            </div>

            <Link
              href="/over-rick-vianen"
              className="inline-flex items-center gap-2 mt-8 text-primary font-bold text-sm group link-hover"
            >
              Lees het volledige verhaal
              <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ───────────────── PRIJS INDICATIE ───────────────── */}
      <section className="gradient-warm py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
            Investeer in jezelf
          </h2>
          <p className="text-on-surface-variant text-lg mb-12 max-w-2xl mx-auto">
            Drie trajecten. E&eacute;n doel: jou in beweging krijgen en houden. 100 dagen, inclusief kick-off en afsluitevent.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-8 rounded-2xl card-hover border border-outline-variant/10">
              <p className="font-[family-name:var(--font-headline)] font-bold text-lg mb-1">MOVE Core</p>
              <p className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tighter">&euro;1.497</p>
              <p className="text-on-surface-variant text-sm">eenmalig</p>
            </div>
            <div className="p-8 rounded-2xl relative card-hover text-white" style={{ background: "linear-gradient(135deg, #E85211 0%, #d04400 100%)" }}>
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-secondary text-white text-[10px] font-bold tracking-wider uppercase px-3 py-1 rounded-full shadow-md">Populair</span>
              <p className="font-[family-name:var(--font-headline)] font-bold text-lg mb-1">MOVE Performance</p>
              <p className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tighter">&euro;2.497</p>
              <p className="text-white/80 text-sm">eenmalig</p>
            </div>
            <div className="bg-white p-8 rounded-2xl card-hover border border-outline-variant/10">
              <p className="font-[family-name:var(--font-headline)] font-bold text-lg mb-1">MOVE Ultimate</p>
              <p className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tighter">&euro;4.997</p>
              <p className="text-on-surface-variant text-sm">eenmalig</p>
            </div>
          </div>

          <Link
            href="/prijs"
            className="inline-flex items-center gap-2 text-primary font-bold group link-hover"
          >
            Vergelijk alle trajecten
            <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
              arrow_forward
            </span>
          </Link>
        </div>
      </section>

      {/* ───────────────── FAQ ───────────────── */}
      <section className="bg-surface py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface mb-4">
              Veelgestelde vragen
            </h2>
            <p className="text-on-surface-variant text-lg">
              Eerlijke antwoorden op de belangrijkste vragen.
            </p>
          </div>
          <Faq
            items={homeFaqs}
          />
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
        <FaqJsonLd items={homeFaqs} />
      </section>

      {/* ───────────────── CTA ───────────────── */}
      <section id="intake" className="py-24 md:py-32 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          {/* Urgency */}
          <div className="text-center mb-12">
            <p className="text-on-surface-variant text-lg italic leading-relaxed max-w-xl mx-auto">
              Elke maand zonder systeem is een maand waarin je weet wat je moet doen &mdash; maar het niet doet.
            </p>
          </div>

          <div className="gradient-cta rounded-3xl p-10 md:p-16 text-center relative overflow-hidden">
            {/* Decorative orbs */}
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-primary/[0.06] blur-[60px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-48 h-48 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />

            <div className="relative">
              <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-extrabold tracking-tighter text-on-surface">
                Het probleem is niet wat je weet. Het probleem is dat je het niet
                doet.
              </h2>
              <p className="text-on-surface-variant mt-4 text-lg leading-relaxed max-w-lg mx-auto">
                30 minuten. Geen pitch. Daarna weet je het.
              </p>
              <Link
                href="/intake"
                className="btn-primary inline-block mt-8 px-10 py-4 text-base font-bold rounded-xl"
              >
                Plan een kennismakingsgesprek
              </Link>
              <p className="mt-5 text-on-surface-variant text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-secondary text-lg">
                  group
                </span>
                Exclusieve mogelijkheid: We zijn opzoek naar nog{" "}
                <strong className="text-on-surface">3 mensen</strong>{" "}
                voor de beta versie van het vernieuwde traject
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
