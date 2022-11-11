import { NavbarConfig } from "vuepress";

export const navbarJa: NavbarConfig = [
    {
        text: 'ガイド',
        link: '/guide/',
    },
    {
        text: 'リファレンス',
        link: '/reference/',
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
