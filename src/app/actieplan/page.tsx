import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { actieplannen } from "@/content/actieplannen";

export const metadata: Metadata = {
  title: "Actieplannen | MOVE Coaching",
  description:
    "De actieplan-kennisbank van Rick Vianen: praktische actieplannen om direct mee aan de slag te gaan.",
};

export default function ActieplanOverviewPage() {
  return (
    <div className="min-h-screen bg-surface pb-16">
      <header className="w-full max-w-[880px] mx-auto px-5 sm:px-8 pt-8 sm:pt-9">
        <Image
          src="/images/quiz-actieplan-move-logo.png"
          alt="MOVE"
          width={96}
          height={40}
          className="w-20 sm:w-24 h-auto"
          priority
        />
      </header>

      <section className="w-full max-w-[880px] mx-auto px-5 sm:px-8 pt-8 sm:pt-12">
        <div className="font-[family-name:var(--font-headline)] font-extrabold text-[11px] tracking-[1.7px] text-primary uppercase">
          Kennisbank
        </div>
        <h1 className="font-[family-name:var(--font-headline)] font-extrabold leading-[1.12] tracking-[-0.6px] mt-3 text-[30px] sm:text-[44px] text-balance">
          Actieplannen,
          <br />
          direct aan de slag.
        </h1>
        <p className="text-[15px] sm:text-[17px] leading-[1.75] text-on-surface-variant mt-3.5 sm:mt-5 max-w-[560px]">
          Een groeiende verzameling actieplannen van Rick Vianen: elk een persoonlijke opdracht plus een kort verhaal waarmee je vandaag nog in actie komt. Kies hieronder het actieplan dat bij jou past.
        </p>
      </section>

      <section className="w-full max-w-[880px] mx-auto px-5 sm:px-8 pt-10 sm:pt-14 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
        {actieplannen.map((plan) => (
          <Link
            key={plan.slug}
            href={`/actieplan/${plan.slug}`}
            className="group block rounded-2xl border border-outline-variant overflow-hidden bg-surface-container-lowest card-hover"
          >
            <div className="relative w-full aspect-[16/10]">
              <Image
                src={plan.hero.src}
                alt={plan.hero.alt}
                fill
                className="object-cover"
                style={{ objectPosition: "50% 45%" }}
              />
              <div
                className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0))",
                }}
              />
              <div className="absolute left-4 bottom-4 right-4">
                <div className="font-[family-name:var(--font-headline)] font-extrabold text-[10.5px] tracking-[1.3px] uppercase text-white/70">
                  {plan.typeLabel}
                </div>
                <div className="font-[family-name:var(--font-headline)] font-extrabold text-white text-xl">
                  De {plan.typeName}
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-[14px] leading-[1.6] text-on-surface-variant">
                {plan.headingLines[0]} {plan.headingLines[1]}
              </p>
              <div className="mt-4 inline-flex items-center gap-1.5 text-primary font-[family-name:var(--font-headline)] font-bold text-sm group-hover:text-primary-dark transition-colors">
                Bekijk het actieplan
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
}
