import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout'

Vue.use(VueRouter)

/**
 * 重写路由的push replace方法
 */
const routerPush = VueRouter.prototype.push
const routerReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}
VueRouter.prototype.replace = function push(location) {
  return routerReplace.call(this, location).catch(error=> error)
}

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
	// {
	// 	path: '/layout',
	// 	component: Layout,
	// 	redirect: '/test1',
	// 	children: [
	// 		{
	// 			path: '/test1',
	// 			name: 'test1',
	// 			component: () => import(/* webpackChunkName: "test1" */ '@/views/test1.vue'),
	// 		},
	// 		{
	// 			path: '/test2-1',
	// 			name: 'test2-1',
	// 			component: () => import(/* webpackChunkName: "test2-1" */ '@/views/test2-1.vue'),
	// 		},
	// 		{
	// 			path: '/test2-2',
	// 			name: 'test2-2',
	// 			component: () => import(/* webpackChunkName: "test2-2" */ '@/views/test2-2.vue'),
	// 		},
	// 		{
	// 			path: '/test3',
	// 			name: 'test3',
	// 			component: () => import(/* webpackChunkName: "test3" */ '@/views/test3.vue'),
	// 		},
	// 		{
	// 			path: '/test4',
	// 			name: 'test4',
	// 			component: () => import(/* webpackChunkName: "test4" */ '@/views/test4.vue'),
	// 		},
	// 	]
	// }
];

const router = new VueRouter({
	mode: 'history',
	routes
})

export default router