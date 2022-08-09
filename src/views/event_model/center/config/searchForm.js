export default [
  {
    type: 'el-input',
    label: '标识符',
    id: 'identifier',
    elOptions: {
      style: {
        width: '170px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字段名',
    id: 'nameCn',
    elOptions: {
      style: {
        width: '170px'
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
    options: [
      {
        label: '是',
        value: 1
      },
      {
        label: '否',
        value: 0
      }
    ],
    label: '必填',
    id: 'requiredFlag',
    elOptions: {
      clearable: true,
      style: {
        width: '92px'
      }
    }
  },
  {
    type: 'el-select',
    options: [
      {
        label: '是',
        value: 1
      },
      {
        label: '否',
        value: 0
      }
    ],
    label: '主键',
    id: 'primaryKeyFlag',
    elOptions: {
      clearable: true,
      style: {
        width: '92px'
      }
    }
  }
]
