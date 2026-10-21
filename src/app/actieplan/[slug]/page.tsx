import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { actieplannen, getActieplan } from "@/content/actieplannen";
import { ActieplanOnepager } from "@/components/actieplan-onepager";

export function generateStaticParams() {
  return actieplannen.map((plan) => ({ slug: plan.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const plan = getActieplan(slug);

  if (!plan) {
    return { title: "Niet gevonden | MOVE Coaching" };
  }

  return {
    title: `Jouw actieplan: ${plan.typeName} | MOVE Coaching`,
    description: plan.forWhom,
  };
}

export default async function ActieplanPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plan = getActieplan(slug);

  if (!plan) {
    notFound();
  }

  return <ActieplanOnepager plan={plan} />;
}
