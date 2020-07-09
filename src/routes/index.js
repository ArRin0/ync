import Vue from 'vue';
import VueRouter from 'vue-router'
import routes from './routes.js'

Vue.use(VueRouter);//全局注册组件

// 创建路由器对象
let vueRouter = new VueRouter({
	routes
})

export default vueRouter;


