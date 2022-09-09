import {
  downloadLiteratureApi,
  getSimilarLiteratureListApi,
  editLiteratureApi,
  queryLiteratureApi
} from '@/api/doc'
import { DOCTYPEOPTIONS } from '@/utils/const'
import { flatten } from 'lodash'

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
  identifier: '',
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
  setIdentifier(state, value) {
    state.identifier = value
  },
  setDetail(state, value) {
    state.detail = Object.assign({}, value, {
      catalogCode: [value.catalogCode]
    })
  },
  setLiteratureList(state, value) {
    state.literatureList = value.map(item => {
      const res = DOCTYPEOPTIONS.find(it => it.value === item.docType)
      const catalogGrp1 = item.catalogGrp1 ? item.catalogGrp1 : ''
      const catalogGrp2 = item.catalogGrp2 ? item.catalogGrp2 : ''
      const catalogGrp3 = item.catalogGrp3 ? item.catalogGrp3 : ''
      return Object.assign({}, item, {
        docType: res.label,
        catalogGrp: `${catalogGrp1} ${catalogGrp2} ${catalogGrp3}`
      })
    })
  }
}

const actions = {
  async queryLiterature({ state, commit }) {
    const res = await queryLiteratureApi(state.identifier)
    commit('setDetail', res.value)
  },
  async getSimilarLiteratureList({ state, commit }) {
    const res = await getSimilarLiteratureListApi(state.identifier)
    // const setLiteratureList =
    commit('setLiteratureList', res.value)
  },
  async submitEditLiterature({ state, commit }, form) {
    form.catalogCode = flatten(form.catalogCode)
    await editLiteratureApi(form)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
