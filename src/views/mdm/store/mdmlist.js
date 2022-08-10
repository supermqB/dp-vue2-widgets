import { keysObject } from '@/utils/lang'
import searchFormConfig from '@/views/mdm/center/config/searchFormConfig.js'
import { drugTableConfig } from '@/views/mdm/center/config/tableConfig.js'

const state = {
  searchForm: {
    formCfg: searchFormConfig,
    formData: keysObject(searchFormConfig, 'id')
  },
  mdmTable: {
    tableData: [
      {
        id: 1,
        identifier: 'XC01EBX049B002020104017',
        name: '药物A',
        tradeName: '阿斯匹林',
        tradeNameEn: 'asipingling',
        type: '药品类别'
      }
    ],
    tableConfig: drugTableConfig,
    pageInfo: {
      curPage: 1,
      pageSize: 50,
      totalSize: 200,
      totalPage: 10
    },
    selectedItem: {}
  }
}
const mutations = {
  setTableSelectItem(state, curRow) {
    state.mdmTable.selectedItem = curRow
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
