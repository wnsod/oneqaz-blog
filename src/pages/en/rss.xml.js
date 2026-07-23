// EN RSS 2.0 피드 — /rss.xml(KO)의 영어판 쌍둥이. EN 글만(EN 홈과 동일 기준).
import { getCollection } from 'astro:content';

const SITE = 'https://blog.oneqaz.com';
const COLS = ['track-record', 'market', 'spotlight', 'journal'];

const esc = (s) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export async function GET() {
  let posts = [];
  for (const c of COLS) {
    const entries = await getCollection(c, ({ data }) => !data.draft && data.lang === 'en');
    posts.push(...entries.map((x) => ({ ...x, _col: c })));
  }
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  posts = posts.slice(0, 40);

  const items = posts
    .map(
      (p) => `    <item>
      <title>${esc(p.data.title)}</title>
      <link>${SITE}/${p._col}/${p.slug}/</link>
      <guid isPermaLink="true">${SITE}/${p._col}/${p.slug}/</guid>
      <category>${esc(p._col)}</category>
      <pubDate>${p.data.date.toUTCString()}</pubDate>
      <description>${esc(p.data.description)}</description>
    </item>`
    )
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>OneQAZ — Daily Market Intelligence</title>
    <link>${SITE}/en/</link>
    <atom:link href="${SITE}/en/rss.xml" rel="self" type="application/rss+xml" />
    <description>AI-published daily trading journals, market reads, and a verified track record across crypto, KR and US markets.</description>
    <language>en</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
