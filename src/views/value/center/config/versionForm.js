import { STATEOPTIONS } from '@/utils/const'

export const editVersionCfg = [
  {
    type: 'el-select',
    label: '主版本',
    id: 'masterVersion',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '英文名',
    id: 'nameEn',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '字典名称',
    id: 'nameCn',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '当前版本',
    id: 'version',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-select',
    options: STATEOPTIONS,
    label: '状态',
    id: 'state',
    elOptions: {}
  },
  {
    type: 'el-select',
    options: [],
    label: '标准来源',
    id: 'sourceType',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '标准依据',
    id: 'sourceBasic',
    elOptions: {}
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

export const addVersionCfg = [
  {
    type: 'el-input',
    label: '版本',
    id: 'version',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '字典名称',
    id: 'nameEn',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-select',
    label: '继承版本',
    id: 'parVersion',
    elOptions: {}
  },
  {
    type: 'upload',
    label: '导入',
    id: 'file',
    elOptions: {}
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
