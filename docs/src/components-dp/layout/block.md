# Block 块

使用 Blocks 和 Block 的嵌套，可以轻松进行页面布局和区块扩展

::: demo

```html
<template>
  <dp-blocks class="blocks blocks-1">
    <dp-block>
      <template slot="header">
        <dp-title text="我是标题" />
      </template>
      <div class="block-body">Block 1</div>
    </dp-block>
    <dp-block>
      <template slot="header">
        <dp-title text="我是标题" />
      </template>
      <div class="block-body">Block 2</div>
    </dp-block>
  </dp-blocks>
</template>
```

:::

### Block 属性

| 参数          | 说明                                         | 类型    | 可选值 | 默认值 |
| ------------- | -------------------------------------------- | ------- | ------ | ------ |
| height        | 整体高度                                     | String  | --     | auto   |
| header-height | 头部区域高度                                 | String  | --     | auto   |
| no-border     | 是否隐藏当前 block 与上一个 block 之间的边框 | Boolean | --     | false  |

### Block Slot

| name   | 说明                                      |
| ------ | ----------------------------------------- |
| header | 插入头部区域内容，一般用来显示 block 标题 |
