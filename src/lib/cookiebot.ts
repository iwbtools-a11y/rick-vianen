'use client';

import { useEffect, useState } from 'react';

type CookiebotConsentCategory = 'marketing' | 'statistics' | 'preferences';

declare global {
  interface Window {
    Cookiebot?: {
      consent: {
        necessary: boolean;
        preferences: boolean;
        statistics: boolean;
        marketing: boolean;
      };
    };
  }
}

// Cookiebot exposes window.Cookiebot.consent once it has resolved consent
// (stored from a previous visit or just submitted) and fires these events
// whenever that state is set or changes. Scripts that aren't strictly
// necessary must wait for the relevant category before running.
export function useCookiebotConsent(category: CookiebotConsentCategory) {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    const check = () => setGranted(Boolean(window.Cookiebot?.consent?.[category]));

    check();

    window.addEventListener('CookiebotOnConsentReady', check);
    window.addEventListener('CookiebotOnAccept', check);
    window.addEventListener('CookiebotOnDecline', check);

    return () => {
      window.removeEventListener('CookiebotOnConsentReady', check);
      window.removeEventListener('CookiebotOnAccept', check);
      window.removeEventListener('CookiebotOnDecline', check);
    };
  }, [category]);

  return granted;
}
