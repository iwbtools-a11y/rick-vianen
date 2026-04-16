import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-on-surface text-surface py-20 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        <div>
          <div className="text-3xl font-black text-primary font-[family-name:var(--font-headline)] uppercase tracking-tighter mb-8">
            MOVE
          </div>
          <p className="text-surface-container-highest/60 leading-relaxed text-sm">
            MOVE cre&euml;ert beweging &mdash; in je lijf, je hoofd en je
            leven. Voor professionals die klaar zijn met alleen beginnen.
          </p>
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
                Tarieven
              </Link>
            </li>
            <li>
              <Link href="/over-rick-vianen" className="hover:text-primary transition-colors">
                Over Rick
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-primary transition-colors">
                Gratis Waarde
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
          </ul>
        </div>

        <div>
          <h5 className="font-[family-name:var(--font-headline)] font-bold text-lg mb-8 uppercase tracking-widest text-primary">
            Links
          </h5>
          <ul className="space-y-4 text-surface-container-highest">
            <li>
              <Link href="/privacy" className="hover:text-primary transition-colors">
                Privacybeleid
              </Link>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/rick-vianen-481a73179/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/rick-rickvianen/strategiegespek"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors"
              >
                Plan een Gesprek
              </a>
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
