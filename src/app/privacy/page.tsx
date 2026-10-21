import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacybeleid | MOVE Coaching",
  description: "Privacybeleid van MOVE Coaching by Rick Vianen.",
};

export default function PrivacyPage() {
  return (
    <div className="pb-24 md:pb-0">
      <section className="pt-40 pb-20 px-8 md:px-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-[family-name:var(--font-headline)] text-5xl md:text-7xl font-black tracking-tighter leading-[0.9] mb-12">
            Privacy<span className="text-primary">beleid</span>
          </h1>

          <p className="text-on-surface-variant text-sm mb-12">
            Laatst bijgewerkt: april 2026
          </p>

          <div className="space-y-10 text-on-surface-variant leading-relaxed">
            {/* 1 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                1. Wie zijn wij?
              </h2>
              <p>
                MOVE Coaching is een handelsnaam van Rick Vianen, gevestigd te
                Utrecht, Nederland. KvK-nummer: 94159475.
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <strong className="text-on-surface">Contactpersoon:</strong>{" "}
                  Rick Vianen
                </li>
                <li>
                  <strong className="text-on-surface">E-mail:</strong>{" "}
                  <a
                    href="mailto:rick@rickvianen.nl"
                    className="text-primary hover:underline"
                  >
                    rick@rickvianen.nl
                  </a>
                </li>
                <li>
                  <strong className="text-on-surface">Telefoon:</strong>{" "}
                  +31 6 2052 3549
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                2. Welke gegevens verzamelen wij?
              </h2>
              <p className="mb-4">
                Wij verzamelen persoonsgegevens wanneer je:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Het intake formulier op onze website invult</li>
                <li>Je inschrijft voor onze nieuwsbrief</li>
                <li>Contact met ons opneemt via e-mail of telefoon</li>
                <li>Deelneemt aan een MOVE programma</li>
              </ul>
              <p className="mt-4">
                De gegevens die wij kunnen verzamelen zijn: naam,
                e-mailadres, telefoonnummer, leeftijd, beroep/functie,
                bedrijfsnaam, sportervaring, en informatie die je zelf deelt
                in het intake formulier.
              </p>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                3. Waarvoor gebruiken wij je gegevens?
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Om contact met je op te nemen naar aanleiding van je intake
                  aanvraag
                </li>
                <li>Om je te informeren over MOVE programma&apos;s en diensten</li>
                <li>
                  Om onze dienstverlening te verbeteren en af te stemmen op
                  jouw behoeften
                </li>
                <li>Om te voldoen aan wettelijke verplichtingen</li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                4. Hoe lang bewaren wij je gegevens?
              </h2>
              <p>
                Wij bewaren je persoonsgegevens niet langer dan strikt nodig is
                om de doelen te realiseren waarvoor je gegevens worden
                verzameld. Intake formuliergegevens worden maximaal 2 jaar
                bewaard. Klantgegevens van deelnemers worden bewaard gedurende
                de looptijd van het traject plus 7 jaar voor de
                belastingadministratie.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                5. Delen wij je gegevens met derden?
              </h2>
              <p>
                Wij delen je persoonsgegevens alleen met derden als dit nodig
                is voor de uitvoering van onze diensten, of om te voldoen aan
                een wettelijke verplichting. Wij verkopen je gegevens nooit aan
                derden. Wij kunnen gebruik maken van diensten van derden voor
                e-mailmarketing, betalingsverwerking en planning. Deze
                partijen verwerken gegevens uitsluitend in onze opdracht.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                6. Cookies
              </h2>
              <p>
                Onze website maakt gebruik van functionele cookies om de
                website goed te laten functioneren. Wij gebruiken geen
                tracking cookies of advertentiecookies zonder je
                uitdrukkelijke toestemming.
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                7. Jouw rechten
              </h2>
              <p className="mb-4">
                Je hebt het recht om je persoonsgegevens in te zien, te
                corrigeren of te verwijderen. Daarnaast heb je het recht om je
                toestemming voor de gegevensverwerking in te trekken of bezwaar
                te maken tegen de verwerking.
              </p>
              <p>
                Je kunt een verzoek tot inzage, correctie, verwijdering of
                gegevensoverdracht sturen naar{" "}
                <a
                  href="mailto:rick@rickvianen.nl"
                  className="text-primary hover:underline"
                >
                  rick@rickvianen.nl
                </a>
                . We reageren zo snel mogelijk, maar uiterlijk binnen vier
                weken.
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                8. Beveiliging
              </h2>
              <p>
                Wij nemen de bescherming van jouw gegevens serieus en nemen
                passende maatregelen om misbruik, verlies, onbevoegde toegang,
                ongewenste openbaarmaking en ongeoorloofde wijziging tegen te
                gaan.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-[family-name:var(--font-headline)] text-xl font-bold text-on-surface mb-4">
                9. Klachten
              </h2>
              <p>
                Als je een klacht hebt over de verwerking van je
                persoonsgegevens, neem dan direct contact met ons op via{" "}
                <a
                  href="mailto:rick@rickvianen.nl"
                  className="text-primary hover:underline"
                >
                  rick@rickvianen.nl
                </a>
                . Je hebt altijd het recht een klacht in te dienen bij de
                Autoriteit Persoonsgegevens (
                <a
                  href="https://autoriteitpersoonsgegevens.nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  autoriteitpersoonsgegevens.nl
                </a>
                ).
              </p>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-outline-variant/30">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:text-primary-dark transition-colors group"
            >
              <span className="material-symbols-outlined text-lg transition-transform group-hover:-translate-x-1">
                arrow_back
              </span>
              Terug naar Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
