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
    path: 'grid',
    name: 'grid',
    meta: { title: '布局' },
    component: () => import('../views/Grid.vue')
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
      },
      {
        path: 'gulingjun',
        name: 'gulingjun',
        meta: { title: 'gulingjun' },
        component: () => import('../views/test/gulingjun')
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
    path: 'table',
    name: 'table',
    meta: { title: '表格' },
    component: DpLayoutBlank,
    children: [
      {
        path: 'general',
        name: 'general',
        meta: { title: '通用表格' },
        component: () => import('../views/table/general')
      },
      {
        path: 'statistics',
        name: 'statistics',
        meta: { title: '统计表格' },
        component: () => import('../views/table/statistics')
      },
      {
        path: 'page',
        name: 'page',
        meta: { title: '分页' },
        component: () => import('../views/table/page')
      }
    ]
  },
  {
    path: 'form',
    name: 'form',
    meta: { title: '表单' },
    component: DpLayoutBlank,
    children: [
      {
        path: 'search-bar',
        name: 'search-bar',
        meta: { title: '检索框' },
        component: () => import('../views/form/search-bar')
      }
    ]
  }
]

const blankRoutesConfig = [
  {
    path: '/login',
    name: 'login',
    meta: { title: '登录' },
    component: () => import('../views/Login.vue')
  }
]

const title = '示例系统'

export default utils.vueRouter.generateRouter({
  VueRouter, // VueRouter对象
  routesConfig, // routes配置
  blankRoutesConfig, // routes配置(nolayout)
  // layout, // 布局组件
  title // 系统标题
  // base: process.env.BASE_URL // router BaseUrl
})
