import { STATEOPTIONS } from '@/utils/const'

export const editVersionCfg = (versionOptions, sourceTypeOptions) =>
  [
    {
      type: 'el-select',
      label: '主版本',
      id: 'masterVersion',
      options: versionOptions,
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
      type: 'el-select',
      label: '当前版本',
      id: 'version',
      options: versionOptions
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
      options: sourceTypeOptions,
      label: '标准来源',
      id: 'sourceTypeCode'
    },
    {
      type: 'el-input',
      label: '标准依据',
      id: 'sourceBasis',
      elOptions: {
        type: 'textarea',
        rows: 4
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

export const addVersionCfg = (versionOptions, onDownload) =>
  [
    {
      type: 'el-input',
      label: '版本',
      id: 'version',
      elOptions: {}
    },
    {
      type: 'el-input',
      label: '字典名称',
      id: 'dictName',
      elOptions: {
        disabled: true
      }
    },
    {
      type: 'el-select',
      label: '继承版本',
      id: 'parVersion',
      options: versionOptions,
      elOptions: {}
    },
    {
      type: 'upload',
      label: '导入',
      id: 'file',
      elEvents: {
        onDownload
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

export const addVersionRule = {
  version: {
    required: true
  },
  parVersion: {
    required: true
  },
  dictName: {
    required: true
  }
}
