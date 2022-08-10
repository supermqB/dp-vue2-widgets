import {
  getVersionListApi,
  getCatalogApi,
  getEventInfoApi,
  addVersionApi,
  addCatalogApi,
  updateCatalogApi,
  addCatalogColumnApi,
  updateCatalogColumnApi,
  submitCatalogApi,
  getMaxCodeApi,
  advanceSearchApi
} from '@/api/event'

import { RUNNINGSTATE, EDITINGSTATE } from '@/utils/const'
import { getMax, keysClone } from '@/utils/lang'

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
  },
  columnForm: {
    id: '',
    nameCn: '',
    nameEn: '',
    definition: '',
    primaryKeyFlag: '',
    requiredFlag: '',
    indexFlag: '',
    dataElementId: '',
    elementNameCn: '',
    type: '',
    format: '',
    identifier: '',
    valueRange: '',
    valueDomainName: ''
  },
  adSearchForm: {
    colNames: [],
    contains: '',
    equals: '',
    atleast: '',
    exclude: ''
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
  searchForm: Object.assign({}, initState.searchForm),
  adSearchForm: Object.assign({}, initState.adSearchForm),
  versionForm: Object.assign({}, initState.versionForm),
  catalogForm: Object.assign({}, initState.catalogForm),
  columnForm: Object.assign({}, initState.columnForm)
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
  setColumnForm: (state, item) => {
    if (item) {
      keysClone(state.columnForm, item)
    }
  },
  resetVersionForm: state => {
    state.versionForm = Object.assign({}, initState.versionForm)
  },
  resetCatalogForm: state => {
    state.catalogForm = Object.assign({}, initState.catalogForm)
  },
  resetColumnForm: state => {
    state.columnForm = Object.assign({}, initState.columnForm)
  },
  resetadSearchForm: state => {
    state.adSearchForm = Object.assign({}, initState.adSearchForm)
  }
}

const actions = {
  initEvent({ dispatch }) {
    dispatch('queryVersion')
  },
  async queryVersion({ commit, dispatch }, val = {}) {
    const { value } = await getVersionListApi()
    state.versionList = value
    if (!val.flag) {
      if (state.versionList.length) {
        commit('setCurrentVersion', state.versionList[0].versionName)
      } else {
        commit('setCurrentVersion', '')
      }
    }
    dispatch('queryCatalog')
  },
  async queryCatalog({ commit, dispatch }, val = {}) {
    const { value } = await getCatalogApi(state.currentVersion)
    state.catalogList = value
    if (!val.flag) {
      commit(
        'setCurrentCatalog',
        state.catalogList.length &&
          state.catalogList[0].dataSetCatalogEntiyList.length
          ? state.catalogList[0].dataSetCatalogEntiyList[0].id
          : ''
      )
    }
    await dispatch('queryColumn')
  },
  async queryColumn({ commit }, val = {}) {
    const { curPage, pageSize } = state.pageInfo
    const res = await getEventInfoApi(
      state.currentCatalog,
      curPage,
      pageSize,
      state.searchForm
    )
    const { records, pageInfo } = res.value
    state.columnList = processColumnList(records)
    commit('resetadSearchForm')
    if (!val.flag)
      commit(
        'setCurrentColumn',
        state.columnList && state.columnList.length
          ? state.columnList[0].index
          : ''
      )
    commit('setPageInfo', pageInfo)
  },
  async adQueryColumn({ state, commit }) {
    state.pageInfo.curPage = 1
    const { curPage, pageSize } = state.pageInfo
    const res = await advanceSearchApi(curPage, pageSize, state.adSearchForm)
    const { records, pageInfo } = res.value
    state.columnList = processColumnList(records)
    commit(
      'setCurrentColumn',
      state.columnList && state.columnList.length
        ? state.columnList[0].index
        : ''
    )
    commit('setPageInfo', pageInfo)
  },
  async addVersion({ dispatch, commit }) {
    const { version, parVersion } = state.versionForm
    await addVersionApi(version, parVersion, state.versionForm.state)
    commit('resetVersionForm')
    dispatch('queryVersion')
  },
  async runCatalog({ dispatch, state }) {
    await submitCatalogApi(state.currentCatalog)
    this._vm.$message.success('启动成功！')
    dispatch('queryCatalog', { flag: true })
  },
  async submitCatalog({ dispatch, state }) {
    const version = state.currentVersion
    const { id, theme, code, nameCn, nameEn, description } = state.catalogForm
    if (!id) {
      await addCatalogApi(version, theme, code, nameCn, nameEn, description)
    } else {
      await updateCatalogApi(
        id,
        version,
        theme,
        code,
        nameCn,
        nameEn,
        description
      )
      dispatch('queryCatalog', { flag: true })
    }
  },
  async submitColumn({ dispatch, commit, state }) {
    const {
      id,
      dataElementId,
      nameCn,
      nameEn,
      definition,
      primaryKeyFlag,
      requiredFlag,
      indexFlag
    } = state.columnForm
    const datasetId = parseInt(state.currentCatalog)
    if (!id) {
      await addCatalogColumnApi({
        datasetId,
        dataElementId,
        nameCn,
        nameEn,
        definition,
        primaryKeyFlag,
        requiredFlag,
        indexFlag
      })
      this._vm.$message.success('新增字段成功！')
      dispatch('queryColumn')
    } else {
      await updateCatalogColumnApi({
        id,
        datasetId,
        dataElementId,
        nameCn,
        nameEn,
        definition,
        primaryKeyFlag,
        requiredFlag,
        indexFlag
      })
      this._vm.$message.success('编辑字段成功！')
      dispatch('queryColumn', { flag: true })
    }
  },
  async getMaxCode({}, { version, theme }) {
    const res = await getMaxCodeApi(version, theme)
    state.catalogForm.code = getMax(res.value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
