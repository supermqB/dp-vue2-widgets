import { DpLayout, DpLayoutBlank, DpDefaultPage } from '@/entry'

const generateMenuItems = routesConfig => {
  let items = []
  routesConfig.map(v => {
    if (v.hidden !== true) {
      items.push({
        value: v.name,
        label: v.meta && v.meta.title ? v.meta.title : v.name,
        meta: v.meta,
        children: v.children ? generateMenuItems(v.children) : undefined
      })
    }
  })
  return items
}

const generateRouter = config => {
  let {
    VueRouter,
    routesConfig = [], // 路由配置 (放在layout下)
    blankRoutesConfig = [], // 空白路由配置 （没有layout视图包裹, 常用于登录页面)
    isQiankun = window.__POWERED_BY_QIANKUN__,
    layout = DpLayout,
    logoutEvent = () => {},
    title = '',
    base = window.__POWERED_BY_QIANKUN__
      ? process.env.VUE_APP_QIANKUN_ROUTER_BASE
      : process.env.VUE_APP_REAL_ROUTER_BASE
  } = config

  if (!layout) layout = DpLayout
  if (!!isQiankun) {
    layout = DpLayoutBlank
  }

  const redirectName = routesConfig[0] ? routesConfig[0].name : ''

  const router = new VueRouter({
    mode: 'history',
    base,
    routes: [
      {
        path: '/',
        redirect: { name: redirectName },
        component: layout,
        props: {
          titleText: title,
          menuItems: generateMenuItems(routesConfig),
          logoutEvent
        },
        children: routesConfig
      }
    ]
      .concat(blankRoutesConfig)
      .concat([
        {
          path: '*',
          hidden: true,
          component: layout,
          children: [
            {
              path: '*',
              name: '404',
              meta: { title: '404' },
              component: DpDefaultPage
            }
          ]
        }
      ])
  })

  const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
  }

  return router
}

export { generateRouter }
