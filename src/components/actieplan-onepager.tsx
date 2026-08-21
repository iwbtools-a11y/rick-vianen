import Image from "next/image";
import Link from "next/link";
import type { Actieplan } from "@/content/actieplannen";

function waHref(typeName: string) {
  const text = `Hoi Rick, ik kwam uit de quiz als ${typeName}. Ik heb de opdracht gedaan en dit viel me op: `;
  return `https://wa.me/31620523549?text=${encodeURIComponent(text)}`;
}

export function ActieplanOnepager({ plan }: { plan: Actieplan }) {
  return (
    <div className="min-h-screen bg-surface pb-16">
      {/* Header */}
      <header className="w-full max-w-[680px] mx-auto px-5 sm:px-8 pt-8 sm:pt-9 flex items-center justify-between gap-4">
        <Image
          src="/images/quiz-actieplan-move-logo.png"
          alt="MOVE"
          width={96}
          height={40}
          className="w-20 sm:w-24 h-auto"
          priority
        />
        <div className="font-[family-name:var(--font-headline)] font-semibold text-[10px] tracking-[1.4px] text-outline uppercase text-right">
          {plan.navLabel}
        </div>
      </header>

      {/* Hero copy */}
      <section className="w-full max-w-[680px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
        <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11px] tracking-[1.7px] text-primary uppercase">
          {plan.eyebrow}
        </div>
        <h1 className="font-[family-name:var(--font-headline)] font-extrabold leading-[1.12] tracking-[-0.6px] mt-3 text-[30px] sm:text-[44px] text-balance">
          {plan.headingLines[0]}
          <br />
          {plan.headingLines[1]}
        </h1>
        {plan.intro.map((p, i) => (
          <p
            key={i}
            className="text-[15px] sm:text-[17px] leading-[1.75] text-on-surface-variant mt-3.5 sm:mt-5 text-pretty"
          >
            {p}
          </p>
        ))}
        <div className="mt-6 py-0.5 pl-4 border-l-[3px] border-primary">
          <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11.5px] tracking-[1.2px] text-primary-dark uppercase mb-1">
            Voor wie dit is
          </div>
          <p className="text-[15px] leading-[1.65] text-on-surface-variant">
            {plan.forWhom}
          </p>
        </div>
      </section>

      {/* Hero image */}
      <figure className="mt-8 sm:mt-12 relative">
        <div className="relative w-full aspect-video">
          <Image
            src={plan.hero.src}
            alt={plan.hero.alt}
            fill
            className="object-cover"
            style={{ objectPosition: "50% 45%" }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-[52%] pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.68), rgba(0,0,0,0))",
            }}
          />
        </div>
        <figcaption className="absolute left-0 right-0 bottom-0 w-full max-w-[680px] mx-auto px-5 sm:px-8 pb-3.5 sm:pb-5 font-[family-name:var(--font-headline)] font-bold text-[12px] sm:text-sm leading-[1.4] text-white [text-shadow:0_1px_10px_rgba(0,0,0,0.6)]">
          {plan.hero.caption}
        </figcaption>
      </figure>

      {/* Mijn ervaring */}
      <section className="w-full max-w-[680px] mx-auto px-5 sm:px-8 pt-8 sm:pt-11">
        <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11px] tracking-[1.7px] text-primary uppercase">
          Mijn ervaring
        </div>
        <h2 className="font-[family-name:var(--font-headline)] font-extrabold leading-[1.18] tracking-[-0.4px] mt-2.5 text-[24px] sm:text-[32px]">
          {plan.experience.title}
        </h2>
        <div className="flex flex-col gap-5 mt-5">
          {plan.experience.blocks.map((block, i) => (
            <div key={i}>
              <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11.5px] tracking-[1.2px] text-primary-dark uppercase mb-1">
                {block.label}
              </div>
              <p className="text-[15px] sm:text-[17px] leading-[1.75] text-on-surface-variant text-pretty">
                {block.text}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-surface-container-low border border-outline-variant rounded-[18px] p-5 sm:p-6 mt-7 sm:mt-9">
          <div className="font-[family-name:var(--font-headline)] font-extrabold text-sm text-primary-dark mb-3">
            Herken je dit?
          </div>
          <div className="flex flex-col gap-2.5">
            {plan.recognize.items.map((item, i) => (
              <div
                key={i}
                className="text-[15px] leading-[1.55] text-on-surface-variant"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* De distinctie */}
      <section className="w-full max-w-[680px] mx-auto px-5 sm:px-8 pt-9 sm:pt-[52px]">
        <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11px] tracking-[1.7px] text-primary uppercase">
          De distinctie
        </div>
        <h2 className="font-[family-name:var(--font-headline)] font-extrabold leading-[1.18] tracking-[-0.4px] mt-2.5 text-[24px] sm:text-[32px]">
          {plan.distinction.title}
        </h2>
        {plan.distinction.paragraphs.map((p, i) => (
          <p
            key={i}
            className="text-[15px] sm:text-[17px] leading-[1.75] text-on-surface-variant mt-4 text-pretty"
          >
            {p}
          </p>
        ))}

        <blockquote className="bg-surface-container-low border-l-[3px] border-primary rounded-tl rounded-tr-2xl rounded-br-2xl rounded-bl p-5 sm:p-6 mt-6 sm:mt-8">
          <p className="font-[family-name:var(--font-headline)] font-bold italic leading-[1.45] text-on-surface text-[16px] sm:text-[19px]">
            &ldquo;{plan.distinction.quote.text}&rdquo;
          </p>
          <footer className="text-[13px] text-outline mt-2.5">
            {plan.distinction.quote.author}
          </footer>
        </blockquote>

        <div className="bg-surface-container rounded-2xl p-5 sm:p-6 mt-4">
          <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11.5px] tracking-[1.2px] text-primary-dark uppercase mb-1">
            Wat het kost
          </div>
          <p className="font-[family-name:var(--font-headline)] font-bold leading-[1.5] text-on-surface text-[15px] sm:text-[17px] text-pretty">
            {plan.distinction.cost}
          </p>
        </div>

        <div className="mt-4 py-0.5 pl-4 border-l-[3px] border-primary">
          <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11.5px] tracking-[1.2px] text-primary-dark uppercase mb-1">
            Wat het je oplevert
          </div>
          <p className="text-[15px] leading-[1.65] text-on-surface-variant">
            {plan.distinction.benefit}
          </p>
        </div>

        <div className="bg-inverse-surface rounded-2xl p-5 sm:p-6 mt-4">
          <div className="font-[family-name:var(--font-headline)] font-extrabold text-[10.5px] tracking-[1.3px] uppercase text-[#e3bfb3]">
            Klantresultaat
          </div>
          <p className="font-[family-name:var(--font-headline)] font-bold leading-[1.45] text-[15px] sm:text-[17px] text-[#fff8f6] mt-2">
            &ldquo;{plan.distinction.testimonial.quote}&rdquo;
          </p>
          <div className="text-[12px] text-[#e3bfb3] mt-2">
            {plan.distinction.testimonial.author}
          </div>
        </div>

        <p className="font-[family-name:var(--font-headline)] font-bold leading-[1.5] text-on-surface text-[16px] sm:text-[19px] mt-6 sm:mt-8 text-pretty">
          {plan.distinction.closing}
        </p>
      </section>

      {/* De tool */}
      <section className="w-full max-w-[680px] mx-auto px-5 sm:px-8 pt-9 sm:pt-[52px]">
        <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11px] tracking-[1.7px] text-primary uppercase">
          De tool
        </div>
        <h2 className="font-[family-name:var(--font-headline)] font-extrabold leading-[1.18] tracking-[-0.4px] mt-2.5 text-[24px] sm:text-[32px]">
          {plan.tool.title}
        </h2>
        <p className="text-[15px] leading-[1.7] text-on-surface-variant mt-3 text-pretty">
          {plan.tool.intro}
        </p>

        <div className="border border-outline-variant rounded-[18px] overflow-hidden mt-5">
          <div className="flex flex-col gap-[18px] p-5 sm:p-6">
            {plan.tool.fields.map((field, i) => (
              <div key={i}>
                <div className="font-[family-name:var(--font-headline)] font-bold text-sm text-on-surface mb-2">
                  {field}
                </div>
                <div className="border-b border-outline-variant h-5" />
                <div className="border-b border-outline-variant h-[26px]" />
                <div className="border-b border-outline-variant h-[26px]" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-container-low border border-outline-variant rounded-[18px] p-5 sm:p-6 mt-4">
          <div className="font-[family-name:var(--font-headline)] font-extrabold text-[15px] text-primary-dark">
            {plan.tool.sentences.title}
          </div>
          <p className="text-sm leading-[1.6] text-on-surface-variant mt-1.5 mb-4 text-pretty">
            {plan.tool.sentences.subtitle}
          </p>
          <div className="flex flex-col gap-4">
            {plan.tool.sentences.items.map((item, i) => (
              <div key={i}>
                <div className="font-[family-name:var(--font-headline)] font-bold text-sm text-on-surface mb-2">
                  {i + 1}. {item}
                </div>
                <div className="border-b border-outline-variant h-5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Belofte / CTA */}
      <section className="w-full max-w-[680px] mx-auto px-5 sm:px-8 pt-9 sm:pt-[52px]">
        <div className="border-t border-outline-variant pt-6 sm:pt-8">
          <div className="font-[family-name:var(--font-headline)] font-extrabold leading-[1.25] text-on-surface text-[20px] sm:text-[25px] text-balance">
            Ik heb hier een belofte over gemaakt
          </div>
          <p className="text-[15px] leading-[1.7] text-on-surface-variant mt-2.5 text-pretty">
            Vier jaar geleden hielp Tom mij toen ik er zelf niet uitkwam. Door
            die ervaring beloofde ik mezelf: kan ik iemand helpen, dan doe ik
            dat, zonder aanbod erachter. Kom je er niet uit? App me je
            opdracht, hoe uitgebreider hoe beter. Benieuwd of MOVE bij je
            past? Plan dan een intakegesprek.
          </p>

          <div className="flex flex-wrap gap-2.5 mt-5">
            <a
              href={waHref(plan.typeName)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex-1 basis-[260px] inline-flex items-center justify-center gap-2.5 min-h-[52px] px-5 rounded-xl text-white font-[family-name:var(--font-headline)] font-bold text-[15px]"
            >
              <svg
                viewBox="0 0 24 24"
                width="21"
                height="21"
                fill="currentColor"
                aria-hidden="true"
                className="shrink-0"
              >
                <path d="M19.05 4.91A9.82 9.82 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.91-7.01zM12.05 20.15h-.01c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.24 8.24 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.24-8.23 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.69 8.22-8.21 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.66.81-.81.97-.15.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.3.37-.44.12-.15.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.56-1.35-.77-1.84-.2-.48-.41-.42-.56-.42-.15 0-.31-.02-.48-.02s-.44.06-.67.31c-.23.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.22-.17-.47-.29z" />
              </svg>
              Kun je me even verder helpen?
            </a>
            <Link
              href="/intake"
              className="flex-1 basis-[200px] inline-flex items-center justify-center min-h-[52px] px-5 rounded-xl border-[1.5px] border-primary text-primary font-[family-name:var(--font-headline)] font-bold text-[15px]"
            >
              Plan een intakegesprek
            </Link>
          </div>

          <div className="mt-5">
            <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11.5px] tracking-[1.2px] text-primary-dark uppercase mb-1">
              Wat je terugkrijgt
            </div>
            <div className="text-[15px] leading-[1.6] text-on-surface-variant">
              Binnen één werkdag een persoonlijk bericht van mij, geen
              automatische reactie.
            </div>
            <div className="text-[15px] leading-[1.6] text-on-surface-variant">
              Ik benoem wat er opvalt en waar het in de praktijk vastloopt.
            </div>
          </div>

          <p className="text-sm leading-[1.6] text-on-surface-variant mt-4">
            Liever mailen?{" "}
            <a href="mailto:rick@rickvianen.nl" className="text-primary font-medium">
              rick@rickvianen.nl
            </a>
            . Ik lees elke mail zelf.
          </p>
        </div>
      </section>

      {/* Bio + footer */}
      <section className="w-full max-w-[680px] mx-auto px-5 sm:px-8 pt-9 sm:pt-12">
        <div className="border-t border-outline-variant pt-6 sm:pt-7 flex flex-wrap gap-[18px] items-center">
          <Image
            src="/images/quiz-actieplan-rick-portrait.jpg"
            alt="Rick Vianen"
            width={88}
            height={88}
            className="w-[88px] h-[88px] rounded-full object-cover shrink-0"
            style={{ objectPosition: "50% 18%" }}
          />
          <div className="flex-1 basis-[240px]">
            <div className="font-[family-name:var(--font-headline)] font-extrabold text-base">
              Rick Vianen
            </div>
            <div className="text-[13px] text-outline mt-0.5">
              Oprichter van MOVE
            </div>
          </div>
        </div>
        <p className="text-sm leading-[1.7] text-on-surface-variant mt-3.5 text-pretty">
          Vijf jaar geleden dacht hij dat mensen die een IRONMAN doen niet
          goed bij hun hoofd zijn. Op 17 augustus 2025 finishte hij zijn
          eerste in Kopenhagen in 9:53:14. Zelf gecoacht door Dusan Djukich en
          getraind door Mike van den Breul, deelt hij vanuit die ervaring en
          het begeleiden van ruim 150 professionals tools als deze, die je
          direct kunt toepassen.
        </p>
        <div className="flex items-center justify-between gap-4 mt-7 sm:mt-9">
          <div className="font-[family-name:var(--font-headline)] font-semibold text-[10px] tracking-[1.4px] text-outline uppercase">
            © MOVE · Rick Vianen
          </div>
          <Image
            src="/images/quiz-actieplan-move-logo.png"
            alt="MOVE"
            width={56}
            height={24}
            className="w-14 h-auto opacity-65"
          />
        </div>
      </section>
    </div>
  );
}
