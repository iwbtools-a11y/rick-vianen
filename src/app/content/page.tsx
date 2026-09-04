import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { contentItems } from "@/content/content-items";
import { ContentGrid } from "@/components/content-grid";
import { KlaviyoForm } from "@/components/klaviyo-form";

export const metadata: Metadata = {
  title: "Content | MOVE Coaching",
  description:
    "YouTube videos, podcasts, blogs en meer over beweging, voeding en de psychologie achter topprestaties.",
};

const itemImages: Record<string, string> = {
  "motivatie-gevaarlijke-valkuil": "/images/thumb-motivatie-gevaarlijke-valkuil.jpg",
  "verandering-begint-bij-identiteit": "/images/thumb-verandering-begint-bij-identiteit.jpg",
  "omgeving-gewoonte-vasthouden": "/images/thumb-omgeving-gewoonte-vasthouden.jpg",
  "jezelf-voorliegen-met-excuses": "/images/thumb-jezelf-voorliegen-met-excuses.jpg",
  "omgeving-bepaalt-gedrag": "/images/thumb-omgeving-bepaalt-gedrag.jpg",
  "onbewuste-overtuigingen": "/images/thumb-onbewuste-overtuigingen.jpg",
  "een-doel-dat-je-echt-haalt": "/images/thumb-een-doel-dat-je-echt-haalt.jpg",
  "geprogrammeerde-toekomst": "/images/thumb-geprogrammeerde-toekomst.jpg",
  "3-soorten-beloftes": "/images/thumb-3-soorten-beloftes.jpg",
  "the-way-you-fck-yourself": "/images/blog-str.jpg",
  "gewoontes-aanleren": "/images/rick-portrait.png",
  "beloftes-nakomen": "/images/blog-coach.jpg",
  "what-you-are-not-changing": "/images/rick-hero.png",
  "waarom-geen-coach": "/images/rick-action.jpg",
  "tools-die-het-verschil-maken": "/images/rick-coaching.jpg",
};

export default function ContentPage() {
  const [featured, ...rest] = contentItems;

  return (
    <div className="pb-24 md:pb-0">
      {/* ─── 1. HERO / PAGE HEADER ─── */}
      <section className="pt-40 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <span className="text-secondary uppercase tracking-widest text-xs font-bold font-[family-name:var(--font-headline)]">
              Groei begint hier
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] font-[family-name:var(--font-headline)]">
              ELKE DAG
              <br />
              <span className="text-primary">BETER.</span>
            </h1>
          </div>

          <div className="md:col-span-4 md:text-right pb-2">
            <p className="text-on-surface-variant text-base leading-relaxed">
              Inzichten, video&apos;s en podcasts over de mindset en gewoontes
              die échte ontwikkeling brengen.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. FEATURED ITEM ─── */}
      <section className="mt-20 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-7 relative">
            <Link href={`/content/${featured.slug}`} className="block">
              <div className="rounded-xl bg-surface-container relative overflow-hidden aspect-video">

                <Image
                  src={itemImages[featured.slug] || "/images/rick-hero.png"}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent" />
                {featured.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-3xl">
                        play_arrow
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </Link>
          </div>

          <div className="md:col-span-5 flex flex-col justify-center gap-6">
            <span className="inline-flex self-start bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-[family-name:var(--font-headline)]">
              Uitgelicht
            </span>

            <Link href={`/content/${featured.slug}`}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight font-[family-name:var(--font-headline)] hover:text-primary transition-colors">
                {featured.title}
              </h2>
            </Link>

            <p className="text-on-surface-variant leading-relaxed">
              {featured.excerpt}
            </p>

            <div className="flex items-center gap-4 mt-2">
              <Image
                src="/images/rick-headshot.jpg"
                alt="Rick Vianen"
                width={48}
                height={48}
                className="rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="font-bold text-sm font-[family-name:var(--font-headline)]">
                  Rick Vianen
                </p>
                <p className="text-on-surface-variant text-xs">
                  Performance Coach &mdash; {featured.date}
                </p>
              </div>
              <Link
                href={`/content/${featured.slug}`}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shrink-0"
                aria-label="Bekijk content"
              >
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ALL CONTENT GRID ─── */}
      <ContentGrid items={rest} />

      {/* ─── 4. CTA BANNER ─── */}
      <section className="mt-28 mb-20 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="relative bg-primary-container rounded-2xl px-8 py-16 md:px-16 md:py-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary rounded-3xl rotate-12" />
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-primary-dark rounded-3xl -rotate-6" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white font-[family-name:var(--font-headline)]">
              Klaar om je grenzen te verleggen?
            </h2>

            <p className="mt-6 text-white/80 leading-relaxed text-base md:text-lg">
              Ons elite programma combineert wetenschappelijk onderbouwde
              training, voedingsstrategieen en mentale coaching om jou naar je
              absolute top te brengen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Link
                href="/programma"
                className="inline-flex items-center justify-center bg-surface text-primary px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-surface-container transition-colors font-[family-name:var(--font-headline)]"
              >
                Ontdek het programma
              </Link>
              <Link
                href="/prijs"
                className="inline-flex items-center justify-center border-2 border-white/40 text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:border-white hover:bg-white/10 transition-colors font-[family-name:var(--font-headline)]"
              >
                Bekijk Prijs
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. KLAVIYO FORM ─── */}
      <section className="mt-20 mb-12 px-8 md:px-16 max-w-3xl mx-auto">
        <KlaviyoForm formId="Y5TbE2" />
      </section>
    </div>
  );
}
