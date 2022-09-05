export const searchCfg = (
  eventList = [],
  onChangeMap,
  clickEvent,
  source = 'DWD',
  id = 266
) => [
  {
    type: 'el-select',
    label: '事件表',
    options: eventList,
    id: 'event',
    elOptions: {
      placeholder: '个人信息表',
      style: {
        width: '150px'
      }
    },
    elEvents: {
      change: () => onChangeMap(source)
    }
  },
  {
    type: 'el-input',
    label: '字段',
    id: 'field',
    elOptions: {
      placeholder: '请输入',
      suffixIcon: 'el-icon-search',
      style: {
        width: '150px'
      }
    },
    elEvents: {
      change: () => clickEvent(id)
    }
  }
]
