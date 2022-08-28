import { getBwdInfoApi } from '@/api/bwd'
import { updateFileCatalogApi } from '@/api/bwd'
import { addFileCatalogApi } from '@/api/bwd'

import { keysClone } from '@/utils/lang'
import { get, post } from '@/utils/request'
import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'
import initState from './initState'

const state = {
  // 左侧数据
  currentBwd: '',
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
  currentField: '',
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
  // 返回id===当前选中的bwd文件的id的信息，就是中间部分的每条数据
  currentBwdItem(state) {
    for (let item of state.bwdList) {
      const res = item.children.find(it => {
        return state.currentBwd === it.id
      })
      if (res) {
        return Object.assign({}, res)
      }
    }
    return {}
  },
  // 左侧栏的文件总数
  totalNumber(state) {
    let res = 0
    for (let item of state.bwdList) {
      res += item.children.length
      if (res) return res
      return 0
    }
  },
  //
  currentFieldRow(state) {
    return state.fieldsList.find(item => item.id === state.currentField)
  }
}
const mutations = {
  // 左侧bwd处理（动作set）
  // 赋值当前点击的bwd的id,
  setCurrentBwd(state, value) {
    state.currentBwd = value
  },
  // 将接口获取的数据赋值至页面每一条
  // setCurrentBwdValue(state, value) {
  //   state.currentBwdItem = value
  // },
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
  },
  setPageInfo: (state, pageInfo) => {
    keysClone(state.pageInfo, pageInfo)
  }
}

const actions = {
  // 处理左侧bwd，调接口展示bwdlist(getCatalogApi)
  async loadBwdModules({ commit }) {
    const result = await get('data-mapping/getCatalog')
    if (result.success) {
      commit('setBwdList')
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
    state.fieldsList = records
    commit('setPageInfo', pageInfo)
  },
  // async loadCurrentBwdValue({ commit }, state) {
  //   const bwdId = state.currentBwd.id
  //   const result = await get(`sbr/getOverView/${bwdId}`)
  //   if (result.success) {
  //     commit('setCurrentBwdValue', result.value)
  //   }
  // },
  // 左侧表单提交，更新目录接口addFileCatalogApi,updateFileCatalogApi
  // 如果说要去操作store里面的数据的话，就去执行dispatch动作
  async submitFileCatalog({ dispatch, state }) {
    const { id, name, index } = state.fileCatalogData
    if (!id) {
      await addFileCatalogApi(name, index, state.fileCatalogData.state)
      this._vm.$message.success('新增文件目录成功')
    } else {
      await updateFileCatalogApi(id, name, index, state.fileCatalogData.state)
      this._vm.$message.success('编辑文件目录成功')
    }
    dispatch('loadBwdModules')
  },
  async submitFields({ dispatch, state }) {
    const { id, index, nameCn, nameEn } = state.fileFieldsData
    const datasetId = parseInt(state.currentBwd)
    if (!id) {
      await addFileFieldsApi({
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
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
