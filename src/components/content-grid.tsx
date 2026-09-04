"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { type ContentItem, type ContentType } from "@/content/content-items";

type Filter = ContentType | "all";

const typeLabels: Record<ContentType, string> = {
  blog: "Blog",
  video: "Video",
  podcast: "Podcast",
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

export function ContentGrid({ items }: { items: ContentItem[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const availableTypes = Array.from(new Set(items.map((i) => i.type)));
  const filtered =
    filter === "all" ? items : items.filter((i) => i.type === filter);

  return (
    <section className="mt-28 px-8 md:px-16 max-w-7xl mx-auto">
      {/* Header + filter toggles */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
        <h2 className="text-3xl md:text-4xl font-black tracking-tight font-[family-name:var(--font-headline)]">
          Alle content
        </h2>

        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => setFilter("all")}
            className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-headline)] transition-colors ${
              filter === "all"
                ? "bg-primary text-white"
                : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
            }`}
          >
            Alles
          </button>
          {availableTypes.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest font-[family-name:var(--font-headline)] transition-colors ${
                filter === type
                  ? "bg-primary text-white"
                  : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
              }`}
            >
              {typeLabels[type]}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filtered.map((item) => (
          <Link
            key={item.slug}
            href={`/content/${item.slug}`}
            className="group"
          >
            <article>
              <div className="relative h-64 bg-surface-container-low rounded-xl overflow-hidden mb-5">
                <Image
                  src={itemImages[item.slug] || "/images/rick-hero.png"}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
                <span className="absolute top-4 left-4 bg-secondary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full font-[family-name:var(--font-headline)] z-10">
                  {typeLabels[item.type]}
                </span>
                {item.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <span className="material-symbols-outlined text-white text-2xl">
                        play_arrow
                      </span>
                    </div>
                  </div>
                )}
                {item.type === "podcast" && (
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center">
                    <span className="material-symbols-outlined text-white text-base">
                      mic
                    </span>
                  </div>
                )}
              </div>

              <p className="text-on-surface-variant text-xs uppercase tracking-widest font-bold mb-2">
                {item.date}
              </p>

              <h3 className="text-xl font-bold tracking-tight leading-snug font-[family-name:var(--font-headline)] group-hover:text-primary transition-colors">
                {item.title}
              </h3>

              <p className="mt-3 text-on-surface-variant text-sm leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          </Link>
        ))}
      </div>
    </section>
  );
}
