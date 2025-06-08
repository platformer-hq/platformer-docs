import { defineConfig } from 'vitepress';

export const ruConfig = defineConfig({
  title: 'Платформер',
  description: 'Полная документация по экосистеме мини-приложений - Платформер.',
  themeConfig: {
    nav: [
      { text: 'Документация', link: '/ru/about' },
    ],
    editLink: {
      text: 'Редактировать эту страницу на GitHub',
      pattern: 'https://github.com/platformer/platformer-docs/edit/master/:path',
    },
    // https://vitepress.dev/reference/default-theme-footer#footer
    footer: {
      message: 'Выпущено под лицензией MIT.',
      copyright: 'Авторское право © 2025-сейчас Платформер',
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
        text: 'Полезная информация',
        items: [
          { text: 'О проекте', link: '/ru/about' },
          { text: 'Как это работает', link: '/ru/how-it-works' },
        ],
      },
      {
        text: 'Преимущества',
        items: [
          { text: 'Экосистема', link: '/ru/ecosystem' },
          { text: 'Отдельные ссылки', link: '/ru/separate-links' },
          { text: 'Система управления', link: '/ru/management-system' },
          { text: 'Тестовые группы', link: '/ru/test-groups' },
          { text: 'Уровни приватности', link: '/ru/privacy-levels' },
          { text: 'Сброс кеша', link: '/ru/cache-reset' },
          { text: 'Обозреватель ссылок', link: '/ru/url-viewer' },
        ],
      },
      {
        text: 'Гайды',
        items: [
          { text: 'Интеграция с Telegram Mini Apps', link: '/ru/integration-with-tma' },
        ],
      },
    ],
  },
});