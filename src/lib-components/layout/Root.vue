<template>
  <el-container :style="{ minWidth }">
    <el-header v-if="hasSlot.header" :height="headerHeight">
      <slot name="header" />
    </el-header>
    <el-main v-if="hasSlot.main">
      <slot name="main" />
    </el-main>
    <el-footer v-if="hasSlot.footer" :height="footerHeight">
      <slot name="footer" />
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'DpLayoutRoot',
  props: {
    minWidth: {
      type: String,
      default: '1366px'
    },
    headerHeight: {
      type: String,
      default: '51px'
    },
    footerHeight: {
      type: String,
      default: '32px'
    }
  },
  computed: {
    hasSlot() {
      return {
        header: typeof this.$slots.header !== 'undefined',
        main: typeof this.$slots.main !== 'undefined',
        footer: typeof this.$slots.footer !== 'undefined'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-container {
  height: 100%;
  .el-header,
  .el-main,
  .el-footer {
    padding: 0;
  }
  .el-main {
    overflow: auto;
  }
}
</style>
