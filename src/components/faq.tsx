"use client";

import { useState } from "react";

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

export function Faq({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className={`p-6 md:p-8 bg-white rounded-2xl border transition-all duration-300 ${
              isOpen
                ? "border-primary/20 shadow-md"
                : "border-outline-variant/10 hover:border-outline-variant/30"
            }`}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full flex justify-between items-center text-left cursor-pointer group"
            >
              <span className="font-bold text-lg pr-4 group-hover:text-primary transition-colors duration-300">
                {item.question}
              </span>
              <span
                className={`material-symbols-outlined text-primary transition-transform duration-300 shrink-0 ${
                  isOpen ? "rotate-180" : ""
                }`}
              >
                expand_more
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-on-surface-variant leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
