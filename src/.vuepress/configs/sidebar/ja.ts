import { SidebarConfig } from "vuepress";

export const sidebarJa: SidebarConfig = {
    '/guide/': [
        {
            text: 'ガイド',
            children: [
                '/guide/README.md',
                '/guide/install-guide/getting-started.md',
            ],
        },
    ],
    '/guide/install-guide/': [
        {
            text: 'インストールガイド',
            children: [
                '/guide/install-guide/create-bot.md',
                '/guide/install-guide/docker.md',
                '/guide/install-guide/self-build.md',
            ],
        },
    ],
    '/reference/': [
        {
            text: "機能",
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
                '/reference/developer/i18n.md',
            ]
        }
    ],
    '/rumpulid/': [
        {
            text: 'ガイド',
            children: [
                '/rumpulid/guide/getting-started.md',
            ],
        },
    ]
}
