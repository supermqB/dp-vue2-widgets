<template>
  <dp-layout-container>
    <template #asideLeft>
      <el-button type="primary" @click="openDialog">打开DpDialog弹框</el-button>
      <dp-dialog
        :dialogVisible.sync="dialogVisible"
        @handleSave="handleSave"
        @open="handleOpen"
      >
        <div>我是内容</div>
      </dp-dialog>
    </template>
    <template #main> </template>
  </dp-layout-container>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false
    }
  },
  mounted() {},
  methods: {
    openDialog() {
      this.dialogVisible = true
    },
    handleSave() {
      console.log('保存')
    },
    handleOpen() {
      console.log('打开')
    }
  }
}
</script>

<style lang="scss" scoped></style>
