const state = {
  versionList: [],
  catalogList: [],
  detailList: [],

  currentVersion: '',
  currentCatalog: '',
  currentDetail: ''
}

const mutations = {
  SET_CATALOG_LIST: (state, list) => {
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
  SET_CURRENT_VERSION: (state, version) => {
    state.currentVersion = version
  }
}

const actions = {}

export default {
  state
}
