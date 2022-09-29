import {
  getModelDatasetApi,
  getDictDatasetApi,
  getDictSuspectApi
} from '@/api/home'

const state = {
  bwdValueList: {},
  eventValueList: {},
  dictValueList: {},
  dictSuspectList: []
}
const getters = {
  bwdValueListCount(state) {
    return state.bwdValueList[0].dataSetValue.map(item => item.count)
  },
  bwdValueListSource(state) {
    return state.bwdValueList[0].dataSetValue.map(item => item.source)
  },
  bwdDetailListCount(state) {
    return state.bwdValueList[0].dataSetDetailValue.map(item => item.count)
  },
  bwdDetailListSource(state) {
    return state.bwdValueList[0].dataSetDetailValue.map(item => item.source)
  },
  eventValueListCount(state) {
    return state.eventValueList[0].dataSetValue.map(item => item.count)
  },
  eventValueListSource(state) {
    return state.eventValueList[0].dataSetValue.map(item => item.source)
  },
  eventDetailListCount(state) {
    return state.eventValueList[0].dataSetDetailValue.map(item => item.count)
  },
  eventDetailListSource(state) {
    return state.eventValueList[0].dataSetDetailValue.map(item => item.source)
  },
  dictValueListCatalog(state) {
    return state.dictValueList.dictDirectoryList.map(item => item.count)
  },
  dictValueListDetail(state) {
    return state.dictValueList.dictDetailList.map(item => item.count)
  },
  dictValueListTitle(state) {
    return state.dictValueList.dictDetailList.map(item => {
      return {
        value: item.desc,
        textStyle: {
          align: 'middle',
          padding: [0, 90, 0, 0]
        }
      }
    })
  },
  dictSuspectData(state) {
    return [
      {
        value: state.dictSuspectList ? state.dictSuspectList[0].completed : '',
        name: '已完成',
        label: { color: '#57CBFF' }
      },
      {
        value: state.dictSuspectList ? state.dictSuspectList[0].unfinished : '',
        name: '待完成',
        label: { color: '#FECF7A' }
      }
    ]
  }
}
const mutations = {
  setBwdData(state, value) {
    state.bwdValueList = value
  },
  setEventData(state, value) {
    state.eventValueList = value
  },
  setDictData(state, value) {
    state.dictValueList = value
  },
  setSuspectData(state, value) {
    console.log(111, value)
    state.dictSuspectList = value
  }
}
const actions = {
  async queryDataset({ commit }) {
    const result = await getModelDatasetApi()
    const value = result.value.filter(item => item.source === 'BWD')
    commit('setBwdData', value)
    const detail = result.value.filter(item => item.source === 'DWD')
    commit('setEventData', detail)
  },
  async queryDictData({ commit }) {
    const { value } = await getDictDatasetApi()
    commit('setDictData', value)
  },
  async querySuspectData({ commit }) {
    const { value } = await getDictSuspectApi()
    commit('setSuspectData', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
