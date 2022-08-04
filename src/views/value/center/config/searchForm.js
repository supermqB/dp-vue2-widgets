export const formCfg = [
  {
    type: 'el-input',
    label: '编码',
    id: 'code',
    elOptions: {
      style: {
        width: '87px'
      }
    }
  },
  {
    type: 'el-input',
    label: '名称',
    id: 'name',
    elOptions: {
      style: {
        width: '87px'
      }
    }
  },
  {
    type: 'el-select',
    options: [],
    label: '父级代码',
    id: 'parent',
    elOptions: {
      style: {
        width: '92px'
      }
    }
  },
  {
    type: 'el-select',
    options: [],
    label: '层级关系',
    id: 'level',
    elOptions: {
      style: {
        width: '92px'
      }
    }
  }
]
