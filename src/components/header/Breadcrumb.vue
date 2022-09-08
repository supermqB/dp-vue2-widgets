<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path }">{{ baseLabel }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="currentLabel">
      <b>{{ currentLabel }}</b>
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
</style>