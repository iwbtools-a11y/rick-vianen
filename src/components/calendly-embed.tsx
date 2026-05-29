'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export function CalendlyEmbed({ url, redirectTo }: { url: string; redirectTo: string }) {
  const router = useRouter();

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      if (e.data?.event === 'calendly.event_scheduled') {
        router.push(redirectTo);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [redirectTo, router]);

  return (
    <div className="bg-white shadow-lg overflow-hidden">
      <iframe
        src={url}
        style={{ border: 0 }}
        width="100%"
        height="800"
        frameBorder="0"
        title="Plan een kennismakingsgesprek met Rick Vianen"
        className="w-full min-h-[800px] block"
      />
    </div>
  );
}
