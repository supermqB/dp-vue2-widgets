<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path }">
      <span class="base">{{ baseLabel }}</span>
    </el-breadcrumb-item>
    <el-breadcrumb-item v-if="currentLabel">
      <span class="current">{{ currentLabel }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      default: ''
    },
    baseLabel: {
      type: String,
      default: '事件模型管理'
    },
    currentLabel: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="scss">
  ::v-deep .el-breadcrumb__inner {
    font-weight: normal;
  }
  .base {
    color: rgba(0,0,0, 0.45)
  }
  .current {
    color: rgba(0,0,0, 0.85)
  }
</style>