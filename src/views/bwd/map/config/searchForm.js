export const eventCfg = (eventList = [], onChangeMap, mappingType) => [
  {
    type: 'el-select',
    label: `${mappingType === 'DWD' ? '事件表' : '索引表'}`,
    options: eventList,
    id: 'event',
    elOptions: {
      clearable: true,
      placeholder: `${mappingType === 'DWD' ? '个人信息表' : '请输入 '}`,
      style: {
        width: '150px'
      }
    },
    elEvents: {
      change: onChangeMap
    }
  },
  {
    type: 'el-input',
    label: '字段',
    id: 'field',
    elOptions: {
      clearable: true,
      placeholder: '请输入',
      suffixIcon: 'el-icon-search',
      style: {
        width: '150px'
      }
    }
  }
]
