import {
  getBwdInfoApi,
  getCatalogApi,
  getTotalNumApi,
  updateFileCatalogApi,
  addFileCatalogApi,
  addFileFieldsApi,
  updateFileFieldsApi,
  submitCatalogApi,
  getMapModelApi,
  getMapFieldsApi,
  addMappingApi,
  deleteMappingApi
} from '@/api/bwd'
import { getVersionListApi } from '@/api/event'
import { MessageBox } from 'element-ui'
import { keysClone } from '@/utils/lang'
import { DWD, EDITINGSTATE } from '@/utils/const'
import initState from './initState'

const getCurrentFieldItem = (list, id) => {
  return list.find(item => item.id === id)
}

const joinName = (list, id) => {
  if (!list) return ''
  return list.map(item => item[id]).join(', ')
}

const state = {
  // 左侧数据
  currentBwd: '',
  bwdList: [],
  treeSelectionData: [
    {
      id: '1',
      label: '全选',
      children: [
        {
          id: '2',
          label: '医疗类'
        },
        {
          id: '3',
          label: '运营类'
        },
        {
          id: '4',
          label: '医保类'
        }
      ]
    }
  ],
  // 中间数据
  currentField: '',
  currentMap: '',
  isAdvance: false,
  pageInfo: {
    curPage: 1,
    pageSize: 20,
    totalSize: 0,
    totalPage: 0
  },
  totalNumber: 0,
  versionList: [],
  fieldsList: [],
  eventList: [],
  eventMapList: [],
  themeOptions: [],
  source: DWD,
  fileCatalogData: Object.assign({}, initState.fileCatalogData),
  searchData: Object.assign({}, initState.searchData),
  adSearchData: Object.assign({}, initState.adSearchData),
  fileFieldsData: Object.assign({}, initState.fileFieldsData),
  eventMapData: Object.assign({}, initState.eventMapData)
}

const getters = {
  currentBwdItem(state) {
    for (let item of state.bwdList) {
      const res = item.children.find(it => {
        return state.currentBwd.toString() === it.id.toString()
      })
      if (res) {
        const [theme, id] = res.id.split(';')
        return Object.assign({}, res, {
          id: id,
          theme: [theme]
        })
      }
    }
    return {}
  },
  currentFieldRow(state) {
    return state.fieldsList.find(item => item.id === state.currentField)
  },
  // 目录dialog下拉选项
  categoryOptions(state) {
    return state.bwdList.map(item => {
      return {
        label: item.label,
        value: item.id
      }
    })
  },
  eventOptions(state) {
    return state.eventList.map(item => {
      return {
        label: item.nameCn,
        value: item.id
      }
    })
  },
  filterEventMapList(state) {
    return state.eventMapList.filter(
      item => item.colNameCn.indexOf(state.eventMapData.field) > -1
    )
  }
}
const mutations = {
  setCurrentBwd: (state, value) => {
    if (value) {
      state.currentBwd = value.toString()
    } else if (state.currentBwd) {
      state.currentBwd = state.currentBwd.toString()
    } else {
      if (state.bwdList[0].children.length) {
        state.currentBwd = state.bwdList[0].children[0].id.toString()
      } else {
        state.currentbwd = ''
      }
    }
  },
  setBwdList(state, value) {
    state.bwdList = value
    state.themeOptions = value.map(item => {
      return {
        value: item.id.toString(),
        label: item.label
      }
    })
  },
  setCatalogForm: (state, form) => {
    if (form) {
      keysClone(state.fileCatalogData, form)
    } else {
      state.fileCatalogData = Object.assign({}, initState.fileCatalogData)
    }
  },
  setFieldsForm(state, form) {
    if (form) {
      keysClone(state.fileFieldsData, form)
    } else {
      state.fileFieldsData = Object.assign({}, initState.fileFieldsData)
    }
  },
  setIsAdvance: (state, isAdvance) => {
    if (state.isAdvance !== isAdvance) {
      state.isAdvance = isAdvance
      state.pageInfo.curPage = 1
    }
  },
  setCurrentField: (state, field) => {
    if (!field) {
      state.currentField =
        state.fieldsList && state.fieldsList.length
          ? state.fieldsList[0].id
          : ''
    } else {
      state.currentField = field
    }
  },
  setEventMapList: state => {
    state.eventMapList = []
    if (!state.currentField) return
    const currentField = getCurrentFieldItem(
      state.fieldsList,
      state.currentField
    )
    const { dwdMappingColumnList, sbrMappingColumnList } = currentField
    state.eventMapList = (
      state.source === DWD ? dwdMappingColumnList : sbrMappingColumnList
    ).map((item, index) => {
      return {
        index,
        id: item.id,
        colId: item.colId,
        colNameCn: item.colNameCn,
        colNameEn: item.colNameEn,
        tableId: item.tableId,
        tableNameCn: item.nameCn,
        tableNameEn: item.nameEn,
        definition: item.definition,
        match: true
      }
    })
  },
  setPageInfo: (state, pageInfo) => {
    keysClone(state.pageInfo, pageInfo)
  },
  setTotalNum: (state, value) => {
    state.totalNumber = value
  },
  setTabMapList: state => {
    state.eventMapData = Object.assign({}, initState.eventMapData)
    state.eventMapList = []
  },
  resetEventMapData: state => {
    state.eventMapData = Object.assign({}, initState.eventMapData)
  },
  setSource: (state, source) => {
    state.source = source
  },
  matchId: state => {
    const currentField = getCurrentFieldItem(
      state.fieldsList,
      state.currentField
    )
    if (!currentField) return
    let { dwdMappingColumnList, sbrMappingColumnList } = currentField
    if (state.source !== DWD) dwdMappingColumnList = sbrMappingColumnList
    dwdMappingColumnList.forEach(item => {
      state.eventMapList.forEach(event => {
        if (event.colId === item.colId) {
          event.id = item.id
          event.match = true
        }
      })
    })
  },
  cancelMatch: (state, id) => {
    state.eventMapList.forEach(item => {
      if (item.id === id) {
        delete item.id
        item.match = false
      }
    })
  }
}

const actions = {
  async queryTotalNum({ commit }) {
    const { value } = await getTotalNumApi()
    commit('setTotalNum', value)
  },
  async queryVersion() {
    const [themeId] = state.currentBwd.split(';')
    const theme = state.bwdList.find(item => item.id.toString() === themeId)
    const { value } = await getVersionListApi()
    state.versionList = value
      .filter(item => item.businessGroup === theme.label)
      .map(item => {
        return {
          value: item.versionName,
          label: item.versionName
        }
      })
    if (state.versionList && state.versionList.length) {
      state.searchData.version = state.versionList[0].value
    }
  },
  // 处理左侧bwd，调接口展示bwdlist(getCatalogApi)
  async loadBwdModules({ commit }) {
    const result = await getCatalogApi()
    if (result.success) {
      commit(
        'setBwdList',
        result.value.map(item => ({
          id: item.id,
          label: item.theme,
          children: item.bwdCatelogEntityList.map(it => {
            return {
              id: `${item.id};${it.id}`, //6;101
              label: it.nameCn,
              nameCn: it.nameCn,
              nameEn: it.nameEn,
              state: it.state,
              number: it.refNum
            }
          })
        }))
      )
      commit('setCurrentBwd')
    }
  },
  // 给中间展示bwd(getBwdInfoApi)
  async queryField({ commit }) {
    const { curPage, pageSize } = state.pageInfo
    const [version, id] = state.currentBwd.split(';')
    const query = Object.assign(
      { id, version },
      state.isAdvance ? state.adSearchData : state.searchData
    )
    const res = await getBwdInfoApi(curPage, pageSize, query, state.isAdvance)
    const { records, pageInfo } = res.value
    if (records) {
      state.fieldsList = records.map((item, index) => ({
        ...item,
        index: pageInfo.pageSize * (pageInfo.curPage - 1) + index + 1,
        dwdTable: joinName(item.dwdMappingColumnList, 'tableNameCn'),
        dwdField: joinName(item.dwdMappingColumnList, 'colNameCn'),
        sbrTable: joinName(item.sbrMappingColumnList, 'tableNameCn'),
        sbrField: joinName(item.sbrMappingColumnList, 'colNameCn')
      }))
    } else {
      state.fieldsList = []
    }
    commit('setPageInfo', pageInfo)
  },
  async queryMappingList() {
    const version = state.searchData.version
    if (!version) return
    const res = await getMapModelApi(
      state.source,
      state.source === DWD ? version : 'V1.0'
    )
    state.eventList = res.value
  },
  async queryMappingField({ commit }, id) {
    const result = await getMapFieldsApi(id)
    const table = state.eventList.find(item => item.id === id)
    state.eventMapList = result.value.map((item, index) => ({
      index,
      tableId: id,
      tableNameCn: table.nameCn,
      tableNameEn: table.nameEn,
      colNameCn: item.nameCn,
      colNameEn: item.nameEn,
      colId: item.id,
      definition: item.definition,
      match: false
    }))
    commit('matchId')
  },
  // 左侧表单提交，更新目录接口addFileCatalogApi,updateFileCatalogApi
  async submitFileCatalog({ dispatch, state }) {
    const { id, nameCn, nameEn, theme } = state.fileCatalogData
    if (!id) {
      const res = await addFileCatalogApi(
        nameCn,
        nameEn,
        theme.join(','), //Array(1)-"6"
        EDITINGSTATE
      )
      if (!res.success) return false
      this._vm.$message.success('新增文件目录成功')
    } else {
      const res = await updateFileCatalogApi(
        id,
        nameCn,
        nameEn,
        theme.join(','),
        EDITINGSTATE
      )
      if (!res.success) return false
      this._vm.$message.success('编辑文件目录成功')
    }
    dispatch('loadBwdModules')
    dispatch('queryTotalNum')
    return true
  },
  async submitFields({ dispatch, state }) {
    const { id, index, nameCn, nameEn } = state.fileFieldsData
    const [theme, columnId] = state.currentBwd.split(';')
    if (!id) {
      await addFileFieldsApi({
        id: columnId,
        index,
        nameCn,
        nameEn
      })
      this._vm.$message.success('新增字段成功！')
    } else {
      await updateFileFieldsApi({
        id,
        index,
        nameCn,
        nameEn
      })
      this._vm.$message.success('编辑字段成功！')
    }
    await dispatch('queryField')
  },
  async submitMapping({ commit, dispatch }, col) {
    if (!col.match) {
      const res = await dispatch('map', col)
      if (!res.success) return false
      this._vm.$message.success('匹配成功！')
      col.match = true
      await dispatch('queryField')
      commit('matchId')
    } else {
      if (!col.id) return false
      const res = await deleteMappingApi(col.id)
      if (!res.success) return false
      col.match = false
      delete col['id']
      this._vm.$message.success('取消匹配成功！')
      await dispatch('queryField')
    }
    return true
  },
  async map({ commit, state }, col) {
    const currentField = getCurrentFieldItem(
      state.fieldsList,
      state.currentField
    )
    const { dwdMappingColumnList, id } = currentField
    if (
      state.source === DWD &&
      dwdMappingColumnList &&
      dwdMappingColumnList.length === 1
    ) {
      await MessageBox.confirm('该字段事件库映射已存在，是否替换？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      const delResponse = await deleteMappingApi(dwdMappingColumnList[0].id)
      if (!delResponse.success) return
      commit('cancelMatch', dwdMappingColumnList[0].id)
    }
    return await addMappingApi({
      id,
      dwdVersion: state.searchData.version,
      bwdMappingColumn: {
        tableId: col.tableId,
        tableNameCn: col.tableNameCn,
        tableNameEn: col.tableNameEn,
        colId: col.colId,
        colNameCn: col.colNameCn,
        colNameEn: col.colNameEn
      }
    })
  },
  async runCatalog({ dispatch, state }) {
    const [theme, id] = state.currentBwd.split(';')
    const res = await submitCatalogApi(id)
    if (!res.success) return false
    this._vm.$message.success('启动成功！')
    dispatch('loadBwdModules')
    return true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
