import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afspraak bevestigd | MOVE Coaching",
  description:
    "Je afspraak is ingepland. Vul het intakeformulier in voor het gesprek.",
};

export default function IntakeBedanktPage() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="pt-40 pb-8 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
            <span
              className="material-symbols-outlined text-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-headline)] text-3xl md:text-4xl font-black tracking-tight mb-4">
            Afspraak ingepland,{" "}
            <span className="text-primary">één stap nog</span>
          </h1>
          <p className="text-on-surface-variant leading-relaxed mb-4">
            Je ontvangt een bevestiging per e-mail met alle details.
          </p>
          <div className="bg-surface-container-low border border-outline-variant rounded-xl p-5 mb-2">
            <p className="font-bold mb-1">Vul het intakeformulier in vóór het gesprek</p>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-3">
              Zonder ingevuld formulier kan het gesprek niet doorgaan. Het duurt
              ongeveer 5 minuten en helpt Rick om je situatie goed te begrijpen,
              zodat je in 30 minuten echt verder komt.
            </p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Je vindt ook een link naar dit formulier in de bevestigingsmail. Heb je nu even
              de tijd? Vul het dan meteen hieronder in. Zo niet, geen probleem, je kunt het
              altijd later via de mail doen.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 px-8 md:px-16 mb-12">
        <div className="max-w-3xl mx-auto">
          <iframe
            src="https://plucky-cardigan-72d.notion.site/ebd//ae70e1a2805f82c3a19d8164a3a6b136"
            width="100%"
            height="600"
            frameBorder="0"
            allowFullScreen
            className="w-full rounded-xl shadow-lg block"
            title="Intakeformulier"
          />
        </div>
      </section>
    </div>
  );
}
