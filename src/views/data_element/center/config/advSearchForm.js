import { getListTableHeader } from './listTableHeader'
export default [
  {
    type: 'el-select',
    options: [
      { label: '全部', value: 'all' },
      ...getListTableHeader()
        .filter(item => item.colConfig.property)
        .map(item => ({
          label: item.colConfig.label,
          value: item.colConfig.property
        }))
    ],
    label: '检索范围',
    id: 'colNames',
    elOptions: {
      multiple: true
    }
  },
  {
    type: 'el-input',
    label: '包含全部检索词',
    id: 'contains',
    elOptions: {
      placeholder: '请输入'
    }
  },
  {
    type: 'el-input',
    label: '包含精确检索词',
    id: 'equals',
    elOptions: {
      placeholder: '多个检索词以逗号，分隔'
    }
  },
  {
    type: 'el-input',
    label: '包含至少一个检索词',
    id: 'atleast',
    elOptions: {
      placeholder: '多个检索词以逗号，分隔'
    }
  },
  {
    type: 'el-input',
    label: '不包含检索词',
    id: 'exclude',
    elOptions: {
      placeholder: '多个检索词以逗号，分隔'
    }
  }
]
