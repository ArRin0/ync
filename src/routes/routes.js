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
		path: '/test',
		component: () => import('@/components/TransferOrder.vue'),
	},
	{
		path: '/createWorkOrder',
		component: () => import('@/components/CreateWorkOrder.vue'),
	},
	{
		path: '/createBlack',
		component: () => import('@/components/black.vue'),
	},
]

export default routes;
