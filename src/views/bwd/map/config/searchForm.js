export const eventCfg = (
  eventList = [],
  onChangeMap,
  clickEvent,
  mappingType
) => [
  {
    type: 'el-select',
    label: `${mappingType === 'DWD' ? '事件表' : '索引表'}`,
    options: eventList,
    id: 'event',
    elOptions: {
      placeholder: '个人信息表',
      style: {
        width: '150px'
      }
    },
    elEvents: {
      change: () => onChangeMap()
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
      change: () => clickEvent()
    }
  }
]
export const mdmCfg = (eventList = [], onChangeMap, clickEvent) => [
  {
    type: 'el-select',
    label: '索引表',
    options: eventList,
    id: 'event',
    elOptions: {
      placeholder: '个人信息表',
      style: {
        width: '150px'
      }
    },
    elEvents: {
      change: () => onChangeMap()
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
      change: () => clickEvent()
    }
  }
]
