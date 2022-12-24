import {
	createRouter,
	createWebHashHistory
} from 'vue-router'


import Index from '../pages/index/index.vue'
const routes = [

	{
		path: '/',
		name: 'Index',
		component: Index
	},

	// {
	// 	path: '/Home',
	// 	name: 'Home',
	// 	component: () => import('../pages/home/home.vue'),
	// 	redirect: '/home/index',
	// 	children: [{
	// 			path: 'index',
	// 			component: () => import('../pages/home/views/index/index.vue'),
	// 		},
	// 		{
	// 			path: 'all',
	// 			component: () => import('../pages/home/views/all/all.vue'),
	// 		},
	// 		{
	// 			path: 'publishList',
	// 			component: () => import('../pages/home/views/publish/publishList.vue'),
	// 		},
	// 		{
	// 			path: 'publish',
	// 			component: () => import('../pages/home/views/publish/publish.vue'),
	// 		},
	// 		{
	// 			path: 'business',
	// 			component: () => import('../pages/home/views/business/business.vue'),
	// 		},
	// 		{
	// 			path: 'person',
	// 			component: () => import('../pages/home/views/person/person.vue'),
	// 		},


	// 	]
	// }




]


const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
