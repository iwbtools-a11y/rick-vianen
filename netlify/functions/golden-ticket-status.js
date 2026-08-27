const { getStore } = require('@netlify/blobs');

const STORE_NAME = 'golden-ticket';
const STATE_KEY = 'state';
// Keep in sync with the "Voorraad" limit set on the MOVE Golden Ticket
// product in PlugAndPay. Only used when no live stock value has been
// captured from a webhook yet.
const TOTAL_TICKETS = 4;

exports.handler = async () => {
  const store = getStore(STORE_NAME);
  const current = (await store.get(STATE_KEY, { type: 'json' })) || { count: 0, orderIds: [], remaining: null };

  const remaining = typeof current.remaining === 'number' ? current.remaining : Math.max(0, TOTAL_TICKETS - current.count);
  const sold = TOTAL_TICKETS - remaining;

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-store',
    },
    body: JSON.stringify({ total: TOTAL_TICKETS, sold, remaining }),
  };
};
