export default [
  {
    type: 'el-input',
    label: '标识符',
    id: 'identifier',
    elOptions: {
      style: {
        width: '184px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字段名',
    id: 'field',
    elOptions: {
      style: {
        width: '184px'
      }
    }
  },
  {
    type: 'el-select',
    options: [],
    label: '类型',
    id: 'type',
    elOptions: {
      style: {
        width: '92px'
      }
    }
  },
  {
    type: 'el-select',
    options: ['是', '否'],
    label: '必填',
    id: 'status',
    elOptions: {
      style: {
        width: '92px'
      }
    }
  },
  {
    type: 'el-select',
    options: ['是', '否'],
    label: '主键',
    id: 'primary',
    elOptions: {
      style: {
        width: '92px'
      }
    }
  }
]
