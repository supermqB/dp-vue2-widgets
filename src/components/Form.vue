<template>
  <el-form
    ref="el_form"
    :model="formData"
    :rules="formRule"
    :show-message="false"
  >
    <el-form-item
      v-for="cfg in formCfg"
      :label="cfg.label"
      :prop="cfg.id"
      :key="cfg.id"
    >
      <component
        :is="cfg.type"
        v-bind="cfg.elOptions"
        v-on="cfg.elEvents"
        v-model="formData[cfg.id]"
      >
        <el-option v-for="(opt,index) in cfg.options" v-bind="prepareOpt(opt)" :key="index">
        </el-option>
      </component>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    formData: Object,
    formCfg: Array,
    formRule: {
      type: Object,
      default: () => {
        return {}
      }
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
    validate(func) {
      this.$refs.el_form.validate(valid => {
        if (!valid) {
          this.$message.warning('请完善表单内容！')
        } else {
          func()
        }
      })
    }
  }
}
</script>
