// import Vue from 'vue'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)
import { DpLayout, DpLayoutBlank, DpDefaultPage } from '@/entry'

const genrateMenuItems = routesConfig => {
  let items = []
  routesConfig.map(v => {
    if (v.hidden !== true) {
      items.push({
        value: v.name,
        label: v.meta?.title ?? v.name,
        children: v.children ? getItems(v.children) : undefined
      })
    }
  })
  return items
}

const generateRouter = config => {
  const {
    VueRouter,
    routesConfig = [],
    isQiankun = false,
    layout = DpLayout,
    title = '',
    base = process.env.BASE_URL
  } = config

  if (isQiankun) {
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
        props: { title, menuItems: genrateMenuItems(routesConfig) },
        children: routesConfig
        // children: routesConfig.concat({
        //   path: '*',
        //   name: '404',
        //   meta: { title: '404' },
        //   hidden: true,
        //   component: DpDefaultPage
        // })
      }
    ]
  })

  const originalPush = VueRouter.prototype.push
  VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
  }

  return router
}

export { generateRouter }
