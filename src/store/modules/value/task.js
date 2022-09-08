import { getSuspectListApi } from '@/api/task'
import { post } from '@/utils/request'
import { Message } from 'element-ui'

const state = {
  searchKey: '',
  taskList: [],
  curTask: '',
  checkedFilters: [],
  selectedTasks: [],
  currentSuspect: null
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
  setTaskList(state, list) {
    state.taskList = !list ? [] : list
  },
  setSearchKey(state, value) {
    state.searchKey = value
  },
  setCheckedFilters(state, value) {
    state.checkedFilters = value
  },
  setSelectedTasks(state, value) {
    state.selectedTasks = value
  },
  setCurrentSuspect(state, value) {
    state.currentSuspect = value
  },
  setCurrentTask(state, value) {
    state.curTask = value
  }
}

const actions = {
  async querySuspect({ commit, state, rootState }) {
    commit('setCurrentTask', '')
    const version = rootState.value.currentVersion
    const res = await getSuspectListApi(version, state.searchKey)
    commit(
      'setTaskList',
      res.value.map(item => {
        return Object.assign(item, {
          state: item.state === '0' ? '待完成' : '已完成'
        })
      })
    )
    if (res.value && res.value.length) {
      const { source, name } = res.value[0]
      commit('setCurrentTask', `${source}:${name}`)
    }
  },
  async completeTasks({ state, dispatch }) {
    const selectedTasks = state.selectedTasks
    const commitSuspectIds = selectedTasks.reduce((accuSet, curTask) => {
      curTask.suspectList.forEach(sus => {
        accuSet.add(sus.id)
      })
      return accuSet
    }, new Set())
    const result = await post('suspected/commit', [...commitSuspectIds])
    if (result.success) {
      Message.success('疑似任务已确认完成。')
      // dispatch('listSuspectTasks')
    }
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
