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
