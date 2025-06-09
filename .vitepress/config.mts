import { defineConfig } from 'vitepress';

import { ruConfig } from './ru';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Platformer',
  description: 'A complete documentation for the mini-apps ecosystem - Platformer.',
  // Internationalization.
  // https://vitepress.dev/guide/i18n
  locales: {
    root: { label: 'English', lang: 'en' },
    ru: { label: 'Русский', lang: 'ru', ...ruConfig },
  },
  // Show when each page content was last updated.
  // https://vitepress.dev/reference/default-theme-last-updated#last-updated
  lastUpdated: true,
  // We don't want .html to be in the end of each route.
  // https://vitepress.dev/guide/routing#generating-clean-url
  cleanUrls: true,
  // Enable sitemap generation.
  // https://vitepress.dev/guide/sitemap-generation#sitemap-generation
  sitemap: {
    hostname: 'https://docs.mini-apps.store',
  },
  // Pages directory.
  // https://vitepress.dev/reference/site-config#srcdir
  srcDir: './docs',
  // Configure <head/>.
  // https://vitepress.dev/reference/site-config#head
  head: [
    // Favicon:
    // https://vitepress.dev/reference/site-config#example-adding-a-favicon
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    // Mixpanel analytics:
    // https://docs.mixpanel.com/docs/quickstart/connect-your-data?sdk=javascript
    ['script', { async: '', src: '/analytics.js' }],
  ],
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    editLink: {
      text: 'Edit this page on GitHub',
      pattern: 'https://github.com/platformer/platformer-docs/edit/master/:path',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Platformer',
    },
    logo: '/logo-48x48.png',
    // https://vitepress.dev/reference/default-theme-footer#footer
    nav: [
      { text: 'Documentation', link: '/about' },
    ],
    search: {
      provider: 'local',
    },
    sidebar: [
      {
        text: 'Useful Information',
        items: [
          { text: 'About', link: '/about' },
          { text: 'How It Works', link: '/how-it-works' },
        ],
      },
      {
        text: 'Features',
        items: [
          { text: 'Ecosystem', link: '/ecosystem' },
          { text: 'Separate Links', link: '/separate-links' },
          { text: 'Management System', link: '/management-system' },
          { text: 'Test Groups', link: '/test-groups' },
          { text: 'Privacy Levels', link: '/privacy-levels' },
          { text: 'Cache Reset', link: '/cache-reset' },
          { text: 'URL Viewer', link: '/url-viewer' },
        ],
      },
      {
        text: 'Launchers',
        items: [
          { text: 'General Information', link: '/launchers/about' },
          { text: 'For Telegram', link: '/launchers/telegram' },
        ],
      },
      {
        text: 'Guides',
        items: [
          { text: 'Integration With Telegram Mini Apps', link: '/integration-with-tma' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/platformer-hq' },
      { icon: 'telegram', link: 'https://t.me/platformer_hq' },
    ],
  },
});
