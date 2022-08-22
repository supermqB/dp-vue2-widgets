export const fileCatalogCfg = [
  {
    type: 'el-input',
    label: 'BWD文件名称',
    id: 'name',
    elOptions: {
      placeholder: '患者信息记录文件'
    }
  },
  {
    type: 'el-select',
    label: '文件分类',
    id: 'index',
    elOptions: {
      placeholder: '请选择'
    }
  },
  {
    type: 'el-select',
    label: '启用状态',
    id: 'state',
    options: [
      { label: '启用', value: '1' },
      { label: '停用', value: '0' }
    ],
    elOptions: {
      placeholder: '请选择'
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

export const fileCatalogRule = {
  index: { required: true },
  name: { required: true }
}
