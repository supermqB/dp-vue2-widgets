<template>
  <div class="expand_div" :style="zoomStyle">
    <transition name="el-fade-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="el-fade-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
</template>
<script>
const DEFAULT_DIMS = {
  width: '1920px',
  height: '893px',
  position: 'relative'
}
export default {
  name: 'AppMain',
  data() {
    return { zoomStyle: {} }
  },
  methods: {
    getZoomRatio() {
      let { width: w, height: h } = document.body.getBoundingClientRect()
      return Math.min(w / 1920, h / 976)
    },
    setZoomStyle() {
      let keepWHRatio = this.$route.meta.keepWHRatio
      let ratio = this.getZoomRatio()
      let { width: w, } = document.body.getBoundingClientRect()
      this.zoomStyle = keepWHRatio
        ? {
            ...DEFAULT_DIMS,
            transform: `scale(${ratio})`,
            left: `${(w-1920) / 2}px`,
            top: `${(-893 * (1 - ratio)) / 2}px`
          }
        : {}
    }
  },
  mounted() {
    this.setZoomStyle()
    window.addEventListener('resize', this.setZoomStyle)
    window.updateViewZoom = this.setZoomStyle.bind(this)
  },
  unmounted() {
    window.removeEventListener('resize', this.setZoomStyle)
  }
}
</script>
