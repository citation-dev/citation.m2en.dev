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

  themeConfig: {
    repo: 'citation-dev/citation.m2en.dev',
    displayAllHeaders: true,
    repoLabel: 'GitHub',
    editLinks: true,
    docsDir: 'src',
    nextLinks: true,
    prevLinks: true,

    // TODO: Add more sidebar items
    sidebar: {
      '/docs/': [
        {
          title: 'Docs',
        }
      ],
    },

    locales: {
      "/": {
        selectLanguageName: '日本語',
        contributorsText: '編集者',
        lastUpdatedText: '編集日時',
        editLinkText: 'GitHubで編集する',
        relatedPagesText: '関連ページ',
        searchPlaceholder: '検索する....',
        nav: [
          {
            text: 'ドキュメント',
            link: '/docs/',
          },
          {
            text: 'リンク',
            items: [
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
                items: [
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
          },
        ]
      },
      "/en/": {
        selectLanguageName: 'English',
        contributorsText: 'Contributors',
        lastUpdatedText: 'Last Updated',
        editLinkText: 'Edit on GitHub',
        relatedPagesText: 'Related pages',
        searchPlaceholder: 'Search....',
        nav: [
          {
            text: 'Documents',
            link: '/docs/',
          },
          {
            text: 'Links',
            items: [
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
                items: [
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
          },
        ]
      }
    }
  },

  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
    '@vuepress/medium-zoom',
  ]
}
