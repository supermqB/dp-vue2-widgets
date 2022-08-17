<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>{{ baseLabel }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="currentLabel">
      <b>{{ currentLabel }}</b>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  props: {
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