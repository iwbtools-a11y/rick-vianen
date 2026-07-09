'use client';

import { useRouter } from 'next/navigation';
import { InlineWidget, useCalendlyEventListener } from 'react-calendly';

export function CalendlyEmbed({ url, redirectTo }: { url: string; redirectTo: string }) {
  const router = useRouter();

  useCalendlyEventListener({
    onEventScheduled: () => router.push(redirectTo),
  });

  return (
    <div className="bg-white shadow-lg overflow-hidden">
      <InlineWidget url={url} styles={{ height: '800px' }} />
    </div>
  );
}
