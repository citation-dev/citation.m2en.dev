import { NavbarConfig } from "vuepress";

export const navbarEn: NavbarConfig = [
    {
        text: 'Guide',
        children: [
            '/en/guide/README.md',
            {
                text: 'Install Guide',
                children: [
                    '/en/guide/install-guide/getting-started.md',
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
                    '/en/reference/features/citation.md',
                    '/en/reference/features/help.md',
                    '/en/reference/features/ping.md',
                ]
            },
            {
                text: 'For Community Managers',
                children: [
                    '/en/reference/community/permissions.md',
                ]
            },
            {
                text: 'For Developers',
                children: [
                    '/en/reference/developer/citation.md',
                    '/en/reference/developer/citation.m2en.dev.md',
                    '/en/reference/developer/i18n.md'
                ]
            }
        ]
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
