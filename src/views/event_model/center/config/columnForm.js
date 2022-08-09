import { YESORNOOPTIONS } from '@/utils/const'

export const columnCfg = (remoteMethod, dataElementData, setDataElementInfo) =>
  [
    {
      type: 'el-select',
      label: '数据元',
      id: 'elementNameCn',
      elEvents: {
        change: setDataElementInfo
      },
      options: dataElementData,
      elOptions: {
        filterable: true,
        remote: true,
        reserveKeyword: true,
        remoteMethod
      }
    },
    {
      type: 'el-input',
      label: '名称',
      id: 'nameCn'
    },
    {
      type: 'el-input',
      label: '英文名',
      id: 'nameEn'
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
      label: '定义',
      id: 'definition'
    },
    {
      type: 'el-input',
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
        disabled: true
      }
    },
    {
      type: 'el-input',
      label: '数据元允许值',
      id: 'valueRange',
      elOptions: {
        disabled: true
      }
    },
    {
      type: 'el-input',
      label: '值域标准来源',
      id: 'valueDomainName',
      elOptions: {
        disabled: true
      }
    },
    {
      type: 'el-select',
      options: YESORNOOPTIONS,
      label: '主键',
      id: 'primaryKeyFlag'
    },
    {
      type: 'el-select',
      options: YESORNOOPTIONS,
      label: '必填',
      id: 'requiredFlag'
    },
    {
      type: 'el-select',
      options: YESORNOOPTIONS,
      label: '主索引',
      id: 'indexFlag'
    }
  ].map(item => {
    const elOptions = Object.assign({}, item.elOptions, {
      style: {
        width: '250px'
      }
    })
    item.elOptions = elOptions
    return item
  })
