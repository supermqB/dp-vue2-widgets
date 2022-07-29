export default [
  {
    type: 'el-select',
    options: ['BY', 'D', 'DT', 'LN', 'S1', 'S2', 'S3'],
    label: '类型',
    id: 'type'
  },
  {
    type: 'el-autocomplete',
    elOptions: {
      'fetch-suggestions': (queryString, cb) => {
        let orginOptions = ['人名', '公司名', '量词', '日期']
        let filteredValues = queryString
          ? orginOptions.filter(item => item.indexOf(queryString) != -1)
          : orginOptions
        cb(filteredValues.map(item => ({ value: item })))
      },
      placeholder: '请输入并选择'
    },
    label: '词性',
    id: 'wordAttr'
  },
  {
    type: 'el-select',
    options: ['全部', '已启用', '待提交'],
    label: '状态',
    id: 'status'
  }
]
