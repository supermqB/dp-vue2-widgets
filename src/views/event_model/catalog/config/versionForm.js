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
  version: { required: true, message: '请输入版本信息！', trigger: 'blur' },
  parVersion: { required: true, message: '请选择继承版本！', trigger: 'blur' },
  state: { required: true, message: '请选择状态！', trigger: 'blur' }
}
