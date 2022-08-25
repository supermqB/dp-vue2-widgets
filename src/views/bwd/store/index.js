// import { getBwdInfoApi } from '@/api/bwd'

import { keysClone } from '@/utils/lang'
import { get, post } from '@/utils/request'
import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'
import initState from './initState'

const state = {
  // 左侧数据
  currentBwd: '',
  currentBwdItem: {},
  bwdList: [
    {
      id: '1',
      label: '医疗类',
      children: [
        {
          id: '1-1',
          label: '患者信息记录文件'
        },
        {
          id: '1-2',
          label: '挂号记录文件'
        },
        {
          id: '1-3',
          label: '入院登记文件'
        },
        {
          id: '1-4',
          label: '患者就诊记录文件'
        },
        {
          id: '1-5',
          label: '检验报告单主表文件'
        },
        {
          id: '1-6',
          label: '检验报告单丛表文件'
        },
        {
          id: '1-7',
          label: '检查报告单主表文件'
        }
      ]
    }
  ],
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
  currentCatalog: '',
  currentColumn: '',
  isAdvance: false,
  pageInfo: {
    curPage: 1,
    pageSize: 10,
    totalSize: 3,
    totalPage: 1
  },
  fieldsList: [
    {
      id: '1',
      seqNo: 'org_id',
      name: '医疗机构唯一标识',
      nameCn: '个人信息表',
      nameEn: '业务系统唯一标识'
    },
    {
      id: '2',
      seqNo: 'source_id',
      name: '业务系统唯一标识',
      nameCn: '个人信息表',
      nameEn: '业务系统唯一标识'
    }
  ],

  fileCatalogData: Object.assign({}, initState.fileCatalogData),
  searchData: Object.assign({}, initState.searchData),
  adSearchData: Object.assign({}, initState.adSearchData),
  fileFieldsData: Object.assign({}, initState.fileFieldsData)
}

const getters = {
  totalNumber(state) {
    let res = 0
    for (let item of state.bwdList) {
      res += item.children.length
      if (res) return res
      return 0
    }
  },
  currentFieldsRow(state) {
    return state.fieldsList.find(item => item.id === state.currentColumn)
  }
}
const mutations = {
  // 左侧bwd处理（动作set）
  setCurrentBwd(state, value) {
    state.currentBwd = value
  },
  setCurrentBwdValue(state, value) {
    state.currentBwdItem = value
  },
  setBwdList(state, value) {
    state.bwdList = value
  },
  // 中间处理
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
  setCurrentField: (state, column) => {
    if (!column) {
      state.currentColumn =
        state.fieldsList && state.fieldsList.length
          ? state.fieldsList[0].id
          : ''
    } else {
      state.currentColumn = column
    }
  },
  setPageInfo: (state, pageInfo) => {
    keysClone(state.pageInfo, pageInfo)
  }
}

const actions = {
  // 处理左侧bwd，调接口展示
  async loadBwdModules({ commit }) {
    // const result = await get('sbr/getCatalog')
    const result = ''
    if (result.success) {
      commit('setBwdList'),
        result.value.map(item => ({
          // 后面根据接口的字段名称对应修改
          ...item,
          id: item.id + '',
          label: item.name,
          state: item.state == '1' ? INCOMESTATE : COMPLETESTATE,
          number: item.refCount
        }))
    }
  },
  // 给中间展示bwd
  async loadCurrentBwdValue({ commit }, bwdId) {
    const result = await get(`sbr/getOverView/${bwdId}`)
    if (result.success) {
      commit('setCurrentBwdValue', result.value)
    }
  },
  async queryField({ commit }) {
    const { curPage, pageSize } = state.pageInfo
    const query = Object.assign(
      { id: state.currentCatalog },
      state.isAdvance ? state.adSearchData : state.searchData
    )
    const { value } = await getBwdInfoApi(
      curPage,
      pageSize,
      query,
      state.isAdvance
    )
    const { records, pageInfo } = value
    state.fieldsList = processColumnList(records, curPage, pageSize)
    commit('setPageInfo', pageInfo)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
