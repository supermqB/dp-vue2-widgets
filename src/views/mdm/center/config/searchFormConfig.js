const searchFormConfig = [
  {
    type: 'el-input',
    label: '编号',
    id: 'index'
  },
  {
    type: 'el-input',
    label: '名称',
    id: 'name'
  },
  {
    type: 'el-input',
    label: '批准文号',
    id: 'approvalNo'
  },
  {
    type: 'el-input',
    label: '本位码',
    id: 'standardNo'
  },
  {
    type: 'el-select',
    options: [
      { label: 'code1', value: '1' },
      { label: 'code2', value: '2' }
    ],
    label: 'ATC分类',
    id: 'atcClassCode'
  },
  {
    type: 'el-select',
    options: [
      { label: '西药', value: '10' },
      { label: '中药', value: '20' },
      { label: '中成药', value: '21' }
    ],
    label: '药品类别',
    id: 'drugType'
  }
]

export default searchFormConfig
