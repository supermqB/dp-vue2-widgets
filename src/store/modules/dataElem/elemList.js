import { MessageBox } from 'element-ui'
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
  isAdvancedOn: false,

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
  setAdvanceMode(state, val) {
    state.isAdvancedOn = val
  },
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
    let isAdvancedOn = state.isAdvancedOn
    let criteria = isAdvancedOn ? state.advQueryCriteria : state.queryCriteria
    let {
      value: { pageInfo, records: tableData }
    } = await post(
      isAdvancedOn ? 'data-element/advanceSearch' : 'data-element/list',
      {
        ctlgIdentifierList: selectedGrps,
        ...criteria
      },
      { size: state.pageInfo.pageSize, current: state.pageInfo.curPage }
    )
    commit(
      'setTableData',
      tableData.map(item => ({ index: item.id, ...item }))
    )
    commit('setPageInfo', pageInfo)
    if (
      selectedGrps.length == 0 &&
      state.queryCriteria.state == '' &&
      state.queryCriteria.type == '' &&
      state.queryCriteria.wordSpeech == ''
    ) {
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
      await post('data-element/edit', val)
      MessageBox.alert(`数据元 [${val.identifier}] 编辑成功！`)
    } else {
      let data = { ...val }
      delete data.id
      await post('data-element/add', data)
      MessageBox.alert(`数据元 [${val.identifier}] 新增成功！`)
    }

    dispatch('search')
  },
  async startCommit({ state, commit, rootState }) {
    commit('setCommitData', [])

    let selectedGrps = rootState.dataElem.elemGroup.selectedGrps
    let {
      value: { pageInfo, records: tableData }
    } = await post(
      'data-element/list',
      {
        ctlgIdentifierList: selectedGrps,
        state: '1' /* 待提交 */
      },
      { size: 2000, current: 1 }
    )

    commit(
      'setCommitData',
      tableData.map(({ id, nameCn, nameEn, state }) => ({
        index: id,
        id,
        nameCn,
        nameEn,
        state
      }))
    )

    if (!tableData.length) {
      MessageBox.alert('没有待提交的数据元，请确认数据元分组。')
    }
  },
  async completeCommit({ state }, ids) {
    const { success } = await post('data-element/commit', ids)
    MessageBox.alert(success ? '数据元提交成功。' : '数据元提交失败。')
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
