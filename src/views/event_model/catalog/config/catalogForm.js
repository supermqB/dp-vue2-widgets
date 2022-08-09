import { ADDSTATE, EDITSTATE } from '@/utils/const'

export const catalogCfg = (
  versionList = [],
  themeList = [],
  state = ADDSTATE
) => [
  {
    type: 'el-select',
    label: '版本',
    options: versionList,
    id: 'version',
    elOptions: {
      disabled: state === EDITSTATE,
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
    elOptions: {
      disabled: state === EDITSTATE,
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
      disabled: state === EDITSTATE,
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
  nameEn: { required: true }
}
