const NOTIFY_TO = ['rick@rickvianen.nl'];
const NOTIFY_CC = ['rickvianen@iwb.agency'];
const FROM_ADDRESS = 'MOVE Golden Ticket <golden-ticket@rickvianen.nl>';

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[char]);
}

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method not allowed' };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return { statusCode: 500, body: JSON.stringify({ error: 'Missing RESEND_API_KEY' }) };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return { statusCode: 400, body: 'Invalid JSON' };
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = typeof body.phone === 'string' ? body.phone.trim() : '';
  const motivation = typeof body.motivation === 'string' ? body.motivation.trim() : '';

  if (!name || !email || !phone) {
    return { statusCode: 400, body: JSON.stringify({ error: 'Missing required fields' }) };
  }

  const html = `
    <p><strong>Nieuwe Golden Ticket-aanmelding</strong></p>
    <p>
      Naam: ${escapeHtml(name)}<br>
      E-mail: ${escapeHtml(email)}<br>
      Telefoonnummer: ${escapeHtml(phone)}<br>
      Motivatie: ${motivation ? escapeHtml(motivation) : '(niet opgegeven)'}
    </p>
  `.trim();

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      from: FROM_ADDRESS,
      to: NOTIFY_TO,
      cc: NOTIFY_CC,
      reply_to: email,
      subject: `Nieuwe Golden Ticket-aanmelding: ${name}`,
      html,
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    return { statusCode: 502, body: JSON.stringify({ error: 'Resend request failed', detail }) };
  }

  return { statusCode: 200, body: JSON.stringify({ ok: true }) };
};
