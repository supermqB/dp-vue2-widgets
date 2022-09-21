import { get } from '@/utils/request'
const state = {
  search: '',
  groupSum: [
    { key: '选中', value: 154 },
    { key: '总数', value: 2148 }
  ],
  selectedGrps: [],
  grouptree: [],
  groupList: []
}
// const getters={
//   grpTreeList(state){
//     return state.grouptree.
//   }
// }

const mutations = {
  setSearch(state, val) {
    state.search = val
  },
  setGrpTree(state, val) {
    state.grouptree = val
  },
  setGrpOut(state, val) {
    state.groupList = val
  },
  setSelectedGrps(state, val) {
    state.selectedGrps = val
  }
}

const actions = {
  async fetchElementGrps({ commit, state }) {
    const { value: grpData } = await get('/data-element/getClassification')
    console.log('456', state.grouptree)
    console.log('456', grpData)
    grpData.sort((i1, i2) => i1.ctlgIdentifier.localeCompare(i2.ctlgIdentifier))
    let treeData = [
      {
        ctlgIdentifier: '0',
        ctlgName: '全部',
        directoryList: grpData
      }
    ]
    commit('setGrpTree', treeData)
    commit('setGrpOut', grpData)
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}
