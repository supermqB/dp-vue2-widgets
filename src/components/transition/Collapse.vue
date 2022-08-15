<template>
  <transition v-on="listeners">
    <div v-if="visible" class="x-collapse-transition">
      <slot />
    </div>
  </transition>
</template>

<script>
const listeners = {
  enter (el) {
    el.style.height = 'auto'
    let endWidth = window.getComputedStyle(el).height
    el.style.height = '0px'
    el.offsetHeight
    el.style.height = endWidth
  },
  afterEnter (el) {
    el.style.height = null
  },
  leave (el) {
    el.style.height = window.getComputedStyle(el).height
    el.offsetHeight
    el.style.height = '0px'
  },
  afterLeave (el) {
    el.style.height = null
  }
}
export default {
  props: {
    visible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      listeners
    }
  }
}
</script>

<style scoped lang="scss">
.x-collapse-transition {
  overflow: hidden;
  transition: height .5s ease-in-out;
}
</style>