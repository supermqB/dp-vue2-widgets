export const tableConfig = startMapMatch => [
  {
    colConfig: {
      property: 'id',
      label: '映射',
      width: 40,
      align: 'left'
    },
    actions: [
      {
        type: 'match-button',
        id: 'match',
        name: '',
        callback: startMapMatch,
        typeProps: {
          style: {
            marginTop: '5px',
            marginLeft: '5px'
          }
        }
      }
    ]
  },
  {
    colConfig: {
      property: 'colNameCn',
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
