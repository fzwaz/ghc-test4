import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import { defineQuery } from 'groq'
import type { BlogPost } from '../data/blogs'
import type { GhcEvent } from '../data/events'

export const projectId = import.meta.env.VITE_SANITY_PROJECT_ID || 'w6lw2vrc'
export const dataset = import.meta.env.VITE_SANITY_DATASET || 'production'
export const apiVersion = import.meta.env.VITE_SANITY_API_VERSION || '2026-02-01'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false,
  perspective: 'published',
})

const builder = imageUrlBuilder(client)
export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source)

// ─── GROQ Queries ───

export const getAllPostsQuery = defineQuery(`
  *[_type == "blogPost" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    author,
    publishedAt,
    category,
    coverEmoji,
    coverGradient,
    coverImage,
    tags,
    featured
  }
`)

export const getPostBySlugQuery = defineQuery(`
  *[_type == "blogPost" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    author,
    publishedAt,
    category,
    coverEmoji,
    coverGradient,
    coverImage,
    tags,
    featured,
    content
  }
`)

export const getFeaturedPostQuery = defineQuery(`
  *[_type == "blogPost" && featured == true && defined(slug.current)][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    author,
    publishedAt,
    category,
    coverEmoji,
    coverGradient,
    coverImage,
    tags,
    featured,
    content
  }
`)

export const getAllEventsQuery = defineQuery(`
  *[_type == "event"] | order(eventDate asc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    status,
    scheduleLabel,
    eventDate,
    mode,
    location,
    description,
    badge,
    featured,
    speakerName,
    speakerRole
  }
`)

export const getUpcomingEventsQuery = defineQuery(`
  *[_type == "event" && status == "upcoming"] | order(eventDate asc, _createdAt desc) {
    _id,
    title,
    "slug": slug.current,
    status,
    scheduleLabel,
    eventDate,
    mode,
    location,
    description,
    badge,
    featured,
    speakerName,
    speakerRole
  }
`)

// Helper to format ISO dates into display strings like "15 Aug 2025"
export function formatDisplayDate(dateStr?: string): string {
  if (!dateStr) return ''
  try {
    const d = new Date(dateStr)
    if (isNaN(d.getTime())) return dateStr
    return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
  } catch {
    return dateStr
  }
}

// Transform Sanity blog post document into BlogPost interface
export function mapSanityPost(raw: any): BlogPost {
  return {
    slug: raw.slug || '',
    title: raw.title || '',
    excerpt: raw.excerpt || '',
    date: formatDisplayDate(raw.publishedAt) || 'Recent',
    author: raw.author || 'GHC GrowthLab',
    category: raw.category || 'Founders',
    readTime: '5 min read',
    coverEmoji: raw.coverEmoji || '🚀',
    coverGradient: raw.coverGradient || 'linear-gradient(135deg, #0d5f59 0%, #1a7b74 60%, #2ea096 100%)',
    coverImageUrl: raw.coverImage ? urlFor(raw.coverImage).width(1200).url() : undefined,
    tags: Array.isArray(raw.tags) ? raw.tags : [],
    content: raw.content || [],
    featured: Boolean(raw.featured),
  }
}

// Transform Sanity event document into GhcEvent interface
export function mapSanityEvent(raw: any): GhcEvent {
  return {
    id: raw._id || raw.slug || String(Math.random()),
    title: raw.title || '',
    status: raw.status === 'ongoing' ? 'ongoing' : 'upcoming',
    schedule: raw.scheduleLabel || (raw.eventDate ? formatDisplayDate(raw.eventDate) : 'TBD'),
    mode: raw.mode || 'Online',
    desc: raw.description || '',
    location: raw.location || '',
    badge: raw.badge || 'Session',
    eventDate: raw.eventDate,
    featured: Boolean(raw.featured),
    speakerName: raw.speakerName,
    speakerRole: raw.speakerRole,
  }
}

// ─── Fetch API helpers ───

export async function fetchAllPosts(): Promise<BlogPost[]> {
  const docs = await client.fetch(getAllPostsQuery)
  return Array.isArray(docs) ? docs.map(mapSanityPost) : []
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const doc = await client.fetch(getPostBySlugQuery, { slug })
  return doc ? mapSanityPost(doc) : null
}

export async function fetchFeaturedPost(): Promise<BlogPost | null> {
  const doc = await client.fetch(getFeaturedPostQuery)
  return doc ? mapSanityPost(doc) : null
}

export async function fetchAllEvents(): Promise<GhcEvent[]> {
  const docs = await client.fetch(getAllEventsQuery)
  return Array.isArray(docs) ? docs.map(mapSanityEvent) : []
}

export async function fetchUpcomingEvents(): Promise<GhcEvent[]> {
  const docs = await client.fetch(getUpcomingEventsQuery)
  return Array.isArray(docs) ? docs.map(mapSanityEvent) : []
}
