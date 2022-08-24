import { keysObject } from '@/utils/lang'
import searchFormConfig from '../config/searchForm'

const state = {
  search: '',
  docCtlg: [
    {
      id: 'all',
      label: '全部',
      count: 20090,
      children: [
        {
          id: 'magzine',
          label: '期刊文章',
          count: 10045,
          children: [
            {
              id: 'med_health',
              label: '医药、卫生',
              count: 5005,
              children: [
                {
                  id: 'generic',
                  label: '一般理论',
                  count: 2002,
                  children: [
                    { id: 'political', label: '方针、政策', count: 502 }
                  ]
                },
                {
                  id: 'heath',
                  label: '预防医学、卫生学',
                  count: 20,
                  children: [
                    { id: 'health_basic', label: '卫生基础', count: 5 },
                    { id: 'labor_health', label: '劳动卫生', count: 27 },
                    { id: 'child_health', label: '妇幼卫生', count: 5 },
                    { id: 'pendamic', label: '流行学与防疫', count: 30 }
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
    type: '期刊',
    author: '张春风',
    org: '美国国立卫生研究所',
    year: '1989',
    ctlg: 'A30002',
    source: '国外医学.预防.诊断.治疗用生物制品分册'
  }),
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 20,
    totalPage: 1
  }
}

const mutations = {
  setSearch(state, val) {
    state.search = val
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
