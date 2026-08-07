'use client';

import { useState } from 'react';

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

const pushDataLayer = (event: Record<string, unknown>) => {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(event);
};

const KLAVIYO_COMPANY_ID = 'YgCeNj';
const KLAVIYO_LIST_ID = 'UwGq3k';

const ACTIE_SLUG = 'gratis-move-4';
const ACTIE_LABEL = 'Gratis MOVE traject (4 winnaars)';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ActieForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [motivatie, setMotivatie] = useState('');
  const [akkoord, setAkkoord] = useState(false);
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  const submit = async () => {
    if (!name.trim()) {
      setError('Vul je voornaam in.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Vul een geldig e-mailadres in.');
      return;
    }
    if (!akkoord) {
      setError('Ga akkoord met de actievoorwaarden om mee te doen.');
      return;
    }
    setError('');
    setStatus('submitting');

    const profileAttributes: Record<string, unknown> = {
      email,
      first_name: name,
      properties: {
        actie: ACTIE_SLUG,
        actie_naam: ACTIE_LABEL,
        actie_motivatie: motivatie,
      },
    };
    if (phone.trim()) {
      profileAttributes.phone_number = phone.trim();
    }

    const payload = {
      data: {
        type: 'subscription',
        attributes: {
          custom_source: ACTIE_LABEL,
          profile: {
            data: {
              type: 'profile',
              attributes: profileAttributes,
            },
          },
        },
        relationships: {
          list: { data: { type: 'list', id: KLAVIYO_LIST_ID } },
        },
      },
    };

    try {
      await fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', revision: '2023-12-15' },
        body: JSON.stringify(payload),
      });
      pushDataLayer({ event: 'form_submit', form_id: 'actie_gratis_move' });
      setStatus('success');
    } catch (e) {
      console.warn('Klaviyo call failed:', e);
      setStatus('error');
      setError('Er ging iets mis bij het versturen. Probeer het nog eens.');
    }
  };

  if (status === 'success') {
    return (
      <div className="bg-white rounded-2xl p-10 text-center editorial-shadow">
        <span
          className="material-symbols-outlined text-primary text-5xl mb-4"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <h3 className="font-[family-name:var(--font-headline)] text-2xl font-black tracking-tight mb-2">
          Je doet mee!
        </h3>
        <p className="text-on-surface-variant leading-relaxed">
          Je inschrijving is binnen. Zodra de winnaars bekend zijn, hoor je van ons via e-mail.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 md:p-10 editorial-shadow">
      <div className="mb-5">
        <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant/70 mb-2">
          Voornaam
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jouw voornaam"
          autoComplete="given-name"
          className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-lg text-base text-on-surface placeholder-on-surface-variant/40 outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="mb-5">
        <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant/70 mb-2">
          E-mailadres
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jouw@email.nl"
          autoComplete="email"
          className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-lg text-base text-on-surface placeholder-on-surface-variant/40 outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="mb-5">
        <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant/70 mb-2">
          Telefoonnummer <span className="font-medium normal-case text-on-surface-variant/50">(optioneel)</span>
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="06 12345678"
          autoComplete="tel"
          className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-lg text-base text-on-surface placeholder-on-surface-variant/40 outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="mb-6">
        <label className="block text-[11px] font-bold uppercase tracking-[0.1em] text-on-surface-variant/70 mb-2">
          Waarom wil jij meedoen?
        </label>
        <textarea
          value={motivatie}
          onChange={(e) => setMotivatie(e.target.value)}
          placeholder="Vertel kort waarom dit traject nu voor jou het verschil kan maken."
          rows={3}
          className="w-full px-4 py-3.5 bg-surface-container-low border border-outline-variant rounded-lg text-base text-on-surface placeholder-on-surface-variant/40 outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <label className="flex items-start gap-3 mb-6 cursor-pointer">
        <input
          type="checkbox"
          checked={akkoord}
          onChange={(e) => setAkkoord(e.target.checked)}
          className="mt-1 w-4 h-4 accent-[var(--color-primary)] shrink-0"
        />
        <span className="text-sm text-on-surface-variant leading-relaxed">
          Ik ga akkoord met de actievoorwaarden. Ben ik geen winnaar, dan blijf ik op de mailinglijst van Rick Vianen staan en kan ik me altijd afmelden.
        </span>
      </label>

      {error && <p className="text-sm text-red-500 mb-4">{error}</p>}

      <button
        onClick={submit}
        disabled={status === 'submitting'}
        className="btn-primary w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === 'submitting' ? 'Even geduld…' : 'Doe mee met de actie'}
        {status !== 'submitting' && (
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        )}
      </button>
    </div>
  );
}
