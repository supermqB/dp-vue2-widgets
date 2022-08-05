export const editVersionCfg = [
  {
    type: 'el-select',
    label: '主版本',
    id: 'version',
    elOptions: {
      style: {
        width: '250px'
      }
    }
  },
  {
    type: 'el-input',
    label: '英文名',
    id: 'nameEn',
    elOptions: {
      style: {
        width: '250px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字典名称',
    id: 'nameEn',
    elOptions: {
      style: {
        width: '250px'
      }
    }
  },
  {
    type: 'el-select',
    options: [],
    label: '版本',
    id: 'level',
    elOptions: {
      style: {
        width: '100px'
      }
    }
  },
  {
    type: 'el-select',
    options: [],
    label: '状态',
    id: 'level',
    elOptions: {
      style: {
        width: '100px'
      }
    }
  },
  {
    type: 'el-select',
    options: [],
    label: '标准来源',
    id: 'level',
    elOptions: {
      style: {
        width: '250px'
      }
    }
  },
  {
    type: 'el-input',
    label: '标准依据',
    id: 'level',
    elOptions: {
      style: {
        width: '250px'
      }
    }
  }
]

export const addVersionCfg = [
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
    type: 'el-input',
    label: '字典名称',
    id: 'nameEn',
    elOptions: {
      disabled: true,
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-select',
    label: '继承版本',
    id: 'nameEn',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  }
]
