import { Loading as ElLoading } from 'element-ui'
import Vue from 'vue'
import { debounce } from 'lodash'

export default class Loading {
  constructor() {
    this.loadingInstance = null
    this.count = 0
  }

  showLoading() {
    if (this.count === 0 && !this.loadingInstance) {
      this.loadingInstance = ElLoading.service({
        target: 'body',
        text: '正在加载...',
        spinner: 'el-icon-loading'
      })
    }
    this.count++
  }

  closeLoading() {
    Vue.nextTick(() => {
      this.count--
      this.count = Math.max(this.count, 0)
      if (this.count === 0) {
        debounce(() => {
          if (this.loadingInstance) {
            this.loadingInstance.close()
            this.loadingInstance = null
          }
        }, 500)()
      }
    })
  }
}
