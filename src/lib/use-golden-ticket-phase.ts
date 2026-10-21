'use client';

import { useSyncExternalStore } from 'react';
import { GOLDEN_TICKET_DEADLINE_ISO, GOLDEN_TICKET_PUBLIC_DEADLINE_ISO } from '@/lib/golden-ticket';

export type GoldenTicketPhase = 'exclusive' | 'closing' | 'closed';

function getPhase(): GoldenTicketPhase {
  const now = Date.now();
  if (now < new Date(GOLDEN_TICKET_DEADLINE_ISO).getTime()) return 'exclusive';
  if (now < new Date(GOLDEN_TICKET_PUBLIC_DEADLINE_ISO).getTime()) return 'closing';
  return 'closed';
}

// Zelfde patroon als de countdown: een gecachet snapshot die alleen
// verandert op het moment dat de fase daadwerkelijk omslaat, zodat
// useSyncExternalStore niet bij elke render een nieuwe waarde ziet.
let cachedSnapshot: GoldenTicketPhase = getPhase();

function subscribe(callback: () => void) {
  const interval = setInterval(() => {
    const next = getPhase();
    if (next !== cachedSnapshot) {
      cachedSnapshot = next;
      callback();
    }
  }, 1000);
  return () => clearInterval(interval);
}

function getSnapshot(): GoldenTicketPhase {
  return cachedSnapshot;
}

// Statisch geëxporteerde pagina: de server kent de actuele tijd niet, dus
// tonen we voor de eerste render niets (null) totdat na hydratie de echte
// clientklok bekend is.
function getServerSnapshot(): GoldenTicketPhase | null {
  return null;
}

/**
 * 'exclusive' zolang de exclusieve aanmeldfase loopt, 'closing' in de
 * publieke verkoopfase daarna, 'closed' na de publieke deadline, en null
 * zolang de clientklok nog niet bekend is (vóór hydratie).
 */
export function useGoldenTicketPhase(): GoldenTicketPhase | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
