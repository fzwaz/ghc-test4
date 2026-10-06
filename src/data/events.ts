export interface GhcEvent {
  id: string;
  title: string;
  status: 'ongoing' | 'upcoming';
  schedule: string;
  mode: string;
  desc: string;
  location?: string;
  badge?: string;
  eventDate?: string;
  featured?: boolean;
  speakerName?: string;
  speakerRole?: string;
}

// Single source of truth is now Sanity Studio (event documents).
// Kept as empty array so old imports don't break. Add/edit events in Studio, not here.
export const events: GhcEvent[] = [];
