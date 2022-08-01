export default [
  {
    type: 'el-select',
    options: ['全部', '大类', '小类', '细类'],
    label: '检索范围',
    id: 'cols',
    elOptions: {
      multiple: true
    }
  },
  {
    type: 'el-input',
    label: '包含全部检索词',
    id: 'contains'
  },
  {
    type: 'el-input',
    label: '包含精确检索词',
    id: 'equals'
  },
  {
    type: 'el-input',
    label: '包含至少一个检索词',
    id: 'atleast'
  },
  {
    type: 'el-input',
    label: '不包含检索词',
    id: 'exclude'
  }
]
