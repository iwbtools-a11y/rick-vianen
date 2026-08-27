'use client';

import { useEffect, useState } from 'react';
import { GOLDEN_TICKET_STATUS_URL, GOLDEN_TICKET_TOTAL } from '@/lib/golden-ticket';

type Availability = {
  total: number;
  remaining: number;
  loading: boolean;
};

export function useGoldenTicketAvailability(): Availability {
  const [state, setState] = useState<Availability>({
    total: GOLDEN_TICKET_TOTAL,
    remaining: GOLDEN_TICKET_TOTAL,
    loading: true,
  });

  useEffect(() => {
    let cancelled = false;

    fetch(GOLDEN_TICKET_STATUS_URL)
      .then((res) => (res.ok ? res.json() : Promise.reject(new Error('status fetch failed'))))
      .then((data: { total: number; remaining: number }) => {
        if (cancelled) return;
        setState({ total: data.total, remaining: data.remaining, loading: false });
      })
      .catch(() => {
        if (cancelled) return;
        setState((prev) => ({ ...prev, loading: false }));
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
