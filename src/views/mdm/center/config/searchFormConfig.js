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
    type: 'el-select',
    options: [
      { label: '西药', value: '10' },
      { label: '中药', value: '20' },
      { label: '中成药', value: '21' }
    ],
    label: '药品类别',
    id: 'drugType'
  },
  {
    type: 'el-select',
    options: [
      { label: 'code1', value: '1' },
      { label: 'code2', value: '2' }
    ],
    label: '注册剂型',
    id: 'atcClassCode'
  },
  {
    type: 'el-autocomplete',
    elOptions: {
      'fetch-suggestions': (queryString, cb) => {
        let orginOptions = this.drugFormList
        let filteredValues = queryString
          ? orginOptions.filter(item => item.indexOf(queryString) != -1)
          : orginOptions
        cb(filteredValues.map(item => ({ value: item })))
      },
      placeholder: '请输入并选择'
    },
    label: '注册剂型',
    id: 'drugForm'
  }
]

export default searchFormConfig
