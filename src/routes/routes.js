// 路由映射
const routes = [{
		path: '/index',
		component: () => import('@/pages/index'),
		children: [{
				path: 'current-session',
				component: () => import('@/pages/index/current-session'),
			},
			{
				path: 'history-session',
				component: () => import('@/pages/index/history-session'),
			}
		]
	},
	{
		path: '/regist',
		component: () => import('@/pages/login/regist'),
	},
	{
		path: '/login',
		component: () => import('@/pages/login/login'),
	},
	{
		path: '/home',
		component: () => import('@/pages/homepage/home'),
	},
	{
		path: '/visitor',
		component: () => import('@/pages/index/visitor/index.vue'),
	},
	{
		path: '/visit',
		component: () => import('@/pages/mf/visittable'),
	},
	{
		path: '/customer',
		component: () => import('@/pages/mf/customer'),
	},
	{
		path: '/data',
		component: () => import('@/pages/static/data'),
	},
	{
		path: '/workload',
		component: () => import('@/pages/static/workload'),
	},
	{
		path: '/workmanship',
		component: () => import('@/pages/static/workmanship'),
	},
	{
		path: '/attendance',
		component: () => import('@/pages/static/attendance'),
	},
	{
		path: '/visits',
		component: () => import('@/pages/static/visits'),
	},
	{
		path: '/pcdialog',
		component: () => import('@/pages/settings/dialog/pcdialog'),
	},
	{
		path: '/createWorkOrder',
		component: () => import('@/components/CreateWorkOrder.vue'),
	},
	{
		path: '/createBlack',
		component: () => import('@/components/black.vue'),
	},
	{
		path: '/endSession',
		component: () => import('@/components/EndSession.vue'),
	},
	{
		path: '/addCustomer',
		component: () => import('@/components/AddCustomer.vue'),
	},
	{
		path: '/test',
		component: () => import('@/pages/CustomerDetails/CustomerDetails.vue'),
	},
	{
		path: '/checkingIn',
		component: () => import('@/components/checkingIn.vue'),
	},
	{
		path: '/visit2',
		component: () => import('@/components/visit.vue'),
	},
	{
		path: '/workQuality2',
		component: () => import('@/components/workQuality.vue'),
	},
	{
		path: '/personal',
		component: () => import('@/pages/settings/common/personal.vue'),
	},
	{
		path: '/notification',
		component: () => import('@/pages/settings/global/operatelog.vue'),
	},
]

export default routes;
