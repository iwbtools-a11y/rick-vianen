import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agenda | MOVE Coaching",
  description:
    "Bekijk de beschikbaarheid van Rick Vianen en plan je kennismakingsgesprek.",
};

export default function BookingPage() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="pt-32 pb-8 px-8 md:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tight mb-3">
            Agenda van <span className="text-primary">Rick</span>
          </h1>
          <p className="text-on-surface-variant leading-relaxed">
            Bekijk de beschikbaarheid en plan je kennismakingsgesprek.
          </p>
        </div>
      </section>

      <section className="py-8 px-8 md:px-16 mb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl border border-outline-variant/10 overflow-hidden shadow-lg">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ2eqD3m7wS_HD0RM79RIVgHR6abpGMVc_7XjWrq3BOzibYHapn64_O2HnKZZxyQDuKj9DK9NGU0?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder="0"
              title="Plan een kennismakingsgesprek met Rick Vianen"
              className="w-full min-h-[600px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
