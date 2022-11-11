import { NavbarConfig } from "vuepress";

export const navbarEn: NavbarConfig = [
    {
        text: 'Guide',
        link: '/en/guide/',
    },
    {
        text: 'Reference',
        link: '/en/reference/',
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
