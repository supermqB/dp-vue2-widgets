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
        label: '数据元标识符'
      }
    },
    {
      colConfig: {
        property: 'identifierSeg1',
        label: '大类'
      }
    },
    {
      colConfig: {
        property: 'identifierSeg2',
        label: '小类'
      }
    },
    {
      colConfig: {
        property: 'identifierSeg3',
        label: '细类'
      }
    },
    {
      colConfig: {
        property: 'identifierPrefix',
        label: '数据元分类编码'
      }
    },
    {
      colConfig: {
        property: 'nameCn',
        label: '名称'
      }
    },
    {
      colConfig: {
        property: 'nameEn',
        label: '英文名称'
      }
    },
    {
      colConfig: {
        property: 'type',
        label: '类型'
      }
    },
    {
      colConfig: {
        property: 'format',
        label: '格式'
      }
    },
    {
      colConfig: {
        property: 'valueDomainName',
        label: '数据元允许值'
      }
    },
    {
      colConfig: {
        property: 'wordSpeech',
        label: '词性'
      }
    },
    {
      colConfig: {
        property: 'state',
        label: '状态标识'
      }
    },
    {
      colConfig: {
        property: '',
        label: '操作'
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
