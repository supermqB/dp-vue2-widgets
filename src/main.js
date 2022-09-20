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
import MatchButton from '@/components/button/Match.vue'
import UploadButton from '@/components/button/Upload.vue'

Vue.use(VueParticles)
Vue.component('MatchButton', MatchButton)
Vue.component('UploadButton', UploadButton)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
