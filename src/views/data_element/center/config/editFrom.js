export const formFieldsConfig = [
  {
    type: 'el-select',
    options: [
      { label: '标识类信息', value: 'DE01' },
      { label: '卫生服务对象信息', value: 'DE02' }
    ],
    label: '大类',
    id: 'identifier_seg1'
  },
  {
    type: 'el-select',
    options: [{ label: '标识', value: '01' }],
    label: '小类',
    id: 'identifier_seg2'
  },
  {
    type: 'el-select',
    options: [{ label: '标识', value: '01' }],
    label: '细类',
    id: 'identifier_seg3'
  },
  {
    type: 'el-input',
    label: '数据元标识符',
    id: 'identifier',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '分类编码',
    id: 'identifier_prefix',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '名称',
    id: 'cn_name'
  },
  {
    type: 'el-input',
    label: '英文名称',
    id: 'en_name'
  },
  {
    type: 'el-input',
    label: '定义',
    id: 'description',
    elOptions: {
      type: 'textarea'
    }
  },
  {
    type: 'el-select',
    options: ['BY', 'D', 'DT', 'LN', 'S1', 'S2', 'S3'],
    label: '类型',
    id: 'type'
  },
  {
    type: 'el-input',
    label: '表示格式',
    id: 'format',
    elOptions: {
      placeholder: '格式'
    }
  },
  {
    type: 'el-input',
    label: '数据元允许值',
    id: 'val_range_def'
  },
  {
    type: 'el-input',
    label: '值域标准来源',
    id: 'val_standard_src',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '校验规则',
    id: 'validation_pattern',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-select',
    options: ['待提交', '已启用'],
    label: '状态标识',
    id: 'status'
  }
]
