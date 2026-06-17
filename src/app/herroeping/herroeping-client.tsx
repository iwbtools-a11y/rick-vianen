'use client';

import { useState } from 'react';
import Link from 'next/link';

export function HerroepingClient() {
  const [naam, setNaam] = useState('');
  const [email, setEmail] = useState('');
  const [product, setProduct] = useState('');
  const [aankoopdatum, setAankoopdatum] = useState('');
  const [toelichting, setToelichting] = useState('');
  const [bevestigd, setBevestigd] = useState(false);
  const [verzonden, setVerzonden] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!naam || !email || !product || !aankoopdatum || !bevestigd) {
      setError('Vul alle verplichte velden in en bevestig je herroeping.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Vul een geldig e-mailadres in.');
      return;
    }

    setError('');

    const body = [
      `Naam: ${naam}`,
      `E-mailadres: ${email}`,
      `Product / dienst: ${product}`,
      `Aankoopdatum: ${aankoopdatum}`,
      toelichting ? `Toelichting: ${toelichting}` : '',
      '',
      'Ik wil hiermee gebruikmaken van mijn wettelijk herroepingsrecht en verzoek de aankoop te annuleren en het betaalde bedrag terug te storten.',
    ].filter(Boolean).join('\n');

    const mailto = `mailto:rick@rickvianen.nl?subject=${encodeURIComponent(`Herroeping MOVE aankoop – ${naam}`)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    setVerzonden(true);
  };

  return (
    <div className="min-h-screen bg-surface pb-24">
      <div className="max-w-2xl mx-auto px-6 md:px-8 pt-36 pb-16">

        {/* Header */}
        <span className="inline-block px-3 py-1 bg-secondary-container/80 text-on-secondary-container font-bold text-xs uppercase tracking-widest rounded-full mb-6">
          Wettelijk recht
        </span>
        <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tighter text-on-surface mb-4">
          Herroepingsrecht uitoefenen
        </h1>
        <p className="text-on-surface-variant leading-relaxed mb-10">
          Als consument heb je het recht om een aankoop binnen <strong className="text-on-surface">14 dagen</strong> na de dag van aankoop zonder opgave van reden te annuleren. Vul het formulier in om dit recht uit te oefenen. Na het invullen opent je e-mailprogramma met een vooraf ingevuld bericht aan Rick.
        </p>

        {verzonden ? (
          /* Bevestiging */
          <div className="bg-surface-container-low rounded-2xl p-10 text-center border border-outline-variant/10">
            <span
              className="material-symbols-outlined text-5xl text-primary mb-4 block"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              mark_email_read
            </span>
            <h2 className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight text-on-surface mb-3">
              Je e-mailprogramma is geopend
            </h2>
            <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
              Het bericht is vooraf ingevuld. Controleer de gegevens en verzend de e-mail. Je ontvangt een bevestiging van Rick zodra je herroeping is verwerkt.
            </p>
            <p className="text-xs text-on-surface-variant/60 mb-8">
              Werkte de e-maillink niet? Stuur een e-mail handmatig naar{' '}
              <a href="mailto:rick@rickvianen.nl" className="text-primary font-bold underline">
                rick@rickvianen.nl
              </a>{' '}
              met je naam, e-mailadres en de aankoopdatum.
            </p>
            <Link href="/" className="text-primary font-bold text-sm inline-flex items-center gap-1.5 group link-hover">
              <span className="material-symbols-outlined text-base">arrow_back</span>
              Terug naar de homepage
            </Link>
          </div>
        ) : (
          /* Formulier */
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="naam">
                Naam <span className="text-primary">*</span>
              </label>
              <input
                id="naam"
                type="text"
                value={naam}
                onChange={e => setNaam(e.target.value)}
                placeholder="Voor- en achternaam"
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="email">
                E-mailadres <span className="text-primary">*</span>
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="jouw@emailadres.nl"
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="product">
                Gekocht product of dienst <span className="text-primary">*</span>
              </label>
              <select
                id="product"
                value={product}
                onChange={e => setProduct(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              >
                <option value="">Selecteer een product</option>
                <option value="MOVE Core">MOVE Core</option>
                <option value="MOVE Performance">MOVE Performance</option>
                <option value="MOVE Ultimate">MOVE Ultimate</option>
                <option value="MOVE the Challenge">MOVE the Challenge</option>
                <option value="Anders">Anders</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="aankoopdatum">
                Datum van aankoop <span className="text-primary">*</span>
              </label>
              <input
                id="aankoopdatum"
                type="date"
                value={aankoopdatum}
                onChange={e => setAankoopdatum(e.target.value)}
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-on-surface mb-2" htmlFor="toelichting">
                Toelichting <span className="text-on-surface-variant font-normal">(optioneel)</span>
              </label>
              <textarea
                id="toelichting"
                value={toelichting}
                onChange={e => setToelichting(e.target.value)}
                placeholder="Eventuele aanvullende informatie..."
                rows={4}
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 text-sm text-on-surface placeholder:text-on-surface-variant/40 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none"
              />
            </div>

            <label className="flex items-start gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={bevestigd}
                onChange={e => setBevestigd(e.target.checked)}
                className="mt-0.5 w-4 h-4 accent-primary shrink-0"
              />
              <span className="text-sm text-on-surface-variant leading-relaxed">
                Ik bevestig dat ik gebruik wil maken van mijn herroepingsrecht en de bovenstaande aankoop wil annuleren. <span className="text-primary">*</span>
              </span>
            </label>

            {error && (
              <p className="text-sm text-red-500 flex items-center gap-2">
                <span className="material-symbols-outlined text-base">error</span>
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full btn-primary py-4 rounded-xl font-bold text-base"
            >
              Herroeping indienen
            </button>

            <p className="text-xs text-on-surface-variant/60 text-center leading-relaxed">
              Na het klikken opent je e-mailprogramma met een vooraf ingevuld bericht. Verzend die e-mail om de herroeping definitief te maken. Je ontvangt binnen 2 werkdagen een bevestiging.
            </p>
          </form>
        )}

        {/* Wettelijke info */}
        <div className="mt-12 p-6 bg-surface-container-low rounded-xl border border-outline-variant/10">
          <h3 className="font-[family-name:var(--font-headline)] font-bold text-sm text-on-surface mb-3">
            Over het herroepingsrecht
          </h3>
          <ul className="space-y-2 text-xs text-on-surface-variant leading-relaxed">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-primary mt-0.5 shrink-0">info</span>
              De herroepingstermijn is 14 dagen vanaf de dag van aankoop.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-primary mt-0.5 shrink-0">info</span>
              Je hoeft geen reden op te geven voor je herroeping.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-primary mt-0.5 shrink-0">info</span>
              Terugbetaling vindt plaats binnen 14 dagen na ontvangst van je herroeping, via de originele betaalmethode.
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-sm text-primary mt-0.5 shrink-0">info</span>
              Vragen? Neem contact op via{' '}
              <a href="mailto:rick@rickvianen.nl" className="text-primary font-bold">rick@rickvianen.nl</a>.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
