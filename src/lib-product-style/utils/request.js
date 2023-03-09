import axios from 'axios'
// import { MessageBox, Message } from 'element-ui'
// import store from '@/store'
// import router from '@/router'
import { getToken, removeToken } from './token'
// console.log({
//   baseURL:
//     process.env.BASE_URL.replace(/\/$/, '') +
//     (process.env.VUE_APP_BASE_API ?? '/api')
// })
// create an axios instance
const service = axios.create({
  baseURL:
    process.env.BASE_URL.replace(/\/$/, '') +
    (process.env.VUE_APP_BASE_API ?? '/api'),
  // process.env.VUE_APP_REAL_ROUTER_BASE.replace(/\/$/, '') +
  // (process.env.VUE_APP_BASE_API ?? '/api'), // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent
    if (getToken()) {
      config.headers['Authorization'] = 'Bearer ' + getToken()
    }

    // if (store.getters.token) {
    //   // let each request carry token
    //   // ['X-Token'] is a custom headers key
    //   // please modify it according to the actual situation
    //   config.headers['X-Token'] = getToken()
    // }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
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
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    // if (res.code !== 20000) {
    //   Message({
    //     message: res.message || 'Error',
    //     type: 'error',
    //     duration: 5 * 1000
    //   })

    // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;

    // 4002: Illegal token; 4001:
    // if (parseInt(res.code) === 4002 || parseInt(res.code) === 4001) {
    //   if (!localStorage.getItem('reLoginMsgBox')) {
    //     localStorage.setItem('reLoginMsgBox', true)
    //     // to re-login
    //     MessageBox.alert(
    //       '登录信息过期，即将跳转到登录页面',
    //       // 'Confirm logout',
    //       {
    //         confirmButtonText: '好的'
    //         // cancelButtonText: 'Cancel'
    //         // type: 'warning'
    //       }
    //     ).then(() => {
    //       removeToken()
    //       localStorage.removeItem('reLoginMsgBox')
    //       // store.commit('auth/clear')
    //       router.push({ name: 'login' })
    //       // store.dispatch('user/resetToken').then(() => {
    //       //   location.reload()
    //       // })
    //     })
    //   }

    //   return //Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
    return res
  },
  error => {
    console.log('err' + error) // for debug
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000
    // })
    return Promise.reject(error)
  }
)

export default service
