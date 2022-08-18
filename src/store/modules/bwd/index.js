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
  async queryColumn({ commit }) {
    const { curPage, pageSize } = state.pageInfo
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules: {}
}
