import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bedankt | MOVE Coaching",
  description:
    "Je aanmelding is ontvangen. Rick neemt binnen 48 uur persoonlijk contact met je op.",
};

export default function BedanktPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-32 pb-24 md:pb-0">
      <div className="max-w-lg text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8">
          <span
            className="material-symbols-outlined text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>
        <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-6">
          Je gesprek is gepland!
        </h1>
        <p className="text-on-surface-variant text-lg leading-relaxed mb-4">
          Rick neemt persoonlijk contact met je op ter bevestiging.
          Je ontvangt een e-mail met de details.
        </p>
        <p className="text-on-surface-variant leading-relaxed mb-10">
          30 minuten. Geen pitch. Rick benoemt eerlijk wat hij ziet.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 btn-primary px-8 py-4 rounded-lg font-bold"
          >
            <span className="material-symbols-outlined text-xl">
              arrow_back
            </span>
            Terug naar home
          </Link>
          <Link
            href="/programma"
            className="inline-flex items-center justify-center gap-2 btn-secondary px-8 py-4 rounded-lg font-bold"
          >
            Bekijk het programma
          </Link>
        </div>
      </div>
    </div>
  );
}
