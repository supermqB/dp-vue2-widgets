const state = {
  taskList: [],
  checkedFilters: [],
  selectedTasks: [],
  workingTask: {}
}
const getters = {
  filterTreeData(state) {
    return [
      {
        id: 'all',
        label: '全选',
        children: [
          {
            id: 'source_all',
            label: '来源',
            children: [...new Set(state.taskList.map(item => item.source))].map(
              item => ({ id: 'source/' + item, label: item })
            )
          },
          {
            id: 'name_all',
            label: '名称',
            children: [...new Set(state.taskList.map(item => item.name))].map(
              item => ({ id: 'name/' + item, label: item })
            )
          }
        ]
      }
    ]
  },
  filteredTask(state) {
    let checkedFilters = state.checkedFilters
    if (checkedFilters.indexOf('all') != -1) return state.taskList

    let filteredTask = state.taskList
    /* filter source */
    if (checkedFilters.indexOf('source_all') == -1) {
      let sources = checkedFilters.filter(f => f.indexOf('source/') != -1)
      if (sources.length) {
        filteredTask = filteredTask.filter(
          task => sources.indexOf('source/' + task.source) != -1
        )
      }
    }

    /* filter name */
    if (checkedFilters.indexOf('name_all') == -1) {
      let names = checkedFilters.filter(f => f.indexOf('name/') != -1)
      if (names.length) {
        filteredTask = filteredTask.filter(
          task => names.indexOf('name/' + task.name) != -1
        )
      }
    }

    return filteredTask
  }
}

const mutations = {
  setCheckedFilters(state, value) {
    state.checkedFilters = value
  },
  setSelectedTasks(state, value) {
    state.selectedTasks = value
  },
  setTaskList(state, value) {
    state.taskList = value
  },
  setWorkingTask(state, value) {
    state.workingTask = value
  }
}

const actions = {
  listSuspectTasks({ commit, rootState }) {
    console.log(rootState.mdm.selectedMDM.id)
    commit('setTaskList', [
      {
        source: '王俊',
        name: '阿司匹林',
        state: '待完成',
        suspectList: [
          {
            id: 1,
            sdrgInx: 'XC01EBX049B002020104017',
            drugName: '药物A',
            drugTradeNameCn: '阿斯匹林',
            drugTradeNameEn: 'asipingling',
            drugTypeName: '药品类别'
          },
          {
            id: 2,
            sdrgInx: 'XC01EBX049B002020104017',
            drugName: '药物B',
            drugTradeNameCn: '阿斯匹林',
            drugTradeNameEn: 'asipingling',
            drugTypeName: '药品类别'
          }
        ]
      },
      {
        source: '王俊',
        name: '药物A',
        state: '待完成'
      },
      {
        source: '丁思丝',
        name: '药物A',
        state: '待完成'
      }
    ])
  },
  completeTasks({ state }) {
    console.log(state.selectedTasks)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
