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

import { keysClone } from '@/utils/lang'
import { STOPSTATE, RUNNINGSTATE } from '@/utils/const'
import initState from './initState'

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
  fieldsList: [],
  eventList: [],
  eventMapList: [],

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
        return Object.assign({}, res, {
          theme: item.label
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
        value: item.label
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
  // 将接口获取的数据渲染至页面进行bwd列表展示
  setBwdList(state, value) {
    state.bwdList = value
  },
  // 目录栏的新增编辑赋值
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
    state.eventMapList = field.dwdMappingColumnList.map((item, index) => {
      return {
        id: item.tableId,
        index,
        nameCn: item.tableNameCn,
        defination: item.tableNameCn,
        match: true,
        matchLabel: '取消匹配'
      }
    })
    state.eventMapList = field.sbrMappingColumnList.map((item, index) => {
      return {
        id: item.tableId,
        index,
        nameCn: item.tableNameCn,
        defination: item.tableNameCn,
        match: true,
        matchLabel: '取消匹配'
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
  }
}

const actions = {
  async queryTotalNum({ commit }) {
    const { value } = await getTotalNumApi()
    commit('setTotalNum', value)
  },
  // 处理左侧bwd，调接口展示bwdlist(getCatalogApi)
  async loadBwdModules({ commit }) {
    const result = await getCatalogApi()
    if (result.success) {
      commit(
        'setBwdList',
        result.value.map(item => ({
          id: item.theme,
          label: item.theme,
          children: item.bwdCatelogEntityList.map(it => {
            return {
              id: it.id,
              label: it.nameCn,
              nameCn: it.nameCn,
              nameEn: it.nameEn,
              state: it.state == '0' ? STOPSTATE : RUNNINGSTATE,
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
    const query = Object.assign(
      { id: state.currentBwd },
      state.isAdvance ? state.adSearchData : state.searchData
    )
    const res = await getBwdInfoApi(curPage, pageSize, query, state.isAdvance)
    const { records, pageInfo } = res.value
    state.fieldsList = records.map((item, index) => ({
      ...item,
      index,
      dwdTable: item.dwdMappingColumnList
        .map(item => item.tableNameCn)
        .join(','),
      dwdField: item.dwdMappingColumnList.map(item => item.colNameCn).join(','),
      sbrTable: item.sbrMappingColumnList
        .map(item => item.tableNameCn)
        .join(','),
      sbrField: item.sbrMappingColumnList.map(item => item.colNameCn).join(',')
    }))
    commit('setPageInfo', pageInfo)
    commit('setCurrentField')
  },
  async queryMappingList({}, source) {
    const { value } = await getMapModelApi(source)
    state.eventList = value
  },
  async queryMappingField({ commit }, id) {
    const result = await getMapFieldsApi(id)
    state.eventMapList = result.value.map(item => ({
      ...item,
      index: item.id,
      matchLabel: item.match ? '取消匹配' : '匹配'
    }))
  },
  async filterMapList({}, field) {
    state.eventMapList = state.eventMapList.filter(
      item => item.nameCn.indexOf(field) != -1
    )
  },
  // 左侧表单提交，更新目录接口addFileCatalogApi,updateFileCatalogApi
  async submitFileCatalog({ dispatch, state }) {
    const { id, nameCn, nameEn, theme } = state.fileCatalogData
    if (!id) {
      await addFileCatalogApi(
        nameCn,
        nameEn,
        theme,
        state.fileCatalogData.state
      )
      this._vm.$message.success('新增文件目录成功')
    } else {
      await updateFileCatalogApi(
        id,
        nameCn,
        nameEn,
        theme,
        state.fileCatalogData.state
      )
      this._vm.$message.success('编辑文件目录成功')
    }
    dispatch('loadBwdModules')
  },
  async submitFields({ dispatch, state }) {
    const { id, index, nameCn, nameEn } = state.fileFieldsData
    const datasetId = parseInt(state.currentBwd)
    if (!id) {
      await addFileFieldsApi({
        id,
        datasetId,
        index,
        nameCn,
        nameEn
      })
      this._vm.$message.success('新增字段成功！')
    } else {
      await updateFileFieldsApi({
        id,
        datasetId,
        index,
        nameCn,
        nameEn
      })
      this._vm.$message.success('编辑字段成功！')
    }
    await dispatch('queryField')
  },
  async submitMapping({ dispatch, state }, index) {
    const currentField = state.fieldsList.find(
      item => item.id === state.currentField
    )

    const { id } = currentField
    const col = state.eventMapList[index]
    const table = state.eventMapList.find(
      item => item.id === state.eventMapData.event
    )
    if (!col.match) {
      await addMappingApi({
        id,
        bwdMappingColumn: {
          tableId: table.id,
          tableNameCn: table.nameCn,
          tableNameEn: table.nameEn,
          colId: col.id,
          colNameCn: col.nameCn,
          colNameEn: col.nameEn
        }
      })
      this._vm.$message.success('匹配成功！')
      state.eventMapList[index].match = true
      state.eventMapList[index].matchLabel = '取消匹配'
      await dispatch('queryField')
    } else {
      await deleteMappingApi(col.id)
      state.eventMapList[index].match = false
      state.eventMapList[index].matchLabel = '匹配'
      this._vm.$message.success('取消匹配成功！')
      await dispatch('queryField')
    }
  },
  async runCatalog({ dispatch, state }) {
    const id = state.currentBwd
    await submitCatalogApi(id)
    this._vm.$message.success('启动成功！')
    dispatch('loadBwdModules')
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
