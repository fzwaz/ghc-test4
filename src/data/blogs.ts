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
  coverImageUrl?: string;
  tags: string[];
  content: any[];
  featured?: boolean;
}

// ─── Seed content moved to Sanity Studio (single source of truth) ───
// Kept as empty array so old imports don't break. Add/edit blogs in Studio, not here.
export const seedBlogs: BlogPost[] = [];

export const blogCategories = ['All', 'Fundraising', 'Growth', 'Legal', 'Product', 'Founders'];
