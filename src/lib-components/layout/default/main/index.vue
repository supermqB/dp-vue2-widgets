<template>
  <div class="expand_div" :style="zoomStyle" ref="expandDiv">
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
  w: 1920,
  h: 893
}
export default {
  name: 'AppMain',
  data() {
    return { zoomStyle: {} }
  },
  methods: {
    getZoomRatio() {
      let { width: w, height: h } =
        this.$refs.expandDiv.parentNode.getBoundingClientRect()
      return Math.min(w / DEFAULT_DIMS.w, h / DEFAULT_DIMS.h)
    },
    setZoomStyle() {
      let keepWHRatio = this.$route.meta.keepWHRatio
      let ratio = this.getZoomRatio()
      let { width: w } = document.body.getBoundingClientRect()
      this.zoomStyle = keepWHRatio
        ? {
            width: `${DEFAULT_DIMS.w}px`,
            height: `${DEFAULT_DIMS.h}px`,
            position: 'relative',
            transform: `scale(${ratio})`,
            left: `${(w - DEFAULT_DIMS.w) / 2}px`,
            top: `${(-DEFAULT_DIMS.h * (1 - ratio)) / 2}px`
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
