export const addCatalogCfg = [
  {
    type: 'el-select',
    label: '标准分类',
    id: 'index',
    elOptions: {
      placeholder: '请选择'
    }
  },
  {
    type: 'el-input',
    label: '字典编码',
    id: 'index1',
    elOptions: {
      disabled: true,
      placeholder: '自动生成'
    }
  },
  {
    type: 'el-input',
    label: '英文名',
    id: 'nameEn',
    elOptions: {
      placeholder: '请输入'
    }
  },
  {
    type: 'el-input',
    label: '字典名称',
    id: 'nameCn',
    elOptions: {
      placeholder: '请输入'
    }
  },
  {
    type: 'el-select',
    label: '版本',
    id: 'version',
    elOptions: {
      placeholder: 'V1.0'
    }
  },
  {
    type: 'el-select',
    label: '标准来源编码',
    id: 'index2',
    elOptions: {
      placeholder: '请选择'
    }
  },
  {
    type: 'el-input',
    label: '标准来源名称',
    id: 'index3',
    elOptions: {
      disabled: true,
      placeholder: '根据标准来源编码自动匹配'
    }
  },
  {
    type: 'el-input',
    label: '标准依据',
    id: 'index4',
    elOptions: {
      placeholder: '请输入'
    }
  },
  {
    type: 'el-input',
    label: '标准代码编号',
    id: 'index5',
    elOptions: {
      placeholder: 'CV03.00.110'
    }
  },
  {
    type: 'el-select',
    label: '状态',
    id: 'state',
    elOptions: {
      placeholder: '待完成'
    }
  }
].map(item => {
  const elOptions = Object.assign({}, item.elOptions, {
    style: {
      width: '260px'
    }
  })
  item.elOptions = elOptions
  return item
})

export const editCatalogCfg = [
  {
    type: 'el-input',
    label: '标准分类',
    id: 'index',
    elOptions: {
      disabled: true,
      placeholder: '标识',
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
      placeholder: '自动生成',
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
      placeholder: 'DICT_SEX',
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
      placeholder: '性别代码',
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
      placeholder: '已启用',
      style: {
        width: '260px'
      }
    }
  }
]

export const catalogRule = {
  index: { required: true },
  index1: { required: true },
  index2: { required: true },
  index3: { required: true },
  nameCn: { required: true },
  nameEn: [
    { required: true },
    {
      validator: (rule, value, callback) => {
        if (!/^[\w+]{1,30}$/.test(value)) {
          showEnErr()
          callback('英文名称必须小于30个字符, 由小写字母、下划线、数字构成')
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ],
  version: { required: true }
}
