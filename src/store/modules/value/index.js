import { keysClone } from '@/utils/lang'
import initState from './initState'
import task from './task'
import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'
import {
  getCatalogApi,
  getVersionListApi,
  getVersionDetailApi,
  getClassifyCodeApi,
  editDictApi,
  addDictApi,
  getListApi,
  addVersionApi,
  editVersionApi,
  addDictValueApi,
  editDictValueApi
} from '@/api/value'

const {
  dictForm,
  versionForm,
  dictVersionForm,
  dictValueForm,
  searchForm,
  adSearchForm
} = initState

const processCatalog = list => {
  return list.map(item => {
    const { sourceType, sourceTypeCode, valueDictCatalogEntityList } = item
    return {
      id: sourceType,
      label: sourceType,
      sourceTypeCode: item.sourceTypeCode,
      state: valueDictCatalogEntityList.some(it => it.suspectedState === '1')
        ? INCOMESTATE
        : COMPLETESTATE,
      children: valueDictCatalogEntityList.map(it => {
        return {
          id: it.nameEn,
          label: it.nameEn,
          nameEn: it.nameEn,
          nameCn: it.nameCn,
          sourceType,
          sourceTypeCode,
          state: it.suspectedState === '1' ? INCOMESTATE : COMPLETESTATE
        }
      })
    }
  })
}

const state = {
  dictList: [],
  versionList: [],
  dictValueList: [],
  currentDict: '',
  currentVersion: '',
  currentVersionInfo: {},
  currentDictValue: '',
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 0,
    totalPage: 0
  },
  dictForm: Object.assign({}, dictForm),
  versionForm: Object.assign({}, versionForm),
  dictVersionForm: Object.assign({}, dictVersionForm),
  dictValueForm: {},
  searchForm: Object.assign({}, searchForm),
  adSearchForm: Object.assign({}, adSearchForm),
  classList: []
}

const getters = {
  currentDictValueItem(state) {
    if (!state.currentDictValue) return null
    // for (let item of state.dictList) {
    //   const res = item.find(it => it.id === )
    // }
  },
  currentVersionItem(state) {
    if (!state.currentVersion) return null
    return state.versionList.find(item => item.id === state.currentVersion)
  },
  currentDictItem(state) {
    if (!state.currentDict) return {}
    for (let item of state.dictList) {
      const res = item.children.find(it => {
        return state.currentDict === it.id
      })
      if (res) {
        return Object.assign({}, res, {
          sourceType: item.label
        })
      }
    }
    return {}
  },
  sourceTypeOptions(state) {
    return state.dictList.map(item => {
      return {
        label: item.label,
        value: item.sourceTypeCode
      }
    })
  },
  tableConfig(state) {
    if (!state.currentVersionInfo || !state.currentVersionInfo.columnNameList)
      return []
    return state.currentVersionInfo.columnNameList.map(name => {
      return {
        colConfig: {
          property: name,
          label: name
        }
      }
    })
  },
  dictValueFormCfg(state) {
    if (!state.currentVersionInfo || !state.currentVersionInfo.columnNameList)
      return []
    return state.currentVersionInfo.columnNameList.map(name => {
      return {
        type: 'el-input',
        label: name,
        id: name,
        elOptions: {
          disabled: name === '术语编码',
          style: {
            width: '260px'
          }
        }
      }
    })
  }
}

const mutations = {
  setDictList(state, list) {
    state.dictList = !list ? [] : list
  },
  setVersionList(state, list) {
    state.versionList = !list ? [] : list
  },
  setDictValueList(state, list) {
    state.dictValueList = !list ? [] : list
  },
  setDictForm(state, form) {
    if (!form) {
      state.dictForm = Object.assign({}, dictForm)
    } else {
      keysClone(state.dictForm, form)
    }
  },
  setVersionForm(state, { nameCn }) {
    state.versionForm = Object.assign({}, versionForm)
    state.versionForm.dictName = nameCn
  },
  setDictVersionForm(state, { nameCn, nameEn, sourceType }) {
    const master = state.versionList.find(item => item.isMaster)
    const current = state.versionList.find(
      item => item.id === state.currentVersion
    )
    state.dictVersionForm.masterVersion = master.value
    state.dictVersionForm.version = current.value
    state.dictVersionForm.nameCn = nameCn
    state.dictVersionForm.nameEn = nameEn
    state.dictVersionForm.state = state.currentVersionInfo.state
    state.dictVersionForm.sourceType = sourceType
    state.dictVersionForm.sourceBasis = state.currentVersionInfo.sourceBasis
  },
  setDictValueForm(state, form) {
    state.dictValueForm = !form ? Object.assign({}, dictValueForm) : form
  },
  setCurrentDict(state, value) {
    if (value) {
      state.currentDict = value
    } else {
      if (
        state.dictList &&
        state.dictList.length &&
        state.dictList[0].children.length
      ) {
        state.currentDict = 'dict_drug_form'
        // state.currentDict = state.dictList[0].children[0].id
      }
    }
  },
  setCurrentVersion(state, version) {
    state.currentVersion = version
  },
  setCurrentDictValue(state, row) {
    if (!row) {
      state.currentDictValue = state.dictValueList[0]
    } else {
      state.currentDictValue = row
    }
  },
  setPageInfo(state, pageInfo) {
    keysClone(state.pageInfo, pageInfo)
  }
}

const actions = {
  async onDictChange({ commit, dispatch }, { id }) {
    commit('setCurrentDict', id)
    await dispatch('querySuspect', { searchKey: state.currentDict })
    await dispatch('queryVersion')
    await dispatch('queryVersionInfo')
    await dispatch('queryDictValue')
    commit('setCurrentDictValue')
  },
  async onPageInfoChange({ commit, dispatch }, value) {
    commit('setPageInfo', value)
    await dispatch('queryDictValue')
    commit('setCurrentDictValue')
  },
  async initValue({ commit, dispatch }) {
    await dispatch('queryDict')
    commit('setCurrentDict')
    await dispatch('querySuspect', { searchKey: state.currentDict })
    await dispatch('queryVersion')
    await dispatch('queryVersionInfo')
    await dispatch('queryDictValue')
    commit('setCurrentDictValue')
    dispatch('queryClass')
  },
  async queryDict({ commit }) {
    const { value } = await getCatalogApi()
    commit('setDictList', processCatalog(value))
  },
  async queryVersion({ commit, state }) {
    const { value } = await getVersionListApi(state.currentDict)
    state.versionList = value.map(item => {
      const { id, mainlineFlag, version } = item
      if (mainlineFlag === '1') {
        commit('setCurrentVersion', id)
      }
      return {
        id,
        label: version,
        value: version,
        isMaster: mainlineFlag === '1'
      }
    })
  },
  async queryVersionInfo() {
    if (!state.currentVersion) return
    const { value } = await getVersionDetailApi(state.currentVersion)
    state.currentVersionInfo = value
  },
  async queryClass({}) {
    const { value } = await getClassifyCodeApi()
    state.classList = value.map(item => {
      return {
        id: item.code,
        label: item.name,
        value: item.code,
        children: item.dictClassifyVoList.map(it => {
          return {
            id: it.code,
            label: it.name,
            value: it.code
          }
        })
      }
    })
  },
  async queryDictValue({ state, commit }) {
    const dictId = state.currentVersion
    const { curPage: current, pageSize: size } = state.pageInfo
    const { value } = await getListApi({ dictId, current, size })
    commit('setPageInfo', value.pageInfo)
    commit(
      'setDictValueList',
      value.records.map((item, index) => {
        return Object.assign({}, item, { index })
      })
    )
  },
  async submitDict({ state }, IsNew) {
    if (IsNew) {
      const {
        type,
        ctlgCode,
        dictCode,
        nameEn,
        nameCn,
        version,
        sourceTypeCode,
        sourceBasis,
        sourceBasisCode
      } = state.dictForm
      await addDictApi({
        type,
        ctlgCode,
        dictCode,
        nameEn,
        nameCn,
        version,
        sourceTypeCode,
        sourceBasis,
        sourceBasisCode,
        state: state.dictForm.state
      })
    } else {
      const id = state.currentVersion
      const { nameCn, nameEn } = state.dictForm
      await editDictApi({
        id,
        nameCn,
        nameEn
      })
    }
  },
  async addDictVersion() {
    await addVersionApi(Object.assign({}, state.versionForm))
  },
  async editDictVersion() {
    const { masterVersion, version, sourceType, sourceBasis } =
      state.dictVersionForm
    await editVersionApi({
      id: state.currentVersion,
      masterVersion,
      version,
      sourceType,
      sourceBasis,
      state: state.dictVersionForm.state
    })
  },
  async addDictValue({ state, dispatch }) {
    const id = state.currentVersion
    await addDictValueApi({ id, valueObject: state.dictValueForm })
    await dispatch('queryDictValue')
  },
  async editDictValue({ state, dispatch }) {
    const id = state.currentVersion
    await editDictValueApi({
      id,
      colId: state.dictValueForm['术语编码'],
      valueObject: state.dictValueForm
    })
    await dispatch('queryDictValue')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {
    task
  }
}
