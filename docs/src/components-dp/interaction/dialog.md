# Dialog 对话框

该组件支持使用 ElementUI 自定义传参和方法。

### 默认 type:default，显示取消和保存按钮

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

### 默认 type:info，只显示确定按钮

::: demo

```html
<template>
  <div>
    <el-button type="primary" @click="openDialog">打开DpDialog弹框</el-button>
    <dp-dialog
      :dialogVisible.sync="dialogVisible"
      type="info"
      @handleSave="handleSave"
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
      }
    }
  }
</script>
```

:::

### 自定义插槽

::: demo

```html
<template>
  <div>
    <el-button type="primary" @click="openDialog">打开DpDialog弹框</el-button>
    <dp-dialog :dialogVisible.sync="dialogVisible">
      <div>我是内容</div>
      <template #footer>
        <el-button plain @click="handleClose">关 闭</el-button>
        <el-button plain @click="handleClose">下一步</el-button>
        <el-button type="primary" plain @click="handleClose">确 定</el-button>
      </template>
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
      handleClose() {
        this.dialogVisible = false
      }
    }
  }
</script>
```

:::

### 参数说明 props

| 参数              | 说明                           | 类型    | 可选值 | 默认值  |
| ----------------- | ------------------------------ | ------- | ------ | ------- |
| title             | 标题                           | String  | --     | 标题    |
| dialogVisible     | 显示弹框的标识                 | Boolean | --     | false   |
| width             | 弹框宽度                       | String  | --     | 50%     |
| closeOnClickModal | 是否允许点击外侧遮罩来关闭弹窗 | Boolean | --     | false   |
| minHeight         | 弹框 body 最小高度             | String  | --     | 200px   |
| maxHeight         | 弹框 body 最大高度             | String  | --     | 50vh    |
| type              | 按钮类型                       | String  | --     | default |

### 事件说明 event

| 参数        | 说明         | 类型     | 可选值 | 默认值 |
| ----------- | ------------ | -------- | ------ | ------ |
| handleClose | 关闭弹窗     | Function | --     | --     |
| handleSave  | 默认保存方法 | Function | --     | --     |
