import { keysObject } from '@/utils/lang'
import { post } from '@/utils/request'
import { Message } from 'element-ui'
import {
  generateSearchFormConfig,
  generateSearchFormConfig_mat,
  likeFields
} from '@/views/mdm/center/config/searchFormConfig.js'

const formConfigs = {
  drg: generateSearchFormConfig,
  mat: generateSearchFormConfig_mat
}

const state = {
  drugFormList: ['片剂', '包衣片'],
  searchForm: {
    formCfg: [],
    formData: {}
  },
  mdmTable: {
    tableData: [],
    pageInfo: {
      curPage: 1,
      pageSize: 20,
      totalSize: 20,
      totalPage: 1
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
  setTableData(state, value) {
    state.mdmTable.tableData = value
  },
  setTableSelectItem(state, curRow) {
    state.mdmTable.selectedItem = curRow
  },
  setPageInfo(state, value) {
    const statePageInfo = state.mdmTable.pageInfo
    statePageInfo.totalSize = value.totalSize
    statePageInfo.totalPage = value.totalPage
  }
}

const actions = {
  async search({ commit, state, rootState }) {
    const mdmModuleId = rootState.mdm.selectedMDM.id
    const mdmType = rootState.mdm.selectedMDM.type
    const pageInfo = state.mdmTable.pageInfo
    const searchCriteria = state.searchForm.formData
    let columnParamList = Object.entries(searchCriteria)
      .map(([key, value]) => ({
        name: key,
        value,
        condition: likeFields[mdmType].indexOf(key) != -1 ? 'like' : 'equal'
      }))
      .filter(item => item.value != '')

    const result = await post(
      'sbr/list',
      { id: mdmModuleId * 1, columnParamList },
      { size: pageInfo.pageSize, current: pageInfo.curPage }
    )
    if (result.success) {
      let { records, pageInfo } = result.value

      commit(
        'setTableData',
        records.map(item => ({ ...item, index: item.id }))
      )
      commit('setPageInfo', pageInfo)
    }
  },

  async editMdmItem({ rootState, dispatch }, itemDetail) {
    const mdmModuleId = rootState.mdm.selectedMDM.id
    const result = await post('sbr/edit', {
      id: mdmModuleId,
      jsonObject: itemDetail
    })
    if (result.success) {
      Message.success('主索引编辑成功。')
      dispatch('search')
      dispatch('mdm/loadMDMModules', null, { root: true })
    }
    return result.success
  },

  async createMdmItem({ rootState, dispatch }, itemDetail) {
    const mdmModuleId = rootState.mdm.selectedMDM.id
    const result = await post('sbr/add', {
      id: mdmModuleId,
      jsonObject: itemDetail
    })
    if (result.success) {
      Message.success('主索引新增成功。')
      dispatch('search')
      dispatch('mdm/loadMDMModules', null, { root: true })
    }
    return result.success
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
