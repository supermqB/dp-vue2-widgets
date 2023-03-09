import { setToken, removeToken } from '../utils/token'
import * as authApi from '../api/auth'

const initState = () => ({
  id: -1,
  name: '',
  roles: [],
  permissions: [],
  userData: {}
})

// const appParams = {
//   appId: process.env.VUE_APP_USER_CENTER_APP_ID,
//   appkey: process.env.VUE_APP_USER_CENTER_APP_KEY
// }

const state = initState()

const getters = {
  isLogin: state => state.id > 0,
  info: state => ({
    id: state.id,
    name: state.name,
    roles: state.roles,
    permissions: state.permissions
  })
}

const actions = {
  async login({ commit }, data) {
    let requestParams = {
      // ...appParams,
      ...data
    }

    const r = await authApi.login(requestParams)
    // console.log({ r })
    if (r && r.code == 200) {
      // commit('set', r.data.loginUser)
      setToken(r.data.access_token)
      return {
        success: true
      }
    } else {
      return {
        success: false,
        msg: r.msg
      }
    }
  },
  async getInfo({ commit }) {
    const r = await authApi.getInfo()
    console.log({ getInfo: r })
    if (r?.code == 200) {
      commit('set', {
        id: r.data.id,
        name: r.data.userName,
        roles: r.data.userRoles,
        permissions: r.data.permissions,
        userData: r.data
      })
    } else {
      commit('clear')
      // console.log({ removeToken: removeToken() })
    }
  },

  async logout({ commit }) {
    const r = await authApi.logout()
    if (r?.code == 200) {
      commit('clear')
      removeToken()
      return {
        success: true
      }
    } else {
      return {
        success: false
      }
    }
  }
}

const mutations = {
  set: (state, data) => {
    state.id = data.id
    state.name = data.name
    state.roles = data.roles
    state.permissions = data.permissions
    state.userData = data.userData
  },
  clear: state => {
    Object.assign(state, initState())
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
