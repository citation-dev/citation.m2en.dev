import {defaultTheme} from "vuepress";
import {navbarEn, navbarJa, sidebarEn, sidebarJa} from "./configs";

export default {
  title: 'citation docs',
  description: 'Discord Bot to display preview of message links',
  lang: 'ja-JP',
  base: '/',

  head: [
    ['meta', { name: 'theme-color', content: '#FF1D68' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: 'https://github.com/citation-dev.png' }]
  ],

  locales: {
    "/": {
      lang: "日本語",
      description: "メッセージリンクのプレビューを表示するDiscord Bot"
    },
    "/en/": {
      lang: "English",
      description: "Discord Bot to display preview of message links"
    },
  },

  theme: defaultTheme({
    repo: 'citation-dev/citation',
    repoLabel: 'GitHub',
    editLink: true,
    docsDir: 'src',

    locales: {
      "/": {
        contributors: true,
        contributorsText: "編集者",
        lastUpdatedText: "最終更新日",
        selectLanguageName: "日本語",

        navbar: navbarJa,
        sidebar: sidebarJa
      },
      "/en/": {
        contributors: true,
        contributorsText: "Contributors",
        lastUpdatedText: "Last Updated",
        selectLanguageName: "English",

        navbar: navbarEn,
        sidebar: sidebarEn
      }
    }
  }),

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/medium-zoom',
  ]
}
