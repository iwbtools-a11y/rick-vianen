"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    icon: "school",
    title: "Master",
    text: "Kort, scherp kennismoment van 3-10 minuten. Exact wat je nodig hebt.",
  },
  {
    icon: "play_arrow",
    title: "Operate",
    text: "Directe toepassing in je leven, business of gezondheid. Praktisch en onmiddellijk uitvoerbaar.",
  },
  {
    icon: "fact_check",
    title: "Validate",
    text: "Eerlijk terugkijken. Wat werkte? Wat brak af? Observeer je gedrag en resultaten.",
  },
  {
    icon: "trending_up",
    title: "Elevate",
    text: "Verfijn en verbeter. Beter dan vorige week. Vooruitgang zit in de aanpassingen.",
  },
];

export function MoveMethode() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-surface-container-low py-24 md:py-32 px-8 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
        {/* Left */}
        <div className="md:w-1/3 shrink-0">
          <h2 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-extrabold tracking-tighter text-on-surface leading-tight">
            De MOVE
            <br />
            methode
          </h2>
          <div className="h-1 w-20 bg-primary mt-6 mb-6 rounded-full" />
          <p className="text-on-surface-variant leading-relaxed">
            Geen theorie, werkende structuur. Elke week dezelfde cyclus,
            totdat het een tweede natuur wordt.
          </p>
        </div>

        {/* Right — 2x2 grid with runner */}
        <div className="md:w-2/3 relative" ref={sectionRef}>
          {/* Runner track — sits between rows */}
          <div className="hidden sm:block absolute left-0 right-0 top-1/2 -translate-y-1/2 h-12 z-10 pointer-events-none">
            {/* Track line */}
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-primary/15 -translate-y-1/2" />

            {/* Running person */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 transition-all ${
                animate
                  ? "left-[48%] opacity-100"
                  : "-left-16 opacity-0"
              }`}
              style={{
                transitionDuration: "1.8s",
                transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <span
                  className="material-symbols-outlined text-white text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  directions_run
                </span>
              </div>
            </div>

            {/* Dust trail */}
            <div
              className={`absolute top-1/2 -translate-y-1/2 flex gap-2 transition-all ${
                animate
                  ? "left-[20%] opacity-0"
                  : "-left-32 opacity-0"
              }`}
              style={{
                transitionDuration: "2.5s",
                transitionDelay: "0.3s",
              }}
            >
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-primary/20"
                />
              ))}
            </div>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className={`p-8 bg-surface rounded-lg transition-all duration-700 ${
                  animate
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 200}ms` }}
              >
                <span className="material-symbols-outlined text-3xl text-secondary mb-4 block">
                  {step.icon}
                </span>
                <h3 className="font-[family-name:var(--font-headline)] font-bold text-xl mb-2 text-on-surface">
                  {step.title}
                </h3>
                <p className="text-on-surface-variant text-sm leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
