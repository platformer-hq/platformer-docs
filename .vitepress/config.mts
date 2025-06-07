import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Platformer',
  description: 'A complete documentation for the mini-apps ecosystem - Platformer.',
  // Internationalization.
  // https://vitepress.dev/guide/i18n
  locales: {
    root: { label: 'English', lang: 'en' },
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
    nav: [
      { text: 'Documentation', link: '/about' },
    ],
    editLink: {
      text: 'Edit this page on GitHub',
      pattern: 'https://github.com/platformer/platformer-monorepo/edit/master/apps/docs/:path',
    },
    // https://vitepress.dev/reference/default-theme-footer#footer
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025-present Platformer',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/platformer-hq' },
      { icon: 'telegram', link: 'https://t.me/platformer_hq' },
    ],
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
          { text: 'Separate Links', link: '/separate-links' },
          { text: 'Apps Management System', link: '/apps-management-system' },
          { text: 'Test Groups', link: '/test-groups' },
          { text: 'Privacy Levels', link: '/privacy-levels' },
        ],
      },
      {
        text: 'Guides',
        items: [
          { text: 'Getting Started', link: '/getting-started' },
        ],
      },
    ],
  },
});
