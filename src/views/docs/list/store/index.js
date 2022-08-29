import { keysObject } from '@/utils/lang'
import searchFormConfig from '../config/searchForm'

const state = {
  search: '',
  selectedDocTypeCtlg: 'all',
  docCtlg: [
    {
      id: 'all',
      label: '全部',
      count: 20090,
      children: [
        {
          id: 'J',
          label: '期刊文章',
          count: 10045,
          children: [
            {
              id: 'J.R',
              label: '医药、卫生',
              count: 5005,
              children: [
                {
                  id: 'J.R01',
                  label: '一般理论',
                  count: 2002,
                  children: [{ id: 'J.R0101', label: '方针、政策', count: 502 }]
                },
                {
                  id: 'J.R04',
                  label: '预防医学、卫生学',
                  count: 20,
                  children: [
                    { id: 'J.R0401', label: '卫生基础', count: 5 },
                    { id: 'J.R0402', label: '劳动卫生', count: 27 },
                    { id: 'J.R0403', label: '妇幼卫生', count: 5 },
                    { id: 'J.R0404', label: '流行学与防疫', count: 30 }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],
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
  setSelectedDocTypeCtlg(state, val) {
    state.selectedDocType = val
    console.log(val)
  }
}

const actions = {
  search({ state }) {
    console.log(state.selectedDocTypeCtlg)
    console.log(state.searchForm.formData)
    console.log(state.pageInfo)
  },
  import({ state }, payload) {
    console.log(payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
