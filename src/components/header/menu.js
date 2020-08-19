const menu = [
    {
        title: '产品',
        name: 'product',
        path: '/product',
        children: [],
        menuItemShow: false
    },
    {
        title: '解决方案',
        name: 'solution',
        path: '/solution',
        children: [
            {
                menuItemTitle: {
                    name: '产品服务'
                },
                menuItemArray: [
                    {
                        title: '白帽服务1',
                        name: 'baimao1',
                        path: '/solution/home1-1'
                    },
                    {
                        title: '白帽服务2',
                        name: 'baimao2',
                        path: '/solution/home1-2'
                    },
                    {
                        title: '白帽服务3',
                        name: 'baimao3',
                        path: '/solution/home1-3'
                    },
                    {
                        title: '白帽服务4',
                        name: 'baimao4',
                        path: '/solution/home1-4'
                    }
                ]
            },
            {
                menuItemTitle: {
                    name: '产品支撑'
                },
                menuItemArray: [
                    {
                        title: '白帽服务12',
                        name: 'baimao12',
                        path: '/solution/home1-1-1'
                    },
                    {
                        title: '白帽服务22',
                        name: 'baimao22',
                        path: '/solution/home1-2-1'
                    },
                    {
                        title: '白帽服务32',
                        name: 'baimao32',
                        path: '/solution/home1-3-1'
                    },
                    {
                        title: '白帽服务42',
                        name: 'baimao42',
                        path: '/solution/home1-4-1'
                    }
                ]
            }
        ],
        menuItemShow: false
    },
    {
        title: '合作与生态',
        name: 'ecology',
        path: '/ecology',
        children: [],
        menuItemShow: false
    },
    {
        title: '帮助中心',
        name: 'help',
        path: '/help',
        children: [],
        menuItemShow: false
    },
    {
        title: '关于我们',
        name: 'about',
        path: '/about',
        children: [],
        menuItemShow: false
    }
]

export { menu }
