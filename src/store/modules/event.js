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
  getMaxCodeApi
} from '@/api/event'

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
    }
    item.dataSetCatalogEntiyList.forEach(item => {
      const { id, code, nameCn, number, state } = item
      result.children.push({
        id: id.toString(),
        label: `${code}-${nameCn}`,
        number,
        state
      })
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
  isAdvance: false,
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
    return state.columnList.find(item => item.id === state.currentColumn)
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
    if (version) {
      state.currentVersion = version
    } else {
      if (state.versionList.length) {
        state.currentVersion = state.versionList[0].versionName
      } else {
        state.currentVersion = ''
      }
    }
  },
  setCurrentCatalog: (state, catalog) => {
    if (catalog) {
      state.currentCatalog = catalog.toString()
    } else {
      if (
        state.catalogList.length &&
        state.catalogList[0].dataSetCatalogEntiyList.length
      ) {
        state.currentCatalog =
          state.catalogList[0].dataSetCatalogEntiyList[0].id.toString()
      } else {
        state.currentCatalog = ''
      }
    }
  },
  setCurrentColumn: (state, column) => {
    if (!column) {
      state.currentColumn =
        state.columnList && state.columnList.length
          ? state.columnList[0].id
          : ''
    } else {
      state.currentColumn = column
    }
  },
  setIsAdvance: (state, isAdvance) => {
    if (state.isAdvance !== isAdvance) {
      state.isAdvance = isAdvance
      state.pageInfo.curPage = 1
    }
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
  }
}

const actions = {
  async queryVersion() {
    const { value } = await getVersionListApi()
    state.versionList = value
  },
  async queryCatalog() {
    const { value } = await getCatalogApi(state.currentVersion)
    state.catalogList = value
  },
  async queryColumn({ commit }) {
    const { curPage, pageSize } = state.pageInfo
    const query = Object.assign(
      { id: state.currentCatalog },
      state.isAdvance ? state.adSearchForm : state.searchForm
    )
    const { value } = await getEventInfoApi(
      curPage,
      pageSize,
      query,
      state.isAdvance
    )
    const { records, pageInfo } = value
    state.columnList = processColumnList(records, curPage, pageSize)
    commit('setPageInfo', pageInfo)
  },
  async initEvent({ dispatch, commit }) {
    await dispatch('queryVersion')
    commit('setCurrentVersion')
    await dispatch('queryCatalog')
    commit('setCurrentCatalog')
    await dispatch('queryColumn')
    commit('setCurrentColumn')
  },
  async versionChanged({ dispatch, commit }) {
    await dispatch('queryCatalog')
    commit('setCurrentCatalog')
    await dispatch('queryColumn')
    commit('setCurrentColumn')
  },
  async catalogChanged({ dispatch, commit }) {
    await dispatch('queryColumn')
    commit('setCurrentColumn')
  },
  async columnChanged({ dispatch, commit }, reset) {
    await dispatch('queryColumn')
    if (reset) commit('setCurrentColumn')
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
    dispatch('queryCatalog')
  },
  async submitCatalog({ dispatch, state }) {
    const version = state.currentVersion
    const { id, theme, code, nameCn, nameEn, description } = state.catalogForm
    if (!id) {
      await addCatalogApi(version, theme, code, nameCn, nameEn, description)
      this._vm.$message.success('新增目录成功！')
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
      this._vm.$message.success('编辑目录成功！')
    }
    dispatch('queryCatalog')
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
    }
    await dispatch('queryColumn')
  },
  async getMaxCode({}, { version, theme }) {
    const res = await getMaxCodeApi(version, theme)
    state.catalogForm.version = version
    state.catalogForm.theme = theme
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
