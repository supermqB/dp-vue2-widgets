import request from '../utils/request'

const userApiPath = process.env.VUE_APP_USER_API_PATH ?? '/user'
const authApiPath = process.env.VUE_APP_AUTH_API_PATH ?? '/auth'

export function login(data) {
  return request({
    url: userApiPath + '/api/user/login',
    method: 'post',
    data
  })
}

export function getInfo() {
  return request({
    url: userApiPath + '/backend/user/getInfo',
    method: 'get'
  })
}

export function logout() {
  return request({
    url: authApiPath + '/user/logout',
    method: 'get'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: authApiPath + '/api/auth/code',
    headers: {
      isToken: false
    },
    method: 'get',
    timeout: 20000
  })
}
