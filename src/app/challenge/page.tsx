import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "MOVE the Challenge | MOVE Coaching",
  description:
    "Heb je al te lang een ambitie op de plank liggen? MOVE the Challenge brengt je in 5 dagen van uitstelgedrag naar eerste beweging. €100. Verrekenbaar met MOVE.",
};

export default function ChallengePage() {
  return (
    <div className="pb-24 md:pb-0">

      {/* ===== HERO ===== */}
      <section className="gradient-hero px-8 md:px-16 pt-36 pb-24 relative overflow-hidden">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full bg-primary/[0.04] blur-[100px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div>
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6 backdrop-blur-sm">
              5 dagen &middot; &euro;100 &middot; Verrekenbaar met MOVE
            </span>

            <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-4 max-w-3xl">
              De challenge die je leven <span className="text-primary italic">verandert.</span>
            </h1>

            <p className="text-lg text-on-surface-variant max-w-xl leading-relaxed mb-12">
              Je hebt een ambitie die al veel te lang op de plank ligt. MOVE the Challenge
              brengt je in 5 dagen van uitstelgedrag naar eerste beweging.
            </p>

            <div className="flex flex-col items-start gap-2">
              <Link
                href="https://rick-vianen.plugandpay.com/checkout/move-challenge"
                className="btn-primary px-10 py-4 rounded-full text-lg font-bold"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start de challenge voor &euro;100
              </Link>
              <div className="flex items-center gap-2 text-sm text-on-surface-variant">
                <span
                  className="material-symbols-outlined text-primary text-lg"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                €100 korting op MOVE wanneer je investeert in de Challenge.
              </div>
              <p className="text-xs text-on-surface-variant/60 pl-1">Veilige betaling via Plug&amp;Pay</p>
            </div>
          </div>

          {/* Right — Ironman photo */}
          <div className="relative w-full lg:w-[340px] xl:w-[400px] shrink-0">
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative shadow-2xl">
              <Image
                src="/images/blog-coach.jpg"
                alt="Rick Vianen finisht de Ironman"
                fill
                className="object-cover object-top"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOR WHO ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Voor wie
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-3 leading-tight">
              Die ambitie? <span className="text-primary">Die wacht te lang.</span>
            </h2>
            <p className="text-on-surface-variant mb-8 leading-relaxed">
              Je weet zelf ook dat er iets moet veranderen. De challenge geeft je de structuur om het eindelijk te doen.
            </p>
            <div className="space-y-4">
              {[
                "Je weet al jaren wat je wilt bereiken, maar je komt er gewoon niet aan toe",
                "Je begint vol goede moed, houdt het niet vol, en herkent het patroon",
                "Privé of zakelijk: er is dat ene ding waar je écht verandering in wil brengen",
                "Je wil dit jaar niet afsluiten met dezelfde ambitie op de plank als vorig jaar",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  <p className="text-on-surface-variant leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-surface-container-low rounded-2xl p-10">
              <p className="font-[family-name:var(--font-headline)] text-3xl font-black tracking-tight mb-3">
                Na 5 dagen ligt die ambitie niet meer op de plank
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full mb-8" />
              <div className="space-y-5">
                {[
                  { icon: "target", text: "Een keihard, onontkoombaar strijdplan met een deadline die directe actie forceert." },
                  { icon: "favorite", text: "Een onbreekbare fundering gebouwd, waardoor opgeven simpelweg geen optie meer is — zelfs als de motivatie ver te zoeken is." },
                  { icon: "bolt", text: "Geen eindeloze to-do lijsten, maar een data-gedreven dashboard met precies die acties die jouw succes onvermijdelijk maken." },
                  { icon: "directions_run", text: "Je bent direct in actie gekomen, dwars door de weerstand en smoesjes van de stem in je hoofd heen." },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 py-3 border-b border-outline-variant/20 last:border-0">
                    <span
                      className="material-symbols-outlined text-secondary text-2xl shrink-0"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      {item.icon}
                    </span>
                    <p className="font-medium text-on-surface">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary/5 -z-10 rounded-2xl" />
          </div>
        </div>
      </section>

      {/* ===== THE 5 DAYS ===== */}
      <section className="gradient-warm py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
              Het programma
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-3">
              5 dagen. <span className="text-primary italic">Eén module per dag.</span>
            </h2>
            <p className="text-on-surface-variant text-lg max-w-2xl">
              Geen uren aan video's, maar werk om te doen. Elke dag een korte video van Rick als kader, daarna doe jij het werk zelf. Maximaal 30 minuten. Elke dag een concreet resultaat dat blijft staan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              {
                day: "DAG 1",
                title: "Fundament",
                desc: "Maak het concreet. Waar wil je zijn, waarom wil je dat, en kies je het écht?",
                icon: "foundation",
              },
              {
                day: "DAG 2",
                title: "Van inzicht naar commitment",
                desc: "Benoem wat je tegenhoudt. Zet drie acties in je tracker. Plan je eerste blok.",
                icon: "commit",
              },
              {
                day: "DAG 3",
                title: "Eerste beweging",
                desc: "Stoppen met bedenken. Je tracker gaat live. Je doet alle acties. Geen keuze.",
                icon: "sprint",
              },
              {
                day: "DAG 4",
                title: "De stem",
                desc: "Er is een stem die je tegenhoudt. Vandaag leer je hem herkennen en er doorheen gaan.",
                icon: "record_voice_over",
              },
              {
                day: "DAG 5",
                title: "Elevate",
                desc: "Eerlijk terugkijken. Commitment vs. proberen, geleefd. En je volgende stap.",
                icon: "trending_up",
              },
            ].map((day, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-8 border border-outline-variant/10 card-hover flex flex-col"
              >
                <span className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
                  {day.day}
                </span>
                <span
                  className="material-symbols-outlined text-3xl text-secondary mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  {day.icon}
                </span>
                <h3 className="font-[family-name:var(--font-headline)] text-xl font-black tracking-tight mb-3">
                  {day.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
                  {day.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-on-surface-variant text-sm mt-8 italic">
            De inhoud van elke stap blijft voor deelnemers. Wat je hier ziet is het skelet. De echte waarde zit in het doen.
          </p>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                Hoe het werkt
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl font-black tracking-tight mb-8 leading-tight">
                Evergreen. Start wanneer jij er klaar voor bent.
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: "play_circle",
                    title: "Korte video van Rick",
                    desc: "Elke dag opent Rick met een korte video: wat er vandaag op het spel staat en waarom.",
                  },
                  {
                    icon: "edit_note",
                    title: "Jij doet het werk",
                    desc: "De antwoorden komen niet van Rick. Ze komen van jou. In een Notion-omgeving die je voor altijd houdt.",
                  },
                  {
                    icon: "task_alt",
                    title: "Concreet resultaat per dag",
                    desc: "Elke dag eindig je met iets dat staat. Geen vage inzichten, maar concrete besluiten en beweging.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <span
                        className="material-symbols-outlined text-primary text-2xl"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        {item.icon}
                      </span>
                    </div>
                    <div>
                      <p className="font-bold mb-1">{item.title}</p>
                      <p className="text-on-surface-variant text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stat card */}
            <div className="space-y-4">
              <div className="bg-on-surface text-white p-10 rounded-2xl">
                <p className="font-[family-name:var(--font-headline)] text-7xl font-black text-primary">48u</p>
                <p className="text-xl font-bold mt-2 leading-snug">
                  Meer helderheid dan in het afgelopen jaar.
                </p>
                <p className="text-white/60 text-sm mt-3 leading-relaxed">
                  Na dag 1 heb je al meer beweging dan na jaren plannen maken. Finish je de challenge en stap je in MOVE? Dan gaat je €100 er direct af als korting.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-surface-container-low rounded-xl p-6 text-center">
                  <p className="font-[family-name:var(--font-headline)] text-4xl font-black text-secondary">5</p>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">Dagen</p>
                </div>
                <div className="bg-surface-container-low rounded-xl p-6 text-center">
                  <p className="font-[family-name:var(--font-headline)] text-4xl font-black text-secondary">30'</p>
                  <p className="text-sm text-on-surface-variant font-medium mt-1">Per dag max</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== QUOTE ===== */}
      <section className="gradient-warm py-16 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black italic leading-snug mb-8">
            &ldquo;Het is simpel, maar niet gemakkelijk!&rdquo;
          </p>
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">I</div>
            <div className="text-left">
              <p className="font-bold text-sm">Inge</p>
              <p className="text-xs text-on-surface-variant">MOVE-deelnemer</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUARANTEE ===== */}
      <section className="py-24 px-8 md:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white border-2 border-primary/20 rounded-2xl p-12 md:p-16 text-center editorial-shadow">
            <span
              className="material-symbols-outlined text-secondary text-6xl mb-6"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tight mb-3">
              Je €100 is geen uitgave.
            </h2>
            <p className="text-on-surface-variant font-medium mb-6">Het is je korting op MOVE.</p>
            <p className="text-on-surface-variant text-lg leading-relaxed max-w-2xl mx-auto mb-8">
              Doe alle 5 dagen het werk volledig af. Stap je daarna in MOVE? Dan verrekenen
              we de €100 direct als korting op je investering. Je betaalt de challenge
              dus letterlijk terug aan jezelf.
            </p>
            <div className="inline-flex items-center gap-3 bg-surface-container-low px-6 py-4 rounded-xl">
              <span
                className="material-symbols-outlined text-primary text-xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                shield
              </span>
              <p className="text-sm font-bold">
                Finish de challenge. Stap in MOVE. Je €100 gaat er direct af.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== BRIDGE TO MOVE ===== */}
      <section className="gradient-warm py-24 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
                De eerste 5%
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl font-black tracking-tight mb-3 leading-tight">
                Geen mini-MOVE. <span className="text-primary italic">Het bewijs.</span>
              </h2>
              <p className="text-on-surface-variant font-medium mb-6">De challenge is de eerste 5% van MOVE, met 100% diepgang.</p>
              <p className="text-on-surface-variant leading-relaxed mb-6">
                In 5 dagen bewijs je de methode aan jezelf. Je ervaart wat helderheid
                en beweging voelt, misschien voor het eerst in jaren.
              </p>
              <p className="text-on-surface-variant leading-relaxed">
                Wat je in je eentje merkt, is dat de stem na 5 dagen niet weg is.
                Momentum houden zonder structuur is precies waar de meeste mensen
                stranden. Niet door gebrek aan kennis. Door gebrek aan een systeem
                dat je vasthoudt als de motivatie wegvalt.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 editorial-shadow">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/rick-square.png"
                  alt="Rick Vianen"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-bold">Rick Vianen</p>
                  <p className="text-xs text-on-surface-variant">MOVE Coaching</p>
                </div>
              </div>
              <p className="text-on-surface-variant italic leading-relaxed mb-6">
                &ldquo;Weten is niet het probleem. Doen is het probleem. Die ene zin is
                de reden dat de challenge bestaat. En de reden dat MOVE doet wat het doet.&rdquo;
              </p>
              <Link
                href="/programma"
                className="inline-flex items-center gap-2 text-primary font-bold text-sm group link-hover"
              >
                Meer over het volledige MOVE programma
                <span className="material-symbols-outlined text-lg transition-transform duration-300 group-hover:translate-x-1">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="gradient-dark rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-primary/[0.08] blur-[80px] pointer-events-none" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-secondary/[0.06] blur-[60px] pointer-events-none" />
            <div className="relative z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-8">
                Eenmalige investering
              </span>
              <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-6xl font-black text-white mb-4">
                5 dagen. <span className="text-primary italic">&euro;100.</span>
              </h2>
              <p className="text-white/80 font-medium mb-4">Start wanneer je wilt. Doe het werk.</p>
              <p className="text-white/50 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
                Stap je daarna in MOVE? Dan gaat je €100 er direct af als korting. Je investering begint hier.
              </p>
              <div className="inline-flex flex-col items-center gap-4">
                <Link
                  href="https://rick-vianen.plugandpay.com/checkout/move-challenge"
                  className="btn-primary px-14 py-5 rounded-full text-xl font-bold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Start de challenge voor &euro;100
                </Link>
                <p className="text-white/40 text-sm font-medium tracking-wide uppercase">
                  €100 korting op MOVE &middot; Evergreen &middot; Start direct
                </p>
                <p className="text-white/30 text-xs">Veilige betaling via Plug&amp;Pay</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
