export const summaryList = [
  {
    label: '数据元',
    style: {
      borderColor: 'rgba(152, 187, 255, 0.45)',
      backgroundColor: 'rgba(244,248,255,1)'
    },
    contents: [
      {
        number: 2074,
        unit: '条',
        style: {
          color: '#1251CB'
        }
      }
    ]
  },
  {
    label: '值域',
    style: {
      borderColor: 'rgba(210,246,255,1)',
      backgroundColor: 'rgba(241,252,255,1)'
    },
    contents: [
      {
        label: '目录',
        number: '1671',
        unit: '组',
        style: {
          color: '#008AAC'
        }
      },
      {
        label: '明细',
        number: '20.21',
        unit: '万',
        style: {
          color: '#008AAC'
        }
      }
    ]
  },
  {
    label: '主索引',
    style: {
      borderColor: 'rgba(255,226,248,1)',
      backgroundColor: 'rgba(255,251,252,1)'
    },
    contents: [
      {
        label: '目录',
        number: '1671',
        unit: '组',
        style: {
          color: '#C044A0'
        }
      },
      {
        label: '明细',
        number: '20.21',
        unit: '万',
        style: {
          color: '#C044A0'
        }
      }
    ]
  },
  {
    label: '业务模型',
    style: {
      borderColor: 'rgba(213,239,235,1)',
      backgroundColor: 'rgba(242,255,253,1)'
    },
    contents: [
      {
        label: '目录',
        number: '1671',
        unit: '组',
        style: {
          color: '#109880'
        }
      },
      {
        label: '数据',
        number: '86.1',
        unit: '万条',
        style: {
          color: '#109880'
        }
      }
    ]
  },
  {
    label: '事件模型',
    style: {
      borderColor: 'rgba(238,221,176,0.65)',
      backgroundColor: 'rgba(255,252,245,1)'
    },
    contents: [
      {
        label: '数据集',
        number: '191',
        unit: '组',
        style: {
          color: '#9D5E00'
        }
      },
      {
        label: '字段',
        number: '6888',
        unit: '条',
        style: {
          color: '#9D5E00'
        }
      }
    ]
  },
  {
    label: '文献库',
    style: {
      borderColor: 'rgba(197,234,242,1)',
      backgroundColor: 'rgba(241,253,255,1)'
    },
    contents: [
      {
        label: '文献',
        number: '30.2',
        unit: '万篇',
        style: {
          color: '#0085A0'
        }
      }
    ]
  }
]

export const summaryComponentList = [
  {
    label: '数据元',
    component: 'DataElement'
  },
  {
    label: '值域',
    component: 'Value'
  },
  {
    label: '主索引',
    component: 'Mdm'
  },
  {
    label: '事件模型',
    component: 'Event'
  },
  {
    label: '业务模型',
    component: 'Bwd'
  },
  {
    label: '文献库',
    component: 'Docs'
  }
]
