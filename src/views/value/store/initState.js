import { EDITINGSTATE } from '@/utils/const'

export default {
  dictForm: {
    type: '',
    class: '',
    subClass: '',
    ctlgCode: '',
    dictCode: '',
    nameEn: '',
    nameCn: '',
    version: '',
    sourceTypeCode: '',
    sourceBasis: '',
    sourceBasisCode: ''
  },
  dictVersionForm: {
    id: '',
    masterVersion: '',
    version: '',
    state: '',
    sourceType: '',
    sourceTypeCode: '',
    basis: ''
  },
  versionForm: {
    version: '',
    dictName: '',
    parVersionId: '',
    file: null
  },
  dictValueForm: {
    id: '',
    name: '',
    parCode: '',
    type: '',
    note: '',
    hierarchyRelation: '',
    file: null
  },
  searchForm: {
    level: '',
    value: '',
    parent_code: '',
    term_code: ''
  },
  adSearchForm: {}
}
