import Vue from 'vue'

import './lib/ui/prod' // UI 正式库
// import './lib/ui/dev' // UI 本地库(源码)
// import './lib/ui/devLib' // UI 本地库(打包)

Vue.config.productionTip = false

import moment from 'moment'
import tab from './utils/tab'

Vue.prototype.$tab = tab
Vue.prototype.$moment = moment
moment.locale('zh-cn')

import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.scss'
import VueParticles from 'vue-particles'
import MatchButton from '@/components/button/Match.vue'
import 'echarts'
import ECharts from 'vue-echarts'

Vue.use(VueParticles)
Vue.component('MatchButton', MatchButton)
Vue.component('VueEcharts', ECharts)

let instance = null

console.log({ QIANKUN: !!window.__POWERED_BY_QIANKUN__ })

function render(props = {}) {
  const { container } = props
  // console.log({
  //   container,
  //   containerApp: container ? container.querySelector('#app') : '#app'
  // })

  instance = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount(container ? container.querySelector('#app') : '#app')
}
if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  // console.log('[vue] vue app - 2 bootstraped')
}

export async function mount(props) {
  // console.log('[vue] props from main framework', props)

  render(props)
}

export async function unmount() {
  instance.$destroy()
  // instance.$el.innerHTML = ''
  instance = null
}
