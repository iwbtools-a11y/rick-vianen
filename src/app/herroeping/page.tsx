import type { Metadata } from "next";
import { HerroepingClient } from "./herroeping-client";

export const metadata: Metadata = {
  title: "Herroepingsrecht uitoefenen | MOVE Coaching",
  description:
    "Maak gebruik van je wettelijk herroepingsrecht. Vul het formulier in om je aankoop bij MOVE Coaching te annuleren.",
};

export default function HerroepingPage() {
  return <HerroepingClient />;
}
