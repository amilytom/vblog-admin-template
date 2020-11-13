import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'babel-polyfill'

// 引入element-ui
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";

// 引入第三方
import VueProgressBar from 'vue-progressbar'
import vuePositionSticky from 'vue-position-sticky'

// 引入全局样式
import '@/assets/css/reset.css'
import '@/assets/css/global.css'
import '@/assets/css/icofont.css'

// 引入全局方法
import '@/utils/permission'
import '@/utils/errorLog'

// mock模拟数据
import '@/mock'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueProgressBar, {
  color: '#29F',
  failedColor: 'red',
  thickness: '2px'
})
Vue.use(vuePositionSticky)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
