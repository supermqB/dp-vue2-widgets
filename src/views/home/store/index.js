const state = {
  bwdDatasetValue: [250, 445, 645],
  bwdDatasetTitle: ['医保版', '卫生版', '运营版'],
  bwdDetailValue: [480, 320, 370],
  bwdDetailTitle: ['医保版', '卫生版', '运营版'],
  bwdValueList: {},
  eventDatasetValue: [340, 640, 485],
  eventDatasetTitle: ['医保版V1.0', '卫生版V1.0', '运营版V1.0'],
  eventDetailValue: [480, 325, 720],
  eventDetailTitle: ['医保版V1.0', '卫生版V1.0', '运营版V1.0'],
  eventValueList: [],
  valueDatasetCatalog: [1150, 850, 1750, 1250, 1950, 1700, 950, 750],
  valueDatasetDetail: [1450, 1550, 1100, 850, 2100, 1550, 1100, 850],
  valueDatasetTitle: [
    {
      value: '国家标准',
      textStyle: {
        align: 'middle',
        padding: [0, 90, 0, 0]
      }
    },
    {
      value: '国家强制标准',
      textStyle: {
        align: 'middle',
        padding: [0, 90, 0, 0]
      }
    },
    {
      value: '国家推荐标准',
      textStyle: {
        align: 'middle',
        padding: [0, 90, 0, 0]
      }
    },
    {
      value: '行业标准',
      textStyle: {
        align: 'middle',
        padding: [0, 90, 0, 0]
      }
    },
    {
      value: '地方标准',
      textStyle: {
        align: 'middle',
        padding: [0, 90, 0, 0]
      }
    },
    {
      value: '企业标准',
      textStyle: {
        align: 'middle',
        padding: [0, 90, 0, 0]
      }
    },
    {
      value: '自定义标准',
      textStyle: {
        align: 'middle',
        padding: [0, 90, 0, 0]
      }
    },
    {
      value: '团体标准',
      textStyle: {
        align: 'middle',
        padding: [0, 90, 0, 0]
      }
    }
  ],
  valueSuspectDetail: [
    { value: 289, name: '已完成', label: { color: '#57CBFF' } },
    { value: 50, name: '待完成', label: { color: '#FECF7A' } }
  ]
}
const mutations = {
  setBwdData(state, value) {
    state.bwdValueList = value
  },
  //   setBwdData(state, value) {
  //     state.bwdDatasetTitle = value.dataSetValue.forEach(item => {
  //       return item.source
  //     })
  //     state.bwdDatasetValue = value.dataSetValue.forEach(item => {
  //       return item.count
  //     })
  //     state.bwdDetailTitle = value.dataSetDetailValue.forEach(item => {
  //       return item.source
  //     })
  //     state.bwdDetailValue = value.dataSetDetailValue.forEach(item => {
  //       return item.count
  //     })
  //   },
  setEventData(state, value) {
    state.eventValueList = value
  },
  // state.eventDatasetTitle = value.dataSetValue.forEach(item => {
  //   return item.source
  // })
  // state.eventDatasetValue = value.dataSetValue.forEach(item => {
  //   return item.count
  // })
  // state.eventDetailTitle = value.dataSetDetailValue.forEach(item => {
  //   return item.source
  // })
  // state.eventDetailValue = value.dataSetDetailValue.forEach(item => {
  //   return item.count
  // })
  //   },
  setvalueData(state, value) {}
}
const actions = {
  async queryDataset({ commit }) {
    const { result } = await getBwdDatasetApi()
    const value = result.filter(item => item.source === BWD)
    commit('setBwdData', value)
    const detail = result.filter(item => item.source === BWD)
    commit('setEventData', detail)

    // state.bwdValueList = result.filter(item => item.source === BWD)
    // if (state.bwdValueList) {
    //   commit('setBwdData', state.bwdValueList)
    // }
    // state.eventValueList = result.filter(item => item.source === DWD)
    // if (state.eventValueList) {
    //   commit('setEventData', state.eventValueList)
    // }
  },
  async queryValueData({ commit }) {
    const { result } = await getValueDatasetApi()
    // state.valueDatasetCatalog = result
  }
}
export default {
  namespaced: true,
  state,
  // getters,
  mutations,
  actions
}
