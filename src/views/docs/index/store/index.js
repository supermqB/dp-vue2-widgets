import { get, post } from '@/utils/request'
import articleTypes from '../articleType.js'
const { articleType } = articleTypes

const state = {
  listData: [],
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 0,
    totalPage: 10
  },
  searchContent: '',
  hotSearch: '',
  articleType: '全部',
  articleLabel: '',
  typeList: []
}
const mutations = {
  setListData(state, val) {
    state.listData = val
  },
  setPageInfo(state, val) {
    state.pageInfo = val
  },
  setSearchContent(state, val) {
    state.searchContent = val
  },
  setHotSearch(state, val) {
    state.hotSearch = val
  },
  steArticleType(state, val) {
    state.articleType = val
  },
  setArticleLabel(state) {
    state.articleLabel = articleType.find(
      item => item.name === state.articleType
    ).label
  },
  setTypeList(state) {
    state.typeList = articleType.map(item => item.name)
  }
}
const actions = {
  async search({ state, commit }) {
    commit('setArticleLabel')
    const result = await post(
      'literature/homePage',

      state.articleLabel
        ? { docType: state.articleLabel, msg: state.searchContent }
        : { msg: state.searchContent },
      {
        size: state.pageInfo.pageSize,
        current: state.pageInfo.curPage
      }
    )
    console.log(result)
    if (result.success) {
      commit('setListData', result.value.records)
      commit('setPageInfo', result.value.pageInfo)
    }
  },
  async getHotSearch({ state, commit }) {
    const result = await post('literature/hotWord')
    commit('setHotSearch', result.value)
    console.log(result.value)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
