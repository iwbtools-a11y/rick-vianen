function getCookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

function generateEventId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

type CapiCustomData = {
  value?: number;
  currency?: string;
  content_name?: string;
  content_ids?: string[];
  content_type?: string;
  num_items?: number;
};

export function sendCapiEvent(eventName: string, fbclid?: string, customData?: CapiCustomData) {
  return fetch('/.netlify/functions/capi', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      eventName,
      fbclid,
      fbp: getCookie('_fbp'),
      userAgent: navigator.userAgent,
      sourceUrl: window.location.href,
      eventId: generateEventId(),
      customData,
    }),
  });
}
