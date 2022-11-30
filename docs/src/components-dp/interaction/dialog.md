# Dialog 对话框

### 带图标按钮

::: demo

```html
<template>
  <div>
    <el-button type="primary" @click="openDialog">打开DpDialog弹框</el-button>
    <dp-dialog
      :dialogVisible.sync="dialogVisible"
      @handleSave="handleSave"
      @open="handleOpen"
    >
      <div>我是内容</div>
    </dp-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        dialogVisible: false
      }
    },
    methods: {
      openDialog() {
        this.dialogVisible = true
      },
      handleSave() {
        console.log('保存')
      },
      handleOpen() {
        console.log('打开')
      }
    }
  }
</script>
```

:::

| 参数              | 说明                           | 类型    | 可选值 | 默认值 |
| ----------------- | ------------------------------ | ------- | ------ | ------ |
| title             | 标题                           | String  | --     | 标题   |
| dialogVisible     | 显示弹框的标识                 | Boolean | --     | false  |
| width             | 弹框宽度                       | String  | --     | 50%    |
| closeOnClickModal | 是否允许点击外侧遮罩来关闭弹窗 | Boolean | --     | false  |
