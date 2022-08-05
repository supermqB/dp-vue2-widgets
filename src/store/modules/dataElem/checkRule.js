import { post } from '@/utils/request'
import { MessageBox } from 'element-ui'
const state = {
  illegalChar: {
    general: true,
    only: true
  },
  formatCheckData: {
    data_type: 'S1',
    char_type_code: 'N',
    data_length: ''
  },
  fieldCheck: {
    enableValDomain: false,
    valDomain: '',
    valDomainList: ['DICT_SEX', 'DICT_NAME'],
    enableValRange: false,
    valDomainRange: {
      great: 'notequal',
      greatVal: 0,
      less: 'notequal',
      lessVal: 50
    },
    enableRegexp: false,
    regexpText: ''
  }
}
const mutations = {
  setDefaultValues(state, val) {
    state.illegalChar.general = !!val.illegalCharGeneral
    state.illegalChar.only = !!val.illegalCharOnly
    state.formatCheckData.data_type = val.type
    let matchedRe = /([A-Z]+)([^A-Z]+)/.exec(val.format)
    if (matchedRe && matchedRe.length) {
      state.formatCheckData.char_type_code = matchedRe[1]
      state.formatCheckData.data_length = matchedRe[2]
    }

    state.fieldCheck.enableValRange = val.valueRange.indexOf('取值范围：') == 0
    if (val.valueRange.indexOf('取值范围：') == 0) {
      let range = val.valueRange.replace('取值范围：', '')
      let matchedRe = /^([\(|\[])(\d*),\s*(\d*)(\)|\])/.exec(range)
      state.fieldCheck.valDomainRange = {
        great: matchedRe[1] == '[' ? 'equal' : 'notequal',
        greatVal: matchedRe[2] * 1,
        less: matchedRe[4] == ']' ? 'equal' : 'notequal',
        lessVal: matchedRe[3]
      }
    }
    state.fieldCheck.enableRegexp = !!val.regexpText
    state.fieldCheck.regexpText = val.regexpText
  }
}
const actions = {
  async save({ state, dispatch, rootState }) {
    let valDomainRange = state.fieldCheck.valDomainRange
    let checkRule = {
      id: rootState.dataElem.elemList.selectedItem.id,
      illegalCharGeneral: state.illegalChar.general ? 1 : 0,
      illegalCharOnly: state.illegalChar.only ? 1 : 0,
      format: `${state.formatCheckData.char_type_code}${state.formatCheckData.data_length}`,
      valueDomainId: state.fieldCheck.valDomain,
      valueRange: `取值范围：${valDomainRange.great == 'equal' ? '[' : '('}${
        valDomainRange.greatVal
      },${valDomainRange.lessVal}${valDomainRange.less == 'equal' ? ']' : ')'}`,
      regexpText: state.fieldCheck.regexpText
    }
    const saveRe = await post('data-element/checkrule/edit', checkRule)
    MessageBox.alert('数据元质控规则更新成功！')
    dispatch('dataElem/elemList/search', null, { root: true })
  },
  reset({ commit, rootState }) {
    commit('setDefaultValues', rootState.dataElem.elemList.selectedItem)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
