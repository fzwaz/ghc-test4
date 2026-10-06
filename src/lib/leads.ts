/**
 * Central lead capture layer — dummy Zoho mode for now, real Zoho later.
 *
 * - All website forms call submitLead() with a normalized payload.
 * - If VITE_ZOHO_WEBHOOK_URL is set (Zoho Flow webhook / CRM API via serverless),
 *   we POST there. Otherwise we store locally (ghc_dummy_leads) so nothing is lost.
 * - When the owner gives a real Zoho endpoint, just set the env vars in .env / Vercel
 *   — no component changes needed.
 *
 * Env vars (.env / Vercel):
 *   VITE_ZOHO_ENABLED=true|false        (default false = dummy mode)
 *   VITE_ZOHO_WEBHOOK_URL=https://...   (Zoho Flow incoming webhook or your /api/zoho-lead URL)
 *   VITE_ZOHO_SOURCE=GHC Website        (Lead_Source sent to Zoho)
 */

export interface LeadPayload {
  name: string;
  email: string;
  phone?: string;
  topic?: string;
  stage?: string;
  startup?: string;
  idea?: string;
  company?: string;
  message?: string;
  contactVia?: string;
  answers?: Record<string, string>;
  eventTitle?: string;
  page?: string;
}

export type LeadResult =
  | { ok: true; mode: 'zoho' | 'dummy'; id: string }
  | { ok: false; mode: 'zoho' | 'dummy'; error: string };

const DUMMY_KEY = 'ghc_dummy_leads';

function getEnv(name: string): string {
  try {
    return (import.meta as any).env?.[name] || '';
  } catch {
    return '';
  }
}

export function isZohoConfigured(): boolean {
  const enabled = getEnv('VITE_ZOHO_ENABLED').toLowerCase() === 'true';
  const url = getEnv('VITE_ZOHO_WEBHOOK_URL');
  return enabled && !!url;
}

export function getDummyLeads(): (LeadPayload & { at: string; id: string })[] {
  try {
    const raw = localStorage.getItem(DUMMY_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveDummyLead(payload: LeadPayload): string {
  const id = `dummy_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
  try {
    const existing = getDummyLeads();
    existing.unshift({ ...payload, at: new Date().toISOString(), id });
    localStorage.setItem(DUMMY_KEY, JSON.stringify(existing.slice(0, 200)));
  } catch {
    /* storage unavailable */
  }
  return id;
}

function toZohoBody(payload: LeadPayload) {
  const source = getEnv('VITE_ZOHO_SOURCE') || 'GHC Website';
  return {
    Last_Name: payload.name || 'Website Visitor',
    Email: payload.email,
    Phone: payload.phone || '',
    Company: payload.company || payload.startup || 'Not provided',
    Lead_Source: source,
    Description: [
      payload.topic ? `Topic: ${payload.topic}` : '',
      payload.stage ? `Stage: ${payload.stage}` : '',
      payload.startup ? `Startup: ${payload.startup}` : '',
      payload.idea ? `Idea: ${payload.idea}` : '',
      payload.message ? `Message: ${payload.message}` : '',
      payload.eventTitle ? `Event: ${payload.eventTitle}` : '',
      payload.page ? `Page: ${payload.page}` : '',
      payload.answers ? `Quiz: ${JSON.stringify(payload.answers)}` : '',
      payload.contactVia ? `Contact via: ${payload.contactVia}` : '',
    ]
      .filter(Boolean)
      .join('\n'),
    // Keep raw payload too for Flow field-mapping
    ...payload,
  };
}

export async function submitLead(payload: LeadPayload): Promise<LeadResult> {
  const url = getEnv('VITE_ZOHO_WEBHOOK_URL');

  // Dummy mode: no endpoint configured — store locally so demo/testing never loses data
  if (!isZohoConfigured() || !url) {
    const id = saveDummyLead(payload);
    // eslint-disable-next-line no-console
    console.info('[leads:dummy] saved lead locally (set VITE_ZOHO_WEBHOOK_URL to go live):', payload);
    return { ok: true, mode: 'dummy', id };
  }

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(toZohoBody(payload)),
    });
    if (!res.ok) {
      const text = await res.text().catch(() => '');
      // Don't lose the lead — keep a local copy too
      const id = saveDummyLead(payload);
      return { ok: false, mode: 'zoho', error: `Zoho responded ${res.status} ${text.slice(0, 200)} (kept local copy ${id})` };
    }
    return { ok: true, mode: 'zoho', id: `zoho_${Date.now()}` };
  } catch (err: any) {
    const id = saveDummyLead(payload);
    return { ok: false, mode: 'zoho', error: `${err?.message || 'Network error'} (kept local copy ${id})` };
  }
}
