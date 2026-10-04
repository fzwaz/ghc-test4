export interface GhcEvent {
  id: string;
  title: string;
  status: 'ongoing' | 'upcoming';
  schedule: string;
  mode: string;
  desc: string;
}

// Single source of truth for events.
// Edit this list once and every events card across the site
// (homepage + all pages) updates automatically.
export const events: GhcEvent[] = [
  {
    id: 'funding-masterclass',
    title: 'Startup Funding Masterclass',
    status: 'ongoing',
    schedule: 'Every Saturday · 11 AM IST',
    mode: 'Online',
    desc: 'Unit economics, valuation and investor readiness — live with GHC partners.',
  },
  {
    id: 'pitch-review-night',
    title: 'Pitch Deck Review Night',
    status: 'upcoming',
    schedule: '17 Oct 2026 · 6 PM IST',
    mode: 'Kochi + Online',
    desc: 'Get your deck torn down and rebuilt by exited founders before you pitch.',
  },
  {
    id: 'd2c-roundtable',
    title: 'D2C Founders Roundtable',
    status: 'upcoming',
    schedule: '24 Oct 2026 · 4 PM IST',
    mode: 'Kochi',
    desc: 'CAC, retention and omnichannel growth with operators doing ₹1Cr+ months.',
  },
  {
    id: 'ksum-clinic',
    title: 'KSUM Grant & Compliance Clinic',
    status: 'upcoming',
    schedule: '31 Oct 2026 · 11 AM IST',
    mode: 'Online',
    desc: 'Seed grants, DPIIT recognition and 80-IAC tax holidays, step by step.',
  },
];
