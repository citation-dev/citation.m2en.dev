import { NavbarConfig } from "vuepress";

export const navbarEn: NavbarConfig = [
    {
        text: 'Guide',
        children: [
            '/guide/README.md',
            {
                text: 'Install Guide',
                children: [
                    '/guide/getting-started.md',
                ]
            },
        ],
    },
    {
        text: 'Reference',
        children: [
            {
                text: 'Features',
                children: [
                    '/reference/features/citation.md',
                    '/reference/features/help.md',
                    '/reference/features/ping.md',
                ]
            },
            {
                text: 'For Community Managers',
                children: [
                    '/reference/community/permissions.md',
                ]
            },
            {
                text: 'For Developers',
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
