import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../views/Home.vue'
import Overview from '../components/about/Overview.vue'
import About from '../views/About.vue'
import HelloWorld from '../components/HelloWorld.vue'
import Vision from '../views/about/Vision.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/Home',
		component: Home,
		name: '首页',
	},
	{
		path: '',
		component: Main,
		name: '关于和德',
		children: [
			{
				path: '/Overview',
				component: Overview,
				name: '公司概况'
			},
			{
				path: '/Vision',
				component: Vision,
				name: '公司愿景'
			},
			{
				path: '/Speech',
				component: Home,
				name: '董事长致词'
			},
			{
				path: '/History',
				component: Home,
				name: '发展历程'
			},
			{
				path: '/Qualification',
				component: Home,
				name: '公司资质'
			}
		]
	}
]


// const routes = [
// 	{
// 		path: '/',
// 		component: Main,
// 		children: [
// 			{
// 				path: '/Home',
// 				component: Home,
// 				name: '首页'
// 			},
// 			{
// 				path: '/About',
// 				component: About,
// 				name: '关于和德',
// 				children: [
// 					{
// 						path: '/Overview',
// 						component: Overview,
// 						name: '公司概况'
// 					},
// 					{
// 						path: '/Vision',
// 						component: Home,
// 						name: '公司愿景'
// 					},
// 					{
// 						path: '/Speech',
// 						component: Home,
// 						name: '董事长致词'
// 					},
// 					{
// 						path: '/History',
// 						component: Home,
// 						name: '发展历程'
// 					},
// 					{
// 						path: '/Qualification',
// 						component: Home,
// 						name: '公司资质'
// 					}
// 				]
// 			},
// 		]
// 	}
// ]

// const routes = [
// 	{
// 		path: '/',
// 		name: 'main',
// 		component: Main,
// 		children: [
// 			{
// 				path: '/Home',
// 				component: Home,
// 				name: '首页'
// 			},
// 		]
// 	},
// 	{
// 		path: '/about',
// 		name: 'about',
// 		// route level code-splitting
// 		// this generates a separate chunk (about.[hash].js) for this route
// 		// which is lazy-loaded when the route is visited.
// 		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
// 	}
// ]

const router = new VueRouter({
	routes
})

export default router
