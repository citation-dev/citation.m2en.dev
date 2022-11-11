import { SidebarConfig } from "vuepress";

export const sidebarJa: SidebarConfig = {
    '/guide/': [
        {
            text: 'ガイド',
            children: [
                '/guide/README.md',
                '/guide/getting-started.md',
            ],
        }
    ],
    '/guide/install-guide': [
        {
            text: 'インストールガイド',
            children: [
                '/guide/install-guide/create-bot.md',
                '/guide/install-guide/docker.md',
                '/guide/install-guide/self-build.md',
            ],
        },
        {
            text: 'ガイドに戻る',
            link: '/guide/',
        }
    ]
}
