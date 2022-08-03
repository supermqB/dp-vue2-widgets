import { keysObject } from '@/utils/lang'
import { formFieldsConfig } from '@/views/data_element/center/config/editFrom.js'
import advSearchFormConfig from '@/views/data_element/center/config/advSearchForm'

const state = {
  queryCriteria: {
    type: '',
    wordAttr: '',
    status: ''
  },
  advQueryCriteria: keysObject(advSearchFormConfig, 'id'),
  editElemFormData: keysObject(formFieldsConfig, 'id'),
  tableData: [
    {
      index: 1,
      code: 'DE01.00.10.001',
      type: 'S3'
    },
    {
      index: 2,
      code: 'DE01.00.10.002',
      type: 'S1'
    }
  ],
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
  setSelectItem(state, curRow) {
    state.selectedItem = curRow
  },
  setCommitData(state, val) {
    state.pendingCommitItems = val
  }
}

const actions = {
  search({ state, commit, rootState }) {
    console.log(state.queryCriteria)
    console.log(rootState.dataElem.elemGroup.selectedGrps)
    console.log(state.pageInfo)
  },
  /*   advSearch() {},
  createDataElem() {}, */
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
