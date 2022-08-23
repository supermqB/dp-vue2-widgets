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
        @focus="handleFocus"
        @clear="handleClear"
        clearable>
        <el-button type="primary" slot="append">导入</el-button>
      </el-input>
      <p slot="tip" class="downloadTemplate">
        请
        <img src="@/assets/images/common/icons/download.png" />
        <span class="inputTemplate">下载导入模板</span>
        {{ templateFileName }}
      </p>
    </el-upload>
  </div>
</template>

<script>
export default {
  props: {
    file: {
      type: Object,
      default: () => {}
    },
    templateFileName: {
      type: String,
      default: '(性别代码.xlsx)'
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
    },
    handleFocus(event) {
      event.stopPropagation()
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
      color: #1890FF
    }
  }
}
</style>