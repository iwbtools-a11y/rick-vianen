import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { contentItems } from "@/content/content-items";
import { QuizCTA } from "@/components/quiz-cta";
import { KlaviyoForm } from "@/components/klaviyo-form";

const itemImages: Record<string, string> = {
  "the-way-you-fck-yourself": "/images/blog-str.jpg",
  "gewoontes-aanleren": "/images/rick-portrait.png",
  "beloftes-nakomen": "/images/blog-coach.jpg",
  "what-you-are-not-changing": "/images/rick-hero.png",
  "waarom-geen-coach": "/images/rick-action.jpg",
  "tools-die-het-verschil-maken": "/images/rick-coaching.jpg",
};

export function generateStaticParams() {
  return contentItems.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const item = contentItems.find((i) => i.slug === slug);

  if (!item) {
    return { title: "Niet gevonden | MOVE Coaching" };
  }

  return {
    title: `${item.title} | MOVE Coaching`,
    description: item.excerpt,
  };
}

export default async function ContentItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = contentItems.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  return (
    <div className="pb-24">
      {/* ─── ARTICLE / VIDEO / PODCAST ─── */}
      <article className="max-w-3xl mx-auto px-8 md:px-16 pt-40">
        {/* Category badge */}
        <span className="inline-flex bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-[family-name:var(--font-headline)]">
          {item.category}
        </span>

        {/* Date */}
        <p className="mt-4 text-on-surface-variant text-xs uppercase tracking-widest font-bold">
          {item.date}
        </p>

        {/* Title */}
        <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] font-[family-name:var(--font-headline)]">
          {item.title}
        </h1>

        {/* YouTube embed for videos */}
        {item.type === "video" && item.videoUrl ? (
          <div className="mt-10 relative aspect-video rounded-xl overflow-hidden">
            <iframe
              src={item.videoUrl}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        ) : (
          <div className="mt-10 relative h-[300px] md:h-[480px] rounded-xl overflow-hidden">
            <Image
              src={itemImages[item.slug] || "/images/rick-hero.png"}
              alt={item.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Podcast embed */}
        {item.type === "podcast" && item.podcastUrl && (
          <div className="mt-8">
            <iframe
              src={item.podcastUrl}
              title={item.title}
              className="w-full rounded-xl"
              height="152"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            />
          </div>
        )}

        {/* Content */}
        {item.content && (
          <div
            className="blog-content mt-12"
            dangerouslySetInnerHTML={{ __html: item.content }}
          />
        )}
      </article>

      {/* ─── BACK LINK ─── */}
      <div className="max-w-3xl mx-auto px-8 md:px-16 mt-16 pt-8 border-t border-outline-variant">
        <Link
          href="/content"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors font-[family-name:var(--font-headline)]"
        >
          <span className="material-symbols-outlined text-lg">arrow_back</span>
          Terug naar Content
        </Link>
      </div>

      {/* ─── QUIZ CTA ─── */}
      <div className="max-w-3xl mx-auto px-8 md:px-16 mt-8">
        <QuizCTA variant="inline" />
      </div>

      {/* ─── CTA ─── */}
      <section className="max-w-3xl mx-auto px-8 md:px-16 mt-16">
        <div className="relative bg-primary-container rounded-2xl px-8 py-16 md:px-16 md:py-20 overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            aria-hidden="true"
          >
            <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary rounded-3xl rotate-12" />
            <div className="absolute -left-16 -bottom-16 w-80 h-80 bg-primary-dark rounded-3xl -rotate-6" />
          </div>

          <div className="relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight text-white font-[family-name:var(--font-headline)]">
              Klaar om te bewegen?
            </h2>

            <p className="mt-6 text-white/80 leading-relaxed text-base md:text-lg max-w-xl mx-auto">
              Neem de eerste stap en ontdek wat er mogelijk is wanneer je stopt
              met uitstellen en begint met actie.
            </p>

            <Link
              href="https://calendly.com/rick-rickvianen/kennismaking"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-surface text-primary px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-surface-container transition-colors font-[family-name:var(--font-headline)] mt-10"
            >
              Plan een gesprek
            </Link>
          </div>
        </div>
      </section>

      {/* ─── MORE CONTENT ─── */}
      <section className="max-w-7xl mx-auto px-8 md:px-16 mt-24">
        <h2 className="text-2xl md:text-3xl font-black tracking-tight font-[family-name:var(--font-headline)] mb-10">
          Meer interessante content
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contentItems
            .filter((i) => i.slug !== slug)
            .slice(0, 3)
            .map((related) => (
              <Link
                key={related.slug}
                href={`/content/${related.slug}`}
                className="group"
              >
                <article>
                  <div className="relative h-48 bg-surface-container-low rounded-xl overflow-hidden mb-4">
                    <Image
                      src={itemImages[related.slug] || "/images/rick-hero.png"}
                      alt={related.title}
                      fill
                      className="object-cover"
                    />
                    <span className="absolute top-3 left-3 bg-secondary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full font-[family-name:var(--font-headline)] z-10">
                      {related.category}
                    </span>
                  </div>
                  <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-1">
                    {related.date}
                  </p>
                  <h3 className="text-base font-bold tracking-tight leading-snug font-[family-name:var(--font-headline)] group-hover:text-primary transition-colors">
                    {related.title}
                  </h3>
                </article>
              </Link>
            ))}
        </div>
      </section>

      {/* ─── KLAVIYO FORM ─── */}
      <section className="max-w-3xl mx-auto px-8 md:px-16 mt-20 mb-8">
        <KlaviyoForm formId="Y5TbE2" />
      </section>
    </div>
  );
}
