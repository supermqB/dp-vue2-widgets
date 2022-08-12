const state = {
  taskList: [
    {
      src: '王俊',
      name: '阿司匹林',
      state: '待完成'
    },
    {
      src: '王俊',
      name: '药物A',
      state: '待完成'
    },
    {
      src: '丁思丝',
      name: '药物A',
      state: '待完成'
    }
  ],
  checkedFilters: [],
  selectedTask: [],
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
            id: 'src',
            label: '来源',
            children: [...new Set(state.taskList.map(item => item.src))].map(
              item => ({ id: item, label: item })
            )
          },
          {
            id: 'name',
            label: '名称',
            children: [...new Set(state.taskList.map(item => item.name))].map(
              item => ({ id: item, label: item })
            )
          }
        ]
      }
    ]
  }
}

export default {
  namespaced: true,
  state,
  getters
}
