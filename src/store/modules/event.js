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

// const queryCatalog = async () => {
//   return await getCatalogApi()
// }

// const queryColumn = async () => {
//   return await getEventInfoApi()
// }

const state = {
  versionList: [],
  catalogList: [],
  columnList: [],
  currentVersion: '',
  currentCatalog: '',
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 3,
    totalPage: 1
  }
}

const getters = {
  currentCatalog(state) {
    for (let item of state.catalogList) {
      const res = item.children.find(it => {
        return state.currentCatalog === it.id
      })
      if (res) return res
    }
    return {
      label: '',
      state: ''
    }
  }
}

const mutations = {
  setVersionList: (state, list) => {
    state.versionList = list
  },
  setCatalogList: (state, list) => {
    state.catalogList = list.map((item, index) => {
      const { theme } = item
      const result = {
        id: theme,
        label: theme,
        theme: true,
        children: []
      }
      item.dataSetCatalogEntiyList.forEach(item => {
        const { id, code, name, number } = item
        result.children.push({
          id: id.toString(),
          label: `${code}-${name}`,
          number
        })
      })
      return result
    })
  },
  setColumnList: (state, list) => {
    state.columnList = list
  },
  setCurrentVersion: (state, version) => {
    if (state.currentVersion !== version) {
      state.currentVersion = version
    }
  },
  setCurrentCatalog: (state, catalog) => {
    if (state.currentCatalog !== catalog) {
      state.currentCatalog = catalog.toString()
    }
  },
  setPageInfo: (state, pageInfo) => {
    Object.keys(pageInfo).forEach(key => {
      state.pageInfo[key] = pageInfo[key]
    })
  }
}

const actions = {
  async initEvent({ commit }) {
    let res = await getVersionListApi()
    state.versionList = res.value
    state.currentVersion = res.value[0].versionName
    res = await getCatalogApi()
    commit('setCatalogList', res.value)
    state.currentCatalog = state.catalogList[0].children[0].id
    const { curPage, pageSize } = state.pageInfo
    res = await getEventInfoApi(state.currentCatalog, curPage, pageSize)
    commit('setColumnList', res.value.records)
    state.pageInfo = res.value.pageInfo
  },
  async queryCatalog({ commit }, {}) {
    const res = await getCatalogApi()
    commit('setCatalogList', res.value)
  },
  async queryColumn({ commit }, { id }) {
    if (id) commit('setCurrentCatalog', id)
    const { curPage, pageSize } = state.pageInfo
    const res = await getEventInfoApi(state.currentCatalog, curPage, pageSize)
    commit('setColumnList', res.value.records)
    state.pageInfo = res.value.pageInfo
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
  async updateColumn({ commit }, {}) {
    await updateCatalogColumnApi()
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
