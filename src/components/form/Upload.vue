<template>
  <div >
    <el-upload
      action=""
      class="uploadWrap"
      :multiple="false"
      :file-list="[]"
      :show-file-list="false"
      :auto-upload="false"
      :on-change="handleChange"
      >
      <el-input
        :value="`${ file &&  file.name ? file.name : ''}`"
        @clear="handleClear"
        clearable>
        <el-button type="primary" slot="append">导入</el-button>
      </el-input>
      <p slot="tip" class="downloadTemplate">请下载导入模板(性别代码.xlsx)</p>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      fileList: []
    }
  },
  mounted() {},
  methods: {
    handleChange(file) {
      this.$emit("update:file", file)
    },
    handleClear() {
      this.$emit("update:file", {})
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
    line-height: 30px;
    font-size: 12px
  }
}
</style>