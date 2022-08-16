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
