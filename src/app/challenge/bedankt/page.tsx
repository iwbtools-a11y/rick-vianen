import type { Metadata } from 'next';
import { ChallengeBedanktClient } from './bedankt-client';

export const metadata: Metadata = {
  title: 'Welkom bij de Challenge | MOVE Coaching',
  description: 'Je aanmelding voor MOVE the Challenge is bevestigd.',
  robots: { index: false, follow: false },
};

export default function ChallengeBedanktPage() {
  return <ChallengeBedanktClient />;
}
