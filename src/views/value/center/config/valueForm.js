export const searchValueCfg = (
  parentCode,
  hierarchyRelation,
  type = '单值字典'
) => {
  const list = [
    {
      type: 'el-input',
      label: '编\xa0\xa0\xa0\xa0号',
      id: 'term_code',
      elOptions: {
        clearable: true,
        style: {
          width: '150px'
        }
      }
    },
    {
      type: 'el-input',
      label: '名\xa0\xa0\xa0\xa0称',
      id: 'value',
      elOptions: {
        clearable: true,
        style: {
          width: '150px'
        }
      }
    },
    {
      type: 'el-input',
      options: parentCode,
      label: '父级代码',
      id: 'parent_code',
      elOptions: {
        clearable: true,
        style: {
          width: '150px'
        }
      }
    },
    {
      type: 'el-select',
      options: hierarchyRelation,
      label: '层级关系',
      id: 'level',
      elOptions: {
        clearable: true,
        style: {
          width: '150px'
        }
      }
    }
  ]
  if (type === '多值字典') {
    return list.slice(0, 2)
    // return list.slice(0, 1)
  }
  return list
}

export const addValueCfg = [
  {
    type: 'el-select',
    label: '当前版本',
    id: 'version',
    elOptions: {
      disabled: true
    }
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
    id: 'parCode',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '值类型',
    id: 'type',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '值备注',
    id: 'note',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '层级关系',
    id: 'hierarchyRelation',
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
    id: 'version',
    elOptions: {
      disabled: true
    }
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
    id: 'parCode',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '值类型',
    id: 'type',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '值备注',
    id: 'note',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '层级关系',
    id: 'hierarchyRelation',
    elOptions: {}
  }
].map(item => {
  const style = {
    width: '260px'
  }
  item.elOptions = Object.assign({}, item.elOptions, { style })
  return item
})

export const valueRule = {
  // version: { required: true },
  // code: { required: true },
  // name: { required: true },
  // parCode: { required: true },
  // type: { required: true },
  // hierarchyRelation: { required: true }
}
