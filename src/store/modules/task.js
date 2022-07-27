import { getParentList } from '@/api/task'

const initState = () => ({
  parentList: [], // 机构系统列表
  parentId: -1, // 选中的机构系统ID
  parentInfo: {}, // 选中的机构系统信息
  list: [] // 选中的机构系统下的任务列表
})

const statusList = {
  status0: '新任务',
  status1: '执行中',
  status2: '已完成'
}

const state = initState()

const getters = {
  list: state => state.list,
  parentInfo: state => state.parentInfo,
  parentList: state =>
    state.parentList.map(v => {
      v.statusName = statusList['status' + v.status] ?? '--'
      return v
    })
}

const actions = {
  async getListData({ commit }, params) {
    // const res = await getList(params)
    // if (res.code === '000000') {
    //   commit('setListData', res)
    // }
  },
  async getParentListData({ commit }, params) {
    const res = await getParentList(params)
    console.log({ res })
    // if (res.success === true) {
    //   commit('setParentListData', res.value)
    // }
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve()
      }, 1000)
    })

    commit('setParentListData', [
      {
        status: 0,
        title: '(主)瑞金HIS',
        type: '主索引',
        id: 1
      },
      {
        status: 1,
        title: '(主)华山HIS',
        type: '主索引',
        id: 2
      },
      {
        status: 2,
        title: '(值)中山HIS',
        type: '值域',
        id: 3
      },
      {
        status: 0,
        title: '(知)仁济LIS',
        type: '知识',
        id: 4
      },
      {
        status: 0,
        title: '(值)仁济LIS',
        type: '值域',
        id: 5
      },
      {
        status: 0,
        title: '(主)仁济LIS',
        type: '主索引',
        id: 6
      },
      {
        status: 0,
        title: '()仁济LIS',
        type: '主索引',
        id: 7
      },
      {
        status: 0,
        title: '(知)仁济LIS',
        id: 8
      }
    ])
  }
}

const mutations = {
  setParentInfo: (state, data) => {
    state.parentId = data.id
    state.parentInfo = data
  },
  setParentListData: (state, data) => {
    state.parentList = data
  },
  setListData: (state, data) => {
    state.list = data
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
