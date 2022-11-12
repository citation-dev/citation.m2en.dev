import { NavbarConfig } from "vuepress";

export const navbarJa: NavbarConfig = [
    {
        text: 'ガイド',
        children: [
            '/guide/README.md',
            {
                text: 'インストールガイド',
                children: [
                    '/guide/install-guide/getting-started.md',
                ]
            },
        ],
    },
    {
        text: 'リファレンス',
        children: [
            {
                text: '機能',
                children: [
                    '/reference/features/citation.md',
                    '/reference/features/help.md',
                    '/reference/features/ping.md',
                ]
            },
            {
                text: 'コミュニティ運営者向け',
                children: [
                    '/reference/community/permissions.md',
                ]
            },
            {
                text: '開発者向け',
                children: [
                    '/reference/developer/citation.md',
                    '/reference/developer/citation.m2en.dev.md',
                ]
            }
        ]
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
