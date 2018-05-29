module.exports = {
    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'Nove.js',
            description: '使用 TypeScript 创建企业级应用'
        }
    },
    serviceWorker: true,
    themeConfig: {
        repo: 'novejs/nove',
        editLinks: true,
        docsRepo: 'novejs/documentation',
        locales: {
            '/': {
                label: '简体中文',
                selectText: '语言',
                editLinkText: '在 GitHub 编辑此页面',
                lastUpdated: '最后更新',
                nav: [
                    {
                        text: '快速指南',
                        link: '/guide/',
                    },
                    {
                        text: 'API 手册',
                        link: '/apis/'
                    },
                    {
                        text: '生态',
                        link: '/ecosystems/'
                    }
                ],
                sidebar: {
                    '/guide/': [
                        {
                            title: '指南',
                            collapsable: false,
                            children: [
                                '',
                                'getting-started'
                            ]
                        }
                    ]
                }
            }
        }
    }
}
