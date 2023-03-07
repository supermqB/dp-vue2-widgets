import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import { utils } from '@/entry'

import {
  DpDefaultPage,
  DpLayoutBlank,
  DpProductStyleLayout,
  DpProductStyleGenerateRouter
} from '@/entry'

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
        path: 'gulingjun',
        name: 'gulingjun',
        meta: { title: 'gulingjun' },
        component: () => import('../views/test/gulingjun')
      }
    ]
  },
  {
    path: 'basic',
    name: 'basic',
    meta: { title: '通用' },
    component: DpLayoutBlank,
    children: [
      {
        path: 'button',
        name: 'basic/button',
        meta: { title: '按钮' },
        component: () => import('../views/basic/button')
      },
      {
        path: 'status',
        name: 'basic/status',
        meta: { title: '状态标签' },
        component: () => import('../views/basic/status')
      }
    ]
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
      },
      {
        path: 'search',
        name: 'search',
        meta: { title: '带检索(样例)' },
        component: () => import('../views/table/search')
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
        path: 'index',
        name: 'form/index',
        meta: { title: '表单 dp-form' },
        component: () => import('../views/form/index')
      },
      {
        path: 'search-bar',
        name: 'search-bar',
        meta: { title: '检索框 dp-search-bar' },
        component: () => import('../views/form/search-bar')
      },
      {
        path: 'multi-line',
        name: 'form/multi-line',
        meta: { title: '多行表单' },
        component: () => import('../views/form/multi-line')
      },
      {
        path: 'search-form',
        name: 'search-form',
        meta: { title: '检索表单 dp-search-form' },
        component: () => import('../views/form/search-form')
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

const layout =
  process.env.VUE_APP_LAYOUT == 'product-style'
    ? DpProductStyleLayout
    : undefined

const generate =
  process.env.VUE_APP_LAYOUT == 'product-style'
    ? DpProductStyleGenerateRouter
    : utils.vueRouter.generateRouter

export default generate({
  VueRouter, // VueRouter对象
  routesConfig, // routes配置
  blankRoutesConfig, // routes配置(nolayout)
  layout, // 布局组件
  title // 系统标题
  // base: process.env.BASE_URL // router BaseUrl
})
