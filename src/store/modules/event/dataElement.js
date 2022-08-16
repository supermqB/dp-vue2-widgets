import { queryDataElementApi } from '@/api/event'

const state = {
  currentDataElementId: '',
  dataElementList: []
}

const mutations = {
  setDataElement(state, elementId) {
    state.currentDataElementId = elementId
  }
}

const actions = {
  async queryDataElement({ state }, val) {
    const res = await queryDataElementApi(val)
    state.dataElementList = res.value.records.map(item => {
      return {
        id: item.id,
        value: item.id,
        label: item.nameCn,
        obj: item
      }
    })
  },
  setDataElementInfo({ commit, state }, val) {
    const dataElement = state.dataElementList.find(item => item.id === val)
    if (dataElement) {
      const { valueRange, valueDomainName, type, format, identifier, id } =
        dataElement.obj
      commit('setColumnForm', {
        valueRange,
        valueDomainName,
        type,
        format,
        identifier,
        dataElementId: id
      })
    }
  }
}

export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
