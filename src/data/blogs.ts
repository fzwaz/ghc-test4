export type BlogBlock =
  | { type: 'intro'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'quote'; text: string }
  | { type: 'example'; text: string }
  | { type: 'cta'; title: string; text: string; buttonLabel: string };

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  readTime: string;
  coverEmoji: string;
  coverGradient: string;
  tags: string[];
  content: BlogBlock[];
  featured?: boolean;
}

// ─── Seed content (edit freely, or manage from /blog/admin with no code) ───
export const seedBlogs: BlogPost[] = [
  {
    slug: 'pitch-deck-hacks-impress-investors-first-3-minutes',
    title: 'Pitch Deck Hacks: How to Impress Investors in the First 3 Minutes',
    excerpt:
      'Most investors decide whether to keep listening within the first 3 minutes. Here is how to make those minutes count — from hook to ask.',
    date: '15 Aug 2025',
    author: 'GHC GrowthLab',
    category: 'Fundraising',
    readTime: '6 min read',
    coverEmoji: '🚀',
    coverGradient: 'linear-gradient(135deg, #0d5f59 0%, #1a7b74 60%, #2ea096 100%)',
    tags: ['Pitch Deck', 'Fundraising', 'Investors'],
    featured: true,
    content: [
      {
        type: 'intro',
        text: "In the world of fundraising, your pitch deck is more than just slides; it's your startup's story, your vision, and your invitation for investors to join your journey. And here's the truth: most investors decide whether to keep listening within the first 3 minutes. Here's how to make those minutes count.",
      },
      { type: 'heading', text: 'Start With a Bang' },
      {
        type: 'paragraph',
        text: "Your first slide should grab attention instantly — think a short, powerful statement of your mission or the problem you're solving.",
      },
      { type: 'example', text: "We're on a mission to make clean drinking water accessible to 1 billion people." },
      { type: 'heading', text: 'Nail the Problem-Solution Fit' },
      {
        type: 'paragraph',
        text: 'Investors see hundreds of pitches. What makes yours different is how clearly you define the problem and your unique solution.',
      },
      { type: 'list', items: ['Keep it simple and relatable.', 'One slide for the problem, one for the solution — no jargon.'] },
      { type: 'heading', text: 'Show the Market Size' },
      {
        type: 'paragraph',
        text: 'Even the best ideas need a big enough market to grow.',
      },
      { type: 'list', items: ['Use numbers (TAM, SAM, SOM) and credible sources to prove your market potential.'] },
      { type: 'heading', text: 'Highlight Traction Early' },
      {
        type: 'paragraph',
        text: "If you've got results — customers, revenue, partnerships — don't hide them at the end.",
      },
      { type: 'list', items: ['Put them up front. Traction builds instant credibility.'] },
      { type: 'heading', text: 'Keep it Short and Clean' },
      {
        type: 'list',
        items: [
          'Aim for 10–12 slides.',
          'Avoid heavy text — use visuals, graphs, and bullet points.',
          'Every slide should answer one main question, not five.',
        ],
      },
      { type: 'heading', text: 'Know Your Ask' },
      {
        type: 'paragraph',
        text: "Always end with a clear investment ask: how much you're raising, how you'll use it, and the expected outcome.",
      },
      { type: 'list', items: ['Be confident, not vague.'] },
      { type: 'heading', text: 'Final Tip' },
      {
        type: 'quote',
        text: 'Your pitch deck is the hook. The meeting is the story. Keep slides simple, tell a compelling narrative, and let your passion fill the gaps.',
      },
      {
        type: 'cta',
        title: 'Want expert eyes on your deck?',
        text: 'Get expert feedback that can turn a “maybe” into a “yes” before you meet investors.',
        buttonLabel: 'Review My Pitch Deck',
      },
    ],
  },
];

export const blogCategories = ['All', 'Fundraising', 'Growth', 'Legal', 'Product', 'Founders'];
