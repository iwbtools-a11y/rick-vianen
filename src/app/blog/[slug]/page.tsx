import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog-posts";

const articleImages: Record<string, string> = {
  "the-way-you-fck-yourself": "/images/blog-str.jpg",
  "gewoontes-aanleren": "/images/rick-portrait.png",
  "beloftes-nakomen": "/images/blog-coach.jpg",
  "what-you-are-not-changing": "/images/rick-hero.png",
  "waarom-geen-coach": "/images/rick-action.jpg",
  "tools-die-het-verschil-maken": "/images/rick-coaching.jpg",
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return { title: "Post niet gevonden | MOVE Coaching" };
  }

  return {
    title: `${post.title} | MOVE Coaching`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="pb-24 md:pb-0">
      {/* ─── ARTICLE ─── */}
      <article className="max-w-3xl mx-auto px-8 md:px-16 pt-32">
        {/* Category badge */}
        <span className="inline-flex bg-secondary-container text-on-secondary-container text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full font-[family-name:var(--font-headline)]">
          {post.category}
        </span>

        {/* Date */}
        <p className="mt-4 text-on-surface-variant text-xs uppercase tracking-widest font-bold">
          {post.date}
        </p>

        {/* Title */}
        <h1 className="mt-6 text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] font-[family-name:var(--font-headline)]">
          {post.title}
        </h1>

        {/* Hero image */}
        <div className="mt-10 relative h-[300px] md:h-[480px] rounded-xl overflow-hidden">
          <Image
            src={articleImages[post.slug] || "/images/rick-hero.png"}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div
          className="blog-content mt-12"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* ─── BACK LINK ─── */}
      <div className="max-w-3xl mx-auto px-8 md:px-16 mt-16 pt-8 border-t border-outline-variant">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors font-[family-name:var(--font-headline)]"
        >
          <span className="material-symbols-outlined text-lg">
            arrow_back
          </span>
          Terug naar Blog
        </Link>
      </div>

      {/* ─── CTA ─── */}
      <section className="max-w-3xl mx-auto px-8 md:px-16 mt-16">
        <div className="relative bg-primary-container rounded-2xl px-8 py-16 md:px-16 md:py-20 overflow-hidden">
          {/* Decorative background */}
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
              href="/intake"
              className="inline-flex items-center justify-center bg-surface text-primary px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-surface-container transition-colors font-[family-name:var(--font-headline)] mt-10"
            >
              Plan een gesprek
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
