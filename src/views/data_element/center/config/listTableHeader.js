export function getListTableHeader() {
  return [
    {
      colConfig: {
        property: 'id',
        label: '序号',
        width: 55,
        fixed: true
      }
    },
    {
      colConfig: {
        property: 'identifier',
        label: '数据元标识符',
        minWidth: 125,
        fixed: true
      }
    },
    {
      colConfig: {
        property: 'identifierSeg1',
        label: '大类',
        minWidth: 100
      }
    },
    {
      colConfig: {
        property: 'identifierSeg2',
        label: '小类',
        minWidth: 100
      }
    },
    {
      colConfig: {
        property: 'identifierSeg3',
        label: '细类',
        minWidth: 100
      }
    },
    {
      colConfig: {
        property: 'nameCn',
        label: '名称',
        minWidth: 200
      }
    },
    {
      colConfig: {
        property: 'nameEn',
        label: '英文名称',
        minWidth: 200
      }
    },
    {
      colConfig: {
        property: 'definition',
        label: '定义',
        minWidth: 200
      }
    },
    {
      colConfig: {
        property: 'type',
        label: '类型',
        minWidth: 50
      }
    },
    {
      colConfig: {
        property: 'format',
        label: '格式',
        minWidth: 80
      }
    },
    {
      colConfig: {
        property: 'valueDomainName',
        label: '数据元允许值',
        minWidth: 110
      }
    },
    {
      colConfig: {
        property: 'wordSpeech',
        label: '词性',
        minWidth: 80
      }
    },
    {
      colConfig: {
        property: 'state',
        label: '状态标识',
        minWidth: 100,
        formatter(row, col, val) {
          return { 0: '停用', 1: '待提交', 2: '待审核', 3: '启用' }[val]
        }
      }
    },
    {
      colConfig: {
        property: '',
        label: '操作',
        fixed: 'right',
        width: 100
      },
      actions: [
        {
          type: 'el-button',
          typeProps: {
            type: 'text',
            round: false
          },
          id: 'edit',
          name: '编辑',
          callback: (idx, tableData) => {
            this.openEditDialog()
          }
        }
      ]
    }
  ]
}
