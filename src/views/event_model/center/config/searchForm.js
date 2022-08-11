import { TYPEOPTIONS, YESORNOOPTIONS } from '@/utils/const'

export default [
  {
    type: 'el-input',
    label: '标识符',
    id: 'identifier',
    elOptions: {
      clearable: true,
      style: {
        width: '170px'
      }
    }
  },
  {
    type: 'el-input',
    label: '字段名',
    id: 'nameCn',
    elOptions: {
      clearable: true,
      style: {
        width: '170px'
      }
    }
  },
  {
    type: 'el-select',
    options: TYPEOPTIONS,
    label: '类型',
    id: 'type',
    elOptions: {
      clearable: true,
      style: {
        width: '92px'
      }
    }
  },
  {
    type: 'el-select',
    options: YESORNOOPTIONS,
    label: '必填',
    id: 'requiredFlag',
    elOptions: {
      clearable: true,
      style: {
        width: '92px'
      }
    }
  },
  {
    type: 'el-select',
    options: YESORNOOPTIONS,
    label: '主键',
    id: 'primaryKeyFlag',
    elOptions: {
      clearable: true,
      style: {
        width: '92px'
      }
    }
  }
]
