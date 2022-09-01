import { keysObject } from '@/utils/lang'
import searchFormConfig from '../config/searchForm'
import { get, post, postWithFile } from '@/utils/request'
import { Message } from 'element-ui'

const state = {
  search: '',
  selectedDocTypeCtlg: [],
  docCtlg: [],
  searchForm: {
    formCfg: searchFormConfig,
    formData: keysObject(searchFormConfig, 'id')
  },
  listData: new Array(20).fill({
    identifier: 'JR01011989001',
    title: '文献标题',
    titleEn: 'doc title',
    docTypeName: '期刊',
    author: '张春风',
    organization: '美国国立卫生研究所',
    releaseTime: '1989',
    catalogCode: 'A30002',
    source: '国外医学.预防.诊断.治疗用生物制品分册'
  }),
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 200,
    totalPage: 10
  }
}

const mutations = {
  setSearch(state, val) {
    state.search = val
  },
  setDocCtlg(state, val) {
    state.docCtlg = val
  },
  setSelectedDocTypeCtlg(state, val) {
    state.selectedDocTypeCtlg = val
    console.log(val)
  },
  setListData(state, val) {
    state.listData = val
  },
  setPageInfo(state, val) {
    state.pageInfo = val
  }
}

const actions = {
  async search({ state, commit }) {
    console.log(state.selectedDocTypeCtlg)
    console.log(state.searchForm.formData)
    console.log(state.pageInfo)

    const result = await post(
      'literature/pageList',
      {
        ...state.searchForm.formData,
        identifierList: state.selectedDocTypeCtlg
      },
      {
        size: state.pageInfo.pageSize,
        current: state.pageInfo.curPage
      }
    )
    if (result.success) {
      commit('setListData', result.value.records)
      commit('setPageInfo', result.value.pageInfo)
    }
  },
  async loadCatalog({ state, commit }) {
    const result = await get('literature/selectList')
    if (result.success) {
      commit('setDocCtlg', result.value)
    }
  },
  async importDoc({ dispatch }, docProps) {
    console.log(docProps)
    const result = await postWithFile('literature/importLiterature', docProps)
    if (result.success) {
      Message.success('文献导入成功')
      dispatch('search')
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
