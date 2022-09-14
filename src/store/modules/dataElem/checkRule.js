import { post } from '@/utils/request'
import { Message } from 'element-ui'
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
    state.illegalChar.general = val.illegalCharGeneral == '1'
    state.illegalChar.only = val.illegalCharOnly == '1'
    state.formatCheckData.data_type = val.type
    let matchedRe = /([A-Z]+)([^A-Z]+)/.exec(val.format)
    if (matchedRe && matchedRe.length) {
      state.formatCheckData.char_type_code = matchedRe[1]
      state.formatCheckData.data_length = matchedRe[2]
    }

    if (val.valueRange.indexOf('取值范围：') == 0) {
      let range = val.valueRange.replace('取值范围：', '')
      let matchedRe = /^([\(|\[])(\w*),\s*(\w*)(\)|\])$/.exec(range)
      if (matchedRe) {
        state.fieldCheck.valDomainRange = {
          great: matchedRe[1] == '[' ? 'equal' : 'notequal',
          greatVal: matchedRe[2],
          less: matchedRe[4] == ']' ? 'equal' : 'notequal',
          lessVal: matchedRe[3]
        }
      } else {
        console.log('后端质检规则，不符合要求，' + val.valueRange)
        state.fieldCheck.valDomainRange = {
          great: 'equal',
          greatVal: '',
          less: 'equal',
          lessVal: ''
        }
      }
    }
    state.fieldCheck.regexpText = val.regexpText
  }
}
const actions = {
  async save({ state, dispatch, rootState }) {
    let valDomainRange = state.fieldCheck.valDomainRange
    let checkRule = {
      id: rootState.dataElem.elemList.selectedItem.id,
      illegalCharGeneral: state.illegalChar.general ? '1' : '0',
      illegalCharOnly: state.illegalChar.only ? '1' : '0',
      type: state.formatCheckData.data_type,
      format: `${state.formatCheckData.char_type_code}${state.formatCheckData.data_length}`,
      valueDomainNameEn: state.fieldCheck.enableValDomain
        ? state.fieldCheck.valDomain
        : '',
      valueRange: state.fieldCheck.enableValRange
        ? `取值范围：${valDomainRange.great == 'equal' ? '[' : '('}${
            valDomainRange.greatVal
          },${valDomainRange.lessVal}${
            valDomainRange.less == 'equal' ? ']' : ')'
          }`
        : '',
      regexpText: state.fieldCheck.enableRegexp
        ? state.fieldCheck.regexpText
        : ''
    }
    const saveRe = await post('data-element/checkrule/edit', checkRule)
    Message.success('数据元质控规则更新成功！')
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
