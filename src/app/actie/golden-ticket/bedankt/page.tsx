import type { Metadata } from 'next';
import { Suspense } from 'react';
import { GoldenTicketBedanktClient } from './bedankt-client';

export const metadata: Metadata = {
  title: 'Golden Ticket bevestigd | MOVE Coaching',
  description: 'Je Golden Ticket voor MOVE is bevestigd.',
  robots: { index: false, follow: false },
};

export default function GoldenTicketBedanktPage() {
  return (
    <Suspense>
      <GoldenTicketBedanktClient />
    </Suspense>
  );
}
