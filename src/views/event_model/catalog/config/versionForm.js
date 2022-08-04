export const versionCfg = [
  {
    type: 'el-input',
    label: '版本',
    id: 'version',
    labelWidth: '100px',
    elOptions: {
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-select',
    label: '继承版本',
    id: 'parVersion',
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

export const versionRule = {
  version: { required: true },
  parVersion: { required: true },
  state: { required: true }
}
