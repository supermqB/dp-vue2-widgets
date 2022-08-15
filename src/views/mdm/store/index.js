import mdmlist from './mdmlist'
import tasks from './tasks'
const state = {
  mdmList: [
    {
      id: '1-1',
      label: '药品（中成药/西药）',
      name: 'mdm_data_drug',
      number: 2398,
      state: 'income' /*income*/
    },
    {
      id: '1-2',
      label: '行政区划',
      number: 23,
      name: 'mdm_data_region',
      state: 'complete'
    },
    {
      id: '1-3',
      label: '耗材',
      name: 'mdm_data_mat',
      number: 298,
      state: 'income'
    }
  ],
  selectedMDM: { id: 123, name: '药品（中成药西药）' },
  suspectList: [],
  suspectFilter: []
}

const mutations = {
  setSelectedMDM(state, value) {
    state.selectedMDM = value
  }
}
export default {
  namespaced: true,
  state,
  mutations,
  modules: {
    mdmlist,
    tasks
  }
}
