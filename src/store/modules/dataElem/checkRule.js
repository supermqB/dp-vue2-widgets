const state = {
  illegalChar: {
    general: true,
    only: true
  },
  formatCheckData: {
    data_type: '数值型',
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
    regexpText: '.*'
  }
}

export default {
  namespaced: true,
  state
}
