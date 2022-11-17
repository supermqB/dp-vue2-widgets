# Radio 单选框

::: demo
```html
<template>
  <el-radio v-model="value" label="1">选项一</el-radio>
  <el-radio v-model="value" label="2">选项二</el-radio>
  <el-radio v-model="value" label="3">选项三</el-radio>
  <el-radio v-model="value2" disabled label="1">不可操作</el-radio>
  <el-radio v-model="value2" disabled label="2">不可操作</el-radio>
</template>
<script>
  export default {
    data() {
      return {
        value: '1',
        value2: '1',
      }
    },
  }
</script>
```
:::
