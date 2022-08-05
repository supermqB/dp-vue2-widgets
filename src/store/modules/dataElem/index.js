import elemGroup from './elemGroup'
import elemList from './elemList'
import checkRule from './checkRule'
import refDetails from './refDetails'
import { get } from '@/utils/request'

const state = {
  wordSpeechList: []
}

const mutations = {
  setWordSpeechList(state, val) {
    state.wordSpeechList = val
  }
}

const actions = {
  async loadWordSpeechList({ commit }) {
    const { value: speechList } = await get('data-element/getWordSpeechList')
    commit('setWordSpeechList', speechList)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  modules: {
    elemGroup,
    elemList,
    checkRule,
    refDetails
  }
}
