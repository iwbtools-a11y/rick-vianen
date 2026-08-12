function getCookie(name: string): string | undefined {
  return document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${name}=`))
    ?.split('=')[1];
}

function generateEventId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function sendCapiEvent(eventName: string, fbclid?: string) {
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
    }),
  });
}
