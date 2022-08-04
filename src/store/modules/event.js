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

const queryCatalog = async () => {
  return await getCatalogApi()
}

const queryColumn = async () => {
  return await getEventInfoApi()
}

const state = {
  versionList: [],
  catalogList: [],
  columnList: [],
  currentVersion: '',
  currentCatalog: ''
}

const getters = {
  currentCatalogLabel(state) {
    return 'E000-卫生事件记录'
    const catalog = state.currentCatalog.find(
      item => state.currentCatalog === item.id
    )
    if (catalog) {
      return `${catalog.label}`
    }
    return ''
  },
  currentCatalogState(state) {
    return RUNNINGSTATE
    const catalog = state.currentCatalog.find(
      item => state.currentCatalog === item.id
    )
    if (catalog) {
      return `${catalog.state}`
    }
  }
}

const mutations = {
  setVersionList: (state, list) => {
    state.versionList = list
  },
  setCatalogList: (state, list) => {
    state.catalogList = list.map(item, index => {
      const { theme } = item
      const result = {
        id: index,
        label: theme,
        theme: true,
        children: []
      }
      item.dataSetCatalogEntiyList.forEach(item => {
        const { id, code, name, number } = item
        result.children.push({
          id,
          label: `${code}-${name}`,
          number
        })
      })
      return result
    })
  },
  setColumeList: (state, list) => {
    state.columnList = list
  },
  setCurrentVersion: (state, version) => {
    if (state.currentVersion !== version) {
      state.currentVersion = version
    }
  },
  setCurrentCatalog: (state, catalog) => {
    if (state.currentCatalog !== catalog) {
      state.currentCatalog = catalog
    }
  }
}

const actions = {
  async init({ commit }, { version, catalog }) {
    const versions = await getVersionListApi()
    commit('setVersionList', versions)
  },
  async queryCatalog({ commit }, {}) {
    const catalogs = await queryCatalog()
    commit('setCatalogList', catalogs)
  },
  async queryColumn({ commit }, {}) {
    const columns = await queryColumn()
    commit('setColumeList', columns)
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
  state,
  getters,
  mutations,
  actions
}
