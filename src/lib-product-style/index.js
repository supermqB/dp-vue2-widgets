// product-style 产品风格的布局  集成菜单、路由、鉴权等

import { default as layout } from './components/layout'
import { default as loginPage } from './components/login-page'

import { generateRouter as utilsGenerateRouter } from './utils/generateRouter'
import utilsRequest from './utils/request'
import * as utilsToken from './utils/token'
import * as utilsPermission from './utils/permission'

import storeAuth from './store/auth'

export default {
  components: {
    layout,
    loginPage
  },
  utils: {
    generateRouter: utilsGenerateRouter,
    request: utilsRequest,
    token: utilsToken,
    permission: utilsPermission
  },
  store: {
    auth: storeAuth
  }
}
