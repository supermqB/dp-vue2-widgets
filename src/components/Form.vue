<template>
  <el-form ref="el_form" :model="formData" :rules="formRule" :show-message="false" :inline="true">
    <el-form-item v-for="cfg in formCfg" :label="cfg.label" :prop="cfg.id" :key="cfg.id">
      <component
        :is="cfg.type"
        v-bind="cfg.elOptions"
        v-model="formData[cfg.id]"
        :style="{
          width: `${cfg.width}px`
        }"
      >
        <el-option
          v-for="opt in cfg.options"
          :key="opt.value || opt"
          :label="opt.label || opt"
          :value="opt.value || opt"
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
    formRule:{
        type: Object,
        default:()=>{
            return {}
        }
    }
  }
}
</script>
