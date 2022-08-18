import { STATEOPTIONS } from '@/utils/const'
import { validateEnglish } from '@/utils/validator'

export const addCatalogCfg = [
  {
    type: 'el-select',
    label: '属性',
    id: 'type',
    options: [],
    elOptions: {}
  },
  {
    type: 'el-select',
    label: '大类',
    id: 'class',
    options: [],
    elOptions: {}
  },
  {
    type: 'el-select',
    label: '小类',
    id: 'subClass',
    options: [],
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '卫生信息分类',
    id: 'ctlgCode',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '字典编码',
    id: 'dictCode',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '英文名',
    id: 'nameEn',
    elOptions: {
      placeholder: '请输入'
    }
  },
  {
    type: 'el-input',
    label: '字典名称',
    id: 'nameCn',
    elOptions: {
      placeholder: '请输入'
    }
  },
  {
    type: 'el-input',
    label: '版本',
    id: 'version',
    elOptions: {
      disabled: true
      // placeholder: 'V1.0'
    }
  },
  {
    type: 'el-select',
    label: '标准来源编码',
    id: 'sourceTypeCode',
    elOptions: {
      placeholder: '请选择'
    }
  },
  {
    type: 'el-input',
    label: '标准来源名称',
    id: 'sourceType',
    elOptions: {
      disabled: true
      // placeholder: '根据标准来源编码自动匹配'
    }
  },
  {
    type: 'el-input',
    label: '标准依据',
    id: 'sourceBasis',
    elOptions: {
      // placeholder: '请输入'
    }
  },
  {
    type: 'el-input',
    label: '标准代码编号',
    id: 'sourceBasisCode',
    elOptions: {
      // disabled: true
      // placeholder: 'CV03.00.110'
    }
  },
  {
    type: 'el-select',
    label: '状态',
    id: 'state',
    options: STATEOPTIONS,
    elOptions: {
      // placeholder: '待完成'
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

export const editCatalogCfg = [
  {
    type: 'el-input',
    label: '卫生信息分类',
    id: 'ctlgCode',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '字典编码',
    id: 'dictCode',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '英文名',
    id: 'nameEn',
    elOptions: {}
  },
  {
    type: 'el-input',
    label: '字典名称',
    id: 'index',
    elOptions: {}
  },
  {
    type: 'el-select',
    label: '状态',
    id: 'state',
    options: STATEOPTIONS,
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

export const catalogRule = {
  type: { required: true },
  class: { required: true },
  subClass: { required: true },
  ctlgCode: { required: true },
  dictCode: { required: true },
  version: { required: true },
  sourceType: { required: true },
  sourceTypeCode: { required: true },
  nameCn: { required: true },
  nameEn: [
    { required: true },
    {
      validator: validateEnglish,
      trigger: 'blur'
    }
  ],
  version: { required: true }
}
