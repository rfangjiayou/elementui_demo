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
		redirect: '/test1',
		children: [
			{
				path: '/test1',
				name: 'test1',
				component: () => import(/* webpackChunkName: "test1" */ '@/views/test1.vue'),
			},
			{
				path: '/test2-1',
				name: 'test2-1',
				component: () => import(/* webpackChunkName: "test2-1" */ '@/views/test2-1.vue'),
			},
			{
				path: '/test2-2',
				name: 'test2-2',
				component: () => import(/* webpackChunkName: "test2-2" */ '@/views/test2-2.vue'),
			},
			{
				path: '/test3',
				name: 'test3',
				component: () => import(/* webpackChunkName: "test3" */ '@/views/test3.vue'),
			},
			{
				path: '/test4',
				name: 'test4',
				component: () => import(/* webpackChunkName: "test4" */ '@/views/test4.vue'),
			},
		]
	}
];

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router