// Import vue components
import * as components from '@/lib-components/index'

import directives from './directives'

// install function executed by Vue.use()
const install = function installDpVue2Widgets(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component)
  })

  // 注册全局指令
  directives.forEach(directive => {
    // 判断是否是数组
    if (Array.isArray(directive)) {
      directive.forEach(data => {
        Vue.directive(data.name, data.value)
      })
    } else {
      Vue.directive(directive.name, directive.value)
    }
  })
}

// Create module definition for Vue.use()
export default install

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index'
