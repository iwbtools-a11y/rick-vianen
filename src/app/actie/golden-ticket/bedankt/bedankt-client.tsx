'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useCookiebotConsent } from '@/lib/cookiebot';
import { sendCapiEvent } from '@/lib/meta-capi';

export function GoldenTicketBedanktClient() {
  const searchParams = useSearchParams();
  const hasMarketingConsent = useCookiebotConsent('marketing');

  useEffect(() => {
    const p = searchParams;
    const value = parseFloat(p.get('order_value') ?? '375');
    const currency = p.get('currency') ?? 'EUR';
    const productName = p.get('product_name') ?? 'MOVE Golden Ticket';
    const sku = p.get('sku') ?? undefined;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'purchase',
      ecommerce: {
        transaction_id: p.get('tx_id') ?? undefined,
        order_id: p.get('id') ?? undefined,
        order_number: p.get('nr') ?? undefined,
        value,
        tax: parseFloat(p.get('tax') ?? '0'),
        currency,
        items: [{
          item_name: productName,
          item_id: sku,
          price: value,
          quantity: parseInt(p.get('quantity') ?? '1', 10),
        }],
      },
    });

    if (!hasMarketingConsent) return;
    sendCapiEvent('Purchase', p.get('fbclid') ?? undefined, {
      value,
      currency,
      content_name: productName,
      content_ids: sku ? [sku] : undefined,
      content_type: 'product',
      num_items: parseInt(p.get('quantity') ?? '1', 10),
    });
  }, [searchParams, hasMarketingConsent]);

  return (
    <div className="min-h-screen flex items-center justify-center px-8 pt-40 pb-24">
      <div className="max-w-lg w-full">

        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mb-8">
          <span
            className="material-symbols-outlined text-primary text-4xl"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            confirmation_number
          </span>
        </div>

        <p className="text-xs font-bold tracking-[0.14em] uppercase text-primary mb-3">
          Ticket bevestigd
        </p>

        <h1 className="font-[family-name:var(--font-headline)] text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mb-4">
          Je plek in MOVE<br />is binnen.
        </h1>

        <p className="text-on-surface-variant text-lg leading-relaxed mb-3">
          Je ontvangt direct een bevestiging per e-mail met de vervolgstappen. Daarna plannen we het intakegesprek om je doelen scherp te krijgen.
        </p>
        <p className="text-on-surface-variant/60 text-sm mb-8">
          Geen mail ontvangen? Check even je spam.
        </p>

        <div className="bg-surface-container-low border border-outline-variant/40 rounded-xl p-5 mb-8 flex items-start gap-4">
          <span
            className="material-symbols-outlined text-secondary text-2xl shrink-0 mt-0.5"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            groups
          </span>
          <div>
            <p className="font-bold text-sm mb-1">Het cohort start zodra de groep compleet is</p>
            <p className="text-on-surface-variant text-sm leading-relaxed">
              Zodra alle Golden Tickets zijn geclaimd, nemen we contact op om de startdatum in te plannen.
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
