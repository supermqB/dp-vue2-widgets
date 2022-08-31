export const searchCfg = (eventList = [], disabled = false) => [
  {
    type: 'el-select',
    label: '事件表',
    options: eventList,
    id: 'index1',
    elOptions: {
      disabled,
      placeholder: '请选择',
      style: {
        width: '150px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字段',
    id: 'index2',
    elOptions: {
      placeholder: '请输入',
      suffixIcon: 'el-icon-search',
      style: {
        width: '150px'
      }
    }
  }
]
