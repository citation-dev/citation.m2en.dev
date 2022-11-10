import {defaultTheme} from "vuepress";

export default {
  title: 'citation docs',
  description: 'Discord Bot to display preview of message links',
  lang: 'ja-JP',

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

    // TODO: Add more sidebar items
    sidebar: {
      '/docs/': [
        {
          text: 'Docs',
        }
      ]
    },


    locales: {
      "/": {
        contributors: true,
        contributorsText: "編集者",
        lastUpdatedText: "最終更新日",
        selectLanguageName: "日本語",

        navbar: [
          {
            text: 'ドキュメント',
            link: '/docs/',
          },
          {
            text: 'リンク',
            children: [
              {
                text: '公式Discord',
                link: 'https://discord.gg/vWbFzvdks7',
              },
              {
                text: 'GitHub Organization',
                link: 'https://github.com/citation-dev',
              },
              {
                text: 'リポジトリ',
                children: [
                  {
                    text: 'citation',
                    link: 'https://github.com/citation-dev/citation'
                  },
                  {
                    text: 'citation.m2en.dev',
                    link: 'https://github.com/citation-dev/citation.m2en.dev'
                  },
                ]
              }
            ]
          }
        ]
      },
      "/en/": {
        contributors: true,
        contributorsText: "Contributors",
        lastUpdatedText: "Last Updated",
        selectLanguageName: "English",

        navbar: [
          {
            text: 'Documentation',
            link: '/docs/',
          },
          {
            text: 'Links',
            children: [
              {
                text: 'Official Discord',
                link: 'https://discord.gg/vWbFzvdks7',
              },
              {
                text: 'GitHub Organization',
                link: 'https://github.com/citation-dev',
              },
              {
                text: 'Repository',
                children: [
                  {
                    text: 'citation',
                    link: 'https://github.com/citation-dev/citation'
                  },
                  {
                    text: 'citation.m2en.dev',
                    link: 'https://github.com/citation-dev/citation.m2en.dev'
                  },
                ]
              }
            ]
          }
        ]
      }
    }
  }),

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/medium-zoom',
  ]
}
