import { camelCase } from 'lodash'
import { confirm } from '@/utils/pops'
import mdmlist from './mdmlist'
import tasks from './tasks'
import { get, put } from '@/utils/request'
import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'
import { Message } from 'element-ui'
const state = {
  mdmList: [],
  selectedMDM: {},
  selectedMDMDesc: {},
  suspectList: [],
  suspectFilter: []
}

const mutations = {
  setSelectedMDM(state, value) {
    state.selectedMDM = value
  },
  setSelectedMDMDesc(state, value) {
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
      property: col.nameEn,
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
  },

  async enableMDMModule({ state, dispatch }) {
    const selectedMDM = state.selectedMDM
    debugger
    const confirmed = await confirm(`是否启用主索引【${selectedMDM.label}】?`)
    if (confirmed) {
      const result = await put(`sbr/commit/${selectedMDM.id}`)
      if (result.success) {
        Message.success(`启用主索引【${selectedMDM.label}】成功。`)
        dispatch('loadMDMModules')
      } else {
        Message.error(`启用主索引【${selectedMDM.label}】失败。`)
      }
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
