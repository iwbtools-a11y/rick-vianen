'use client';

import { GOLDEN_TICKET_PRICE, GOLDEN_TICKET_PUBLIC_PRICE } from '@/lib/golden-ticket';
import { useGoldenTicketPhase } from '@/lib/use-golden-ticket-phase';

// Overal waar de ticketprijs los in een zin staat: rendert €375 tijdens de
// exclusieve fase en €475 daarna, zonder dat de pagina opnieuw gebouwd hoeft
// te worden. Vóór hydratie (phase === null) tonen we de exclusieve prijs,
// dezelfde aanname die de rest van de pagina ook aanhoudt.
export function GoldenTicketPrice() {
  const phase = useGoldenTicketPhase();
  const isPublicPhase = phase === 'closing' || phase === 'closed';
  return isPublicPhase ? GOLDEN_TICKET_PUBLIC_PRICE : GOLDEN_TICKET_PRICE;
}
