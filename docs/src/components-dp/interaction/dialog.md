# Dialog 对话框

该组件支持使用 ElementUI 自定义传参和方法。

### 默认 type:default，显示取消和保存按钮

::: demo

```html
<template>
  <div>
    <el-button type="primary" plain @click="openDialog"
      >打开DpDialog弹框</el-button
    >
    <dp-dialog :visible.sync="visible" @save="handleSave" @open="handleOpen">
      <div>我是内容</div>
    </dp-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      openDialog() {
        this.visible = true
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
    <el-button type="primary" plain @click="openDialog"
      >打开DpDialog弹框</el-button
    >
    <dp-dialog :visible.sync="visible" type="info" @save="handleSave">
      <div>我是内容</div>
    </dp-dialog>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        visible: false
      }
    },
    methods: {
      openDialog() {
        this.visible = true
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
    <el-button type="primary" plain @click="openDialog"
      >打开DpDialog弹框</el-button
    >
    <dp-dialog :visible.sync="visible">
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
        visible: false
      }
    },
    methods: {
      openDialog() {
        this.visible = true
      },
      handleClose() {
        this.visible = false
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
| visible           | 显示弹框的标识，支持.sync 修饰 | Boolean | --     | false   |
| width             | 弹框宽度                       | String  | --     | 50%     |
| closeOnClickModal | 是否允许点击外侧遮罩来关闭弹窗 | Boolean | --     | false   |
| minHeight         | 弹框 body 最小高度             | String  | --     | 200px   |
| maxHeight         | 弹框 body 最大高度             | String  | --     | 50vh    |
| type              | 按钮类型                       | String  | --     | default |

### 事件说明 event

| 参数 | 说明                       | 回调函数 |
| ---- | -------------------------- | -------- |
| save | 默认的保存按钮被点击时触发 | --       |

<el-alert
    title="支持element-ui原生的属性和事件"
    type="warning"
    :closable="false" />

[element-ui](https://element.eleme.cn/#/zh-CN/component/dialog)
