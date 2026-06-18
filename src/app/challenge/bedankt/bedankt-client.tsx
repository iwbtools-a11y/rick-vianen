'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export function ChallengeBedanktClient() {
  useEffect(() => {
    const p = new URLSearchParams(window.location.search);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: p.get('tx_id') ?? undefined,
        order_id: p.get('id') ?? undefined,
        order_number: p.get('nr') ?? undefined,
        value: parseFloat(p.get('order_value') ?? '100'),
        tax: parseFloat(p.get('tax') ?? '0'),
        currency: p.get('currency') ?? 'EUR',
        items: [{
          item_name: p.get('product_name') ?? 'MOVE the Challenge',
          item_id: p.get('sku') ?? undefined,
          price: parseFloat(p.get('order_value') ?? '100'),
          quantity: parseInt(p.get('quantity') ?? '1', 10),
        }],
      },
    });
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-32 pb-24">
      <div className="max-w-lg w-full">

        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
          <span
            className="material-symbols-outlined text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            check_circle
          </span>
        </div>

        <p className="text-xs font-bold tracking-[0.14em] uppercase text-primary mb-3">
          Betaling bevestigd
        </p>

        <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mb-4">
          Welkom bij<br />de Challenge.
        </h1>

        <p className="text-on-surface-variant text-lg leading-relaxed mb-3">
          Je ontvangt direct een welkomstmail met alle details. Dag&nbsp;1 start morgen.
        </p>
        <p className="text-on-surface-variant/60 text-sm mb-8">
          Geen mail ontvangen? Check even je spam.
        </p>

        <div className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 mb-8 flex items-start gap-4">
          <span
            className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            verified
          </span>
          <div>
            <p className="font-bold text-sm mb-1">Je €100 is alvast je korting op MOVE</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Finish de 5 dagen en stap je daarna in MOVE? Dan verrekenen we de €100 direct als
              korting op je investering.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            href="/programma"
            className="inline-flex items-center justify-center gap-2 btn-primary px-8 py-4 rounded-full font-bold"
          >
            Ontdek MOVE
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 btn-secondary px-8 py-4 rounded-full font-bold"
          >
            Terug naar home
          </Link>
        </div>

      </div>
    </div>
  );
}
