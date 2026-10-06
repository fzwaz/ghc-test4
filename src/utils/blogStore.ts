import { seedBlogs, type BlogPost } from '../data/blogs';

const STORAGE_KEY = 'ghc_custom_blogs_v1';

/**
 * Mini no-code CMS store.
 * - Seed blogs ship with the code (src/data/blogs.ts).
 * - Blogs created/edited in /blog/admin are saved to localStorage,
 *   so the team can publish without touching code.
 * - To go multi-user later, point these same functions at any
 *   headless CMS (Sanity, Contentful, Strapi, Decap) — page structure
 *   already reads through this layer.
 */

export function getCustomBlogs(): BlogPost[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function getAllBlogs(): BlogPost[] {
  const custom = getCustomBlogs();
  const customSlugs = new Set(custom.map((b) => b.slug));
  // Custom blogs first (newest), seed blogs that weren't overwritten
  return [...custom, ...seedBlogs.filter((b) => !customSlugs.has(b.slug))];
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return getAllBlogs().find((b) => b.slug === slug);
}

export function saveBlog(post: BlogPost): void {
  const custom = getCustomBlogs();
  const idx = custom.findIndex((b) => b.slug === post.slug);
  if (idx >= 0) custom[idx] = post;
  else custom.unshift(post);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
}

export function deleteBlog(slug: string): void {
  const custom = getCustomBlogs().filter((b) => b.slug !== slug);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custom));
}

export function slugify(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .slice(0, 80);
}

export function estimateReadTime(blocks: BlogPost['content']): string {
  const words = blocks
    .map((b) =>
      b.type === 'list' ? b.items.join(' ') : b.type === 'cta' ? `${b.title} ${b.text}` : b.text,
    )
    .join(' ')
    .split(/\s+/).length;
  return `${Math.max(2, Math.round(words / 200))} min read`;
}
