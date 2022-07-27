import Vue from 'vue'
import Vuex from 'vuex'

import tags from './modules/tags' // 底部标签

import task from './modules/task' // 任务分配

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {},
  // getters: {},
  // mutations: {},
  // actions: {},
  modules: {
    tags,
    task
  }
})
