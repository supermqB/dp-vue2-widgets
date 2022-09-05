import list from '../list/store'
import summary from '../summary/store'
import { get } from '@/utils/request'
const state = {
  commonDocCtlg: []
}
const mutations = {
  setCommonDocCtlg(state, val) {
    state.commonDocCtlg = val
  }
}
function prepareTree(list) {
  list.forEach(item => {
    item.value = item.id
    if (item.children) {
      prepareTree(item.children)
    }
  })
  return list
}
const actions = {
  async loadCommonDocCtlg({ commit }) {
    const result = await get('literature/threeLevelStructure')
    if (result.success) {
      commit('setCommonDocCtlg', prepareTree(result.value))
    }
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  modules: { list, summary }
}
