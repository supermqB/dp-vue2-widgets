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
  currentCatalog(state) {
    const catalog = state.currentCatalog.find(item => true)
    if (catalog) {
      return catalog
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
