import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Over Rick Vianen | MOVE Coaching",
  description:
    "Ontdek het verhaal van Rick Vianen en de missie achter MOVE Coaching. Performance coaching op het snijvlak van sport, mindset en business.",
};

export default function OverRickVianen() {
  return (
    <div className="pb-24 md:pb-0">
      {/* ───────────────────────── 1. HERO ───────────────────────── */}
      <section className="pt-32 gradient-hero">
        <div className="max-w-7xl mx-auto px-8 py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            {/* Left — 7 cols */}
            <div className="md:col-span-7">
              <p className="text-secondary uppercase tracking-[0.2em] text-sm font-bold mb-6">
                Over MOVE
              </p>
              <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                Van feestbeest
                <br />
                <span className="text-primary">naar IRONMAN.</span>
              </h1>
            </div>

            {/* Right — 5 cols */}
            <div className="md:col-span-5">
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Rick Vianen cre&euml;ert beweging, in lijf, hoofd en
                leven. Voor professionals die weten wat ze moeten doen, maar het
                niet volhouden.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────── 2. RICK'S STORY — Asymmetric ──────────── */}
      <section className="bg-surface-container-low">
        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* Left — Portrait + floating quote */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-xl overflow-hidden relative">
                <Image
                  src="/images/rick-portrait.png"
                  alt="Rick Vianen - Founder MOVE Coaching"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating quote box */}
              <div className="absolute -bottom-10 -right-10 bg-secondary text-white p-10 rounded-xl max-w-xs hidden md:block">
                <span className="material-symbols-outlined text-3xl opacity-60 mb-4 block">
                  format_quote
                </span>
                <p className="text-sm leading-relaxed font-medium">
                  &ldquo;Rick leeft naar wat hij zegt.&rdquo;<br />Chantal
                </p>
              </div>
              {/* Mobile quote (shown inline) */}
              <div className="mt-6 bg-secondary text-white p-8 rounded-xl md:hidden">
                <span className="material-symbols-outlined text-2xl opacity-60 mb-3 block">
                  format_quote
                </span>
                <p className="text-sm leading-relaxed font-medium">
                  &ldquo;Rick leeft naar wat hij zegt.&rdquo;<br />Chantal
                </p>
              </div>
            </div>

            {/* Right — Story text */}
            <div className="lg:pt-8">
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-10">
                De architect van MOVE
              </h2>
              <div className="space-y-6 text-on-surface-variant leading-relaxed">
                <p>
                  Het begon met het inschrijven voor de eerste halve IRONMAN. Van
                  feestbeest naar IRONMAN finisher, met tranen over
                  zijn wangen bij de finish. De echte winst was niet de finish,
                  maar de skills: discipline, dealen met gedachten, prioriteiten
                  stellen.
                </p>
                <p>
                  Die ervaring plantte het zaadje voor wat later MOVE zou worden:
                  een coachingfilosofie die sport, mindset en business als
                  &eacute;&eacute;n onlosmakelijk geheel beschouwt. Geen
                  theorie, geen fluff, maar alleen werkende structuur.
                </p>
                <p>
                  Vandaag coacht Rick ambitieuze professionals die goed
                  presteren aan de buitenkant, maar merken dat gezondheid,
                  energie en structuur achterblijven bij wie ze willen zijn.
                  Confronterend, meetbaar, blijvend.
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
              <Link
                href="/programma"
                className="inline-flex items-center gap-2 mt-10 text-primary font-bold text-sm hover:text-primary-dark transition-colors group"
              >
                Bekijk het programma
                <span className="material-symbols-outlined text-lg transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────── 3. ONZE MISSIE ─────────────────────── */}
      <section className="bg-surface">
        <div className="max-w-4xl mx-auto px-8 py-24 md:py-32 text-center">
          <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-8">
            <span className="material-symbols-outlined text-3xl text-primary">
              rocket_launch
            </span>
          </div>
          <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-10">
            Onze missie
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed text-on-surface-variant">
            Het enige peer-group traject in Nederland waar ambitieuze
            professionals gelijktijdig hun sportieve en carri&egrave;redoelen
            bereiken, gefaciliteerd door{" "}
            <span className="bg-secondary-container px-2 text-on-secondary-container rounded-sm">
              confronterende coaching
            </span>{" "}
            en{" "}
            <span className="text-primary font-bold">
              een community die &eacute;chte resultaten boekt.
            </span>
          </p>
        </div>
      </section>

      {/* ─────────────── 4. 5 KERNPRINCIPES BENTO GRID ───────────── */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-8 pb-24 md:pb-32">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Top-left: Alles Hangt Samen (col-span-8) */}
            <div className="md:col-span-8 bg-surface-container-low rounded-xl p-10 border-l-4 border-primary">
              <h3 className="font-[family-name:var(--font-headline)] text-2xl font-bold tracking-tight mb-4">
                Alles hangt samen
              </h3>
              <p className="text-on-surface-variant leading-relaxed mb-8 max-w-lg">
                Fysiek, mentaal, werk, relatie. Niet los aanpakken. MOVE
                integreert alles in &eacute;&eacute;n systeem.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-surface-container px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Sport
                </span>
                <span className="bg-surface-container px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Mindset
                </span>
                <span className="bg-surface-container px-4 py-1.5 rounded-full text-xs font-bold text-on-surface-variant uppercase tracking-wider">
                  Business
                </span>
              </div>
            </div>

            {/* Top-right: 90% stat (col-span-4) */}
            <div className="md:col-span-4 bg-[#271813] rounded-xl p-10 flex flex-col justify-center min-h-[220px] overflow-hidden">
              <p className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black text-primary tracking-tighter">
                90% implementatie
              </p>
              <p className="text-surface-container-highest/50 text-base font-bold uppercase tracking-widest">
                10% kennis
              </p>
            </div>

            {/* Bottom-left: Image (col-span-4) */}
            <div className="md:col-span-4 rounded-xl overflow-hidden bg-surface-container-highest min-h-[280px] group relative">
              <Image
                src="/images/rick-coaching.jpg"
                alt="MOVE Coaching session"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Bottom-right: Two feature cards (col-span-8) */}
            <div className="md:col-span-8 bg-surface-container-high rounded-xl p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 h-full">
                {/* Verantwoordelijkheid is Bevrijdend */}
                <div className="flex flex-col">
                  <span className="material-symbols-outlined text-3xl text-secondary mb-4">
                    volunteer_activism
                  </span>
                  <h4 className="font-[family-name:var(--font-headline)] text-lg font-bold tracking-tight mb-2">
                    Verantwoordelijkheid is bevrijdend
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Jij bent verantwoordelijk, niet je omstandigheden. Dat is
                    geen last. Dat is vrijheid.
                  </p>
                </div>

                {/* De Groep is het Mechanisme */}
                <div className="flex flex-col">
                  <span className="material-symbols-outlined text-3xl text-secondary mb-4">
                    groups
                  </span>
                  <h4 className="font-[family-name:var(--font-headline)] text-lg font-bold tracking-tight mb-2">
                    De groep is het mechanisme
                  </h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed">
                    Je maakt elkaar een belofte. Niet Rick die je bij de hand
                    neemt, een groep die je niet laat zitten.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────── 5. CTA ──────────────────────────── */}
      <section className="bg-surface-container-highest">
        <div className="max-w-7xl mx-auto px-8 py-24 md:py-32">
          <div className="gradient-dark rounded-2xl p-12 md:p-20 relative overflow-hidden">
            {/* Decorative blur circles */}
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary/[0.08] blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              {/* Text — left */}
              <div className="md:col-span-8">
                <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-5xl font-black tracking-tight text-white leading-tight mb-6">
                  Klaar om te bewegen?{" "}
                  <span className="text-primary">Plan een gesprek.</span>
                </h2>
                <p className="text-surface-container-highest/60 leading-relaxed max-w-lg">
                  30 minuten. Geen pitch. Rick benoemt wat hij ziet.
                  Direct en zonder verzachten. Daarna weet je waar je staat.
                </p>
              </div>

              {/* Button — right */}
              <div className="md:col-span-4 flex md:justify-end">
                <Link
                  href="/intake"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 btn-primary px-8 py-4 rounded-lg font-bold text-lg whitespace-nowrap w-full md:w-auto"
                >
                  <span className="material-symbols-outlined text-xl">
                    calendar_today
                  </span>
                  Plan gesprek
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
