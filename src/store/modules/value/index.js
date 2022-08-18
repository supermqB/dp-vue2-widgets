import { keysClone } from '@/utils/lang'
import initState from './initState'
import task from './task'
import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'

const {
  dictForm,
  versionForm,
  dictVersionForm,
  dictValueForm,
  searchForm,
  adSearchForm
} = initState

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
  dictList: [],
  versionList: [],
  dictValueList: [],
  currentDict: '',
  currentVersion: '',
  currentVersionInfo: {},
  currentDictValue: '',
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 0,
    totalPage: 0
  },
  dictForm: Object.assign({}, dictForm),
  versionForm: Object.assign({}, versionForm),
  dictVersionForm: Object.assign({}, dictVersionForm),
  dictValueForm: Object.assign({}, dictValueForm),
  searchForm: Object.assign({}, searchForm),
  adSearchForm: Object.assign({}, adSearchForm)
}

const getters = {
  currentDictItem(state) {
    if (!state.currentDict) return null
  },
  currentDictValueItem(state) {
    if (!state.currentDictValue) return null
  }
}

const mutations = {
  setDictList(state, list) {
    state.dictList = !list ? [] : list
  },
  setVersionList(state, list) {
    state.versionList = !list ? [] : list
  },
  setDictValueList(state, list) {
    state.dictValueList = !list ? [] : list
  },
  setdictForm(state, form) {
    state.dictForm = !form ? Object.assign({}, dictForm) : form
  },
  setVersionForm(state, form) {
    state.versionForm = !form ? Object.assign({}, versionForm) : form
  },
  setDictValueForm(state, form) {
    state.dictValueForm = !form ? Object.assign({}, dictValueForm) : form
  },
  setCurrentDict(state, value) {
    state.currentDict = value
  },
  setCurrentVersion(state, version) {
    state.currentVersion = version
  },
  setCurrentDictValue(state, column) {
    state.currentDictValue = column
  },
  setPageInfo(state, pageInfo) {
    keysClone(state.pageInfo, pageInfo)
  }
}

const actions = {
  async initValue({ commit, dispatch }) {
    await dispatch('queryDict')
    commit('setCurrentDict')
    await dispatch('queryVersion')
    commit('setCurrentVersion')
    await dispatch('queryDictValue')
    commit('setCurrentDictValue')
  },
  async queryDict() {},
  async queryVersion() {},
  async queryVersionInfo() {},
  async queryDictValue() {},
  async submitDict() {},
  async submitVersion() {},
  async submitDictValue() {}
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
