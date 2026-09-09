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

export function GoldenTicketForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [motivation, setMotivation] = useState('');
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const submit = async () => {
    if (!name.trim()) {
      setFormError('Vul je naam in.');
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Vul een geldig e-mailadres in.');
      return;
    }
    if (!phone.trim()) {
      setFormError('Vul je telefoonnummer in.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    pushDataLayer({ event: 'form_submit', form_id: 'golden_ticket' });

    const payload = {
      data: {
        type: 'subscription',
        attributes: {
          custom_source: 'MOVE Golden Ticket',
          profile: {
            data: {
              type: 'profile',
              attributes: {
                email,
                first_name: name,
                phone_number: phone,
                properties: {
                  golden_ticket_motivatie: motivation,
                },
              },
            },
          },
        },
        relationships: {
          list: { data: { type: 'list', id: KLAVIYO_LIST_ID } },
        },
      },
    };

    const klaviyoCall = fetch(`https://a.klaviyo.com/client/subscriptions/?company_id=${KLAVIYO_COMPANY_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', revision: '2023-12-15' },
      body: JSON.stringify(payload),
    }).catch((e) => console.warn('Klaviyo call failed (non-blocking):', e));

    const notifyCall = fetch('/.netlify/functions/golden-ticket-notify', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, phone, motivation }),
    }).catch((e) => console.warn('Notify call failed (non-blocking):', e));

    await Promise.allSettled([klaviyoCall, notifyCall]);

    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center bg-surface-container-low rounded-2xl p-8 md:p-10 max-w-lg mx-auto">
        <span
          className="material-symbols-outlined text-primary text-4xl mb-4 inline-block"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <p className="font-[family-name:var(--font-headline)] text-2xl font-black mb-2">
          Aanmelding ontvangen.
        </p>
        <p className="text-on-surface-variant leading-relaxed">
          Rick neemt persoonlijk contact met je op om een kennismakingsgesprek in te plannen.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-surface-container-low rounded-2xl p-8 md:p-10 text-left max-w-lg mx-auto">
      <div className="mb-4">
        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant/70 mb-2">
          Naam
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jouw naam"
          autoComplete="name"
          className="w-full px-4 py-3.5 bg-white border border-outline-variant/30 rounded-lg text-base outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant/70 mb-2">
          E-mailadres
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jouw@email.nl"
          autoComplete="email"
          className="w-full px-4 py-3.5 bg-white border border-outline-variant/30 rounded-lg text-base outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="mb-4">
        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant/70 mb-2">
          Telefoonnummer
        </label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="06 12345678"
          autoComplete="tel"
          className="w-full px-4 py-3.5 bg-white border border-outline-variant/30 rounded-lg text-base outline-none focus:border-primary transition-colors"
        />
      </div>

      <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-[0.1em] text-on-surface-variant/70 mb-2">
          Motivatie (optioneel)
        </label>
        <textarea
          value={motivation}
          onChange={(e) => setMotivation(e.target.value)}
          placeholder="Kort: wat wil je bereiken met MOVE?"
          rows={3}
          className="w-full px-4 py-3.5 bg-white border border-outline-variant/30 rounded-lg text-base outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      {formError && <p className="text-sm text-red-600 mb-4">{formError}</p>}

      <button
        onClick={submit}
        disabled={isSubmitting}
        className="btn-primary w-full inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-bold disabled:opacity-60 disabled:pointer-events-none"
      >
        {isSubmitting ? 'Even geduld…' : 'Meld je aan'}
        {!isSubmitting && <span className="material-symbols-outlined text-lg">arrow_forward</span>}
      </button>

      <p className="text-xs text-on-surface-variant/60 mt-4 leading-relaxed">
        Geen betaling nu. Rick neemt persoonlijk contact met je op om kennis te maken.
      </p>
    </div>
  );
}
