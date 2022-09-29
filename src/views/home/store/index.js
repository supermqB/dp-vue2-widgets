import {
  getGeneralViewApi,
  dataElementClassifyApi,
  queryIndexInfoApi,
  selectIndexSourceApi,
  selectLiteratureInfoApi
} from '@/api/home.js'

const state = {
  generalView: {},
  dataElementClassify: [],
  queryIndexInfo: [],
  selectIndexSource: [],
  selectLiteratureInfo: []
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
  }
}

const getters = {
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
    return state.selectLiteratureInfo.map(item => {
      return {
        value: item.count,
        name: item.docName
      }
    })
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
