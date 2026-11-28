# Website email sign-ups

The home page form POSTs to `/api/subscribe`, a Vercel Node function. Subscriber records live in the private `aigi-email-signups` Blob store (London), linked to this Vercel project. Vercel provides `BLOB_STORE_ID` and rotating OIDC credentials; no static API key is needed. Never make this store public or add a public subscriber-read endpoint.

Each email has one SHA-256-named JSON record under `subscribers/`, with normalized email, consent wording/version, timestamp and source. Existing records are never overwritten by a repeated submission. No IP addresses are stored. The form has server validation, a bounded body, origin checks and a honeypot. Origin checks and honeypots are basic spam deterrents, not rate limiting or proof of email ownership. If abuse appears, enable a Vercel Firewall rate limit/challenge on `/api/subscribe`.

This collects single-opt-in requests; it does not send confirmation emails or newsletters. `emailVerified` remains false. Before bulk sending, connect a mailing platform, provide automatic unsubscribe links, and honour all removal requests. The form gives team@aiglobalinitiative.org as the removal contact. Do not describe these addresses as verified.

## Manage and export

Open Vercel > agi-website > Storage > aigi-email-signups > Manage Blobs to view records. For a removal request, normalize the email (trim/lowercase), find its SHA-256 pathname, and delete that record. Honour removals in any downstream mailing platform too.

For CSV export, use an authenticated Vercel environment for this project (e.g. Vercel CLI project link and `vercel env pull`, following Vercel's OIDC instructions), then run `node --env-file=.env.local scripts/export-subscribers.mjs > subscribers.csv`. Keep exports private. Reserved example-domain QA records are excluded. Export does not verify addresses or send mail.

Validation: `node --test tests/signup.test.js`, `npm run build`. Local Astro preview does not serve root Vercel functions; use a Vercel deployment for end-to-end checks.
