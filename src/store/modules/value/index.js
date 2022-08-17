import { keysClone } from '@/utils/lang'
import initState from './initState'
import task from './task'
import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'

const { dictForm, versionForm, dictValueForm, searchForm, adSearchForm } =
  initState

const processCatalog = list => {
  return list.map(item => {
    const { sourceType, valueDictCatalogEntityList } = item
    return {
      id: sourceType,
      label: sourceType,
      state: valueDictCatalogEntityList.some(it => it.suspectedState === '1')
        ? INCOMESTATE
        : COMPLETESTATE,
      children: valueDictCatalogEntityList.map(it => {
        return {
          id: it.dictName,
          label: it.dictName,
          state: it.suspectedState === '1' ? INCOMESTATE : COMPLETESTATE
        }
      })
    }
  })
}

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
  dictForm: Object.assign({}, dictForm),
  versionForm: Object.assign({}, versionForm),
  dictValueForm: Object.assign({}, dictValueForm),
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
  setdictForm(state, form) {
    state.dictForm = !form ? Object.assign({}, dictForm) : form
  },
  setVersionForm(state, form) {
    state.versionForm = !form ? Object.assign({}, versionForm) : form
  },
  setdictValueForm(state, form) {
    state.dictValueForm = !form ? Object.assign({}, dictValueForm) : form
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
