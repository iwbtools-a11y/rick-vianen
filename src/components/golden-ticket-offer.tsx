'use client';

import Link from 'next/link';
import { GOLDEN_TICKET_CHECKOUT_URL } from '@/lib/golden-ticket';
import { useGoldenTicketAvailability } from '@/lib/use-golden-ticket-availability';
import { GoldenTicketVisual } from '@/components/golden-ticket-visual';

export function GoldenTicketOffer() {
  const { remaining, total, loading } = useGoldenTicketAvailability();
  const soldOut = !loading && remaining <= 0;

  return (
    <div>
      <GoldenTicketVisual remaining={loading ? null : remaining} />

      <div className="text-center mt-8">
        {soldOut ? (
          <Link
            href="/wachtlijst"
            className="btn-primary inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-lg font-bold"
          >
            Meld je aan voor de wachtlijst
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </Link>
        ) : (
          <a
            href={GOLDEN_TICKET_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-lg font-bold"
          >
            Claim jouw ticket
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </a>
        )}
        <p className="text-sm text-on-surface-variant/70 mt-4">
          {soldOut
            ? 'Deze ronde is vol. Hoor als eerste wanneer er een volgende kans komt.'
            : `Nog ${remaining} van de ${total} tickets beschikbaar · wie het eerst claimt, heeft de plek`}
        </p>
      </div>
    </div>
  );
}
