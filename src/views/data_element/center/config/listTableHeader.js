export function getListTableHeader() {
  return [
    {
      colConfig: {
        property: 'id',
        label: '序号',
        width: 50
      }
    },
    {
      colConfig: {
        property: 'identifier',
        label: '数据元标识符',
        width: 120
      }
    },
    {
      colConfig: {
        property: 'identifierSeg1',
        label: '大类',
        width: 100
      }
    },
    {
      colConfig: {
        property: 'identifierSeg2',
        label: '小类',
        width: 100
      }
    },
    {
      colConfig: {
        property: 'identifierSeg3',
        label: '细类',
        width: 100
      }
    },
    {
      colConfig: {
        property: 'identifierPrefix',
        label: '数据元分类编码',
        width: 120
      }
    },
    {
      colConfig: {
        property: 'nameCn',
        label: '名称',
        width: 200
      }
    },
    {
      colConfig: {
        property: 'nameEn',
        label: '英文名称',
        width: 200
      }
    },
    {
      colConfig: {
        property: 'type',
        label: '类型',
        width: 50
      }
    },
    {
      colConfig: {
        property: 'format',
        label: '格式',
        width: 80
      }
    },
    {
      colConfig: {
        property: 'valueDomainName',
        label: '数据元允许值',
        width: 110
      }
    },
    {
      colConfig: {
        property: 'wordSpeech',
        label: '词性',
        width: 80
      }
    },
    {
      colConfig: {
        property: 'state',
        label: '状态标识',
        width: 100
      }
    },
    {
      colConfig: {
        property: '',
        label: '操作',
        fixed: 'right'
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
            this.editElemDialogTitle = '编辑数据元'
            this.$refs.editElemDialog.toggleOpen()
          }
        }
      ]
    }
  ]
}
