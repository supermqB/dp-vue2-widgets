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
    options: [
      { label: '字符型(S1)', value: 'S1' },
      { label: '字符型(S2)', value: 'S2' },
      { label: '字符型(S3)', value: 'S3' },
      { label: '逻辑型(L)', value: 'L' },
      { label: '数值型(N)', value: 'N' },
      { label: '日期型(D)', value: 'D' },
      { label: '时间型(DT)', value: 'DT' }
    ],
    label: '类型',
    id: 'type',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '表示格式',
    id: 'format',
    elOptions: {
      placeholder: '格式'
    },
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '数据元允许值',
    id: 'valueDomainName',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '值域标准来源',
    id: 'valueDomainSrc',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-input',
    label: '表示格式规范',
    id: 'regexpText',
    elOptions: {
      disabled: true
    }
  },
  {
    type: 'el-select',
    options: ['是', '否'],
    label: '长文本标识',
    id: 'longTextFlag'
  },
  {
    type: 'el-autocomplete',
    elOptions: {
      'fetch-suggestions': (queryString, cb) => {
        let orginOptions = ['人名', '公司名', '量词', '日期']
        let filteredValues = queryString
          ? orginOptions.filter(item => item.indexOf(queryString) != -1)
          : orginOptions
        cb(filteredValues.map(item => ({ value: item })))
      },
      placeholder: '请输入并选择'
    },
    label: '词性',
    id: 'wordSpeech'
  },
  {
    type: 'el-select',
    options: ['待提交', '已启用'],
    label: '状态标识',
    id: 'state'
  }
]

export const formValidRule = {
  identifier_seg1: { required: true },
  identifier_seg2: { required: true },
  identifier_seg3: { required: true },
  identifier: { required: true },
  identifier_prefix: { required: true },
  cn_name: { required: true },
  en_name: { required: true },
  description: { required: true },
  longTextFlag: { required: true },
  state: { required: true }
}
