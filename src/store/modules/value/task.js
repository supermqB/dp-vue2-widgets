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
  async initTask({ commit, dispatch }) {
    await dispatch('queryTask')
    await dispatch('querySuspect')
  },
  async queryTask() {},
  async querySuspect() {},
  async finishTask() {}
}

export default {
  state,
  getters,
  mutations,
  actions
}
