import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Layout,
        redirect: '/product',
        children: [
            {
                path: '/product',
                name: 'product',
                component: () =>
                    import(
                        /* webpackChunkName: "home" */ '@/views/product/index.vue'
                    )
            },
            {
                path: '/solution',
                name: 'solution',
                redirect: '/solution/home1-1',
                component: () =>
                    import(
                        /* webpackChunkName: "home1" */ '@/views/solution/index.vue'
                    ),
                children: [
                    {
                        path: 'home1-1',
                        name: 'home1-1',
                        component: () =>
                            import(
                                /* webpackChunkName: "home1-1" */ '@/views/solution/home1-1'
                            )
                    },
                    {
                        path: 'home1-2',
                        name: 'home1-2',
                        component: () =>
                            import(
                                /* webpackChunkName: "home1-2" */ '@/views/solution/home1-2'
                            )
                    },
                    {
                        path: 'home1-3',
                        name: 'home1-3',
                        component: () =>
                            import(
                                /* webpackChunkName: "home1-3" */ '@/views/solution/home1-3'
                            )
                    },
                    {
                        path: 'home1-4',
                        name: 'home1-4',
                        component: () =>
                            import(
                                /* webpackChunkName: "home1-4" */ '@/views/solution/home1-4'
                            )
                    }
                ]
            },
            {
                path: '/ecology',
                name: 'ecology',
                component: () =>
                    import(
                        /* webpackChunkName: "home" */ '@/views/ecology/index.vue'
                    )
            },
            {
                path: '/help',
                name: 'help',
                component: () =>
                    import(
                        /* webpackChunkName: "home" */ '@/views/help/index.vue'
                    )
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import(
                        /* webpackChunkName: "home" */ '@/views/about/index.vue'
                    )
            },
            {
                path: '/foundation',
                name: 'foundation',
                component: () =>
                    import(
                        /* webpackChunkName: "home" */ '@/views/foundation/index.vue'
                    )
            }
        ]
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;
