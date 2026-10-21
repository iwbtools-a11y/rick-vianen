'use client';

import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';

const KLAVIYO_SRC = '//static.klaviyo.com/onsite/js/klaviyo.js?company_id=YgCeNj';

// Shared debounce: multiple KlaviyoForm instances on the same page only
// trigger one re-injection.
let reinjectTimer: ReturnType<typeof setTimeout> | null = null;

export function KlaviyoForm({ formId, redirectOnSubmit }: { formId: string; redirectOnSubmit?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const isMounted = useRef(false);

  useEffect(() => {
    if (!redirectOnSubmit) return;

    const handleKlaviyoEvent = (e: Event) => {
      const detail = (e as CustomEvent<{ type: string; formId: string }>).detail;
      if (detail?.type === 'submit' && detail?.formId === formId) {
        router.push(redirectOnSubmit);
      }
    };

    window.addEventListener('klaviyoForms', handleKlaviyoEvent);
    return () => window.removeEventListener('klaviyoForms', handleKlaviyoEvent);
  }, [formId, redirectOnSubmit, router]);

  useEffect(() => {
    // Initial mount is handled by the <script> in layout.tsx.
    if (!isMounted.current) {
      isMounted.current = true;
      return;
    }

    // On SPA navigation Klaviyo won't re-scan the DOM, so remove and
    // re-inject the script to force a fresh initialization.
    if (reinjectTimer) clearTimeout(reinjectTimer);
    reinjectTimer = setTimeout(() => {
      reinjectTimer = null;
      document.querySelector('script[src*="klaviyo.js"]')?.remove();
      const script = document.createElement('script');
      script.async = true;
      script.type = 'text/javascript';
      script.src = KLAVIYO_SRC;
      document.head.appendChild(script);
    }, 100);

    return () => {
      if (reinjectTimer) {
        clearTimeout(reinjectTimer);
        reinjectTimer = null;
      }
    };
  }, [pathname]);

  return <div className={`klaviyo-form-${formId}`} />;
}
