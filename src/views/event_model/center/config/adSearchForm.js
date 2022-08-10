import { COLNAMEOPTIONS } from '@/utils/const'

export const adSearchCfg = [
  {
    type: 'el-select',
    label: '检索范围',
    id: 'colNames',
    options: COLNAMEOPTIONS,
    elOptions: {
      multiple: true
    }
  },
  {
    type: 'el-input',
    label: '包含全部检索词',
    id: 'contains'
  },
  {
    type: 'el-input',
    label: '包含精确检索词',
    id: 'equals'
  },
  {
    type: 'el-input',
    label: '包含至少一个检索词',
    id: 'atleast'
  },
  {
    type: 'el-input',
    label: '不包括检索词',
    id: 'exclude'
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
