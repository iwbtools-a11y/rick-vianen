import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/content/blog-posts";

export const metadata: Metadata = {
  title: "Blog | MOVE Coaching",
  description:
    "Diepe inzichten over beweging, voeding en de psychologie achter topprestaties.",
};

const articleImages: Record<string, string> = {
  "the-way-you-fck-yourself": "/images/blog-str.jpg",
  "gewoontes-aanleren": "/images/rick-portrait.png",
  "beloftes-nakomen": "/images/blog-coach.jpg",
  "what-you-are-not-changing": "/images/rick-hero.png",
  "waarom-geen-coach": "/images/rick-action.jpg",
  "tools-die-het-verschil-maken": "/images/rick-coaching.jpg",
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="pb-24 md:pb-0">
      {/* ─── 1. HERO / PAGE HEADER ─── */}
      <section className="pt-32 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          {/* Left 8 cols */}
          <div className="md:col-span-8">
            <span className="text-secondary uppercase tracking-widest text-xs font-bold font-[family-name:var(--font-headline)]">
              Editorial Journal
            </span>
            <h1 className="mt-4 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] font-[family-name:var(--font-headline)]">
              KINETIC
              <br />
              <span className="text-outline-variant opacity-40">MOMENTS.</span>
            </h1>
          </div>

          {/* Right 4 cols */}
          <div className="md:col-span-4 md:text-right pb-2">
            <p className="text-on-surface-variant text-base leading-relaxed">
              Diepe inzichten over beweging, voeding en de psychologie achter
              topprestaties.
            </p>
          </div>
        </div>
      </section>

      {/* ─── 2. FEATURED ARTICLE ─── */}
      <section className="mt-20 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Left 7 cols: tall image */}
          <div className="md:col-span-7 relative">
            <Link href={`/blog/${featured.slug}`} className="block">
              <div className="h-[400px] md:h-[600px] rounded-xl bg-surface-container relative overflow-hidden">
                <Image
                  src={articleImages[featured.slug] || "/images/rick-hero.png"}
                  alt={featured.title}
                  fill
                  className="object-cover"
                />
                {/* Gradient overlay at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-on-surface/60 via-transparent to-transparent" />
              </div>
            </Link>
          </div>

          {/* Right 5 cols: content */}
          <div className="md:col-span-5 flex flex-col justify-center gap-6">
            <span className="inline-flex self-start bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-[family-name:var(--font-headline)]">
              {featured.category}
            </span>

            <Link href={`/blog/${featured.slug}`}>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight font-[family-name:var(--font-headline)] hover:text-primary transition-colors">
                {featured.title}
              </h2>
            </Link>

            <p className="text-on-surface-variant leading-relaxed">
              {featured.excerpt}
            </p>

            <div className="flex items-center gap-4 mt-2">
              {/* Avatar circle */}
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
                href={`/blog/${featured.slug}`}
                className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary-dark transition-colors shrink-0"
                aria-label="Lees meer"
              >
                <span className="material-symbols-outlined text-xl">
                  arrow_forward
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. ALL ARTICLES GRID ─── */}
      <section className="mt-28 px-8 md:px-16 max-w-7xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight font-[family-name:var(--font-headline)]">
            Alle Artikelen
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rest.map((article) => (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group"
            >
              <article>
                {/* Image */}
                <div className="relative h-64 bg-surface-container-low rounded-xl overflow-hidden mb-5">
                  <Image
                    src={articleImages[article.slug] || "/images/rick-hero.png"}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full font-[family-name:var(--font-headline)] z-10">
                    {article.category}
                  </span>
                </div>

                {/* Date */}
                <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">
                  {article.date}
                </p>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight leading-snug font-[family-name:var(--font-headline)] group-hover:text-primary transition-colors">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="mt-3 text-on-surface-variant text-sm leading-relaxed">
                  {article.excerpt}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 4. CTA BANNER ─── */}
      <section className="mt-28 px-8 md:px-16 max-w-7xl mx-auto">
        <div className="relative bg-primary-container rounded-2xl px-8 py-16 md:px-16 md:py-20 overflow-hidden">
          {/* Decorative skewed background */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary rounded-3xl rotate-12" />
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-primary-dark rounded-3xl -rotate-6" />
          </div>

          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white font-[family-name:var(--font-headline)]">
              KLAAR OM JE GRENZEN TE VERLEGGEN?
            </h2>

            <p className="mt-6 text-white/80 leading-relaxed text-base md:text-lg">
              Ons elite programma combineert wetenschappelijk onderbouwde
              training, voedingsstrategieen en mentale coaching om jou naar
              je absolute top te brengen.
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
                Bekijk Tarieven
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 5. NEWSLETTER SECTION ─── */}
      <section className="mt-28 mb-20 px-8 md:px-16 max-w-7xl mx-auto border-t border-outline-variant pt-20">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-secondary uppercase tracking-widest text-xs font-bold font-[family-name:var(--font-headline)]">
            Join the movement
          </span>

          <h2 className="mt-4 text-3xl md:text-4xl font-black tracking-tight leading-tight font-[family-name:var(--font-headline)]">
            Ontvang wekelijks kinetische inspiratie direct in je inbox.
          </h2>

          <form className="mt-10 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="jouw@email.nl"
              required
              className="flex-1 px-5 py-3.5 rounded-lg border border-outline-variant bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors text-sm"
            />
            <button
              type="submit"
              className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-primary-dark transition-colors font-[family-name:var(--font-headline)] shrink-0"
            >
              Inschrijven
            </button>
          </form>

          <p className="mt-4 text-on-surface-variant/60 text-xs leading-relaxed">
            Door je in te schrijven ga je akkoord met ons privacybeleid. Je
            kunt je op elk moment uitschrijven.
          </p>
        </div>
      </section>
    </div>
  );
}
