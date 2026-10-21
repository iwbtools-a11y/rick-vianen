'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCookiebotConsent } from '@/lib/cookiebot';
import { sendCapiEvent } from '@/lib/meta-capi';

// Fires a Meta Lead event when the given Klaviyo form (see <KlaviyoForm>,
// which dispatches this event) is submitted, so ad platforms can optimize
// on actual sign-ups instead of just page views.
export function MetaLeadEvent({ formId }: { formId: string }) {
  const searchParams = useSearchParams();
  const hasMarketingConsent = useCookiebotConsent('marketing');

  useEffect(() => {
    if (!hasMarketingConsent) return;

    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ type: string; formId: string }>).detail;
      if (detail?.type !== 'submit' || detail?.formId !== formId) return;
      sendCapiEvent('Lead', searchParams.get('fbclid') ?? undefined);
    };

    window.addEventListener('klaviyoForms', handler);
    return () => window.removeEventListener('klaviyoForms', handler);
  }, [formId, hasMarketingConsent, searchParams]);

  return null;
}
