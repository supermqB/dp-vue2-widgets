import { getSuspectListApi } from '@/api/task'

const state = {
  taskList: [],
  suspectList: []
}

const getters = {}

const mutations = {
  setTaskList(state, list) {
    state.taskList = !list ? [] : list
  },
  setSuspectList(state, list) {
    state.suspectList = !list ? [] : list
  }
}

const actions = {
  async querySuspect({ commit, state }, { searchKey }) {
    const { value } = await getSuspectListApi(searchKey)
  },
  async finishTask() {}
}

export default {
  state,
  getters,
  mutations,
  actions
}
