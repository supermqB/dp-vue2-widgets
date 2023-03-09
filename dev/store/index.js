import Vue from 'vue'
import Vuex from 'vuex'

// 引用 productStyle authStore
import { productStyle } from '@/entry'
const {
  store: { auth }
} = productStyle

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth
  }
})
