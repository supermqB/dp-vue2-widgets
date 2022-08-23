import { keysClone } from '@/utils/lang'
import initState from './initState'
import task from './task'
import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'
import {
  getCatalogApi,
  getVersionListApi,
  getVersionDetailApi,
  getClassifyCodeApi,
  editDictApi
} from '@/api/value'

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
      sourceTypeCode: item.sourceTypeCode,
      state: valueDictCatalogEntityList.some(it => it.suspectedState === '1')
        ? INCOMESTATE
        : COMPLETESTATE,
      children: valueDictCatalogEntityList.map(it => {
        return {
          id: it.nameEn,
          label: it.nameEn,
          nameEn: it.nameEn,
          nameCn: it.nameCn,
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
  adSearchForm: Object.assign({}, adSearchForm),
  classList: []
}

const getters = {
  currentDictValueItem(state) {
    if (!state.currentDictValue) return null
  },
  currentVersionItem(state) {
    if (!state.currentVersion) return null
    return state.versionList.find(item => item.id === state.currentVersion)
  },
  currentDictItem(state) {
    if (!state.currentDict) return {}
    for (let item of state.dictList) {
      const res = item.children.find(it => {
        return state.currentDict === it.id
      })
      if (res) {
        return Object.assign({}, res, {
          sourceType: item.label
        })
      }
    }
    return {}
  },
  sourceTypeOptions(state) {
    return state.dictList.map(item => {
      return {
        label: item.label,
        value: item.sourceTypeCode
      }
    })
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
  setDictForm(state, form) {
    if (!form) {
      state.dictForm = Object.assign({}, dictForm)
    } else {
      keysClone(state.dictForm, form)
    }
  },
  setVersionForm(state, form) {
    state.versionForm = !form ? Object.assign({}, versionForm) : form
  },
  setDictValueForm(state, form) {
    state.dictValueForm = !form ? Object.assign({}, dictValueForm) : form
  },
  setCurrentDict(state, value) {
    if (value) {
      state.currentDict = value
    } else {
      if (
        state.dictList &&
        state.dictList.length &&
        state.dictList[0].children.length
      ) {
        state.currentDict = 'dict_drug_form'
        // state.currentDict = state.dictList[0].children[0].id
      }
    }
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
    await dispatch('querySuspect', { searchKey: state.currentDict })
    await dispatch('queryVersion')
    await dispatch('queryVersionInfo')
    // commit('setCurrentVersion')
    await dispatch('queryDictValue')
    commit('setCurrentDictValue')
    dispatch('queryClass')
  },
  async queryDict({ commit }) {
    const { value } = await getCatalogApi()
    commit('setDictList', processCatalog(value))
  },
  async queryVersion({ commit, state }) {
    const { value } = await getVersionListApi(state.currentDict)
    state.versionList = value.map(item => {
      const { id, mainlineFlag, version } = item
      if (mainlineFlag) {
        commit('setCurrentVersion', id)
      }
      return {
        id,
        label: version,
        isMaster: mainlineFlag === '1'
      }
    })
  },
  async queryVersionInfo() {
    if (!state.currentVersion) return
    const { value } = await getVersionDetailApi(state.currentVersion)
    state.currentVersionInfo = value
  },
  async queryClass({}) {
    const { value } = await getClassifyCodeApi()
    state.classList = value.map(item => {
      return {
        id: item.code,
        label: item.name,
        value: item.code,
        children: item.dictClassifyVoList.map(it => {
          return {
            id: it.code,
            label: it.name,
            value: it.code
          }
        })
      }
    })
  },
  async queryDictValue() {},
  async submitDict() {
    const { nameCn, nameEn } = state.dictForm
    // await editDictApi({
    //   id: state.currentDict
    // })
  },
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
