// import { bwd接口 } from '@/api/bwd'
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
  tableData: [
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
  addFileCatalogData: {},
  editFileCatalogData: {},
  searchData: Object.assign({}, initState.searchData),
  adSearchData: Object.assign({}, initState.adSearchData),
  editFileFieldsData: Object.assign({}, initState.editFileFieldsData),
  addFileFieldsData: Object.assign({}, initState.addFileFieldsData)
}

const getters = {
  currentCatalogItem(state) {},
  currentColumnRow(state) {
    return state.tableData.find(item => item.id === state.currentColumn)
  }
}
const mutations = {
  setCurrentCatalog: (state, form) => {},
  setCurrentColumn: (state, form) => {},
  setColumnForm(state, form) {
    if (form) {
      keysClone(state.editFileFieldsData, form)
    } else {
      state.addFileFieldsData = Object.assign({}, initState.addFileFieldsData)
    }
  },
  setIsAdvance: (state, isAdvance) => {
    if (state.isAdvance !== isAdvance) {
      state.isAdvance = isAdvance
      state.pageInfo.curPage = 1
    }
  },
  setCurrentColumn: (state, column) => {
    if (!column) {
      state.currentColumn =
        state.columnList && state.columnList.length
          ? state.columnList[0].id
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
  async queryFileFields({ commit }) {
    const { curPage, pageSize } = state.pageInfo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
