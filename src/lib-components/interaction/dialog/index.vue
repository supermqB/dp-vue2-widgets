<template>
  <el-dialog
    ref="dpDialog"
    class="dp-dailog"
    :title="title"
    :visible="dialogVisible"
    :width="width"
    :close-on-click-modal="closeOnClickModal"
    v-bind="$attrs"
    v-on="$listeners"
    @close="handleClose"
  >
    <template #default>
      <slot></slot>
    </template>
    <template #footer>
      <slot name="footer"
        ><el-button @click="handleClose">取 消</el-button>
        <el-button class="save-btn" @click="handleSave">保 存</el-button></slot
      >
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: 'DpDialog',
  props: {
    title: {
      type: String,
      default: '标题'
    },
    dialogVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: String,
      default: '50%'
    },
    // 是否可以通过点击 modal 关闭 Dialog
    closeOnClickModal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {}
  },
  methods: {
    // 关闭弹窗
    handleClose() {
      this.$emit('update:dialogVisible', false)
    },
    // 保存
    handleSave() {
      this.$emit('handleSave')
    }
  }
}
</script>

<style scoped lang="scss">
$spacing16: 16px;
::v-deep .el-dialog {
  .el-dialog__header {
    height: 46px;
    padding: $spacing16 $spacing16 0;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    .el-dialog__title {
      font-size: 16px;
      color: #303133;
      font-weight: 600;
      line-height: normal;
    }
    .el-dialog__headerbtn {
      top: $spacing16;
      right: $spacing16;
    }
  }
  .el-dialog__body {
    max-height: 50vh;
    padding: 20px 24px;
    overflow: auto;
  }
  .el-dialog__footer {
    height: 40px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 $spacing16;
    border-top: 1px solid #e5e5e5;
    .el-button + .el-button {
      margin-left: 6px;
    }
    .save-btn {
      color: #2f63b9;
      border: 1px solid rgba(47, 99, 185, 0.5);
    }
  }
}
</style>
