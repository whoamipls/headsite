import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
// 首页
import Home from '../views/Home.vue'
// 关于和德
import About from '../views/about/About.vue'
import Overview from '../views/about/Overview.vue'
import Vision from '../views/about/Vision.vue'
import Speech from '../views/about/Speech.vue'
import History from '../views/about/History.vue'
import Qualification from '../views/about/Qualification.vue'
// 战略布局
import Strategy from '../views/strategy/Strategy.vue'
import Special from '../views/strategy/Special.vue'
import Astronomy from '../views/strategy/Astronomy.vue'
import Satellite from '../views/strategy/Satellite.vue'
import TradeAgent from '../views/strategy/TradeAgent.vue'
import Skywalker from '../views/strategy/Skywalker.vue'
import Network from '../views/strategy/Network.vue'
import Platform from '../views/strategy/Platform.vue'
import Connection from '../views/strategy/Connection.vue'
import Terminal from '../views/strategy/Terminal.vue'
import Application from '../views/strategy/Application.vue'
import Station from '../views/strategy/Station.vue'
import ControlCenter from '../views/strategy/ControlCenter.vue'
import DataCenter from '../views/strategy/DataCenter.vue'
// 和德咨询
import News from '../views/news/News.vue'
import Hot from '../views/news/Hot.vue'
import HotDetail from '../views/news/HotDetail.vue'
// 社会责任
import Duty from '../views/duty/Duty.vue'
import Charity from '../views/duty/Charity.vue'
// 人力资源
import Hr from '../views/hr/Hr.vue'
import Idea from '../views/hr/Idea.vue'
import Recruit from '../views/hr/Recruit.vue'
import Welfare from '../views/hr/Welfare.vue'
import Environment from '../views/hr/Environment.vue'
import Activities from '../views/hr/Activities.vue'
// 联系我们
import Contact from '../views/contact/Contact.vue'
import Map3D from '../components/Map3D.vue'


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
				component: About,
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
						path: '/About/History',
						component: History,
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
				component: Strategy,
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
						component: Satellite,
						name: '商业卫星配套'
					},
					{
						path: '/Strategy/TradeAgent',
						component: TradeAgent,
						name: '外贸代理服务'
					},
					{
						path: '',
						component: null,
						name: '“天行者” 规划建设',
					},
					{
						path: '/Strategy/Skywalker',
						component: Skywalker,
						name: '“天行者” 星座'
					},
					{
						path: '/Strategy/Network',
						component: Network,
						name: '全球卫星网络'
					},
					{
						path: '/Strategy/Platform',
						component: Platform,
						name: '系统平台和移动APP'
					},
					{
						path: '/Strategy/Connection',
						component: Connection,
						name: '互联互通'
					},
					{
						path: '/Strategy/Terminal',
						component: Terminal,
						name: '物联网卫星终端'
					},
					{
						path: '/Strategy/Application',
						component: Application,
						name: '应用服务'
					},
					{
						path: '',
						component: null,
						name: '卫星地面站系统建设',
					},
					{
						path: '/Strategy/Station',
						component: Station,
						name: '卫星地面站'
					},
					{
						path: '/Strategy/ControlCenter',
						component: ControlCenter,
						name: '测运控中心'
					},
					{
						path: '/Strategy/DataCenter',
						component: DataCenter,
						name: '数据服务中心'
					}
				]
			},
			{
				path: '/News',
				component: News,
				name: '和德资讯',
				children: [
					{
						path: '/News/Hot',
						component: Hot,
						name: '热点事件'
					},
					{
						path: '/News/HotDetail',
						component: HotDetail,
						name: '事件详情',
						hidden: true
					},
					{
						path: '/News/Trend',
						component: Astronomy,
						name: '业务动态'
					},
					{
						path: '/News/New',
						component: Astronomy,
						name: '行业新闻'
					}
				]
			},
			{
				path: '/Duty',
				component: Duty,
				name: '社会责任',
				children: [
					{
						path: '/Duty/Charity',
						component: Charity,
						name: '慈善公益'
					},
					{
						path: '/Duty/Social',
						component: Map3D,
						name: '社工服务'
					}
				]
			},
			{
				path: '/Hr',
				component: Hr,
				name: '人力资源',
				children: [
					{
						path: '/Hr/Idea',
						component: Idea,
						name: '人才理念'
					},
					{
						path: '/Hr/Recruit',
						component: Recruit,
						name: '招贤纳士'
					},
					{
						path: '/Hr/Welfare',
						component: Welfare,
						name: '薪酬福利'
					},
					{
						path: '/Hr/Environment',
						component: Environment,
						name: '工作环境'
					},
					{
						path: '/Hr/Activities',
						component: Activities,
						name: '团建活动'
					}
				]
			},
			{
				path: '/Contact',
				component: Contact,
				name: '联系我们'
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
