# Checkbox 多选框

::: demo
```html
<template>
  <el-checkbox-group v-model="checkList">
    <el-checkbox label="选项一"></el-checkbox>
    <el-checkbox label="选项二"></el-checkbox>
    <el-checkbox label="选项三"></el-checkbox>
    <el-checkbox label="不可操作(但是被选中)" disabled></el-checkbox>
    <el-checkbox label="不可操作" disabled></el-checkbox>
  </el-checkbox-group>
</template>

<script>
  export default {
    data() {
      return {
        checkList: ['选项一','不可操作(但是被选中)']
      }
    },
  }
</script>
```

:::
