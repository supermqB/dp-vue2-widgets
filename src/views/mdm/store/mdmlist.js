import { keysObject } from '@/utils/lang'
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
  }
]

const state = {
  searchForm: {
    formCfg: searchFormConfig,
    formData: keysObject(searchFormConfig, 'id')
  }
}

export default {
  namespaced: true,
  state
}
