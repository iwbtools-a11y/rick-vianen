"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { KlaviyoForm } from "@/components/klaviyo-form";

export function Footer() {
  const pathname = usePathname();

  // /lp/* routes are standalone ad landing pages: no site footer, single conversion path.
  if (pathname?.startsWith("/lp/")) {
    return null;
  }

  return (
    <footer className="bg-on-surface text-surface py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-12 md:gap-20">
        <div className="md:pr-8">
          <Image
            src="/images/move-logo.png"
            alt="MOVE Coaching"
            width={140}
            height={56}
            className="h-10 w-auto mb-8 brightness-0 invert"
          />
          <p className="text-surface-container-highest/60 leading-relaxed text-sm mb-6">
            MOVE cre&euml;ert beweging, in je lijf, je hoofd en je
            leven. Voor professionals die klaar zijn met alleen beginnen.
          </p>
          <div className="flex items-center gap-4 mb-8">
            <a
              href="https://www.youtube.com/channel/UCjTgHDT4u4iPEn8Vg2LOFvg"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-white hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a2.997 2.997 0 0 0-2.107-2.117C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.391.524A2.997 2.997 0 0 0 .502 6.186 31.03 31.03 0 0 0 0 12a31.03 31.03 0 0 0 .502 5.814 2.997 2.997 0 0 0 2.107 2.117c1.886.524 9.391.524 9.391.524s7.505 0 9.391-.524a2.997 2.997 0 0 0 2.107-2.117A31.03 31.03 0 0 0 24 12a31.03 31.03 0 0 0-.502-5.814zM9.75 15.568V8.432L15.818 12l-6.068 3.568z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/move-mindset-sport-business/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-white hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/rick.move/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-white hover:text-primary transition-colors"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
              </svg>
            </a>
          </div>
          <KlaviyoForm formId="RPkNF4" />
        </div>

        <div>
          <h5 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-8 uppercase tracking-widest text-primary">
            Pagina&apos;s
          </h5>
          <ul className="space-y-4 text-surface-container-highest">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/programma" className="hover:text-primary transition-colors">
                Programma
              </Link>
            </li>
            <li>
              <Link href="/prijs" className="hover:text-primary transition-colors">
                Prijs
              </Link>
            </li>
            <li>
              <Link href="/over-rick-vianen" className="hover:text-primary transition-colors">
                Over Rick
              </Link>
            </li>
            <li>
              <Link href="/content" className="hover:text-primary transition-colors">
                Content
              </Link>
            </li>
            <li>
              <Link href="/intake" className="hover:text-primary transition-colors">
                Intake
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-8 uppercase tracking-widest text-primary">
            Contact
          </h5>
          <ul className="space-y-4 text-surface-container-highest">
            <li>
              <a
                href="tel:+31620523549"
                className="hover:text-primary transition-colors"
              >
                +31 6 2052 3549
              </a>
            </li>
            <li>
              <a
                href="mailto:rick@rickvianen.nl"
                className="hover:text-primary transition-colors"
              >
                rick@rickvianen.nl
              </a>
            </li>
            <li className="text-surface-container-highest/60">
              Utrecht, Nederland
            </li>
            <li className="text-surface-container-highest/60 text-sm">
              KvK: 94159475
            </li>
            <li className="text-surface-container-highest/60 text-sm">
              BTW: NL005069626B08
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-8 uppercase tracking-widest text-primary">
            Links
          </h5>
          <ul className="space-y-4 text-surface-container-highest">
            <li>
              <Link href="/veelgestelde-vragen" className="hover:text-primary transition-colors">
                Veelgestelde vragen
              </Link>
            </li>
            <li>
              <Link href="/wachtlijst" className="hover:text-primary transition-colors">
                Wachtlijst
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacybeleid
              </Link>
            </li>
            <li>
              <Link href="/challenge/ondernemer" className="hover:text-primary transition-colors">
                MOVE Challenge ondernemers
              </Link>
            </li>
            <li>
              <Link href="/programma/ondernemer" className="hover:text-primary transition-colors">
                MOVE Programma voor ondernemers
              </Link>
            </li>
            <li>
              <Link href="/herroeping" className="hover:text-primary transition-colors">
                Herroepingsrecht
              </Link>
            </li>
            <li>
              <Link href="/intake" className="hover:text-primary transition-colors">
                Plan een gesprek
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-surface-container-highest/10 text-center text-xs text-surface-container-highest/40">
        &copy; {new Date().getFullYear()} MOVE Coaching by Rick Vianen. Alle
        rechten voorbehouden.
      </div>
    </footer>
  );
}
