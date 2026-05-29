import type { Metadata } from "next";
import Image from "next/image";
import { KlaviyoForm } from "@/components/klaviyo-form";

export const metadata: Metadata = {
  title: "Wachtlijst | MOVE Coaching",
  description:
    "Schrijf je in voor de wachtlijst van MOVE Coaching. Als er een plek vrijkomt, ben jij de eerste die het weet.",
};

export default function WachtlijstPage() {
  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <section className="gradient-hero pt-36 pb-16 px-8 md:px-16">
        <div className="max-w-2xl mx-auto text-center">
          <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
            Beperkte plekken
          </span>
          <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight mb-4">
            Zet je op de wachtlijst.
          </h1>
          <p className="text-on-surface-variant text-lg leading-relaxed">
            MOVE werkt in kleine groepen van maximaal 8 professionals. Zodra er een plek vrijkomt in het volgende cohort, ben jij de eerste die het weet.
          </p>
        </div>
      </section>

      <section className="py-12 px-8 md:px-16">
        <div className="max-w-2xl mx-auto">

          {/* Rick intro */}
          <div className="flex items-center gap-4 p-4 bg-surface-container-low rounded-xl mb-10">
            <Image
              src="/images/rick-square.png"
              alt="Rick Vianen"
              width={48}
              height={48}
              className="rounded-full object-cover shrink-0"
            />
            <div>
              <p className="font-bold text-sm">Rick Vianen</p>
              <p className="text-on-surface-variant text-sm">
                "Ik houd de groepen klein zodat iedereen de aandacht krijgt die hij verdient. Kleine groep, groot verschil."
              </p>
            </div>
          </div>

          {/* What to expect */}
          <div className="space-y-3 mb-10">
            {[
              "Je krijgt als eerste bericht zodra er een plek vrijkomt",
              "Geen verplichtingen, geen verkooppitch",
              "Desgewenst plannen we alvast een vrijblijvend kennismakingsgesprek in",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-primary text-xl mt-0.5 shrink-0"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  check_circle
                </span>
                <p className="text-on-surface-variant leading-relaxed">{item}</p>
              </div>
            ))}
          </div>

          {/* Klaviyo form */}
          <div className="bg-surface-container-low rounded-2xl p-8">
            <h2 className="font-[family-name:var(--font-headline)] text-xl font-black tracking-tight mb-2">
              Schrijf je in
            </h2>
            <p className="text-on-surface-variant text-sm mb-6">
              Vul je gegevens in en we nemen contact op zodra er ruimte is.
            </p>
            <KlaviyoForm formId="VQ9LBc" />
          </div>

        </div>
      </section>
    </div>
  );
}
