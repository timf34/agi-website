import { createHash } from 'node:crypto';

export const consentText = 'I agree to receive email updates from AI Global Initiative about its films, findings and future events.';
const origins = new Set(['https://www.aiglobalinitiative.org', 'https://aiglobalinitiative.org', 'https://agi-website-chi.vercel.app']);

export function createSignupHandler({ put, exists, now = () => new Date() }) {
  return async function handle(request) {
    const reply = (status, message) => Response.json({ message }, { status, headers: { 'Cache-Control': 'no-store' } });
    if (request.method !== 'POST') return new Response(null, { status: 405, headers: { Allow: 'POST' } });
    if (!origins.has(request.headers.get('origin'))) return reply(403, 'Please use the sign-up form on our website.');
    if (!request.headers.get('content-type')?.startsWith('application/json')) return reply(415, 'Please submit the sign-up form again.');
    // Bound the body even when Content-Length is absent or incorrect.
    let raw = '';
    const reader = request.body?.getReader();
    if (!reader) return reply(400, 'Please enter your email address.');
    let size = 0;
    const decoder = new TextDecoder();
    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > 2048) { await reader.cancel(); return reply(413, 'The form submission is too large.'); }
      raw += decoder.decode(value, { stream: true });
    }
    raw += decoder.decode();
    let data;
    try { data = JSON.parse(raw); } catch { return reply(400, 'Please submit the sign-up form again.'); }
    if (!data || typeof data !== 'object' || Array.isArray(data)) return reply(400, 'Please submit the sign-up form again.');
    const success = 'Thank you. You’re signed up for AIGI updates.';
    if (data.website) return reply(200, success); // Honeypot: do not store automated submissions.
    const email = typeof data.email === 'string' ? data.email.trim().toLowerCase() : '';
    if (email.length > 254 || !/^[a-z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/i.test(email)) return reply(400, 'Please enter a valid email address.');
    if (data.consent !== true) return reply(400, 'Please tick the box to agree to receive email updates.');
    const pathname = `subscribers/${createHash('sha256').update(email).digest('hex')}.json`;
    try {
      await put(pathname, JSON.stringify({ email, subscribedAt: now().toISOString(), consent: consentText, consentVersion: '2026-11-28', source: 'website', emailVerified: false }), { access: 'private', addRandomSuffix: false, allowOverwrite: false, contentType: 'application/json' });
    } catch (error) {
      if (!await exists(pathname).catch(() => false)) return reply(503, 'We couldn’t save your sign-up. Please try again shortly, or contact team@aiglobalinitiative.org.');
    }
    return reply(200, success);
  };
}
