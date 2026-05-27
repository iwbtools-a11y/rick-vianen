import type { Metadata } from "next";
import Image from "next/image";
import { KlaviyoForm } from "@/components/klaviyo-form";

export const metadata: Metadata = {
  title: "Intake | MOVE Coaching",
  description:
    "Plan een kennismakingsgesprek met Rick Vianen. 30 minuten, geen pitch — eerlijk advies.",
};

export default function IntakePage() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="pt-32 pb-8 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tight mb-3">
            Plan een <span className="text-primary">kennismakingsgesprek</span>
          </h1>
          <p className="text-on-surface-variant leading-relaxed mb-6">
            30 minuten. Geen pitch. Rick benoemt eerlijk wat hij ziet &mdash; daarna weet je het.
          </p>
          <div className="inline-flex items-center gap-3 p-3 bg-surface-container-low rounded-xl">
            <Image
              src="/images/rick-square.png"
              alt="Rick Vianen"
              width={40}
              height={40}
              className="rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-sm">Rick Vianen</p>
              <p className="text-xs text-on-surface-variant">
                Persoonlijke review binnen 48 uur
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <KlaviyoForm formId="Xq59gb" redirectOnSubmit="/intake/booking" />
        </div>
      </section>
    </div>
  );
}
