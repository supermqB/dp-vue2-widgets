<template>
  <el-dialog :title="title" :visible.sync="isOpen" class="dp_dialog">
    <slot>test slot</slot>
    <span slot="footer" class="dialog-footer">
      <el-button @click="isOpen = false">取消</el-button>
      <el-button type="primary" @click="finishHandler">确定</el-button>
    </span>
  </el-dialog>
</template>
<script>
export default {
  props: {
    title: String
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    finishHandler() {
      this.$emit('dialog-complete')
      this.toggleOpen()
    }
  }
}
</script>
<style lang="scss">
.dp_dialog {
  .el-dialog__header {
    padding: 11px 20px 11px;
    .el-dialog__headerbtn {
      top: 17px;
      right: 17px;
    }
  }
  .el-dialog__body {
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
  .el-dialog__footer {
    height: 40px;
    padding: 6px 17px 6px;
  }
}
</style>
