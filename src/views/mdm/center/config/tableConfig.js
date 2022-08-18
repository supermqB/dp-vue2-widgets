export const tableConfigGen = function (columns) {
  return [
    {
      colConfig: {
        property: 'id',
        label: '序号',
        width: 55
      }
    },
    ...columns.map(({ property, label }) => ({
      colConfig: {
        property,
        label,
        /* every character occupy 17px, no matter it's en, cn or symbol. */
        width: label.length * 17
      }
    })),
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
            this.startEditMDM()
          }
        }
      ]
    }
  ]
}
