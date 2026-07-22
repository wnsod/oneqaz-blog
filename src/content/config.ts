import { defineCollection, z } from 'astro:content';

// Shared frontmatter schema — enforced at build time.
// A post missing a required field FAILS the build (prevents bad auto-publishes).
const postSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  // category is implied by the collection folder, but kept for clarity/validation
  category: z.enum(['track-record', 'market', 'journal', 'spotlight']),
  // market tags — cross-filter axis (kr / us / crypto)
  markets: z.array(z.enum(['kr', 'us', 'crypto'])).default([]),
  tags: z.array(z.string()).default([]),
  lang: z.enum(['ko', 'en']).default('ko'),
  draft: z.boolean().default(false),
  // 정정/갱신 재발행 시각 — JSON-LD dateModified 로 노출 (없으면 미수정 글)
  updated: z.coerce.date().optional(),
  // 데이터 기준일 (발행일 date 와 분리 — 날짜 오귀속 방지, §4-2)
  data_as_of: z.coerce.date().optional(),
  // 기계 가독 핵심 수치 (§4-7 — AI 인용용, 소스 명기)
  metrics: z.record(z.union([z.string(), z.number()])).optional(),
  ogImage: z.string().optional(),
  // hreflang pairing — the alternate-language version of this same post
  altUrl: z.string().optional(),
  altLang: z.enum(['ko', 'en']).optional(),
});

const trackRecord = defineCollection({ type: 'content', schema: postSchema });
const market = defineCollection({ type: 'content', schema: postSchema });
const journal = defineCollection({ type: 'content', schema: postSchema });
const spotlight = defineCollection({ type: 'content', schema: postSchema });

export const collections = {
  'track-record': trackRecord,
  market,
  journal,
  spotlight,
};
