import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
	{
        path: '/',
        redirect: '/layout'
    },
    {
		path: '/layout',
		component: Layout,
		redirect: '/home',
		children: [
			{
				path: '/home',
				name: 'home',
				component: () => import(/* webpackChunkName: "home" */ '@/views/home/index.vue'),
			},
			{
				path: '/home1',
                name: 'home1',
                redirect: '/home1/home1-1',
                component: () => import(/* webpackChunkName: "home1" */ '@/views/home1/index.vue'),
                children: [
                    {
                        path: 'home1-1',
                        name: 'home1-1',
                        component: () => import(/* webpackChunkName: "home1-1" */ '@/views/home1/components/home1-1.vue'),
                    },
                    {
                        path: 'home1-2',
                        name: 'home1-2',
                        component: () => import(/* webpackChunkName: "home1-2" */ '@/views/home1/components/home1-2.vue'),
                    },
                    {
                        path: 'home1-3',
                        name: 'home1-3',
                        component: () => import(/* webpackChunkName: "home1-3" */ '@/views/home1/components/home1-3.vue'),
                    },
                    {
                        path: 'home1-4',
                        name: 'home1-4',
                        component: () => import(/* webpackChunkName: "home1-4" */ '@/views/home1/components/home1-4.vue'),
                    }
                ]
			}
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router