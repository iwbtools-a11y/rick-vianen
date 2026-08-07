import type { Metadata } from "next";
import { QuizClient } from "./quiz-client";

export const metadata: Metadata = {
  title: "Ondernemen kost energie: doe de test | Rick Vianen",
  description:
    "Als ondernemer geef je alles, maar je energie is niet onbeperkt. Ontdek in 2 minuten waar die weglekt en wat jou weer scherp en sterk zet.",
};

export default function QuizPage() {
  return <QuizClient />;
}
