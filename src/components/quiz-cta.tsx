import Link from "next/link";

/**
 * variant="hint"   — subtle text link, sits below existing CTAs (homepage hero)
 * variant="card"   — warm standalone card (programma page, between sections)
 * variant="inline" — full-width block inside article flow (blog posts)
 */
export function QuizCTA({ variant }: { variant: "hint" | "card" | "inline" }) {

  if (variant === "hint") {
    return (
      <div className="flex items-center gap-2 text-sm text-on-surface-variant">
        <span
          className="material-symbols-outlined text-base text-primary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          quiz
        </span>
        <span>Ontdekken waar jouw energie weglekt?</span>
        <Link
          href="/quiz"
          className="text-primary font-bold inline-flex items-center gap-1 group link-hover"
        >
          Doe de test in 2 minuten
          <span className="material-symbols-outlined text-base transition-transform duration-300 group-hover:translate-x-1">
            arrow_forward
          </span>
        </Link>
      </div>
    );
  }

  if (variant === "card") {
    return (
      <div className="max-w-7xl mx-auto px-8 md:px-16 pb-0">
        <div className="bg-surface-container-low rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 border border-outline-variant/10">
          {/* Left */}
          <div className="flex-1">
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary font-bold text-xs uppercase tracking-widest rounded-full mb-4">
              Gratis · 2 minuten
            </span>
            <h3 className="font-[family-name:var(--font-headline)] text-2xl md:text-3xl font-black tracking-tight text-on-surface mb-3">
              Twijfel je of MOVE bij jou past?
            </h3>
            <p className="text-on-surface-variant text-sm leading-relaxed max-w-md">
              Doe de test en ontdek in 2 minuten welk type jij bent en welke stap als eerste het meeste verschil maakt.
            </p>
            <div className="flex gap-6 mt-4">
              {["6 vragen", "Direct inzicht", "Persoonlijk advies per mail"].map((item) => (
                <span key={item} className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                  <span
                    className="material-symbols-outlined text-sm text-primary"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    check_circle
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
          {/* Right */}
          <div className="shrink-0">
            <Link
              href="/quiz"
              className="btn-primary px-8 py-4 rounded-xl font-bold whitespace-nowrap block text-center"
            >
              Doe de gratis test
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // variant === "inline"
  return (
    <div className="my-12 rounded-2xl overflow-hidden border border-outline-variant/10">
      {/* Orange accent strip */}
      <div className="h-1 bg-gradient-to-r from-primary to-primary/40" />
      <div className="bg-surface-container-low px-8 py-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
        <div className="flex-1">
          <p className="text-xs font-bold uppercase tracking-widest text-primary mb-2">
            Gratis test · 2 minuten
          </p>
          <p className="font-[family-name:var(--font-headline)] text-xl font-black tracking-tight text-on-surface leading-tight mb-1">
            Herken je dit? Ontdek jouw MOVE-type.
          </p>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            6 vragen. Direct inzicht. Je krijgt een persoonlijk advies in je inbox.
          </p>
        </div>
        <Link
          href="/quiz"
          className="btn-primary px-6 py-3 rounded-xl font-bold text-sm whitespace-nowrap shrink-0"
        >
          Start de test
        </Link>
      </div>
    </div>
  );
}
