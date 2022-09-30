import {
  getGeneralViewApi,
  dataElementClassifyApi,
  queryIndexInfoApi,
  selectIndexSourceApi,
  selectLiteratureInfoApi,
  getModelDatasetApi,
  getDictDatasetApi,
  getDictSuspectApi,
  literatureStatisticsApi,
  suspectedPageInfoApi
} from '@/api/home.js'

const state = {
  generalView: {},
  dataElementClassify: [],
  queryIndexInfo: [],
  selectIndexSource: [],
  selectLiteratureInfo: [],
  bwdValueList: {},
  eventValueList: {},
  dictValueList: {},
  dictSuspectList: [],
  literatureStatistics: [],
  suspectedPageInfo: []
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
        value: state.dictSuspectList ? state.dictSuspectList[1].completed : '',
        name: '已完成',
        label: { color: '#57CBFF' }
      },
      {
        value: state.dictSuspectList ? state.dictSuspectList[1].unfinished : '',
        name: '待完成',
        label: { color: '#FECF7A' }
      }
    ]
  },
  dictSuspectSource(state) {
    return state.dictSuspectList.length ? state.dictSuspectList[1].list : []
  },
  summaryList(state) {
    return [
      {
        label: '数据元',
        name: 'dataElement',
        contents: [
          {
            number: state.generalView.dataElementSize,
            unit: '条',
            style: {
              color: '#1251CB'
            }
          }
        ]
      },
      {
        label: '值域',
        name: 'value',
        contents: [
          {
            label: '目录',
            number: state.generalView.dictDirectorySize,
            unit: '组',
            style: {
              color: '#008AAC'
            }
          },
          {
            label: '明细',
            number: (state.generalView.dictDetailSize / 10000).toFixed(2),
            unit: '万',
            style: {
              color: '#008AAC'
            }
          }
        ]
      },
      {
        label: '主索引',
        name: 'mdm',
        contents: [
          {
            label: '目录',
            number: state.generalView.primeIndexSize,
            unit: '组',
            style: {
              color: '#C044A0'
            }
          },
          {
            label: '明细',
            number: (state.generalView.primeIndexTotalSize / 10000).toFixed(2),
            unit: '万',
            style: {
              color: '#C044A0'
            }
          }
        ]
      },
      {
        label: '事件模型',
        name: 'event',
        contents: [
          {
            label: '数据集',
            number: state.generalView.dwdModelSize,
            unit: '组',
            style: {
              color: '#9D5E00'
            }
          },
          {
            label: '字段',
            number: state.generalView.dwdFieldSize,
            unit: '条',
            style: {
              color: '#9D5E00'
            }
          }
        ]
      },
      {
        label: '业务模型',
        name: 'bwd',
        contents: [
          {
            label: '数据集',
            number: state.generalView.bwdModelSize,
            unit: '组',
            style: {
              color: '#109880'
            }
          },
          {
            label: '字段',
            number: (state.generalView.bwdFieldSize / 10000).toFixed(2),
            unit: '万条',
            style: {
              color: '#109880'
            }
          }
        ]
      },
      {
        label: '文献库',
        name: 'docs',
        contents: [
          {
            label: '文献',
            number: (state.generalView.literatureSize / 10000).toFixed(2),
            unit: '万篇',
            style: {
              color: '#0085A0'
            }
          }
        ]
      }
    ]
  },
  newDataElementClassify(state) {
    return state.dataElementClassify.map(item => {
      return {
        value: item.count,
        name: item.classificationFirst
      }
    })
  },
  newQueryIndexInfoX(state) {
    return state.queryIndexInfo.map(item => item.indexName)
  },
  newQueryIndexInfoY(state) {
    return state.queryIndexInfo.map(item => item.counts)
  },
  newSelectLiteratureInfo(state) {
    const arr = state.selectLiteratureInfo.filter(item => item.docType !== null)
    return arr.map(item => {
      return {
        value: item.count,
        name: item.docName
      }
    })
  },
  newLiteratureStatisticsX(state) {
    return state.literatureStatistics.map(item => item.date)
  },
  newLiteratureStatisticsY(state) {
    return state.literatureStatistics.map(item => +item.totalcount)
  }
}

const mutations = {
  setGeneralView(state, val) {
    state.generalView = val
  },
  setDataElementClassify(state, val) {
    state.dataElementClassify = val
  },
  setQueryIndexInfo(state, val) {
    state.queryIndexInfo = val
  },
  setSelectIndexSource(state, val) {
    state.selectIndexSource = val
  },
  setSelectLiteratureInfo(state, val) {
    state.selectLiteratureInfo = val
  },
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
    state.dictSuspectList = value
  },
  setLiteratureStatistics(state, val) {
    state.literatureStatistics = val
  }
}
const actions = {
  async getGeneralView({ state, commit }) {
    const { value } = await getGeneralViewApi()
    commit('setGeneralView', value)
  },
  async getDataElementClassify({ state, commit }) {
    const { value } = await dataElementClassifyApi()
    commit('setDataElementClassify', value)
  },
  async getQueryIndexInfo({ state, commit }) {
    const { value } = await queryIndexInfoApi()
    commit('setQueryIndexInfo', value)
  },
  async getSelectIndexSource({ state, commit }) {
    const { value } = await selectIndexSourceApi()
    commit('setSelectIndexSource', value)
  },
  async getSelectLiteratureInfo({ state, commit }) {
    const { value } = await selectLiteratureInfoApi()
    commit('setSelectLiteratureInfo', value)
    console.log(state.selectLiteratureInfo, 89898989)
  },
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
  },
  async getLiteratureStatistics({ state, commit }) {
    const { value } = await literatureStatisticsApi()
    commit('setLiteratureStatistics', value)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  getters
}
