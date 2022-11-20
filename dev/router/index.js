import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { utils } from '@/entry'

import { DpDefaultPage, DpLayoutBlank } from '@/entry'

const routesConfig = [
  {
    path: '/',
    name: 'home',
    meta: { title: '首页' },
    component: () => import('../views/Home.vue')
  },
  {
    path: 'test',
    name: 'test',
    meta: { title: 'test' },
    component: DpLayoutBlank,
    children: [
      {
        path: 'test1',
        name: 'test1',
        meta: { title: 'test1' },
        component: () => import('../views/test/test-1')
      },
      {
        path: 'test2',
        name: 'test2',
        meta: { title: 'test2' },
        component: () => import('../views/test/test-2')
      }
    ]
  },
  {
    path: 'button',
    name: 'button',
    meta: { title: '按钮' },
    component: () => import('../views/Button.vue')
  },
  {
    path: 'login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../views/Login.vue')
  },
  {
    path: '*',
    name: '404',
    meta: { title: '404' },
    hidden: true,
    component: DpDefaultPage
  }
]

const title = '示例系统'

export default utils.vueRouter.generateRouter({
  VueRouter, // VueRouter对象
  routesConfig, // routes配置
  // layout, // 布局组件
  title // 系统标题
  // base: process.env.BASE_URL // router BaseUrl
})
