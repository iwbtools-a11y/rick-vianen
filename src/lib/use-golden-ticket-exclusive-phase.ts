'use client';

import { useSyncExternalStore } from 'react';
import { GOLDEN_TICKET_DEADLINE_ISO } from '@/lib/golden-ticket';

function getIsExclusivePhase(): boolean {
  return Date.now() < new Date(GOLDEN_TICKET_DEADLINE_ISO).getTime();
}

// Zelfde patroon als de countdown: een gecachet snapshot die alleen
// verandert op het moment dat de fase daadwerkelijk omslaat, zodat
// useSyncExternalStore niet bij elke render een nieuwe waarde ziet.
let cachedSnapshot: boolean = getIsExclusivePhase();

function subscribe(callback: () => void) {
  const interval = setInterval(() => {
    const next = getIsExclusivePhase();
    if (next !== cachedSnapshot) {
      cachedSnapshot = next;
      callback();
    }
  }, 1000);
  return () => clearInterval(interval);
}

function getSnapshot(): boolean {
  return cachedSnapshot;
}

// Statisch geëxporteerde pagina: de server kent de actuele tijd niet, dus
// tonen we voor de eerste render niets (null) totdat na hydratie de echte
// clientklok bekend is.
function getServerSnapshot(): boolean | null {
  return null;
}

/**
 * true zolang de exclusieve aanmeldfase loopt, false zodra de deadline is
 * verstreken, null zolang de clientklok nog niet bekend is (vóór hydratie).
 */
export function useGoldenTicketExclusivePhase(): boolean | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
