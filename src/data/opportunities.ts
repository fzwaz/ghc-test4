export type OpportunityType =
  | 'grant'
  | 'fellowship'
  | 'accelerator'
  | 'competition'
  | 'loan'
  | 'prize'
  | 'incubator'
  | 'scholarship'
  | 'other';

export interface Opportunity {
  id: string;
  title: string;
  org: string;
  type: OpportunityType;
  sector: string;
  country: string;
  stage: string;
  deadline: string;
  deadlineSort: number;
  equity: 'free' | 'taken';
  funding: string;
  fundingValue: number;
  desc: string;
  eligibility: string;
}

// Single source of truth for the grants/search directory.
// Add, edit or remove entries here — filters, counts and cards update automatically.
export const opportunityTypes: { value: OpportunityType | 'all'; label: string }[] = [
  { value: 'all', label: 'All Types' },
  { value: 'grant', label: 'Grant' },
  { value: 'fellowship', label: 'Fellowship' },
  { value: 'accelerator', label: 'Accelerator' },
  { value: 'competition', label: 'Competition' },
  { value: 'loan', label: 'Loan' },
  { value: 'prize', label: 'Prize' },
  { value: 'incubator', label: 'Incubator' },
  { value: 'scholarship', label: 'Scholarship' },
  { value: 'other', label: 'Other' },
];

export const opportunitySectors: string[] = [
  'All Sectors',
  'Technology',
  'Healthcare',
  'Fintech',
  'Agriculture',
  'Education',
  'Clean Energy',
  'D2C & Retail',
  'Manufacturing',
];

export const opportunityCountries: string[] = [
  'All Countries',
  'India',
  'United States',
  'United Arab Emirates',
  'Singapore',
  'United Kingdom',
  'Germany',
];

export const opportunityStages: string[] = [
  'All Stages',
  'Idea',
  'Pre-Seed',
  'Seed',
  'Early Stage',
  'Growth',
  'Any Stage',
];

export const opportunityDeadlines: { value: 'any' | 'open' | 'rolling'; label: string }[] = [
  { value: 'any', label: 'Any' },
  { value: 'open', label: 'Open Only' },
  { value: 'rolling', label: 'Rolling' },
];

export const opportunityEquity: { value: 'any' | 'free' | 'taken'; label: string }[] = [
  { value: 'any', label: 'Any' },
  { value: 'free', label: 'Equity Free' },
  { value: 'taken', label: 'Equity Taken' },
];

export const opportunitySorts: { value: 'relevant' | 'deadline' | 'funding'; label: string }[] = [
  { value: 'relevant', label: 'Most Relevant' },
  { value: 'deadline', label: 'Closing Soon' },
  { value: 'funding', label: 'Largest Funding' },
];

const now = Date.now();

export const opportunities: Opportunity[] = [
  {
    id: 'ksum-scaleup-seed',
    title: 'KSUM Scale-up Seed Fund',
    org: 'Kerala Startup Mission',
    type: 'grant',
    sector: 'Technology',
    country: 'India',
    stage: 'Early Stage',
    deadline: 'Open',
    deadlineSort: Number.MAX_SAFE_INTEGER - 1,
    equity: 'free',
    funding: 'Up to ₹15 Lakh',
    fundingValue: 18,
    desc: 'Seed support for revenue-stage Kerala startups to hire, build and expand into new markets.',
    eligibility: 'DPIIT-recognized startups with early revenue, headquartered in Kerala.',
  },
  {
    id: 'startup-india-seed-fund',
    title: 'Startup India Seed Fund Scheme',
    org: 'DPIIT, Govt. of India',
    type: 'grant',
    sector: 'Technology',
    country: 'India',
    stage: 'Seed',
    deadline: '30 Nov 2026',
    deadlineSort: new Date('2026-11-30').getTime() - now,
    equity: 'free',
    funding: 'Up to ₹50 Lakh',
    fundingValue: 60,
    desc: 'Proof-of-concept, prototype and market-entry support for DPIIT-recognized startups.',
    eligibility: 'DPIIT-recognized, incorporated under 2 years ago, Indian shareholding above 51%.',
  },
  {
    id: 'ycombinator-w27',
    title: 'Y Combinator Winter Batch',
    org: 'Y Combinator',
    type: 'accelerator',
    sector: 'Technology',
    country: 'United States',
    stage: 'Early Stage',
    deadline: '15 Oct 2026',
    deadlineSort: new Date('2026-10-15').getTime() - now,
    equity: 'taken',
    funding: '$500K Standard Deal',
    fundingValue: 500,
    desc: 'Three-month batch with mentorship, Demo Day and lifetime alumni network access.',
    eligibility: 'Founders working full-time, all sectors, all countries.',
  },
  {
    id: 'techstars-bangalore',
    title: 'Techstars Bangalore Cohort',
    org: 'Techstars',
    type: 'accelerator',
    sector: 'Technology',
    country: 'India',
    stage: 'Seed',
    deadline: 'Rolling',
    deadlineSort: Number.MAX_SAFE_INTEGER,
    equity: 'taken',
    funding: '$120K Investment',
    fundingValue: 120,
    desc: 'Mentor-driven accelerator with 13 weeks of hands-on scaling support in Bangalore.',
    eligibility: 'Early-stage tech startups with an MVP and full-time founders.',
  },
  {
    id: 'nidhi-prayas',
    title: 'NIDHI Prayas Grant',
    org: 'DST, Govt. of India',
    type: 'grant',
    sector: 'Manufacturing',
    country: 'India',
    stage: 'Idea',
    deadline: 'Rolling',
    deadlineSort: Number.MAX_SAFE_INTEGER,
    equity: 'free',
    funding: 'Up to ₹10 Lakh',
    fundingValue: 12,
    desc: 'Pre-incubation support to convert ideas into working prototypes.',
    eligibility: 'Individual innovators and early teams via NIDHI Prayas centres.',
  },
  {
    id: 'ksum-idea-grant',
    title: 'KSUM Idea Grant',
    org: 'Kerala Startup Mission',
    type: 'grant',
    sector: 'Technology',
    country: 'India',
    stage: 'Idea',
    deadline: 'Open',
    deadlineSort: Number.MAX_SAFE_INTEGER - 1,
    equity: 'free',
    funding: 'Up to ₹5 Lakh',
    fundingValue: 6,
    desc: 'Idea-stage funding for Kerala founders to validate and prototype.',
    eligibility: 'Kerala-based founders at concept or prototype stage.',
  },
  {
    id: 'earthtech-prize',
    title: 'EarthTech Climate Prize',
    org: 'EarthTech Foundation',
    type: 'prize',
    sector: 'Clean Energy',
    country: 'Singapore',
    stage: 'Growth',
    deadline: '12 Dec 2026',
    deadlineSort: new Date('2026-12-12').getTime() - now,
    equity: 'free',
    funding: '$100K Prize Pool',
    fundingValue: 100,
    desc: 'Global prize for climate-tech startups with measurable carbon impact.',
    eligibility: 'Climate-tech startups with a live product and impact metrics.',
  },
  {
    id: 'cgtmse-loan',
    title: 'CGTMSE Collateral-Free Loan',
    org: 'Govt. of India',
    type: 'loan',
    sector: 'Manufacturing',
    country: 'India',
    stage: 'Early Stage',
    deadline: 'Open',
    deadlineSort: Number.MAX_SAFE_INTEGER - 1,
    equity: 'free',
    funding: 'Up to ₹5 Crore',
    fundingValue: 600,
    desc: 'Collateral-free credit guarantee cover for MSME term loans and working capital.',
    eligibility: 'Registered MSMEs borrowing from member lending institutions.',
  },
  {
    id: 'commonwealth-scholarship',
    title: 'Commonwealth Shared Scholarship',
    org: 'UK Foreign Office',
    type: 'scholarship',
    sector: 'Education',
    country: 'United Kingdom',
    stage: 'Any Stage',
    deadline: '15 Dec 2026',
    deadlineSort: new Date('2026-12-15').getTime() - now,
    equity: 'free',
    funding: 'Fully Funded',
    fundingValue: 40,
    desc: 'Full tuition, stipend and travel for postgraduate study in the UK.',
    eligibility: 'Citizens of eligible Commonwealth countries with an undergraduate degree.',
  },
  {
    id: 'village-capital-fintech',
    title: 'Village Capital Fintech Cohort',
    org: 'Village Capital',
    type: 'incubator',
    sector: 'Fintech',
    country: 'United States',
    stage: 'Seed',
    deadline: 'Open',
    deadlineSort: Number.MAX_SAFE_INTEGER - 1,
    equity: 'free',
    funding: 'Mentorship + Network',
    fundingValue: 10,
    desc: 'Peer-selected incubation for early-stage financial health startups.',
    eligibility: 'Fintech startups serving low-income communities.',
  },
  {
    id: 'tie-pitch-competition',
    title: 'TiE Global Pitch Competition',
    org: 'TiE Kerala',
    type: 'competition',
    sector: 'Technology',
    country: 'India',
    stage: 'Seed',
    deadline: '05 Nov 2026',
    deadlineSort: new Date('2026-11-05').getTime() - now,
    equity: 'free',
    funding: '₹25 Lakh Prizes',
    fundingValue: 30,
    desc: 'Flagship pitch battle with investor jury, media coverage and cash prizes.',
    eligibility: 'Startups under 5 years old with a demonstrable product.',
  },
  {
    id: 'krishi-fellowship',
    title: 'Agri Innovation Fellowship',
    org: 'ICAR Incubation Network',
    type: 'fellowship',
    sector: 'Agriculture',
    country: 'India',
    stage: 'Pre-Seed',
    deadline: 'Rolling',
    deadlineSort: Number.MAX_SAFE_INTEGER,
    equity: 'free',
    funding: '₹8 Lakh Stipend',
    fundingValue: 9,
    desc: 'Year-long fellowship pairing agri founders with research labs and pilot farms.',
    eligibility: 'Agri and food-tech founders at idea or pre-seed stage.',
  },
];
