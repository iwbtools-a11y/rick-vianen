'use client';

import { GoldenTicketVisual } from '@/components/golden-ticket-visual';
import { GOLDEN_TICKET_DEADLINE_LABEL } from '@/lib/golden-ticket';
import { useGoldenTicketExclusivePhase } from '@/lib/use-golden-ticket-exclusive-phase';

export function GoldenTicketOffer() {
  const isExclusivePhase = useGoldenTicketExclusivePhase();

  return (
    <div>
      <GoldenTicketVisual />

      <div className="text-center mt-8">
        <a
          href="#claim"
          className="btn-primary inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-lg font-bold"
        >
          Meld je aan
          <span className="material-symbols-outlined text-lg">arrow_forward</span>
        </a>
        <p className="text-sm text-on-surface-variant/70 mt-4">
          {isExclusivePhase
            ? `Exclusieve toegang tot en met ${GOLDEN_TICKET_DEADLINE_LABEL} · Rick neemt persoonlijk contact met je op`
            : 'Rick neemt persoonlijk contact met je op'}
        </p>
      </div>
    </div>
  );
}
