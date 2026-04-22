"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      // Show after scrolling past ~600px (roughly past hero)
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-16 left-4 right-4 z-40 animate-slide-up">
      <Link
        href="/intake"
        className="flex items-center justify-center gap-2 bg-primary text-white font-bold text-sm py-3.5 rounded-xl shadow-lg w-full"
      >
        <span className="material-symbols-outlined text-lg">calendar_today</span>
        Plan een Gratis Gesprek
      </Link>
    </div>
  );
}
