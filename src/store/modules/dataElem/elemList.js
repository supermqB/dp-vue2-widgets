import { keysObject } from '@/utils/lang'
import { formFieldsConfig } from '@/views/data_element/center/config/editFrom.js'

const state = {
  queryCriteria: {
    type: '',
    wordAttr: '',
    status: ''
  },
  editElemFormData: keysObject(formFieldsConfig, 'id')
}

const mutations = {
  setTableHeader(state, val) {},
  setTableData(state, val) {}
}

const actions = {
  search() {},
  advSearch() {},
  createDataElem() {}
}

export default {
  namespaced: true,
  state
}
