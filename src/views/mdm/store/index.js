import mdmlist from './mdmlist'
const state = {
  mdmList: [],
  selectedMDM: { id: 123, name: '药品（中成药西药）' },
  suspectList: [],
  suspectFilter: []
}

export default {
  namespaced: true,
  state,
  modules: {
    mdmlist
  }
}
