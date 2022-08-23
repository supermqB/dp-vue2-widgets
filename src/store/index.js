import Vue from 'vue'
import Vuex from 'vuex'

import tags from './modules/tags' // 底部标签

import task from './modules/task' // 任务分配

import dataElem from './modules/dataElem'
import mdm from '@/views/mdm/store/'

import event from './modules/event'
import value from './modules/value'
import bwd from './modules/bwd'

import docs from '@/views/docs/store'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  // actions: {},
  modules: {
    tags,
    task,
    dataElem,
    event,
    mdm,
    value,
    bwd,
    docs
  }
})
