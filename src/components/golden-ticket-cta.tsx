'use client';

import { GOLDEN_TICKET_DEADLINE_LABEL, GOLDEN_TICKET_PUBLIC_DEADLINE_LABEL } from '@/lib/golden-ticket';
import { useGoldenTicketPhase } from '@/lib/use-golden-ticket-phase';

export function GoldenTicketCta({ size = 'default' }: { size?: 'default' | 'large' }) {
  const phase = useGoldenTicketPhase();
  const sizeClasses =
    size === 'large'
      ? 'px-14 py-5 rounded-full text-xl font-bold'
      : 'px-10 py-4 rounded-full text-lg font-bold';

  return (
    <div>
      <a href="#claim" className={`btn-primary inline-flex items-center gap-2.5 ${sizeClasses}`}>
        Meld je aan
        <span className="material-symbols-outlined text-lg">arrow_forward</span>
      </a>
      {phase === 'exclusive' && (
        <p className="text-sm text-on-surface-variant/70 mt-4">
          {`Exclusieve toegang tot en met ${GOLDEN_TICKET_DEADLINE_LABEL}`}
        </p>
      )}
      {phase === 'closing' && (
        <p className="text-sm text-on-surface-variant/70 mt-4">
          {`Aanmelden kan tot en met ${GOLDEN_TICKET_PUBLIC_DEADLINE_LABEL}`}
        </p>
      )}
    </div>
  );
}
