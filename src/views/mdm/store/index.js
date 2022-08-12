import mdmlist from './mdmlist'
const state = {
  mdmList: [],
  selectedMDM: { id: 123, name: '药品（中成药西药）' },
  suspectList: [],
  suspectFilter: []
}

const mutations = {
  setSelectedMDM(state, value) {
      debugger;
    state.selectedMDM = value
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  modules: {
    mdmlist
  }
}
