import test from 'node:test';
import assert from 'node:assert/strict';
import { createSignupHandler } from '../lib/signup.js';
const request = (data, headers = {}, method = 'POST') => new Request('https://www.aiglobalinitiative.org/api/subscribe', { method, headers: { origin: 'https://www.aiglobalinitiative.org', 'content-type': 'application/json', ...headers }, ...(method === 'POST' ? { body: JSON.stringify(data) } : {}) });
const valid = { email: ' Reader@Example.com ', consent: true, website: '' };
test('stores normalized email privately with consent and no IP address', async () => {
  let saved;
  const handler = createSignupHandler({ put: async (...args) => { saved = args; }, exists: async () => false, now: () => new Date('2026-11-28T12:00:00Z') });
  assert.equal((await handler(request(valid))).status, 200);
  assert.match(saved[0], /^subscribers\/[a-f0-9]{64}\.json$/);
  assert.equal(JSON.parse(saved[1]).email, 'reader@example.com');
  assert.equal(JSON.parse(saved[1]).emailVerified, false);
  assert.equal(saved[2].access, 'private');
  assert.equal(saved[2].allowOverwrite, false);
});
test('rejects invalid data and cross-origin requests before storage', async () => {
  const handler = createSignupHandler({ put: async () => assert.fail('must not store'), exists: async () => false });
  for (const data of [null, [], {}, { ...valid, consent: false }, { ...valid, email: 'bad' }, { ...valid, email: 'a@b.com\nBcc:evil@b.com' }]) assert.equal((await handler(request(data))).status, 400);
  assert.equal((await handler(request(valid, { origin: 'https://other.example' }))).status, 403);
  assert.equal((await handler(request(valid, {}, 'GET'))).status, 405);
  assert.equal((await handler(request(valid, { 'content-type': 'text/plain' }))).status, 415);
  assert.equal((await handler(request({ ...valid, extra: 'x'.repeat(3000) }))).status, 413);
});
test('honeypot discards submission', async () => {
  const handler = createSignupHandler({ put: async () => assert.fail('must not store'), exists: async () => false });
  assert.equal((await handler(request({ ...valid, website: 'bot' }))).status, 200);
});
test('duplicates succeed without overwriting consent; storage failures stay errors', async () => {
  const put = async () => { throw new Error('write failed'); };
  assert.equal((await createSignupHandler({ put, exists: async () => true })(request(valid))).status, 200);
  assert.equal((await createSignupHandler({ put, exists: async () => false })(request(valid))).status, 503);
  assert.equal((await createSignupHandler({ put, exists: async () => { throw new Error('offline'); } })(request(valid))).status, 503);
});
