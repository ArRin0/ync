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
		component: () => import('@/pages/visitor/'),
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
		path: '/CustomerDetails',
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
		path: '/settingofpersonal',
		component: () => import('@/pages/settings/common/personal.vue'),
	},
	{
		path: '/settingofnotice',
		component: () => import('@/pages/settings/common/notice.vue'),
	},
	{
		path: '/settingofcompany',
		component: () => import('@/pages/settings/team/company.vue'),
	},
	{
		path: '/settingofcustserv',
		component: () => import('@/pages/settings/team/custserv.vue'),
	},
	{
		path: '/settingofgroup',
		component: () => import('@/pages/settings/team/group.vue'),
	},
	{
		path: '/settingofrole',
		component: () => import('@/pages/settings/team/role.vue'),
	},
	{
		path: '/settingofcommonwords',
		component: () => import('@/pages/settings/custserv/commonwords.vue'),
	},
	{
		path: '/settingofreply',
		component: () => import('@/pages/settings/custserv/reply.vue'),
	},
	{
		path: '/settingofdialogrule',
		component: () => import('@/pages/settings/custserv/dialogrule.vue'),
	},
	{
		path: '/settingofblacklist',
		component: () => import('@/pages/settings/custserv/blacklist.vue'),
	},
	{
		path: '/settingofcustomerinfor',
		component: () => import('@/pages/settings/custserv/customerinfor.vue'),
	},
	{
		path: '/settingofcustomerlabel',
		component: () => import('@/pages/settings/custserv/customerlabel.vue'),
	},
	{
		path: '/settingofdistributionrule',
		component: () => import('@/pages/settings/custserv/distributionrule.vue'),
	},
	{
		path: '/settingofsessionevaluation',
		component: () => import('@/pages/settings/custserv/sessionevaluation.vue'),
	},
	{
		path: '/settingofnotification',
		component: () => import('@/pages/settings/global/notification.vue'),
	},
	{
		path: '/settingofoperatelog',
		component: () => import('@/pages/settings/global/operatelog.vue'),
	},
	{
		path: '/settingofbasicsetting',
		component: () => import('@/pages/settings/order/basicsetting.vue'),
	},
	{
		path: '/settingofclassification',
		component: () => import('@/pages/settings/order/classification.vue'),
	},
	{
		path: '/allWorkOrder',
		component: () => import('@/components/allWorkOrder.vue'),
	},
	{
		path: '/WorkOrder',
		component: () => import('@/pages/WorkOrder/WorkOrder.vue'),
	},
	{
		path: '/test1',
		component: () => import('@/pages/index/components/SessionWindow.vue'),
	},
]

export default routes;
