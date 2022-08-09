import {
  getVersionListApi,
  getCatalogApi,
  getEventInfoApi,
  addVersionApi,
  addCatalogApi,
  updateCatalogApi,
  addCatalogColumnApi,
  updateCatalogColumnApi
} from '@/api/event'
import { RUNNINGSTATE, EDITINGSTATE } from '@/utils/const'

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
      index: item.seqNo,
      primaryKeyFlag: parseInt(item.primaryKeyFlag),
      requiredFlag: parseInt(item.requiredFlag),
      indexFlag: parseInt(item.indexFlag)
    })
  })
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
  searchForm: {
    identifier: '',
    nameCn: '',
    type: '',
    requiredFlag: null,
    primaryKeyFlag: null
  }
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
  }
}

const actions = {
  async initEvent({ dispatch }) {
    await dispatch('queryVersion')
  },
  async queryVersion({ commit, dispatch }) {
    const { value } = await getVersionListApi()
    state.versionList = value
    commit('setCurrentVersion', state.versionList[0].versionName)
    await dispatch('queryCatalog')
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
  async addVersion({ commit }, {}) {
    await addVersionApi()
  },
  async addCatalog({ commit }, {}) {
    await addCatalogApi()
  },
  async addColumn({ commit }, {}) {
    await addCatalogColumnApi()
  },
  async updateCatalog({ commit }, {}) {
    await updateCatalogApi()
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
