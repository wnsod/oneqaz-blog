// 페이지 언어와 KO↔EN 쌍둥이 경로 — Header·Footer 가 함께 쓴다(종전 Header.astro 안의 계산을 그대로 옮김).
// 블로그는 경로가 곧 언어다: /en/ 프리픽스(상설·목록) 또는 글 슬러그 -en.

const POST_RE = /^\/(journal|market|spotlight|track-record)\/20\d{2}-[^/]+\/$/;

// KO 쪽에서 /en/ 쌍이 있는 경로. About(영어 단일 페이지)·tags(KO 전용)는 쌍이 없다.
const EN_TWIN = [
  /^\/(\d+\/)?$/,                                          // 홈 + 페이지네이션
  /^\/(journal|market|spotlight|track-record)\/(\d+\/)?$/, // 카테고리 목록
  /^\/track-record\/all-time\/$/,
  /^\/(methodology|corrections|anchors)\/$/,
];

export function isPostPath(path: string): boolean {
  return POST_RE.test(path);
}

export function isEnPath(path: string): boolean {
  return path === '/en/' || path.startsWith('/en/') || (isPostPath(path) && /-en\/$/.test(path));
}

/** 같은 페이지의 다른 언어 경로. 쌍이 없으면 null. */
export function altPathOf(path: string): string | null {
  const en = isEnPath(path);
  if (isPostPath(path)) return en ? path.replace(/-en\/$/, '/') : path.replace(/\/$/, '-en/');
  if (path.startsWith('/en/')) return path.replace(/^\/en/, '') || '/';
  if (EN_TWIN.some((re) => re.test(path))) return '/en' + path;
  return null;
}
