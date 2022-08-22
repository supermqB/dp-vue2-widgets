import { getBwdInfoApi } from '@/api/bwd'

import { keysClone } from '@/utils/lang'
import initState from './initState'

const state = {
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
  catalogList: [
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
  fileCatalogData: Object.assign({}, initState.fileCatalogData),
  searchData: Object.assign({}, initState.searchData),
  adSearchData: Object.assign({}, initState.adSearchData),
  fileFieldsData: Object.assign({}, initState.fileFieldsData)
}

const getters = {
  currentCatalogItem(state) {},
  currentFieldsRow(state) {
    return state.fieldsList.find(item => item.id === state.currentColumn)
  }
}
const mutations = {
  setCurrentCatalog: (state, form) => {},
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
