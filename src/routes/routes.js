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
	// {
	// 	path: '/test',
	// 	component: () => import('@/pages/mf/trytable'),
	// },
]

export default routes;
