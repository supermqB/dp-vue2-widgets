export default [
  {
    type: 'el-select',
    options: [
      { label: '字符型(S1)', value: 'S1' },
      { label: '字符型(S2)', value: 'S2' },
      { label: '字符型(S3)', value: 'S3' },
      { label: '逻辑型(L)', value: 'L' },
      { label: '数值型(N)', value: 'N' },
      { label: '日期型(D)', value: 'D' },
      { label: '时间型(DT)', value: 'DT' }
    ],
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
