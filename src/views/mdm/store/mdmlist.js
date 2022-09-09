import { keysObject } from '@/utils/lang'
import { post } from '@/utils/request'
import { slimConfirm } from '@/utils/pops'
import { Message } from 'element-ui'
import {
  default as formConfigs,
  likeFields
} from '../center/config/searchFormConfig.js'

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
  async setSearchFormConfig(state, type) {
    let generator = formConfigs[type]
    if (!generator) return
    const drgFormResp = await post('dict/list', { id: 279 })
    if (drgFormResp.success) {
      state.drugFormList = drgFormResp.value.records.map(item => item.value)
    }
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
        condition:
          likeFields[mdmType] && likeFields[mdmType].indexOf(key) != -1
            ? 'like'
            : 'equal'
      }))
      .filter(item => item.value != null && item.value != '')

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
    const workingTask = rootState.mdm.tasks.workingTask
    let completeCurSuspect = false
    if (workingTask?.suspectList) {
      completeCurSuspect = await slimConfirm(
        `编辑主索引的同时，是否完成当前疑似任务: <br> &nbsp;<b>【${workingTask.source}:${workingTask.name}】</b>
        <br/>请确认？`
      )
    }
    const mdmModuleId = rootState.mdm.selectedMDM.id
    const result = await post('sbr/edit', {
      id: mdmModuleId,
      jsonObject: itemDetail,
      suspectList: completeCurSuspect
        ? workingTask.suspectList.map(sus => sus.id)
        : []
    })
    if (result.success) {
      Message.success('主索引编辑成功。')
      dispatch('search')
      dispatch('mdm/loadMDMModules', null, { root: true })
      completeCurSuspect &&
        dispatch('mdm/tasks/listSuspectTasks', null, { root: true })
    }
    return result.success
  },

  async createMdmItem({ rootState, dispatch }, itemDetail) {
    const workingTask = rootState.mdm.tasks.workingTask
    let completeCurSuspect = false
    if (workingTask?.suspectList) {
      completeCurSuspect = await slimConfirm(
        `新增主索引的同时，是否完成当前疑似任务: <br> &nbsp;<b>【${workingTask.source}:${workingTask.name}】</b>
        <br/>请确认？`
      )
    }
    const mdmModuleId = rootState.mdm.selectedMDM.id
    const result = await post('sbr/add', {
      id: mdmModuleId,
      jsonObject: itemDetail,
      suspectList: completeCurSuspect
        ? workingTask.suspectList.map(sus => sus.id)
        : []
    })
    if (result.success) {
      Message.success('主索引新增成功。')
      dispatch('search')
      dispatch('mdm/loadMDMModules', null, { root: true })
      completeCurSuspect &&
        dispatch('mdm/tasks/listSuspectTasks', null, { root: true })
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
