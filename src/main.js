import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
// 全局自定义样式
import './styles/index.less'
import 'lib-flexible'
// 全局提示弹窗
import Popup from './components/dialog/popup'
// 引入 iconfont
import './assets/icon/iconfont.js'
import SvgIcon from '@/components/svg-icon.vue'
Vue.prototype.$popup = Popup.install
Vue.component('svg-icon', SvgIcon)
Vue.prototype.$eventBus = new Vue()
Vue.config.productionTip = false
Vue.use(Antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
