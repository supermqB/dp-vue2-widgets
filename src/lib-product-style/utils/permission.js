import { getToken, removeToken } from './token'

const whiteList = ['login']

const loginRouter = { name: 'login' }

const beforeEach = async ({ to, from, next }, store, init = () => {}) => {
  // console.log({ to, from, next, token: getToken() })
  if (getToken()) {
    // console.log({ isLogin: store.getters.isLogin })
    // 没有登录信息 需要自动获取一下
    if (!store.getters['auth/isLogin']) {
      await store.dispatch('auth/getInfo')
      // console.log(store.getters.isLogin)
      if (!store.getters['auth/isLogin']) {
        // getInfo 失败 跳到登录页
        removeToken()
        next(loginRouter)
        return false
      } else {
        // 用户认证完成后，项目初始化的内容
        init()
      }
    }

    /* has token*/
    if (to.name === loginRouter.name) {
      next('/')
    } else {
      next()

      // if (store.getters.roles.length === 0) {
      //   isRelogin.show = true
      //   // 判断当前用户是否已拉取完user_info信息
      //   store.dispatch('GetInfo').then(() => {
      //     isRelogin.show = false
      //     store.dispatch('GenerateRoutes').then(accessRoutes => {
      //       // 根据roles权限生成可访问的路由表
      //       router.addRoutes(accessRoutes) // 动态添加可访问路由表
      //       next({ ...to, replace: true }) // hack方法 确保addRoutes已完成
      //     })
      //   }).catch(err => {
      //     // store.dispatch('LogOut').then(() => {
      //     store.dispatch('FedLogOut').then(() => {
      //       Message.error(err)
      //       next({ path: '/' })
      //     })
      //   })
      // } else {
      //   next()
      // }
    }
  } else {
    // 没有token
    if (store.getters['auth/isLogin'] == true) {
      store.commit('auth/clear')
    }
    if (whiteList.indexOf(to.name) !== -1) {
      // 在免登录白名单，直接进入
      next()
    } else {
      next(loginRouter) // 否则全部重定向到登录页
    }
  }
}

export { beforeEach }
