'use client';

import Link from 'next/link';
import { GOLDEN_TICKET_CHECKOUT_URL } from '@/lib/golden-ticket';
import { useGoldenTicketAvailability } from '@/lib/use-golden-ticket-availability';

export function GoldenTicketCta({ size = 'default' }: { size?: 'default' | 'large' }) {
  const { remaining, total, loading } = useGoldenTicketAvailability();
  const soldOut = !loading && remaining <= 0;

  const sizeClasses = size === 'large' ? 'px-14 py-5 rounded-full text-xl font-bold' : 'px-10 py-4 rounded-full text-lg font-bold';

  return (
    <div>
      {soldOut ? (
        <Link href="/wachtlijst" className={`btn-primary inline-flex items-center gap-2.5 ${sizeClasses}`}>
          Meld je aan voor de wachtlijst
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </Link>
      ) : (
        <a
          href={GOLDEN_TICKET_CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={`btn-primary inline-flex items-center gap-2.5 ${sizeClasses}`}
        >
          Claim jouw ticket
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </a>
      )}
      <p className="text-sm text-on-surface-variant/70 mt-4">
        {soldOut ? 'Deze ronde is vol.' : `Nog ${remaining} van de ${total} tickets beschikbaar`}
      </p>
    </div>
  );
}
