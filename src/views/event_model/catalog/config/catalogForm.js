export const catalogCfg = [
  {
    type: 'el-select',
    label: '版本',
    id: 'version',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-select',
    label: '场景',
    id: 'theme',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '数据集编码',
    id: 'code',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '数据集名称',
    id: 'nameCn',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '数据集英文名称',
    id: 'nameEn',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-input',
    label: '描述',
    id: 'desciption',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  }
]

export const catalogRule = {
  version: { required: true },
  theme: { required: true },
  code: { required: true },
  nameCn: { required: true },
  nameEn: { required: true }
}
