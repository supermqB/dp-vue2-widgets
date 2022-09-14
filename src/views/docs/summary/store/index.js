import {
  downloadLiteratureApi,
  getSimilarLiteratureListApi,
  editLiteratureApi,
  queryLiteratureApi
} from '@/api/doc'
import { DOCTYPEOPTIONS } from '@/utils/const'

const contentList = [
  {
    id: ['summary'],
    label: '摘要'
  },
  {
    id: ['catalogGrp1', 'catalogGrp2', 'catalogGrp3'],
    label: '分类'
  },
  {
    id: ['keywords'],
    label: '关键字'
  },
  {
    id: ['source'],
    label: '来源'
  },
  {
    id: ['releaseTime'],
    label: '发布年限'
  },
  {
    id: ['reliability'],
    label: '置信度'
  }
]

const state = {
  id: '',
  detail: {},
  literatureList: [],
  filter: '',
  literatureForm: {}
}

const getters = {
  summaryDetail(state) {
    const { title, titleEn, author, organization } = state.detail
    const detail = {
      title,
      titleEn,
      author,
      organization,
      contentList: []
    }
    detail.contentList = contentList.map(item => {
      return {
        label: item.label,
        content: item.id.map(key => state.detail[key]).join(' ')
      }
    })
    return detail
  },
  literatureFilterList(state) {
    return state.literatureList.filter(
      item => item.title.indexOf(state.filter) > -1
    )
  }
}

const mutations = {
  setFilter(state, value) {
    if (!value) {
      state.filter = ''
    } else {
      state.filter = value
    }
  },
  setID(state, value) {
    state.id = value
  },
  setDetail(state, value) {
    state.detail = Object.assign({}, value, {
      catalogCode: [value.catalogCode]
    })
  },
  setLiteratureList(state, value) {
    state.literatureList = value.map(item => {
      const res = DOCTYPEOPTIONS.find(it => it.value === item.docType)
      const { catalogGrp1, catalogGrp2, catalogGrp3 } = item
      return Object.assign({}, item, {
        docType: res.label,
        catalogGrp: `${catalogGrp1 ? catalogGrp1 : ''} ${
          catalogGrp2 ? catalogGrp2 : ''
        } ${catalogGrp3 ? catalogGrp3 : ''}`
      })
    })
  }
}

const actions = {
  async queryLiterature({ state, commit }) {
    const res = await queryLiteratureApi(state.id)
    if (res.success) {
      commit('setDetail', res.value)
    }
  },
  async getSimilarLiteratureList({ state, commit }) {
    if (!state.detail.identifier) return
    const res = await getSimilarLiteratureListApi(state.detail.identifier)
    commit('setLiteratureList', res.value)
  },
  async submitEditLiterature({}, form) {
    return await editLiteratureApi(form)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
