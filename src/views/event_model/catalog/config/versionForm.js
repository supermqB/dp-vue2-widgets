import { STATEOPTIONS } from '@/utils/const'
import { validateNotEmpty } from '@/utils/validator'

export const versionCfg = (versionOptions = []) => [
  {
    type: 'el-input',
    label: '版本',
    id: 'version',
    labelWidth: '100px',
    elOptions: {
      style: {
        width: '260px'
      }
    },
    elEvents: {
      // blur: () =>
    }
  },
  {
    type: 'el-select',
    label: '复制已有版本',
    id: 'parVersion',
    options: versionOptions,
    elOptions: {
      style: {
        width: '260px'
      }
    }
  }
  // {
  //   type: 'el-select',
  //   label: '状态',
  //   id: 'state',
  //   options: STATEOPTIONS,
  //   elOptions: {
  //     style: {
  //       width: '260px'
  //     }
  //   }
  // }
]

export const versionRule = {
  version: [
    {
      required: true
    },
    {
      validator: validateNotEmpty,
      trigger: 'blur'
    }
  ],
  state: { required: true, message: '请选择状态！', trigger: 'blur' }
}
