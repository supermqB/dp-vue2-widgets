<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item>{{ baseLabel }}</el-breadcrumb-item>
    <el-breadcrumb-item v-if="currentItem.nameCn && currentItem.nameEn">
      <b>{{ `${currentItem.nameCn}(${currentItem.nameEn})` }}</b>
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
    currentItem: {
      type: Object,
      default: () => {}
    }
  }
}
</script>