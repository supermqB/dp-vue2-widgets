export const adSearchCfg = [
  {
    type: 'el-select',
    label: '检索范围',
    id: 'index1'
  },
  {
    type: 'el-input',
    label: '包含全部检索词',
    id: 'index2'
  },
  {
    type: 'el-input',
    label: '包含精确检索词',
    id: 'index3'
  },
  {
    type: 'el-input',
    label: '包含至少一个检索词',
    id: 'index4'
  },
  {
    type: 'el-input',
    label: '不包括检索词',
    id: 'index5'
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
