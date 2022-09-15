export const searchCfg = [
  {
    type: 'el-input',
    label: '字\xa0\xa0\xa0\xa0段',
    id: 'nameCn',
    elOptions: {
      clearable: true,
      placeholder: '请输入',
      style: {
        width: '170px'
      }
    }
  },
  {
    type: 'el-input',
    label: '英\xa0\xa0文\xa0\xa0名',
    id: 'nameEn',
    elOptions: {
      clearable: true,
      placeholder: '请输入',
      style: {
        width: '170px'
      }
    }
  },
  {
    type: 'el-input',
    label: '事件库字段',
    id: 'dwdNameCn',
    elOptions: {
      clearable: true,
      placeholder: '请输入',
      style: {
        width: '170px'
      }
    }
  },
  {
    type: 'el-select',
    label: '事件库版本',
    id: 'version',
    options: [],
    elOptions: {
      clearable: true,
      placeholder: '请选择事件库版本',
      style: {
        width: '170px'
      }
    }
  }
]
