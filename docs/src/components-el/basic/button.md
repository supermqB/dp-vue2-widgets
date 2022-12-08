# Button 按钮

### 主要按钮

用于主行动点

::: demo

```html
<template>
  <el-row>
    <el-col :span="3">可用状态</el-col>
    <el-col :span="21">
      <el-button type="primary">按钮</el-button>
      <el-button type="primary">三个字</el-button>
      <el-button type="primary">四个文字</el-button>
      <el-button type="primary">五个长文字</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="3">禁用状态</el-col>
    <el-col :span="21">
      <el-button type="primary" disabled>按钮</el-button>
      <el-button type="primary" disabled>三个字</el-button>
      <el-button type="primary" disabled>四个文字</el-button>
      <el-button type="primary" disabled>五个长文字</el-button>
    </el-col>
  </el-row>
</template>
```

:::

### 次要按钮

用于次行动点

::: demo

```html
<template>
  <el-row>
    <el-col :span="3">可用状态</el-col>
    <el-col :span="21">
      <el-button>按钮</el-button>
      <el-button>三个字</el-button>
      <el-button>四个文字</el-button>
      <el-button>五个长文字</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="3">禁用状态</el-col>
    <el-col :span="21">
      <el-button disabled>按钮</el-button>
      <el-button disabled>三个字</el-button>
      <el-button disabled>四个文字</el-button>
      <el-button disabled>五个长文字</el-button>
    </el-col>
  </el-row>
</template>
```

:::

### 文字按钮

没有边框和背景色的按钮

:::demo

```html
<template>
  <el-row>
    <el-col :span="3">可用状态</el-col>
    <el-col :span="21">
      <el-button type="text">文字按钮</el-button>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="3">禁用状态</el-col>
    <el-col :span="21">
      <el-button type="text" disabled>文字按钮</el-button>
    </el-col>
  </el-row>
</template>
```

:::

<!-- ### 长按钮
没有边框和背景色的按钮

:::demo
```html
<el-button type="text">文字按钮</el-button>
<el-button type="text" disabled>文字按钮</el-button>
```
::: -->
<!--
### 加载中

点击按钮后进行加载操作，在按钮上显示加载状态

:::demo

```html
<el-button type="primary" :loading="true">加载中</el-button>
```

::: -->

属性参数

| 参数     | 说明                                       | 类型    | 可选值               | 默认值  |
| -------- | ------------------------------------------ | ------- | -------------------- | ------- |
| type     | 按钮类型:<br/>主要按钮、次要按钮、文字按钮 | String  | primary/default/text | default |
| disabled | 是否禁用                                   | Boolean | --                   | false   |
