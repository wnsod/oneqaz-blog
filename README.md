# OneQAZ Blog (blog.oneqaz.com)

Static Astro site that auto-publishes OneQAZ's daily trading journals, market reads, and
verified track record — built to be read and cited by AI crawlers (GPTBot, ClaudeBot,
PerplexityBot, Google-Extended).

**Owned & published by Mac mini.** See vault `mac_mini_tasks/task_blog_publishing_pipeline.md`
and `mac_mini_tasks/blog_repo_blueprint.md`.

## Categories

- `src/content/track-record/` — verified prediction accuracy (results public, method private)
- `src/content/market/` — daily regime reads
- `src/content/journal/` — trading log, published on a delay

Markets (kr/us/crypto) are **tags**, not categories. Wiki/system docs live in git, not here.

## Publish a post

Drop a markdown file into the right collection folder with valid frontmatter
(schema enforced in `src/content/config.ts`):

```yaml
---
title: "..."
date: 2026-06-16T16:00:00+09:00
description: "one-line summary"
category: market            # track-record | market | journal
markets: [kr]               # kr | us | crypto
tags: [regime, close]
lang: ko                    # ko | en
draft: false
---
```

File name = URL slug: `<category>/<YYYY-MM-DD>-<slug>.md` → `/market/2026-06-16-...`.
`git push` to `main` → GitHub Actions builds + deploys to GitHub Pages.

## Local dev

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs ./dist
```

## AI-discoverability

- 100% static HTML (no JS needed to read content)
- Per-post JSON-LD (`Article`) in initial HTML — `src/layouts/PostLayout.astro`
- `public/robots.txt` explicitly allows AI bots + points to sitemap
- `public/llms.txt` curated index
- sitemap via `@astrojs/sitemap`

## Sample posts

The `*-sample-*.md` files are scaffolding placeholders. Delete once real publishing starts.
