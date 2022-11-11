import { SidebarConfig } from "vuepress";

export const sidebarEn: SidebarConfig = {
    '/en/guide/': [
        {
            text: 'Guide',
            children: [
                '/en/guide/README.md',
                '/en/guide/getting-started.md',
            ],
        }
    ],
    '/en/guide/install-guide': [
        {
            text: 'Install Guide',
            children: [
                '/en/guide/install-guide/create-bot.md',
                '/en/guide/install-guide/docker.md',
                '/en/guide/install-guide/self-build.md',
            ],
        },
        {
            text: 'Back to Guide',
            link: '/en/guide/',
        }
    ]
}
