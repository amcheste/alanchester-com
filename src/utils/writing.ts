import { getCollection } from 'astro:content';
import { readingTime } from './readingTime';

// The two writing collections map one-to-one to a display type. The
// distinction is editorial, not technical:
//
//   essay  (blog collection)   — shorter, informal analysis or opinion.
//   paper  (papers collection) — longer, formal/structured research.
//
// Deriving the type from the collection here keeps the folder as the
// single source of truth: an essay can't accidentally be labeled a paper.
export type WritingType = 'essay' | 'paper';

export interface WritingItem {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  date: Date;
  type: WritingType;
  readingTime: string;
}

/**
 * Returns every published (non-draft) essay and paper as a single list,
 * each tagged with its type, sorted newest first.
 */
export async function getWriting(): Promise<WritingItem[]> {
  const [essays, papers] = await Promise.all([
    getCollection('blog', ({ data }) => !data.draft),
    getCollection('papers', ({ data }) => !data.draft),
  ]);

  const items: WritingItem[] = [
    ...essays.map((entry) => ({
      slug: entry.slug,
      type: 'essay' as const,
      readingTime: readingTime(entry.body),
      ...entry.data,
    })),
    ...papers.map((entry) => ({
      slug: entry.slug,
      type: 'paper' as const,
      readingTime: readingTime(entry.body),
      ...entry.data,
    })),
  ];

  return items.sort((a, b) => b.date.getTime() - a.date.getTime());
}
