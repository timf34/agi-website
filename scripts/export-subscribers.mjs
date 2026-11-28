// Run in an authenticated environment with access to the private AIGI Blob store.
// Writes CSV to stdout. Never commit the resulting CSV or credentials.
import { list, get } from '@vercel/blob';
const csv = value => '"' + String(value ?? '').replace(/"/g, '""') + '"';
console.log('email,subscribed_at,consent_version,email_verified');
let cursor;
do {
  const page = await list({ prefix: 'subscribers/', cursor });
  for (const blob of page.blobs) {
    const result = await get(blob.pathname, { access: 'private', useCache: false });
    if (!result || result.statusCode !== 200) throw new Error('Could not read a subscriber record');
    const record = await new Response(result.stream).json();
    // Reserved example domains are QA records, never mailing-list recipients.
    if (/@(?:example\.(?:com|org|net)|[^@]+\.invalid)$/i.test(record.email)) continue;
    const safeEmail = /^[=+\-@]/.test(record.email) ? "'" + record.email : record.email;
    console.log([safeEmail, record.subscribedAt, record.consentVersion, record.emailVerified].map(csv).join(','));
  }
  cursor = page.hasMore ? page.cursor : undefined;
} while (cursor);
