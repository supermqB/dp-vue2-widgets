import store from '@/store'
const standard_class_code = [
  { value: '1', label: '国际标准' },
  { value: '2', label: '国家强制标准' },
  { value: '3', label: '国家推荐标准' },
  { value: '4', label: '行业标准' },
  { value: '5', label: '地方标准' },
  { value: '6', label: '企业标准' },
  { value: '7', label: '自定义标准' },
  { value: '8', label: '团体标准' }
]

const policy_class_code = [
  { value: '1', label: '国际政策法规' },
  { value: '2', label: '国家政策法规' },
  { value: '3', label: '行业政策法规' },
  { value: '4', label: '地方政策法规' },
  { value: '5', label: '其他法规' }
]

const general_class_code = [
  {
    value: 'A',
    label: '马克思主义、列宁主义、毛泽东思想、邓小平理论',
    children: [
      {
        value: 'A01',
        label: '马克思、恩格斯著作',
        children: [
          { value: 'A0101', label: '选集、文集' },
          { value: 'A0102', label: '单行著作' },
          { value: 'A0103', label: '书信集、日记、函电、谈话' },
          { value: 'A0104', label: '诗词' },
          { value: 'A0105', label: '手迹' },
          { value: 'A0106', label: '专题汇编' },
          { value: 'A0107', label: '语录' }
        ]
      }
    ]
  }
]
const genYearList = () => {
  let begin_year = 1978
  let end_year = new Date().getFullYear()
  let result = []
  for (let cur = begin_year; cur <= end_year; cur++) {
    result.push({ label: cur, value: cur })
  }
  return result
}

const ignoreFileds = {
  S: ['author', 'source', 'keywords', 'summary'],
  Z: ['author', 'source', 'keywords', 'summary', 'state'],
  M: ['source', 'keywords', 'summary', 'state'],
  others: ['docId', 'state']
}

const modeIgnoreFields = {
  create: ['reliability'],
  edit: ['file']
}

export function getEditFormCfg(docType = 'S', mode = 'create') {
  let allFileds = [
    {
      type: 'el-select',
      options: [
        { value: 'S', label: '标准' },
        { value: 'P', label: '专利' },
        { value: 'Z', label: '政策' },
        { value: 'M', label: '成书' },
        { value: 'C', label: '论文集' },
        { value: 'N', label: '报纸文章' },
        { value: 'J', label: '期刊文章' },
        { value: 'G', label: '指南共识' },
        { value: 'R', label: '研究报告' },
        { value: 'A', label: '专著、论文集中的的析出文献' },
        { value: 'Q', label: '其它未说明的文献类型' }
      ],
      label: '文献类型',
      id: 'docType'
    },
    {
      type: 'el-cascader',
      elOptions: {
        options:
          { S: standard_class_code, Z: policy_class_code }[docType] ||
          store.state.docs.commonDocCtlg,
        //general_class_code,
        props: {
          multiple: true
        },
        collapseTags: true
        //showAllLevels: false
      },
      label: '分类',
      id: 'catalogCode'
    },
    {
      type: 'el-input',
      label: '标题',
      id: 'title'
    },
    {
      type: 'el-input',
      label: '标题',
      id: 'titleEn'
    },
    {
      type: 'el-input',
      label: { S: '标准号', Z: '政策号', M: 'ISBN' }[docType] || '文号',
      id: 'docId'
    },
    {
      type: 'el-input',
      label: '作者',
      id: 'author'
    },
    {
      type: 'el-input',
      label: { M: '出版社' }[docType] || '发布机构',
      id: 'organization'
    },
    {
      type: 'el-select',
      options: genYearList(),
      label: { M: '出版年份' }[docType] || '发布年份',
      id: 'releaseTime'
    },
    {
      type: 'el-input',
      label: '来源',
      id: 'source'
    },
    {
      type: 'el-input',
      label: '关键词',
      id: 'keywords'
    },
    {
      type: 'el-input',
      label: '摘要',
      id: 'summary',
      elOptions: {
        type: 'textarea'
      }
    },
    {
      type: 'el-select',
      options: [
        { value: '1', label: '现行' },
        { value: '2', label: '被代替' },
        { value: '3', label: '废止' }
      ],
      label: '标准状态',
      id: 'state'
    },
    {
      type: 'el-input',
      label: '置信度',
      id: 'reliability'
    },
    {
      type: 'upload',
      label: '导入',
      id: 'file',
      elOptions: {
        showTip: false
      }
    }
  ]

  let filteredFields = allFileds.filter(
    f => (ignoreFileds[docType] || ignoreFileds['others']).indexOf(f.id) == -1
  )

  filteredFields = filteredFields.filter(
    f => (modeIgnoreFields[mode] || []).indexOf(f.id) == -1
  )

  return filteredFields
}

export const editFormRule = {
  docType: { required: true },
  catalogCode: { required: true },
  title: { required: true },
  docId: { required: true },
  author: { required: true },
  organization: { required: true },
  releaseTime: { required: true },
  source: { required: true },
  releaseTime: { required: true },
  file: { required: true }
}
