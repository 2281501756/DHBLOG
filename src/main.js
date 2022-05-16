import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import 'nprogress/nprogress.css'
import animated from 'animate.css' // npm install animate.css --save安装，在引入
import AsyncComputed from 'vue-async-computed'
import './global/register-element'

import './util/css/reset.css'
import './util/css/font.css'
import './util/css/global.css'
import './router/guard' //路由守卫
import baseURL from './util/js/http/baseURL' // 导入后端接口

Vue.config.productionTip = false

Vue.prototype.$base_url = baseURL
Vue.use(animated)
Vue.use(AsyncComputed)
new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
