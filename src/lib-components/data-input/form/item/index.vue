<template>
  <el-form-item :label="cfg.label" :prop="cfg.id" :class="cfg.clazzName">
    <component
      :is="cfg.type"
      v-bind="cfg.elOptions"
      v-on="cfg.elEvents"
      :value="value"
      @input="handleChange"
    >
      <el-option
        v-for="(opt, index) in cfg.options"
        v-bind="prepareOpt(opt)"
        :key="index"
      >
      </el-option>
    </component>
  </el-form-item>
</template>
<script>
export default {
  name: 'DpFormItem',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    cfg: Object,
    value: String
  },
  methods: {
    handleChange(v) {
      this.$emit('input', v)
    },
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
    }
  }
}
</script>
<style lang="scss" scoped></style>
