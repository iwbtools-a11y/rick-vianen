import type { Metadata } from "next";
import { QuizClient } from "./quiz-client";

export const metadata: Metadata = {
  title: "Doe de test: ben jij klaar voor je volgende stap? | Rick Vianen",
  description:
    "95% van de mensen stelt elk jaar dezelfde doelen. En staat een jaar later nog op dezelfde plek. Ontdek in 2 minuten waar jouw groei écht zit.",
};

export default function QuizPage() {
  return <QuizClient />;
}
