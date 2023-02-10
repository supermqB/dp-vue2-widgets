<template>
  <el-dialog
    :custom-class="customClass"
    :visible.sync="isOpen"
    class="dp_dialog"
    :top="top"
    :close-on-click-modal="false"
    :append-to-body="appendToBody"
    :modal-append-to-body="modalAppendTobody"
    @closed="onClosed"
  >
    <slot>test slot</slot>
    <span slot="title">
      <Title :title="title" class="dpui_dialogTitle" />
    </span>
    <span slot="footer" class="dialog-footer">
      <el-button @click="isOpen = false">取消</el-button>
      <el-button
        type="primary"
        @click="finishHandler"
        :disabled="!enableConfirm"
        >确定</el-button
      >
    </span>
  </el-dialog>
</template>
<script>
import Title from './Title.vue'
export default {
  props: {
    title: String,
    enableConfirm: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    customClass: {
      type: String,
      default: () => {
        return ''
      }
    },
    appendToBody: {
      type: Boolean,
      default: () => {
        return false
      }
    },
    modalAppendTobody: {
      type: Boolean,
      default: () => {
        return true
      }
    },
    closeAfterConfirm: {
      type: Boolean,
      default: false
    },
    top: {
      type: String,
      default: '15vh'
    }
  },
  data() {
    return { isOpen: false }
  },
  methods: {
    toggleOpen() {
      this.isOpen = !this.isOpen
    },
    finishHandler() {
      this.$emit('dialog-complete')
      this.closeAfterConfirm && this.toggleOpen()
    },
    onClosed() {
      this.$emit('dialog-closed')
    }
  },
  components: {
    Title
  }
}
</script>
<style lang="scss">
.dpui_dialogTitle {
  height: 23px !important;
  position: relative;
  bottom: 4px;
  .dp-subtitle__text {
    font-size: 15px;
    top: 5px;
    color: #333;
  }
}
</style>
