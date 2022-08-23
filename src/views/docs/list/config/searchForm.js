const genYearList = () => {
  let begin_year = 1978
  let end_year = new Date().getFullYear()
  let result = []
  for (let cur = begin_year; cur <= end_year; cur++) {
    result.push({ label: cur, value: cur })
  }
  return result
}

export default [
  {
    type: 'el-input',
    label: '标题',
    id: 'title'
  },
  {
    type: 'el-input',
    label: '作者',
    id: 'author'
  },
  {
    type: 'el-input',
    label: '机构',
    id: 'org'
  },
  {
    type: 'el-select',
    options: genYearList(),
    label: '年份',
    id: 'year'
  }
]
