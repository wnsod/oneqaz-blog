// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// blog.oneqaz.com — static, AI-discoverable content site.
// site URL is REQUIRED for correct sitemap + canonical URLs.
export default defineConfig({
  site: 'https://blog.oneqaz.com',
  trailingSlash: 'never',
  integrations: [
    sitemap(),
  ],
});
