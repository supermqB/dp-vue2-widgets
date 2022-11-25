# SearchBar 检索栏

### 默认配置

::: demo

```html
<template>
  <div style="height:40px">
    <dp-search-bar />
  </div>
</template>
```

:::

### 自定义文本内容

::: demo

```html
<template>
  <div style="height:40px">
    <dp-search-bar placeholder="自定义文本内容" />
  </div>
</template>
```

:::

### 隐藏默认显示的输入框

::: demo

```html
<template>
  <div style="height:40px">
    <dp-search-bar hideSearchInput />
  </div>
</template>
```

:::

| 参数            | 说明                     | 类型    | 可选值 | 默认值 |
| --------------- | ------------------------ | ------- | ------ | ------ |
| inputConfigs    | 表单输入框配置           | Array   | --     | []     |
| searchForm      | 数据双向绑定 v-model     | Object  | --     |        |
| placeholder     | 默认输入框显示的占位文本 | String  | --     | --     |
| hideSearchInput | 是否隐藏默认显示的输入框 | Boolean | --     | false  |
