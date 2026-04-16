"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="p-8 bg-surface-container rounded-xl">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center text-left cursor-pointer"
            >
              <span className="font-bold text-lg pr-4">{item.question}</span>
              <span
                className={`material-symbols-outlined text-primary transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            {isOpen && (
              <div className="mt-4 text-on-surface-variant leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
