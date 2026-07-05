import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda | MOVE Coaching",
  description:
    "Bekijk de beschikbaarheid van Rick Vianen en plan je kennismakingsgesprek.",
};

export default function BookingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="pt-40 pb-8 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tight mb-3">
            Agenda van <span className="text-primary">Rick</span>
          </h1>
          <p className="text-on-surface-variant leading-relaxed">
            Bekijk de beschikbaarheid en plan je kennismakingsgesprek.
          </p>
        </div>
      </section>

      <section className="py-8 mb-12">
        <div className="bg-white shadow-lg overflow-hidden">
          <iframe
            src="https://calendly.com/rick-rickvianen/kennismaking"
            style={{ border: 0 }}
            width="100%"
            height="800"
            frameBorder="0"
            title="Plan een kennismakingsgesprek met Rick Vianen"
            className="w-full min-h-[800px] block"
          />
        </div>
      </section>
    </div>
  );
}
