export default [
  {
    type: 'el-input',
    label: '标识符',
    id: 'identifier',
    width: 184
  },
  {
    type: 'el-input',
    label: '字段名',
    id: 'field',
    width: 184
  },
  {
    type: 'el-select',
    options: [],
    label: '类型',
    id: 'type',
    width: 92
  },
  {
    type: 'el-select',
    options: ['是', '否'],
    label: '必填',
    id: 'status',
    width: 92
  },
  {
    type: 'el-select',
    options: ['是', '否'],
    label: '主键',
    id: 'primary',
    width: 92
  }
]
