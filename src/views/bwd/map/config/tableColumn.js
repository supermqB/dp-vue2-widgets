export const tableConfig = startMapMatch => [
  {
    colConfig: {
      property: 'id',
      label: '映射',
      minWidth: 55
    },
    actions: [
      {
        type: 'el-button',
        typeProps: {
          type: 'text',
          round: false
        },
        id: 'match',
        name: '',
        callback: startMapMatch
      }
    ]
  },
  {
    colConfig: {
      property: 'nameCn',
      label: '字段',
      minWidth: 55
    }
  },
  {
    colConfig: {
      property: 'definition',
      label: '定义',
      minWidth: 55
    }
  }
]
