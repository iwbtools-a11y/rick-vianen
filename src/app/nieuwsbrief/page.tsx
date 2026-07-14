import type { Metadata } from "next";
import { KlaviyoForm } from "@/components/klaviyo-form";
import { SuppressKlaviyoPopup } from "./suppress-popup";

export const metadata: Metadata = {
  title: "Nieuwsbrief | MOVE Coaching",
  description:
    "Schrijf je in voor de MOVE nieuwsbrief en ontvang wekelijks inzichten over sport, mindset en business.",
};

export default function NieuwsbriefPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 pt-32 pb-16 md:pt-48 md:pb-32">
      <SuppressKlaviyoPopup />
      <KlaviyoForm formId="UmT95r" />
    </section>
  );
}
