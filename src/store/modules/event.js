import {
  getVersionListApi,
  getCatalogApi,
  getEventInfoApi,
  addVersionApi,
  addCatalogApi,
  updateCatalogApi,
  addCatalogColumnApi,
  updateCatalogColumnApi,
  submitCatalogApi
} from '@/api/event'

import { RUNNINGSTATE, EDITINGSTATE } from '@/utils/const'
import { keysClone } from '@/utils/lang'
import e from 'express'

const processCatalogList = list => {
  if (!list) return []
  return list.map((item, index) => {
    const { theme } = item
    const result = {
      id: theme,
      label: theme,
      theme: true,
      children: []
      // state: RUNNINGSTATE
    }
    item.dataSetCatalogEntiyList.forEach(item => {
      const { id, code, nameCn, number, state } = item
      result.children.push({
        id: id.toString(),
        label: `${code}-${nameCn}`,
        number,
        state
      })
      if (state === '0') result.state = EDITINGSTATE
    })
    return result
  })
}

const processColumnList = list => {
  return list.map(item => {
    return Object.assign(item, {
      id: item.seqNo,
      index: item.seqNo,
      primaryKeyFlag: parseInt(item.primaryKeyFlag),
      requiredFlag: parseInt(item.requiredFlag),
      indexFlag: parseInt(item.indexFlag)
    })
  })
}

const initState = {
  searchForm: {
    identifier: '',
    nameCn: '',
    type: '',
    requiredFlag: null,
    primaryKeyFlag: null
  },
  versionForm: {
    version: '',
    parVersion: '',
    state: ''
  },
  catalogForm: {
    id: '',
    version: '',
    theme: '',
    code: '',
    nameCn: '',
    nameEn: '',
    description: ''
  }
}

const state = {
  versionList: [],
  catalogList: [],
  columnList: [],
  currentVersion: '',
  currentCatalog: '',
  currentColumn: '',
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 0,
    totalPage: 0
  },
  // 正常搜索
  searchForm: Object.assign({}, initState.searchForm),
  // 高级搜索
  adSearchForm: {},
  // 版本form
  versionForm: Object.assign({}, initState.versionForm),
  // 目录form
  catalogForm: Object.assign({}, initState.catalogForm),
  columnForm: {}
}

const getters = {
  currentCatalogItem(state) {
    for (let item of state.catalogList) {
      const res = item.dataSetCatalogEntiyList.find(it => {
        return state.currentCatalog.toString() === it.id.toString()
      })
      if (res) {
        return Object.assign({}, res, {
          theme: item.theme
        })
      }
    }
    return {}
  },
  currentColumnRow(state) {
    return state.columnList.find(item => item.index === state.currentColumn)
  },
  versionOptions(state) {
    return state.versionList.map(item => {
      return {
        label: item.versionName,
        value: item.versionName
      }
    })
  },
  catalogTreeList(state) {
    return processCatalogList(state.catalogList)
  },
  themeOptions(state) {
    return state.catalogList.map(item => {
      return {
        label: item.theme,
        value: item.theme
      }
    })
  },
  totalNumber(state) {
    const res = state.versionList.find(
      item => item.versionName === state.currentVersion
    )
    if (res) return res.num
    return 0
  }
}

const mutations = {
  setCurrentVersion: (state, version) => {
    state.currentVersion = version
  },
  setCurrentCatalog: (state, catalog) => {
    state.currentCatalog = catalog.toString()
  },
  setCurrentColumn: (state, column) => {
    state.currentColumn = column
  },
  setPageInfo: (state, pageInfo) => {
    Object.keys(pageInfo).forEach(key => {
      state.pageInfo[key] = pageInfo[key]
    })
  },
  setCatalogForm: (state, item) => {
    if (item) {
      keysClone(state.catalogForm, item)
      state.catalogForm.version = state.currentVersion
    }
  },
  resetVersionForm: state => {
    state.versionForm = Object.assign({}, initState.versionForm)
  },
  resetCatalogForm: state => {
    state.catalogForm = Object.assign({}, initState.catalogForm)
  },
  setColumnForm: (state, item) => {
    if (item) {
      keysClone(state.columnForm, item)
    }
  },
  resetColumnForm: state => {
    Object.assign(state.columnForm, initState.columnForm)
  }
}

// this._vm.$message.success('2345')

const actions = {
  async initEvent({ dispatch }) {
    await dispatch('queryVersion')
  },
  async queryVersion({ commit, dispatch }) {
    const { value } = await getVersionListApi()
    state.versionList = value
    commit('setCurrentVersion', state.versionList[0].versionName)
    dispatch('queryCatalog')
  },
  async queryCatalog({ commit, dispatch }) {
    const { value } = await getCatalogApi(state.currentVersion)
    state.catalogList = value
    const catalog = state.catalogList[0].dataSetCatalogEntiyList[0].id
    commit('setCurrentCatalog', catalog)
    await dispatch('queryColumn')
  },
  async queryColumn({ commit }) {
    const { curPage, pageSize } = state.pageInfo
    const res = await getEventInfoApi(
      state.currentCatalog,
      curPage,
      pageSize,
      state.searchForm
    )
    const { records, pageInfo } = res.value
    state.columnList = processColumnList(records)
    commit(
      'setCurrentColumn',
      state.columnList && state.columnList.length
        ? state.columnList[0].index
        : ''
    )
    commit('setPageInfo', res.value.pageInfo)
  },
  async addVersion({ dispatch, commit }) {
    const { version, parVersion } = state.versionForm
    await addVersionApi(version, parVersion, state.versionForm.state)
    commit('resetVersionForm')
    dispatch('queryVersion')
  },
  async runCatalog({ state }) {
    await submitCatalogApi(state.currentCatalog)
    this._vm.$message.success('启动成功！')
  },
  // async submitCatalog({ dispatch }) {
  //   const version = state.currentVersion
  //   const { id, theme, code, nameCn, nameEn, description } = state.catalogForm
  //   if (id) {
  //     await addCatalogApi(version, theme, code, nameCn, nameEn, description)
  //   } else {
  //     await updateCatalogApi(
  //       id,
  //       version,
  //       theme,
  //       code,
  //       nameCn,
  //       nameEn,
  //       description
  //     )
  //   }
  //   dispatch('queryCatalog')
  // },
  async addColumn({ commit }, {}) {
    await addCatalogColumnApi()
  },
  async updateColumn({ commit }, {}) {}
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
