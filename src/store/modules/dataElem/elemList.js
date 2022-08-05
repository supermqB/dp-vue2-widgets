import { keysObject } from '@/utils/lang'
import { getFormFieldsConfig } from '@/views/data_element/center/config/editFrom.js'
import advSearchFormConfig from '@/views/data_element/center/config/advSearchForm'
import { post } from '@/utils/request'

const state = {
  queryCriteria: {
    type: '',
    wordSpeech: '',
    state: ''
  },
  advQueryCriteria: keysObject(advSearchFormConfig, 'id'),
  editElemFormData: keysObject(getFormFieldsConfig(), 'id'),
  tableData: [],
  selectedItem: null,
  pageInfo: {
    curPage: 1,
    pageSize: 50,
    totalSize: 200,
    totalPage: 10
  },
  pendingCommitItems: []
}

const mutations = {
  setTableHeader(state, val) {},
  setTableData(state, val) {
    state.tableData = val
  },
  setPageInfo(state, val) {
    Object.assign(state.pageInfo, val)
  },
  setSelectItem(state, curRow) {
    state.selectedItem = curRow
  },
  setCommitData(state, val) {
    state.pendingCommitItems = val
  }
}

const actions = {
  async search({ state, commit, rootState }) {
    let selectedGrps = rootState.dataElem.elemGroup.selectedGrps
    let {
      value: { pageInfo, records: tableData }
    } = await post(
      'data-element/list',
      {
        ctlgIdentifierList: selectedGrps,
        ...state.queryCriteria
      },
      { size: state.pageInfo.pageSize, current: state.pageInfo.curPage }
    )
    commit(
      'setTableData',
      tableData.map(item => ({ index: item.id, ...item }))
    )
    commit('setPageInfo', pageInfo)
    if (selectedGrps.length == 0) {
      rootState.dataElem.elemGroup.groupSum[1].value = pageInfo.totalSize
    }
    rootState.dataElem.elemGroup.groupSum[0].value = pageInfo.totalSize
  },
  presetEditDialog(
    { state },
    val = { ...keysObject(getFormFieldsConfig(), 'id'), id: null }
  ) {
    Object.assign(state.editElemFormData, val)
    let segs = val.identifierPrefix.split('.')
    state.editElemFormData.identifierSeg1 = segs[0]
    state.editElemFormData.identifierSeg2 = segs[1]
    state.editElemFormData.identifierSeg3 = segs[2]
  },
  async editElem({ state, commit, dispatch }, val) {
    if (val.id) {
      post('data-element/edit', val)
    } else {
      let data = { ...val }
      delete data.id
      post('data-element/add', data)
    }
    dispatch('search')
  },
  startCommit({ state, commit }) {
    commit('setCommitData', [])
    commit('setCommitData', [
      {
        index: 1,
        cn_name: '婚姻状况',
        en_name: 'MARRIGE_STATUS',
        status: '待提交'
      },
      {
        index: 2,
        cn_name: '民族',
        en_name: 'NATION',
        status: '待提交'
      }
    ])
  },
  clearCommit({ commit }) {
    commit('setCommitData', [])
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
