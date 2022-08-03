export const columnCfg = [
  {
    type: 'el-select',
    label: '数据元',
    id: 'name'
  },
  {
    type: 'el-select',
    label: '数据元允许值',
    id: 'name'
  },
  {
    type: 'el-input',
    label: '名称',
    id: 'nameCn'
  },
  {
    type: 'el-input',
    label: '数据元允许值',
    id: 'nameCn',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '英文名',
    id: 'nameEn'
  },
  {
    type: 'el-select',
    label: '主键',
    id: 'primaryKeyFlag'
  },
  {
    type: 'el-input',
    label: '数据元标识符',
    id: 'name',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-select',
    label: '必填',
    id: 'requiredFlag'
  },
  {
    type: 'el-input',
    label: '定义',
    id: 'name'
  },
  {
    type: 'el-select',
    label: '主索引',
    id: 'indexFlag'
  },
  {
    type: 'el-input',
    label: '类型',
    id: 'name',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '表示格式',
    id: 'name',
    elOptions: {
      disabled: true
    }
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
