import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import DefaultLayout from '@/layout/default'
import BlankLayout from '@/layout/BlankLayout'

/* Page */
import HomePage from '@/views/home'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [
  {
    path: '/',
    redirect: { name: 'home' },
    component: DefaultLayout,
    component: !window.__POWERED_BY_QIANKUN__ ? DefaultLayout : BlankLayout,
    children: [
      {
        path: 'home',
        name: 'home',
        meta: { title: '首页' },
        component: HomePage
      },
      {
        path: 'value',
        name: 'value',
        meta: { title: '值域管理' },
        component: () => import('@/views/value/')
      },
      {
        path: 'mdm',
        name: 'mdm',
        meta: { title: '主索引管理' },
        component: () => import('@/views/mdm/')
      },
      {
        path: 'data_element',
        name: 'data_element',
        meta: { title: '数据元管理' },
        component: () => import('@/views/data_element/')
      },
      {
        path: 'event_model',
        name: 'event_model',
        meta: { title: '事件模型' },
        component: () => import('@/views/event_model/')
      },
      {
        path: 'bwd',
        name: 'bwd',
        meta: { title: '业务模型' },
        component: () => import('@/views/bwd/')
      },
      {
        path: 'docs/index',
        name: 'docs/index',
        meta: { title: '文献库首页' },
        component: () => import('@/views/docs/index')
      },
      {
        path: 'docs/list',
        name: 'docs/list',
        meta: { title: '文献库明细' },
        component: () => import('@/views/docs/list')
      },
      {
        path: 'docs/summary/:id',
        name: 'docs/summary',
        meta: { title: '文献库摘要' },
        component: () => import('@/views/docs/summary')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
