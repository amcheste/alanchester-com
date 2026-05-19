import { defineCollection, z } from 'astro:content';

const writingSchema = z.object({
  title: z.string(),
  subtitle: z.string(),
  date: z.coerce.date(),
  type: z.enum(['essay', 'paper']),
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
