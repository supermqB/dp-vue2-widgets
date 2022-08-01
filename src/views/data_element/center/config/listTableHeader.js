export function getListTableHeader() {
  return [
    {
      colConfig: {
        property: 'index',
        label: '序号',
        width: 120
      }
    },
    {
      colConfig: {
        property: 'code',
        label: '编码',
        width: 120
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
