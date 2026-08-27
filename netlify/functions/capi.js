exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const pixelId = process.env.META_PIXEL_ID;
  const token = process.env.META_CAPI_TOKEN;

  if (!pixelId || !token) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing config' }) };
  }

  const { eventName, fbclid, userAgent, sourceUrl, eventId, fbp, customData } = JSON.parse(event.body || '{}');

  const ip =
    event.headers['x-forwarded-for']?.split(',')[0].trim() ??
    event.headers['x-real-ip'] ??
    undefined;

  const userData = {};
  if (ip) userData.client_ip_address = ip;
  if (userAgent) userData.client_user_agent = userAgent;
  if (fbp) userData.fbp = fbp;
  if (fbclid) userData.fbc = `fb.1.${Date.now()}.${fbclid}`;

  const payload = {
    data: [
      {
        event_name: eventName ?? 'PageView',
        event_time: Math.floor(Date.now() / 1000),
        event_source_url: sourceUrl,
        action_source: 'website',
        event_id: eventId,
        user_data: userData,
        ...(customData ? { custom_data: customData } : {}),
      },
    ],
  };

  const response = await fetch(
    `https://graph.facebook.com/v19.0/${pixelId}/events?access_token=${token}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  );

  const result = await response.json();
  return {
    statusCode: response.ok ? 200 : 500,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(result),
  };
};
