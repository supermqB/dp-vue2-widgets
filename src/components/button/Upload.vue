<template>
  <div>
    <el-upload
      action=""
      :multiple="false"
      :file-list="[]"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="handleChange"
    >
    <el-button type="primary" plain>导入</el-button>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: File,
      default: () => {}
    },
    showTip: {
      type: Boolean,
      default: () => true
    }
  },
  data() {
    return {
      fileName: ''
    }
  },
  methods: {
    handleChange(file) {
      this.fileName = file.name
      this.$emit('input', file.raw)
    },
    handleClear() {
      this.fileName = ''
      this.$emit('input', {})
    },
    handleFocus(event) {
      event.stopPropagation()
    },
    download() {
      this.$emit('onDownload')
    }
  }
}
</script>

<style scoped lang="scss">
::v-deep .uploadWrap {
  .el-upload {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-top: 3px;
  }
  .downloadTemplate {
    height: 30px;
    padding-left: 10px;
    font-size: 12px;
    display: flex;
    align-items: center;
    cursor: pointer;
    img {
      margin: 0 3px;
    }
    .inputTemplate {
      margin-right: 4px;
      letter-spacing: 0.5px;
      color: #1890ff;
    }
  }
}
</style>
