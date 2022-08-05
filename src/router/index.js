import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/* Layout */
import DefaultLayout from '@/layout/default'

/* Page */
import ValuePage from '@/views/value' // 值域页面

const routes = [
  {
    path: '/',
    redirect: { name: 'value' },
    component: DefaultLayout,
    children: [
      {
        path: 'value',
        name: 'value',
        meta: { title: '值域管理' },
        component: ValuePage
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
        meta: { title: '业务明细库' },
        component: () => import('@/views/bwd/')
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
