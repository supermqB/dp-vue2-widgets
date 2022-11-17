import Element from 'element-ui'
import DpVue2Widgets from 'dp-vue2-widgets'

import 'dp-vue2-widgets/dist/theme-dp-ui/index.css'

import './assets/css/index.scss'

export default async ({ Vue }) => {
  if (typeof process === 'undefined') {
    Vue.use(Element)
    Vue.use(DpVue2Widgets)
  }
}
