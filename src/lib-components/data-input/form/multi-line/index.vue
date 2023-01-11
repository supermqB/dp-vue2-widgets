<template>
  <el-form
    ref="form"
    id="form"
    v-bind="$attrs"
    :show-message="showMessage"
    inline
    @submit.native.prevent
    :style="style"
  >
    <dp-form-item
      v-for="cfg in configs"
      :key="cfg.id"
      :cfg="cfg"
      v-model="$attrs.model[cfg.id]"
    />
    <el-form-item v-for="n of supplementNum" :key="n" />
  </el-form>
</template>

<script>
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  props: {
    // 表单项配置
    configs: {
      type: Array,
      default: () => []
    },
    // 是否显示校验错误信息 (默认不显示)
    showMessage: {
      type: Boolean,
      default: false
    },
    // 表单域标签的宽度
    labelWidth: {
      type: String,
      default: '80px'
    },
    // 表单域的最小宽度
    itemMinWidth: {
      type: String,
      default: '240px'
    },
    // 表单域的最大宽度
    itemMaxWidth: {
      type: String,
      default: '360px'
    }
  },
  data() {
    return {
      erd: null, // element-resize-detector实例
      supplementNum: 0 // 为了对齐 需要补齐的item数
    }
  },
  computed: {
    style() {
      return {
        '--label-width': this.labelWidth,
        '--item-min-width': this.itemMinWidth,
        '--item-max-width': this.itemMaxWidth
      }
    }
  },
  mounted() {
    // console.log(this.$attrs)

    this.erd = elementResizeDetectorMaker()
    this.$nextTick(() => {
      this.erd.listenTo(document.getElementById('form'), element => {
        // console.log({ element })
        let cfgLen = this.configs.length // 配置项数量
        let w = element.offsetWidth // 容器宽度
        let lineNum = Math.max(
          Math.floor(w / (parseInt(this.itemMinWidth) + 12)),
          Math.ceil(w / (parseInt(this.itemMaxWidth) + 12))
        ) // 一行可放下的数量

        this.supplementNum =
          cfgLen % lineNum == 0 ? 0 : lineNum - (cfgLen % lineNum)
        // console.log(w)
        // console.log(cfgLen)
        // console.log(lineNum)
        // console.log(this.supplementNum)
      })
    })
  },
  methods: {
    prepareOpt(opt) {
      return opt.label != null
        ? {
            ...opt,
            key: opt.value
          }
        : {
            key: opt,
            label: opt,
            value: opt
          }
    },
    resetFields() {
      this.$refs.form.resetFields()
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid, errObj) => {
          resolve({ valid, errObj })
        })
      })
    },
    clearValidate() {
      this.$refs.form.clearValidate()
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form {
  ::v-deep {
    display: flex;
    flex-wrap: wrap;
    // align-items: flex-start;
    // justify-content: flex-start;
    .el-form-item {
      margin-right: 12px;
      padding-right: 0;
      // margin-right: 0;
      // padding-right: 12px;
      margin-bottom: 0;
      // flex: 0 0 150px;
      flex: 1 0 var(--item-min-width);
      // min-width: 150px;
      max-width: var(--item-max-width);
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      height: 40px;
      // border-bottom: 1px solid red;
      // background: #dcf;
      .el-form-item__label {
        display: block;
        height: 28px;
        line-height: 28px;
        // background: #cdf;
        flex: 0 0 var(--label-width);
        padding-right: 6px;
        margin: 0;
        // padding: 0;
        // margin-right: 6px;
        text-align: right;
        overflow: hidden;
      }
      .el-form-item__content {
        display: block;
        // flex: 0 0 200px;
        flex: 1;
        min-width: 0;
        > .el-input {
          display: block;
          // min-width: 142px;
          width: 100%;
          > .el-input__inner {
            // min-width: 142px;
          }
        }
        > .el-select {
          display: block;
          // width: 92px;
          width: 100%;
          .el-input {
            .el-input__inner {
              // min-width: 206px;
            }
          }
        }
      }
    }
    .el-form-item + .el-form-item {
      // margin-left: 12px;
    }
  }
}
</style>
