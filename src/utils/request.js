import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'
import Loading from './loading'

const loading = new Loading()

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API ?? '/api', // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    // loading.showLoading()
    return config
  },
  error => {
    // do something with request error
    // loading.closeLoading()
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    if (response.config.responseType === 'blob') {
      return response
    }
    const res = response.data
    if (!res.success) {
      Message({
        message: `[${res.code}]:${res.message}`,
        type: 'error',
        duration: 3 * 1000
      })
    }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 3 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

export function get(url, params = {}) {
  return service({
    url,
    params,
    method: 'get'
  })
}

export function post(url, data = {}, params = {}) {
  return service({
    url,
    params,
    data,
    method: 'post'
  })
}

export function put(url, data = {}) {
  return service({
    url,
    data,
    method: 'put'
  })
}

export function postWithFile(url, data = {}) {
  const formData = new FormData()
  Object.keys(data).forEach(key => {
    formData.append(key, data[key])
  })
  return service({
    url,
    method: 'post',
    headers: {
      'Content-Type': 'multipart/form-data'
    },
    data: formData
  })
}
