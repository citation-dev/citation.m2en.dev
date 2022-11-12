import { SidebarConfig } from "vuepress";

export const sidebarEn: SidebarConfig = {
    '/en/guide/': [
        {
            text: 'Guide',
            children: [
                '/en/guide/README.md',
                '/en/guide/getting-started.md',
            ],
        },
    ],
    '/guide/install-guide/': [
        {
            text: 'Install Guide',
            children: [
                '/en/guide/install-guide/create-bot.md',
                '/en/guide/install-guide/docker.md',
                '/en/guide/install-guide/self-build.md',
            ],
        },
    ],
    '/reference/': [
        {
            text: "Features",
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
}
