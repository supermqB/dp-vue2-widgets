export const ADDSTATE = 'ADDSTATE'
export const EDITSTATE = 'EDITSTATE'
export const INCOMESTATE = 'income'
export const COMPLETESTATE = 'complete'
export const RUNNINGSTATE = '3'
export const TOBEREVIEWSTATE = '2'
export const EDITINGSTATE = '1'
export const STOPSTATE = '0'
export const YESORNOOPTIONS = [
  {
    label: '是',
    value: 1
  },
  {
    label: '否',
    value: 0
  }
]
export const STATEOPTIONS = [
  {
    label: '停止',
    value: STOPSTATE
  },
  {
    label: '编辑中',
    value: EDITINGSTATE
  },
  {
    label: '待审核',
    value: TOBEREVIEWSTATE
  },
  {
    label: '已启动',
    value: RUNNINGSTATE
  }
]
export const COLNAMEOPTIONS = [
  {
    label: '全部',
    value: 'all'
  },
  {
    label: '中文名',
    value: 'nameCn'
  },
  {
    label: '英文名',
    value: 'nameEn'
  }
]
export const TYPEOPTIONS = [
  { label: '字符型(S1)', value: 'S1' },
  { label: '字符型(S2)', value: 'S2' },
  { label: '字符型(S3)', value: 'S3' },
  { label: '逻辑型(L)', value: 'L' },
  { label: '数值型(N)', value: 'N' },
  { label: '日期型(D)', value: 'D' },
  { label: '时间型(DT)', value: 'DT' }
]
export const DICTTYPEOPTIONS = [
  {
    label: '单值字典',
    value: '单值字典'
  },
  {
    label: '多值字典',
    value: '多值字典'
  }
]
export const DOCTYPEOPTIONS = [
  { value: 'S', label: '标准' },
  { value: 'P', label: '专利' },
  { value: 'Z', label: '政策' },
  { value: 'M', label: '成书' },
  { value: 'C', label: '论文' },
  { value: 'N', label: '报纸文章' },
  { value: 'J', label: '期刊文章' },
  { value: 'G', label: '指南共识' },
  { value: 'R', label: '研究报告' },
  { value: 'A', label: '专著' },
  { value: 'Q', label: '其它' }
]

export const DWD = 'DWD'
export const SBR = 'SBR'
