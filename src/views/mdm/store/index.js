import { camelCase } from 'lodash'
import mdmlist from './mdmlist'
import tasks from './tasks'
import { get } from '@/utils/request'
import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'
const state = {
  mdmList: [],
  selectedMDM: {
    id: '1-1',
    label: '药品（中成药/西药）',
    name: 'mdm_data_drug',
    type: 'drg',
    number: 2398,
    state: 'income' /*income*/
  },
  selectedMDMDesc: {},
  suspectList: [],
  suspectFilter: []
}

const mutations = {
  setSelectedMDM(state, value) {
    console.log('current mdm module')
    console.log(value)
    state.selectedMDM = value
  },
  setSelectedMDMDesc(state, value) {
    console.log('current mdm module')
    console.log(value)
    state.selectedMDMDesc = value
  },
  setMDMList(state, value) {
    state.mdmList = value
  }
}
const getters = {
  curMDMColumns(state) {
    if (!state.selectedMDMDesc.columnList) {
      return []
    }
    return state.selectedMDMDesc.columnList.map(col => ({
      property: camelCase(col.nameEn),
      label: col.nameCn
    }))
  }
}

const actions = {
  async loadMDMModules({ commit }) {
    const result = await get('sbr/getCatalog')
    if (result.success) {
      commit(
        'setMDMList',
        result.value
          .map(item => ({
            ...item,
            id: item.id + '',
            label: item.name,
            state: item.state == '1' ? INCOMESTATE : COMPLETESTATE,
            number: item.refCount
          }))
          .sort((i1, i2) => i1.name.localeCompare(i2.name))
      )
    }
  },

  async loadMDMModuleDesc({ commit }, mdmModuleId) {
    const result = await get(`sbr/getOverView/${mdmModuleId}`)
    if (result.success) {
      commit('setSelectedMDMDesc', result.value)
    }
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
  modules: {
    mdmlist,
    tasks
  }
}
