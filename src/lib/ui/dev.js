import Vue from 'vue'

import 'normalize.css/normalize.css'

import ElementUI from 'element-ui'

//======== 组件相关 =========
/* 远程库 */
// import DpUI from 'lrhealth-dp-ui'
// import Button from 'lrhealth-dp-ui/lib/button'
// import HeaderNav from 'lrhealth-dp-ui/lib/header-nav'

/* 本地库(打包后)*/
// import DpUI from '../../../data-platform-ui/lib/index'

/* 本地库(源码)*/
import HeaderNav from '../../../../data-platform-ui/packages/header-nav'
import LayoutRoot from '../../../../data-platform-ui/packages/layout-root'
import LayoutContainer from '../../../../data-platform-ui/packages/layout-container'

//========= css 相关 ==========
/* 远程库 */
// import 'lrhealth-dp-ui/lib/theme-dp-ui/index.css'

/* 本地库(打包后)*/
// import '../../../data-platform-ui/lib/theme-dp-ui/index.css'

/* 本地库(源码)*/
import '../../../../data-platform-ui/packages/theme-dp-ui/src/index.scss'

Vue.use(ElementUI)
Vue.use(HeaderNav)
Vue.use(LayoutRoot)
Vue.use(LayoutContainer)
