// RSS 2.0 피드 — 네이버 서치어드바이저 RSS 제출 + 구독·디스커버리용.
// 의존성 없이 직접 생성(정적 빌드 시 /rss.xml 로 prerender). KO 글만(홈과 동일 기준).
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
    const entries = await getCollection(c, ({ data }) => !data.draft && data.lang !== 'en');
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
    <link>${SITE}/</link>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml" />
    <description>AI-published daily trading journals, market reads, and a verified track record across crypto, KR and US markets.</description>
    <language>ko</language>
${items}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
}
