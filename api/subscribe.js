import { put, head } from '@vercel/blob';
import { createSignupHandler } from '../lib/signup.js';

export default { fetch: createSignupHandler({ put, exists: async pathname => { await head(pathname); return true; } }) };
