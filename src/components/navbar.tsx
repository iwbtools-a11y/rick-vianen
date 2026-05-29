"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/programma", label: "Programma" },
  { href: "/prijs", label: "Prijs" },
  { href: "/challenge", label: "Challenge" },
  { href: "/over-rick-vianen", label: "Over Rick" },
  { href: "/blog", label: "Blog" },
];

const mobileNavLinks = [
  { href: "/", label: "Home", icon: "home" },
  { href: "/programma", label: "Programma", icon: "calendar_today" },
  { href: "/prijs", label: "Prijs", icon: "payments" },
  { href: "/challenge", label: "Challenge", icon: "bolt" },
  { href: "/over-rick-vianen", label: "Over Rick", icon: "person" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Nav */}
      <nav className="fixed top-0 w-full z-50 glass-nav">
        <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <Link href="/" className="block">
            <Image
              src="/images/move-logo.png"
              alt="MOVE Coaching"
              width={140}
              height={48}
              className="h-15 w-auto"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`font-[family-name:var(--font-headline)] font-bold text-sm tracking-tight transition-colors duration-300 ${
                    isActive
                      ? "text-primary border-b-2 border-primary pb-1"
                      : "text-on-surface hover:text-primary link-hover"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/intake"
              className="btn-primary px-6 py-2.5 text-sm font-bold rounded-lg"
            >
              Plan gesprek
            </Link>
            {/* Mobile hamburger */}
            <button
              className="md:hidden text-on-surface"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile dropdown menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-nav border-t border-outline-variant/20 px-8 py-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 font-[family-name:var(--font-headline)] font-bold text-sm tracking-tight ${
                    isActive ? "text-primary" : "text-on-surface"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        )}
      </nav>

      {/* Mobile Bottom Nav */}
      <div className="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-2 pb-6 pt-2 z-50 glass-nav">
        {mobileNavLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center justify-center px-3 py-1 rounded-xl transition-colors ${
                isActive
                  ? "text-primary bg-surface-container"
                  : "text-on-surface opacity-60"
              }`}
            >
              <span
                className="material-symbols-outlined text-xl"
                style={
                  isActive
                    ? { fontVariationSettings: "'FILL' 1" }
                    : undefined
                }
              >
                {link.icon}
              </span>
              <span className="text-[10px] font-bold uppercase mt-1">
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
