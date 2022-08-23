export default [
  {
    colConfig: {
      property: 'index',
      label: '序号',
      width: 45
    }
  },
  {
    colConfig: {
      property: 'identifier',
      label: '数据元标识符',
      minWidth: 140
    }
  },
  {
    colConfig: {
      property: 'nameCn',
      label: '字段名称',
      minWidth: 150
    }
  },
  {
    colConfig: {
      property: 'nameEn',
      label: '字段英文名',
      minWidth: 185
    }
  },
  {
    colConfig: {
      property: 'definition',
      label: '字段定义',
      minWidth: 185
    }
  },
  {
    colConfig: {
      property: 'type',
      label: '类型',
      minWidth: 70
    }
  },
  {
    colConfig: {
      property: 'format',
      label: '表示格式',
      minWidth: 75
    }
  },
  {
    colConfig: {
      property: 'valueRange',
      label: '数据允许值',
      minWidth: 135
    }
  },
  {
    colConfig: {
      property: 'requiredFlag',
      label: '必填',
      minWidth: 60,
      formatter(row, col, val) {
        return val ? '是' : '否'
      }
    }
  },
  {
    colConfig: {
      property: 'primaryKeyFlag',
      label: '主键',
      minWidth: 60,
      formatter(row, col, val) {
        return val ? '是' : '否'
      }
    }
  }
]
