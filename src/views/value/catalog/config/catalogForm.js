export const addCatalogCfg = [
  {
    type: 'el-select',
    label: '标准分类',
    id: 'index',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '字典编码',
    id: 'index',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '英文名',
    id: 'nameEn',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '字典名称',
    id: 'index',
    elOptions: {}
  },
  {
    type: 'el-select',
    label: '版本',
    id: 'version',
    elOptions: {}
  },
  {
    type: 'el-select',
    label: '标准来源编码',
    id: 'index',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '标准来源名称',
    id: 'index',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '标准依据',
    id: 'index',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '标准代码编号',
    id: 'index',
    elOptions: {}
  },
  {
    type: 'el-select',
    label: '状态',
    id: 'state',
    elOptions: {}
  }
].map(item => {
  const elOptions = Object.assign({}, item.elOptions, {
    style: {
      width: '250px'
    }
  })
  item.elOptions = elOptions
  return item
})

export const editCatalogCfg = [
  {
    type: 'el-select',
    label: '标准分类',
    id: 'index',
    elOptions: {
      disabled: true,
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字典编码',
    id: 'index',
    elOptions: {
      disabled: true,
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '英文名',
    id: 'nameEn',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字典名称',
    id: 'index',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-select',
    label: '状态',
    id: 'state',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  }
]

export const catalogRule = {}
