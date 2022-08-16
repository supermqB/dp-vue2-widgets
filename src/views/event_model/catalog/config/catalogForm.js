import { validateEnglish } from '@/utils/validator'

export const catalogCfg = (
  onChangeTheme,
  versionList = [],
  themeList = [],
  disabled = false
) => [
  {
    type: 'el-select',
    label: '版本',
    options: versionList,
    id: 'version',
    elOptions: {
      disabled: true,
      style: {
        width: '260px'
      }
    }
  },
  {
    type: 'el-select',
    label: '场景',
    options: themeList,
    id: 'theme',
    elEvents: {
      change: onChangeTheme
    },
    elOptions: {
      disabled,
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
      disabled: true,
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
    id: 'description',
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
  nameEn: [{ required: true }, { validator: validateEnglish, trigger: 'blur' }]
}
