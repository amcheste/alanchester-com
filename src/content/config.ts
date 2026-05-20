import { defineCollection, z } from 'astro:content';

// Two writing collections, distinguished by form, not by a frontmatter
// field. The folder IS the type, so there is one source of truth and no
// risk of a `type:` value drifting out of sync with the directory:
//
//   blog/    essays  — shorter, informal analysis and opinion.
//   papers/  papers  — longer, formal/structured research write-ups
//                      (abstract, numbered sections, references).
//
// Both share this schema and both feed the merged /writing feed. The
// ESSAY / PAPER display label is derived from the collection in
// src/utils/writing.ts, not stored here.
const writingSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  draft: z.boolean().default(false),
});

const blog = defineCollection({
  type: 'content',
  schema: writingSchema,
});

const papers = defineCollection({
  type: 'content',
  schema: writingSchema,
});

export const collections = { blog, papers };
