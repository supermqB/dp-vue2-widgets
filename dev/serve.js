import Vue from 'vue'
import Dev from './serve.vue'

// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call

import ElementUI from 'element-ui'
import DpVue2Widgets from '@/entry'
Vue.use(ElementUI)
Vue.use(DpVue2Widgets)
// import '../dist/theme-dp-ui/index.css'
import '../src/theme/theme-dp-ui/src/index.scss'
import '../src/theme/theme-dp-ui/scrollbar.scss'

import router from './router'
import store from './store'

Vue.config.productionTip = false

import { productStyle } from '@/entry'
const {
  utils: { permission }
} = productStyle
router.beforeEach((to, from, next) =>
  permission.beforeEach({ to, from, next }, store)
)

new Vue({
  router,
  store,
  render: h => h(Dev)
}).$mount('#app')
