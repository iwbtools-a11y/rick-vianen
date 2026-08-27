const crypto = require('crypto');
const { getStore } = require('@netlify/blobs');

const STORE_NAME = 'golden-ticket';
const STATE_KEY = 'state';
const GOLDEN_TICKET_PRODUCT_ID = 389214;
// Fallback substring match (case-insensitive) for when the product node
// can't be matched by id.
const PRODUCT_NAME_MATCH = 'golden ticket';

// Walks the whole payload looking for the Golden Ticket product node,
// wherever PlugAndPay happens to nest it. Matches on product id first,
// falls back to title/slug/name, and only counts as a match if the node
// also carries a numeric stock.value (PlugAndPay's own live voorraad
// count), so we don't accidentally pick up an unrelated node that merely
// mentions the product by name.
function findProductStockNode(value, seen = new Set()) {
  if (!value || typeof value !== 'object' || seen.has(value)) return null;
  seen.add(value);

  if (Array.isArray(value)) {
    for (const item of value) {
      const found = findProductStockNode(item, seen);
      if (found) return found;
    }
    return null;
  }

  const stockValue = value.stock?.value;
  if (typeof stockValue === 'number') {
    const matchesId = value.product_id === GOLDEN_TICKET_PRODUCT_ID || value.id === GOLDEN_TICKET_PRODUCT_ID;
    const text = [value.title, value.public_title, value.slug, value.name]
      .filter((v) => typeof v === 'string')
      .join(' ')
      .toLowerCase();
    const matchesName = text.includes(PRODUCT_NAME_MATCH);
    if (matchesId || matchesName) return value;
  }

  for (const key of Object.keys(value)) {
    const found = findProductStockNode(value[key], seen);
    if (found) return found;
  }
  return null;
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const expectedToken = process.env.GOLDEN_TICKET_WEBHOOK_TOKEN;
  const providedToken = event.queryStringParameters?.token;
  if (!expectedToken || providedToken !== expectedToken) {
    return { statusCode: 401, body: 'Unauthorized' };
  }

  let payload;
  try {
    payload = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  if (payload?.event?.trigger_type !== 'order_payment_completed') {
    return { statusCode: 200, body: JSON.stringify({ skipped: true, reason: 'unexpected trigger_type' }) };
  }

  // A test order (sent while setting up or verifying the PlugAndPay
  // koppeling) must never move the real, public ticket count.
  if (payload?.payload?.mode === 'test') {
    return { statusCode: 200, body: JSON.stringify({ skipped: true, reason: 'test mode order' }) };
  }

  const orderId =
    payload?.event?.triggerable_id != null
      ? String(payload.event.triggerable_id)
      : crypto.createHash('sha256').update(event.body || '').digest('hex');

  const store = getStore(STORE_NAME);
  const current =
    (await store.get(STATE_KEY, { type: 'json' })) || { count: 0, orderIds: [], remaining: null, remainingUpdatedAt: null };

  if (current.orderIds.includes(orderId)) {
    return {
      statusCode: 200,
      body: JSON.stringify({ skipped: true, reason: 'already processed', count: current.count }),
    };
  }

  const productNode = findProductStockNode(payload);

  // Preferred path: PlugAndPay's own live voorraad count for this
  // product, taken straight from the payload. This stays in sync even if
  // the stock is adjusted manually in PlugAndPay.
  if (productNode) {
    const remaining = productNode.stock.value;
    const updatedAt = typeof productNode.updated_at === 'string' ? productNode.updated_at : new Date().toISOString();

    // Guard against out-of-order webhook delivery: only move remaining
    // forward in time, never let a late/duplicate delivery regress it.
    const isNewer = !current.remainingUpdatedAt || updatedAt >= current.remainingUpdatedAt;

    const next = {
      count: current.count + 1,
      orderIds: [...current.orderIds, orderId],
      remaining: isNewer ? remaining : current.remaining,
      remainingUpdatedAt: isNewer ? updatedAt : current.remainingUpdatedAt,
    };
    await store.setJSON(STATE_KEY, next);
    return { statusCode: 200, body: JSON.stringify({ ok: true, count: next.count, remaining: next.remaining }) };
  }

  // Fallback: no matching product/stock node found in the payload (for
  // example if "Body meesturen" ever gets turned off). Fall back to a
  // simple increment so the counter still moves, just without perfect
  // sync to PlugAndPay's own voorraad value.
  const next = {
    count: current.count + 1,
    orderIds: [...current.orderIds, orderId],
    remaining: current.remaining,
    remainingUpdatedAt: current.remainingUpdatedAt,
  };
  await store.setJSON(STATE_KEY, next);
  return { statusCode: 200, body: JSON.stringify({ ok: true, count: next.count, note: 'product node not found' }) };
};
