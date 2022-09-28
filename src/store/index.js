import Vue from 'vue'
import Vuex from 'vuex'

import tags from './modules/tags' // 底部标签

import task from './modules/task' // 任务分配
import dataElem from './modules/dataElem'
import mdm from '@/views/mdm/store/'
import event from '@/views/event_model/store'
import value from '@/views/value/store'
import bwd from '@/views/bwd/store'
import docs from '@/views/docs/store'
import home from '@/views/home/store'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    tags,
    task,
    dataElem,
    event,
    mdm,
    value,
    bwd,
    docs,
    home
  }
})
