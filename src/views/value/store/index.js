import { keysClone } from '@/utils/lang'
import initState from './initState'
import task from './task'
import { INCOMESTATE, COMPLETESTATE, EDITINGSTATE } from '@/utils/const'
import { confirm } from '@/utils/pops'
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
  addDictValueManyApi,
  editDictValueApi,
  deleteDictValueApi
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
          id: `${sourceTypeCode},${it.nameEn}`,
          label: it.nameCn,
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
  currentSourceTypeCode: '',
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
        state.currentSourceTypeCode = res.sourceTypeCode
        return Object.assign({}, res, {
          sourceType: item.label
        })
      }
    }
    return {}
  },
  currentDictValueItem(state) {
    return state.dictValueList.find(
      item => item.term_code === state.currentDictValue.term_code
    )
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
    if (
      !state.currentVersionInfo ||
      !state.currentVersionInfo.valueDictColumnList ||
      !state.currentVersionInfo.valueDictColumnList.length
    )
      return []
    return state.currentVersionInfo.valueDictColumnList.map(item => {
      return {
        colConfig: {
          property: item.nameEn,
          label: item.nameCn,
          minWidth: 150
        }
      }
    })
  },
  dictValueFormCfg(state) {
    if (
      !state.currentVersionInfo ||
      !state.currentVersionInfo.valueDictColumnList
    )
      return []
    return state.currentVersionInfo.valueDictColumnList.map(item => {
      return {
        type: 'el-input',
        label: item.nameCn,
        id: item.nameEn,
        elOptions: {
          disabled: item.nameEn === 'term_code',
          style: {
            width: '260px'
          }
        }
      }
    })
  },
  versionOptions(state) {
    const res = state.versionList.map(item => {
      return {
        id: item.id,
        label: item.label,
        value: item.label
      }
    })
    return res
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
  setDictVersionForm(state, { nameCn, nameEn, sourceTypeCode }) {
    const master = state.versionList.find(item => item.isMaster)
    const current = state.versionList.find(
      item => item.id === state.currentVersion
    )
    state.dictVersionForm.masterVersion = master.label
    state.dictVersionForm.version = current.label
    state.dictVersionForm.nameCn = nameCn
    state.dictVersionForm.nameEn = nameEn
    state.dictVersionForm.state = state.currentVersionInfo.state
    state.dictVersionForm.sourceTypeCode = sourceTypeCode
    state.dictVersionForm.basis = state.currentVersionInfo.basis
  },
  setDictValueForm(state, form) {
    if (!form) {
      state.dictValueForm = Object.assign({}, dictValueForm)
    } else {
      state.dictValueForm = Object.assign({}, form)
    }
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
        // state.currentDict = state.dictList[0].children[0].id
        // state.currentDict = '3,dict_marriage'
        for (let item of state.dictList) {
          for (let it of item.children) {
            if (it.state === INCOMESTATE) {
              state.currentDict = it.id
              return
            }
          }
        }
        state.currentDict = state.dictList[0].children[0].id
      }
    }
  },
  setCurrentVersion(state, version) {
    if (!version) {
      const master = state.versionList.find(item => item.isMaster)
      state.currentVersion = master.id
    } else {
      state.currentVersion = version
    }
  },
  setCurrentDictValue(state, row) {
    if (!row) {
      state.currentDictValue = state.dictValueList[0]
    } else {
      state.currentDictValue = row
    }
  },
  setSearchForm(state, form) {
    if (!form) {
      state.searchForm = Object.assign({}, searchForm)
    } else {
      keysClone(state.searchForm, form)
    }
  },
  setPageInfo(state, pageInfo) {
    keysClone(state.pageInfo, pageInfo)
  }
}

const actions = {
  async onDictChange({ commit, dispatch }, { id }) {
    commit('setDictValueList')
    state.currentVersionInfo = {}
    commit('setCurrentDict', id)
    await dispatch('queryVersion')
    commit('setCurrentVersion')
    dispatch('queryVersionInfo')
    dispatch('querySuspect', { id: state.currentVersion })
    await dispatch('queryDictValue')
    commit('setCurrentDictValue')
  },
  async onPageInfoChange({ commit, dispatch }, value) {
    commit('setDictValueList')
    commit('setPageInfo', value)
    await dispatch('queryDictValue')
    commit('setCurrentDictValue')
  },
  async onVersionChange({ commit, dispatch }, value) {
    commit('setCurrentVersion', value)
    await dispatch('queryVersionInfo')
    dispatch('queryDictValue')
    dispatch('querySuspect', { id: value })
  },
  async initValue({ commit, dispatch }) {
    await dispatch('queryDict')
    commit('setCurrentDict')
    await dispatch('queryVersion')
    commit('setCurrentVersion')
    await dispatch('queryVersionInfo')
    dispatch('querySuspect', { id: state.currentVersion })
    await dispatch('queryDictValue')
    commit('setCurrentDictValue')
    dispatch('queryClass')
  },
  async queryDict({ commit }) {
    const { value } = await getCatalogApi()
    commit('setDictList', processCatalog(value))
  },
  async queryVersion({ state }) {
    const [sourceTypeCode, dictId] = state.currentDict.split(',')
    const { value } = await getVersionListApi(dictId, sourceTypeCode)
    state.versionList = value.map(item => {
      const { id, mainlineFlag, version } = item
      return {
        id,
        label: version,
        value: id,
        isMaster: mainlineFlag === '1'
      }
    })
  },
  async queryVersionList({}, currentDict) {
    const [sourceTypeCode, dictName] = currentDict.split(',')
    const { value } = await getVersionListApi(dictName, sourceTypeCode)
    return value.map(item => {
      return {
        id: `${currentDict},${item.version}`,
        label: item.version,
        leaf: true
      }
    })
  },
  async queryVersionInfo() {
    if (!state.currentVersion) return
    const { value } = await getVersionDetailApi(state.currentVersion)
    state.currentVersionInfo = value
    state.currentVersionInfo.valueDictColumnList =
      value.valueDictColumnList.sort((pre, next) => pre.seqNo - next.seqNo)
  },
  async queryClass() {
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
    const columnParamList = []
    ;[
      { name: 'code', condition: 'like' },
      { name: 'value', condition: 'like' },
      { name: 'parent_code', condition: 'equal' },
      { name: 'level', condition: 'equal' }
    ].forEach(item => {
      if (state.searchForm[item.name]) {
        columnParamList.push(
          Object.assign(item, { value: state.searchForm[item.name] })
        )
      }
    })
    const { value } = await getListApi({
      dictId,
      current,
      size,
      columnParamList
    })
    if (value.records) {
      const { curPage, pageSize } = state.pageInfo
      commit(
        'setDictValueList',
        value.records.map((item, index) => {
          const res = Object.assign({}, item.columnMap, { state: item.state })
          if (!res['index']) {
            res['index'] = index
          }
          return res
        })
      )
    } else {
      commit('setDictValueList')
    }
    commit('setPageInfo', value.pageInfo)
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
        basis,
        sourceBasisCode
      } = state.dictForm
      const res = await addDictApi({
        type,
        classifyCode: ctlgCode,
        dictCode,
        nameEn,
        nameCn,
        version,
        sourceTypeCode,
        basis,
        sourceBasisCode,
        state: EDITINGSTATE
      })
      return res.success
    } else {
      const id = state.currentVersion
      const { nameCn, nameEn } = state.dictForm
      const res = await editDictApi({
        id,
        nameCn,
        nameEn
      })
      return res.success
    }
  },
  async addDictVersion({ state, dispatch }) {
    const data = Object.assign({}, state.versionForm, {
      dictId: state.currentVersion
    })
    delete data['dictName']
    const res = await addVersionApi(data)
    if (!res.success) return false
    dispatch('queryVersion')
    return true
  },
  async editDictVersion({ commit, dispatch, state }) {
    const { masterVersion, version, sourceTypeCode, basis } =
      state.dictVersionForm
    const res = await editVersionApi({
      id: state.currentVersion,
      masterVersion,
      version,
      sourceTypeCode,
      basis,
      state: state.dictVersionForm.state
    })
    if (!res.success) return false
    const current = state.versionList.find(item => item.label === version)
    commit('setCurrentVersion', current.id)
    await dispatch('queryVersion')
    await dispatch('queryVersionInfo')
    dispatch('queryDictValue')
    return true
  },
  async addDictValue({ state, dispatch, rootState }) {
    const data = { id: state.currentVersion }
    const { curTask, taskList } = rootState.value.task
    let curTaskItem = null
    let completeCurSuspect = false
    data['valueObject'] = state.dictValueForm
    if (curTask) {
      completeCurSuspect = await confirm(
        `编辑值域的同时，是否完成当前疑似任务: <br> &nbsp;<b>【${curTask}】</b>
        <br/>请确认？`,
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '是',
          cancelButtonText: '否'
        }
      )
      curTaskItem = taskList.find(
        item => `${item.source}:${item.name}` === curTask
      )
    }
    const res = await addDictValueApi(
      completeCurSuspect
        ? Object.assign(data, {
            suspectList: curTaskItem.suspectList.map(sus => sus.id)
          })
        : Object.assign(data, { suspectList: [] })
    )
    if (!res.success) return false
    await dispatch('queryDictValue')
    if (completeCurSuspect) dispatch('querySuspect')
    return true
  },
  async addBatchDictValue({ state, dispatch }, file) {
    const res = await addDictValueManyApi({
      id: state.currentVersion,
      file
    })
    if (!res.success) return false
    dispatch('queryDictValue')
    return true
  },
  async editDictValue({ state, dispatch, rootState }) {
    const id = state.currentVersion
    const { curTask, taskList } = rootState.value.task
    let curTaskItem = null
    let completeCurSuspect = false
    if (curTask) {
      completeCurSuspect = await confirm(
        `编辑值域的同时，是否完成当前疑似任务: <br> &nbsp;<b>【${curTask}】</b>
        <br/>请确认？`,
        {
          dangerouslyUseHTMLString: true,
          confirmButtonText: '是',
          cancelButtonText: '否'
        }
      )
      curTaskItem = taskList.find(
        item => `${item.source}:${item.name}` === curTask
      )
    }
    const res = await editDictValueApi({
      id,
      colId: state.dictValueForm['term_code'],
      valueObject: state.dictValueForm,
      suspectList: completeCurSuspect
        ? curTaskItem.suspectList.map(sus => sus.id)
        : []
    })
    if (!res.success) return false
    dispatch('queryDictValue')
    if (completeCurSuspect) dispatch('querySuspect')
    return true
  },
  async deleteDictValue({ dispatch }, termCode) {
    const res = await deleteDictValueApi(termCode)
    if (!res.success) return false
    dispatch('queryDictValue')
    return true
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
