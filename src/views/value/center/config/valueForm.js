export const searchValueCfg = [
  {
    type: 'el-input',
    label: '编码',
    id: 'code',
    elOptions: {
      style: {
        width: '85px'
      }
    }
  },
  {
    type: 'el-input',
    label: '名称',
    id: 'name',
    elOptions: {
      style: {
        width: '85px'
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
        width: '90px'
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
        width: '90px'
      }
    }
  }
]

export const addValueCfg = [
  {
    type: 'el-select',
    label: '当前版本',
    id: 'code',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '编码',
    id: 'code',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '名称',
    id: 'name',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '父级代码',
    id: 'name',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '值类型',
    id: 'name',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '值备注',
    id: 'name',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '层级关系',
    id: 'name',
    elOptions: {}
  }
].map(item => {
  const style = {
    width: '260px'
  }
  item.elOptions = Object.assign({}, item.elOptions, { style })
  return item
})

export const editValueCfg = [
  {
    type: 'el-select',
    label: '当前版本',
    id: 'code',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '编码',
    id: 'code',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '名称',
    id: 'name',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '父级代码',
    id: 'name',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '值类型',
    id: 'name',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '值备注',
    id: 'name',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '层级关系',
    id: 'name',
    elOptions: {}
  }
].map(item => {
  const style = {
    width: '260px'
  }
  item.elOptions = Object.assign({}, item.elOptions, { style })
  return item
})
