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
		path: '/from',
		component: () => import('@/pages/mf/from'),
	},
	{
		path: '/test',
		component: () => import('@/pages/index/current-session/index.vue'),
	},
]

export default routes;
