import Vue from 'vue'

import './lib/ui/prod' // UI 正式库
// import './lib/ui/dev' // UI 本地库(源码)
// import './lib/ui/devLib' // UI 本地库(打包)

Vue.config.productionTip = false

import tab from './utils/tab'

Vue.prototype.$tab = tab

import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/css/reset.scss'
import VueParticles from 'vue-particles'

Vue.use(VueParticles)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
