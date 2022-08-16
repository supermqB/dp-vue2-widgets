import { keysClone } from '@/utils/lang'
import initState from './initState'
import task from './task'

const { valueForm, versionForm, columnForm, searchForm, adSearchForm } =
  initState

const state = {
  valueList: [],
  versionList: [],
  columnList: [],
  currentCatalog: '',
  currentVersion: '',
  currentColumn: '',
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 0,
    totalPage: 0
  },
  valueForm: Object.assign({}, valueForm),
  versionForm: Object.assign({}, versionForm),
  columnForm: Object.assign({}, columnForm),
  searchForm: Object.assign({}, searchForm),
  adSearchForm: Object.assign({}, adSearchForm)
}

const getters = {
  currentCatalogItem(state) {},
  currentVersionItem(state) {},
  currentColumnItem(state) {}
}

const mutations = {
  setValueList(state, list) {
    state.valueList = !list ? [] : list
  },
  setVersionList(state, list) {
    state.versionList = !list ? [] : list
  },
  setColumnList(state, list) {
    state.columnList = !list ? [] : list
  },
  setValueForm(state, form) {
    state.valueForm = !form ? Object.assign({}, valueForm) : form
  },
  setVersionForm(state, form) {
    state.versionForm = !form ? Object.assign({}, versionForm) : form
  },
  setColumnForm(state, form) {
    state.columnForm = !form ? Object.assign({}, columnForm) : form
  },
  setCurrentCatalog(state, value) {
    state.currentCatalog = value
  },
  setCurrentVersion(state, version) {
    state.currentVersion = version
  },
  setCurrentColumn(state, column) {
    state.currentColumn = column
  },
  setPageInfo(state, pageInfo) {
    keysClone(state.pageInfo, pageInfo)
  }
}

const actions = {
  async init({ commit, dispatch }) {
    await dispatch('queryCatalog')
    commit('setCurrentCatalog')
    await dispatch('queryVersion')
    commit('setCurrentVersion')
    await dispatch('queryColumn')
    commit('setCurrentColumn')
  },
  async queryCatalog() {},
  async queryVersion() {},
  async queryColumn() {},
  async submitVersion() {},
  async submitColumn() {}
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    task
  }
}
