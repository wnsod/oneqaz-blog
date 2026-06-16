import { defineCollection, z } from 'astro:content';

// Shared frontmatter schema — enforced at build time.
// A post missing a required field FAILS the build (prevents bad auto-publishes).
const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  // category is implied by the collection folder, but kept for clarity/validation
  category: z.enum(['track-record', 'market', 'journal']),
  // market tags — cross-filter axis (kr / us / crypto)
  markets: z.array(z.enum(['kr', 'us', 'crypto'])).default([]),
  tags: z.array(z.string()).default([]),
  lang: z.enum(['ko', 'en']).default('ko'),
  draft: z.boolean().default(false),
  ogImage: z.string().optional(),
});

const trackRecord = defineCollection({ type: 'content', schema: postSchema });
const market = defineCollection({ type: 'content', schema: postSchema });
const journal = defineCollection({ type: 'content', schema: postSchema });

export const collections = {
  'track-record': trackRecord,
  market,
  journal,
};
