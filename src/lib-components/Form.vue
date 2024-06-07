<template>
  <el-form
    ref="el_form"
    :model="formData"
    v-bind="$attrs"
    :rules="formRule"
    :show-message="false"
    @submit.native.prevent
  >
    <el-form-item
      v-for="cfg in formCfg"
      :label="cfg.label"
      :prop="cfg.id"
      :key="cfg.id"
      :class="cfg.clazzName"
    >
      <component
        :is="cfg.type"
        v-bind="cfg.elOptions"
        v-on="cfg.elEvents"
        v-model="formData[cfg.id]"
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
