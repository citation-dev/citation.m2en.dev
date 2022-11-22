import { SidebarConfig } from "vuepress";

export const sidebarEn: SidebarConfig = {
    '/en/guide/': [
        {
            text: 'Guide',
            children: [
                '/en/guide/README.md',
                '/en/guide/install-guide/getting-started.md',
            ],
        },
    ],
    '/en/guide/install-guide/': [
        {
            text: 'Install Guide',
            children: [
                '/en/guide/install-guide/create-bot.md',
                '/en/guide/install-guide/docker.md',
                '/en/guide/install-guide/self-build.md',
            ],
        },
    ],
    '/en/reference/': [
        {
            text: "Features",
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
                '/en/reference/developer/i18n.md',
            ]
        }
    ]
}
