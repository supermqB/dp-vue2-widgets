export const tableConfigGen = function (columns) {
  return [
    {
      colConfig: {
        property: 'id',
        label: '序号',
        width: 55,
        fixed: true
      }
    },
    ...columns.map(({ property, label }, idx) => ({
      colConfig: {
        property,
        label,
        /* every character occupy 17px, no matter it's en, cn or symbol. */
        width: Math.max(label.length * 18, 40),
        fixed: idx < 2
      }
    })),
    {
      colConfig: {
        property: '',
        label: '操作',
        fixed: 'right',
        width: 120
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
