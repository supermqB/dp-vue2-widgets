import { TYPEOPTIONS } from '@/utils/const'
import { Message } from 'element-ui'
import { debounce, throttle } from 'lodash'

export function getFormFieldsConfig() {
  return [
    {
      type: 'el-select',
      options: [
        { label: '标识类信息', value: 'DE01' },
        { label: '卫生服务对象信息', value: 'DE02' }
      ],
      label: '大类',
      id: 'identifierSeg1'
    },
    {
      type: 'el-select',
      options: [{ label: '标识', value: '01' }],
      label: '小类',
      id: 'identifierSeg2'
    },
    {
      type: 'el-select',
      options: [{ label: '标识', value: '01' }],
      label: '细类',
      id: 'identifierSeg3'
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
      id: 'identifierPrefix',
      elOptions: {
        disabled: true
      }
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'nameCn'
    },
    {
      type: 'el-input',
      label: '英文名称',
      id: 'nameEn'
    },
    {
      type: 'el-input',
      label: '定义',
      id: 'definition',
      elOptions: {
        type: 'textarea'
      }
    },
    {
      type: 'el-select',
      options: TYPEOPTIONS,
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
      options: [
        { label: '是', value: '1' },
        { label: '否', value: '0' }
      ],
      label: '长文本标识',
      id: 'longTextFlag'
    },
    {
      type: 'el-autocomplete',
      elOptions: {
        'fetch-suggestions': (queryString, cb) => {
          let orginOptions = this.wordSpeechList
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
      options: [
        { label: '停用', value: '0' },
        { label: '待提交', value: '1' },
        { label: '启用', value: '3' }
      ],
      label: '状态标识',
      id: 'state'
    }
  ]
}
const showEnErr = debounce(() => {
  Message({
    message: '英文名称必须小于30个字符, 由小写字母、下划线、数字构成',
    type: 'error',
    duration: 2000
  })
}, 1000)

export const formValidRule = {
  identifierSeg1: { required: true },
  identifierSeg2: { required: true },
  identifierSeg3: { required: true },
  identifier: { required: true },
  identifierPrefix: { required: true },
  nameCn: { required: true },
  nameEn: [
    { required: true },
    {
      validator: (rule, value, callback) => {
        if (!/^[\w+]{1,30}$/.test(value)) {
          showEnErr()
          callback('英文名称必须小于30个字符, 由小写字母、下划线、数字构成')
        } else {
          callback()
        }
      },
      trigger: 'change'
    }
  ],
  definition: { required: true },
  longTextFlag: { required: true }
  //state: { required: true }
}
