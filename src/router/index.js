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
// 主营业务
import Special from '../views/mainwork/Special.vue'
import Astronomy from '../views/mainwork/Astronomy.vue'
import TradeAgent from '../views/mainwork/TradeAgent.vue'
import RsOneStop from '../views/mainwork/RsOneStop.vue'
import RsStation from '../views/mainwork/RsStation.vue'
import RsApplication from '../views/mainwork/RsApplication.vue'
import Satellite from '../views/mainwork/skywalker/Satellite.vue'
// 主营业务-宇航中心
import Mainwork from '../views/mainwork/Mainwork.vue'
import MannedSpace from '../views/mainwork/spacecenter/MannedSpace.vue'
import LunarProbe from '../views/mainwork/spacecenter/LunarProbe.vue'
import BeidouNavi from '../views/mainwork/spacecenter/BeidouNavi.vue'
import CommunicationSat from '../views/mainwork/spacecenter/CommunicationSat.vue'
import EarthObservationSat from '../views/mainwork/spacecenter/EarthObservationSat.vue'
import ExperimentSat from '../views/mainwork/spacecenter/ExperimentSat.vue'
import HeavyLift from '../views/mainwork/spacecenter/HeavyLift.vue'
import ComponentExport from '../views/mainwork/spacecenter/ComponentExport.vue'
// 主营业务-天行者星座建设
import Skywalker from '../views/mainwork/skywalker/Skywalker.vue'
import Network from '../views/mainwork/skywalker/Network.vue'
import Platform from '../views/mainwork/skywalker/Platform.vue'
import Connection from '../views/mainwork/skywalker/Connection.vue'
import Terminal from '../views/mainwork/skywalker/Terminal.vue'
import ApplicationService from '../views/mainwork/skywalker/ApplicationService.vue'
import ApplicationCase from '../views/mainwork/skywalker/ApplicationCase.vue'
// 主营业务-地面站系统建设
import Station from '../views/mainwork/station/Station.vue'
import ControlCenter from '../views/mainwork/station/ControlCenter.vue'
import DataCenter from '../views/mainwork/station/DataCenter.vue'
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
				path: '/Mainwork',
				component: Mainwork,
				name: '主营业务',
				children: [
					{
						path: '',
						component: null,
						name: '航天重大专项配套',
						childPaths: '/MannedSpace/LunarProbe/BeidouNavi/CommunicationSat/EarthObservationSat/ExperimentSat/HeavyLift/ComponentExport/'
					},
					{
						path: '/Mainwork/MannedSpace',
						component: MannedSpace,
						name: '载人航天'
					},
					{
						path: '/Mainwork/LunarProbe',
						component: LunarProbe,
						name: '探月工程'
					},
					{
						path: '/Mainwork/BeidouNavi',
						component: BeidouNavi,
						name: '北斗导航'
					},
					{
						path: '/Mainwork/CommunicationSat',
						component: CommunicationSat,
						name: '通信卫星'
					},
					{
						path: '/Mainwork/EarthObservationSat',
						component: EarthObservationSat,
						name: '地球观测卫星'
					},
					{
						path: '/Mainwork/ExperimentSat',
						component: ExperimentSat,
						name: '新技术试验卫星'
					},
					{
						path: '/Mainwork/HeavyLift',
						component: HeavyLift,
						name: '大运载'
					},
					{
						path: '/Mainwork/ComponentExport',
						component: ComponentExport,
						name: '组件出口'
					},
					{
						path: '',
						component: null,
						name: '“天行者”星座和应用服务',
						childPaths: '/Skywalker/Network/Platform/Connection/Terminal/ApplicationService/ApplicationCase/'
					},
					{
						path: '/Mainwork/Skywalker',
						component: Skywalker,
						name: '“天行者”星座'
					},
					{
						path: '/Mainwork/Network',
						component: Network,
						name: '全球卫星网络'
					},
					{
						path: '/Mainwork/Platform',
						component: Platform,
						name: '系统平台和移动APP'
					},
					{
						path: '/Mainwork/Connection',
						component: Connection,
						name: '互联互通'
					},
					{
						path: '/Mainwork/Terminal',
						component: Terminal,
						name: '物联网卫星终端'
					},
					{
						path: '/Mainwork/ApplicationService',
						component: ApplicationService,
						name: '“天行者”星座应用服务场景'
					},
					{
						path: '/Mainwork/ApplicationCase',
						component: ApplicationCase,
						name: '物联网+遥感融合应用案例'
					},
					{
						path: '',
						component: null,
						name: '地面站系统建设',
						childPaths: '/Station/ControlCenter/DataCenter/'
					},
					{
						path: '/Mainwork/Station',
						component: Station,
						name: '地面站网'
					},
					{
						path: '/Mainwork/ControlCenter',
						component: ControlCenter,
						name: '测运控中心'
					},
					{
						path: '/Mainwork/DataCenter',
						component: DataCenter,
						name: '数据服务中心'
					}
				]
			},
			// {
			// 	path: '/Mainwork',
			// 	component: Mainwork,
			// 	name: '主营业务',
			// 	children: [
			// 		{
			// 			path: '',
			// 			component: null,
			// 			name: '宇航中心',
			// 			childPaths: '/Special/Astronomy/Satellite/TradeAgent/'
			// 		},
			// 		{
			// 			path: '/Mainwork/Special',
			// 			component: Special,
			// 			name: '重大专项配套'
			// 		},
			// 		{
			// 			path: '/Mainwork/Astronomy',
			// 			component: Astronomy,
			// 			name: '天文科学工程'
			// 		},
			// 		{
			// 			path: '/Mainwork/Satellite',
			// 			component: Satellite,
			// 			name: '商业卫星配套'
			// 		},
			// 		{
			// 			path: '/Mainwork/TradeAgent',
			// 			component: TradeAgent,
			// 			name: '外贸代理服务'
			// 		},
			// 		{
			// 			path: '',
			// 			component: null,
			// 			name: '“天行者”星座建设',
			// 			childPaths: '/Skywalker/Network/Platform/Connection/Terminal/ApplicationService/'
			// 		},
			// 		{
			// 			path: '/Mainwork/Skywalker',
			// 			component: Skywalker,
			// 			name: '“天行者”星座'
			// 		},
			// 		{
			// 			path: '/Mainwork/Network',
			// 			component: Network,
			// 			name: '全球卫星网络'
			// 		},
			// 		{
			// 			path: '/Mainwork/Platform',
			// 			component: Platform,
			// 			name: '系统平台和移动APP'
			// 		},
			// 		{
			// 			path: '/Mainwork/Connection',
			// 			component: Connection,
			// 			name: '互联互通'
			// 		},
			// 		{
			// 			path: '/Mainwork/Terminal',
			// 			component: Terminal,
			// 			name: '物联网卫星终端'
			// 		},
			// 		{
			// 			path: '/Mainwork/ApplicationService',
			// 			component: ApplicationService,
			// 			name: '应用服务'
			// 		},
			// 		{
			// 			path: '',
			// 			component: null,
			// 			name: '地面站系统建设',
			// 			childPaths: '/Station/ControlCenter/DataCenter/'
			// 		},
			// 		{
			// 			path: '/Mainwork/Station',
			// 			component: Station,
			// 			name: '地面站网'
			// 		},
			// 		{
			// 			path: '/Mainwork/ControlCenter',
			// 			component: ControlCenter,
			// 			name: '测运控中心'
			// 		},
			// 		{
			// 			path: '/Mainwork/DataCenter',
			// 			component: DataCenter,
			// 			name: '数据服务中心'
			// 		},
			// 		{
			// 			path: '',
			// 			component: null,
			// 			name: '卫星遥感图像及服务',
			// 			childPaths: '/RsOneStop/RsStation/RsApplication/'
			// 		},
			// 		{
			// 			path: '/Mainwork/RsOneStop',
			// 			component: RsOneStop,
			// 			name: '卫星图像一站式服务'
			// 		},
			// 		{
			// 			path: '/Mainwork/RsStation',
			// 			component: RsStation,
			// 			name: '遥感卫星地面站'
			// 		},
			// 		{
			// 			path: '/Mainwork/RsApplication',
			// 			component: RsApplication,
			// 			name: '应用服务'
			// 		}
			// 	]
			// },
			{
				path: '/News',
				component: News,
				name: '和德资讯',
				children: [
					{
						path: '/News/Hot',
						component: Hot,
						name: '和德资讯'
					},
					{
						path: '/News/HotDetail',
						component: HotDetail,
						name: 'HotDetail',
						hidden: true
					},
					// {
					// 	path: '/News/Trend',
					// 	component: null,
					// 	name: '业务动态'
					// },
					// {
					// 	path: '/News/News',
					// 	component: null,
					// 	name: '行业新闻'
					// }
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
					// {
					// 	path: '/Duty/Social',
					// 	component: null,
					// 	name: '社工服务'
					// }
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
