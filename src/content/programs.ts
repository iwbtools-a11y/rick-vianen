export interface Program {
  slug: string;
  title: string;
  description: string;
  price: number;
  stripePriceId: string;
  features: string[];
  image?: string;
}

export const programs: Program[] = [
  {
    slug: "voorbeeld-programma",
    title: "Voorbeeld Programma",
    description: "Dit is een placeholder programma. Vervang met echte content.",
    price: 297,
    stripePriceId: "price_placeholder",
    features: [
      "Feature 1",
      "Feature 2",
      "Feature 3",
    ],
  },
];
