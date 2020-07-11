import Vue from 'vue'
import App from './App.vue'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 导入axios，并创建实例
import axios from 'axios'
const instance = axios.create({
  baseURL: 'http://localhost:8080/ccs',
  timeout: 1000
});
// 将这个axios实例加载到Vue的原型上，一遍随时可以访问axios
Vue.prototype.$axios = instance;

// 导入路由器对象
import router from './routes'

Vue.config.productionTip = false
Vue.use(ElementUI);

// 将路由器对象注入给Vue
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
