<template>
  <el-form
    ref="el_form"
    :model="model"
    :rules="rules"
    v-bind="$attrs"
    inline
    @submit.native.prevent
  >
    <el-form-item
      v-for="cfg in configs"
      :label="cfg.label"
      :prop="cfg.id"
      :key="cfg.id"
      :class="cfg.clazzName"
    >
      <component
        :is="cfg.type"
        v-bind="cfg.elOptions"
        v-on="cfg.elEvents"
        v-model="model[cfg.id]"
      >
        <el-option
          v-for="(opt, index) in cfg.options"
          v-bind="prepareOpt(opt)"
          :key="index"
        >
        </el-option>
      </component>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  props: {
    // 表单数据对象
    model: {
      type: Object,
      default: () => ({})
    },
    // 表单项配置
    configs: {
      type: Array,
      default: () => []
    },
    // 表单校验规则
    rules: {
      type: Object,
      default: () => ({})
    },
    // 是否显示校验信息
    showMessage: {
      type: Boolean,
      default: false
    },
    labelWidth: {
      type: String,
      default: '58px'
    }
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
      this.$refs.el_form.resetFields()
    },
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.el_form.validate((valid, errObj) => {
          resolve({ valid, errObj })
        })
      })
    },
    clearValidate() {
      this.$refs.el_form.clearValidate()
    }
  }
}
</script>
<style lang="scss" scoped>
.el-form--inline {
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
      flex: 1 0 200px;
      // min-width: 150px;
      max-width: 300px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      box-sizing: border-box;
      height: 40px;
      border-bottom: 1px solid red;
      background: #dcf;
      .el-form-item__label {
        display: block;
        height: 28px;
        line-height: 28px;
        background: #cdf;
        flex: 0 0 58px;
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
