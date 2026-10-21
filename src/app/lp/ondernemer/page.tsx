import type { Metadata } from "next";
import { OndernemerPageContent } from "@/components/ondernemer-page-content";

export const metadata: Metadata = {
  title: "MOVE Programma voor Ondernemers met een Gezondheidsdoel | MOVE Coaching",
  description:
    "Je bedrijf draait goed, maar je energie is weg. MOVE geeft ambitieuze ondernemers de structuur, het systeem en de groep om gezondheid weer op de eerste plek te zetten. 100 dagen. Meetbaar resultaat. Plan een gesprek met Rick.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function OndernemerLandingPage() {
  return <OndernemerPageContent variant="landing" />;
}
