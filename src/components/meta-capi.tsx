'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { useCookiebotConsent } from '@/lib/cookiebot';
import { sendCapiEvent } from '@/lib/meta-capi';

export function MetaCapi() {
  const searchParams = useSearchParams();
  const hasMarketingConsent = useCookiebotConsent('marketing');

  useEffect(() => {
    if (!hasMarketingConsent) return;
    sendCapiEvent('PageView', searchParams.get('fbclid') ?? undefined);
  }, [searchParams, hasMarketingConsent]);

  return null;
}
