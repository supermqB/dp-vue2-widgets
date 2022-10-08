export default function getFormConfig() {
  return [
    {
      type: 'el-select',
      options: [
        { label: '全部', value: '' },
        { label: '字符型(S1)', value: 'S1' },
        { label: '字符型(S2)', value: 'S2' },
        { label: '字符型(S3)', value: 'S3' },
        { label: '逻辑型(L)', value: 'L' },
        { label: '数值型(N)', value: 'N' },
        { label: '日期型(D)', value: 'D' },
        { label: '时间型(DT)', value: 'DT' }
      ],
      label: '类\xa0\xa0\xa0\xa0型',
      id: 'type',
      elOptions: {
        clearable: true
      }
    },
    {
      type: 'el-autocomplete',
      elOptions: {
        'fetch-suggestions': (queryString, cb) => {
          let orginOptions = this.wordSpeechList //['人名', '公司名', '量词', '日期']
          let filteredValues = queryString
            ? orginOptions.filter(item => item.indexOf(queryString) != -1)
            : orginOptions
          cb(filteredValues.map(item => ({ value: item })))
        },
        placeholder: '请输入并选择',
        clearable: true
      },
      label: '实体类型',
      id: 'wordSpeech'
    },
    {
      type: 'el-select',
      options: [
        { label: '全部', value: '' },
        { label: '停用', value: '0' },
        { label: '待提交', value: '1' },
        //{ label: '待审核', value: '2' },
        { label: '启用', value: '3' }
      ],
      elOptions: {
        clearable: true
      },
      label: '状\xa0\xa0\xa0\xa0态',
      id: 'state'
    }
  ]
}
