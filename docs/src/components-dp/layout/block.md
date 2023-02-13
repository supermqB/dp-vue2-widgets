# Block 块

使用 Blocks 和 Block 的嵌套，可以轻松进行页面布局和区块扩展

### 垂直布局(默认)

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

### 水平布局

::: demo

```html
<template>
  <dp-blocks class="blocks blocks-2" direction="row">
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

### 复杂嵌套

::: demo

```html
<template>
  <dp-blocks class="blocks blocks-3">
    <dp-block>
      <template slot="header">
        <dp-title text="我是标题" />
      </template>
      <div class="block-body">Block 1</div>
    </dp-block>
    <dp-block>
      <dp-blocks class="blocks-3__row" direction="row">
        <dp-block>
          <template slot="header">
            <dp-title text="我是标题" />
          </template>
          <div class="block-body">Block 2 - 1</div>
        </dp-block>
        <dp-block>
          <template slot="header">
            <dp-title text="我是标题" />
          </template>
          <div class="block-body">Block 2 - 2</div>
        </dp-block>
      </dp-blocks>
    </dp-block>
  </dp-blocks>
</template>
```

:::

### 自定义尺寸：size 属性

::: demo

```html
<template>
  <dp-blocks class="blocks blocks-4">
    <dp-block size="100px">
      <div class="block-body">Block 1 - 高度100px</div>
    </dp-block>
    <dp-block>
      <dp-blocks class="blocks-3__row" direction="row">
        <dp-block size="200px">
          <div class="block-body">Block 2 - 1 宽度200px</div>
        </dp-block>
        <dp-block>
          <template slot="header">
            <dp-title text="我是标题" />
          </template>
          <div class="block-body">Block 2 - 2 auto</div>
        </dp-block>
      </dp-blocks>
    </dp-block>
  </dp-blocks>
</template>
```

:::

### 自定义尺寸: flex 属性

::: demo

```html
<template>
  <dp-blocks class="blocks blocks-5">
    <dp-block :flex="2">
      <div class="block-body">Block 1 - flex 2</div>
    </dp-block>
    <dp-block :flex="3">
      <div class="block-body">Block 2 - flex 5</div>
    </dp-block>
  </dp-blocks>
</template>
```

:::

### Blocks Props

| 参数      | 说明                                                                            | 类型   | 可选值 | 默认值 |
| --------- | ------------------------------------------------------------------------------- | ------ | ------ | ------ |
| direction | 子容器 dp-block 的排列方式 column 垂直 / row 水平 同 css 的 flex-direction 的值 | string | --     | column |

### Block Props

| 参数                   | 说明                                                                                     | 类型    | 可选值 | 默认值 |
| ---------------------- | ---------------------------------------------------------------------------------------- | ------- | ------ | ------ |
| height(可由 size 代替) | Block 的高度，默认 CSS 为 flex:1，设置了则会变成固定高度                                 | string  | --     | auto   |
| size                   | Block 的尺寸，垂直方向为高度，水平方向为宽度，默认 CSS 为 flex:1，设置了则会变成固定高度 | string  | --     | auto   |
| flex                   | flex 样式的值                                                                            | number  | --     | 1      |
| header-height          | HeaderSlot 的高度，默认 CSS 为 flex:1，设置了则会变成固定高度                            | string  | --     | auto   |
| no-border              | 是否隐藏当前 block 与前一个 block 之间的边框                                             | boolean | --     | false  |

### Block Slot

| name   | 说明                                        |
| ------ | ------------------------------------------- |
| header | 插入头部区域内容，一般用来显示 block 的标题 |
