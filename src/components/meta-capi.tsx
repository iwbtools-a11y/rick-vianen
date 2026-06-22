'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

function getCookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

function generateEventId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function MetaCapi() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const fbclid = searchParams.get('fbclid') ?? undefined;
    const fbp = getCookie('_fbp');
    const eventId = generateEventId();

    fetch('/.netlify/functions/capi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName: 'PageView',
        fbclid,
        fbp,
        userAgent: navigator.userAgent,
        sourceUrl: window.location.href,
        eventId,
      }),
    });
  }, [searchParams]);

  return null;
}
