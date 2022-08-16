import { keysObject } from '@/utils/lang'
import { generateSearchFormConfig } from '@/views/mdm/center/config/searchFormConfig.js'
import { drugTableConfig } from '@/views/mdm/center/config/tableConfig.js'

const formConfigs = {
  drg: generateSearchFormConfig
}

const state = {
  drugFormList: ['片剂', '包衣片'],
  searchForm: {
    formCfg: [],
    formData: {}
  },
  mdmTable: {
    tableData: [
      {
        id: 1,
        sdrgInx: 'XC01EBX049B002020104017',
        drugName: '药物A',
        drugTradeNameCn: '阿斯匹林',
        drugTradeNameEn: 'asipingling',
        drugTypeName: '药品类别'
      }
    ],
    tableConfig: drugTableConfig,
    pageInfo: {
      curPage: 1,
      pageSize: 20,
      totalSize: 200,
      totalPage: 10
    },
    selectedItem: {}
  }
}
const mutations = {
  setSearchFormConfig(state, type) {
    let generator = formConfigs[type]
    let cfg =
      typeof generator == 'function' ? generator.apply(state) : generator

    state.searchForm.formCfg = cfg
    state.searchForm.formData = keysObject(cfg, 'id')
  },
  setTableSelectItem(state, curRow) {
    state.mdmTable.selectedItem = curRow
  }
}

export default {
  namespaced: true,
  state,
  mutations
}
