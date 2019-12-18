import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Home from '../components/Home.vue'
import About from '../views/About.vue'
import Overview from '../views/about/Overview.vue'
import Vision from '../views/about/Vision.vue'
import Strategy from '../views/strategy/Strategy.vue'
import Special from '../views/strategy/Special.vue'
import Astronomy from '../views/strategy/Astronomy.vue'
import HelloWorld from '../components/HelloWorld.vue'
import SecondFrame from '../views/SecondFrame.vue'
import Speech from '../views/about/Speech.vue'
import Qualification from '../views/about/Qualification.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		component: Main,
		children: [
			{
				path: '/Home',
				component: Home,
				name: '首页'
			},
			{
				path: '/About',
				component: SecondFrame,
				name: '关于和德',
				children: [
					{
						path: '/About/Overview',
						component: Overview,
						name: '公司概况'
					},
					{
						path: '/About/Vision',
						component: Vision,
						name: '公司愿景'
					},
					{
						path: '/About/Speech',
						component: Speech,
						name: '董事长致词'
					},
					{
						path: '/About/Vision',
						component: Vision,
						name: '发展历程'
					},
					{
						path: '/About/Qualification',
						component: Qualification,
						name: '公司资质'
					}
				]
			},
			{
				path: '/Strategy',
				component: SecondFrame,
				name: '战略布局',
				children: [
					{
						path: '',
						component: null,
						name: '宇航中心',
					},
					{
						path: '/Strategy/Special',
						component: Special,
						name: '重大专项配套'
					},
					{
						path: '/Strategy/Astronomy',
						component: Astronomy,
						name: '天文科学工程'
					},
					{
						path: '/Strategy/Satellite',
						component: Astronomy,
						name: '商业卫星配套'
					},
					{
						path: '/Strategy/TradeAgent',
						component: Astronomy,
						name: '外贸代理服务'
					},
					{
						path: '',
						component: null,
						name: '“天行者” 规划建设',
					},
					{
						path: '/Strategy/Skywalker',
						component: Astronomy,
						name: '“天行者” 星座'
					},
					{
						path: '/Strategy/Network',
						component: Astronomy,
						name: '全球卫星网络'
					},
					{
						path: '/Strategy/Platform',
						component: Astronomy,
						name: '系统平台和移动APP'
					},
					{
						path: '/Strategy/Connection',
						component: Astronomy,
						name: '互联互通'
					},
					{
						path: '/Strategy/Terminal',
						component: Astronomy,
						name: '物联网卫星终端'
					},
					{
						path: '/Strategy/Application',
						component: Astronomy,
						name: '应用服务'
					},
					{
						path: '',
						component: null,
						name: '卫星地面站系统建设',
					},
					{
						path: '/Strategy/Station',
						component: Astronomy,
						name: '卫星地面站'
					},
					{
						path: '/Strategy/ControlCenter',
						component: Astronomy,
						name: '测运控中心'
					},
					{
						path: '/Strategy/DataCenter',
						component: Astronomy,
						name: '数据服务中心'
					}
				]
			}
		]
	}
]

// const routes = [
// 	{
// 		path: '/Home',
// 		component: Home,
// 		name: '首页',
// 	},
// 	{
// 		path: '',
// 		component: Main,
// 		name: '关于和德',
// 		children: [
// 			{
// 				path: '/Overview',
// 				component: Overview,
// 				name: '公司概况'
// 			},
// 			{
// 				path: '/Vision',
// 				component: Vision,
// 				name: '公司愿景'
// 			},
// 			{
// 				path: '/Speech',
// 				component: Home,
// 				name: '董事长致词'
// 			},
// 			{
// 				path: '/History',
// 				component: Home,
// 				name: '发展历程'
// 			},
// 			{
// 				path: '/Qualification',
// 				component: Home,
// 				name: '公司资质'
// 			}
// 		]
// 	}
// ]


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
