# LayoutContainer 布局容器

### 布局一： 任务区(左) + 操作区(右)

::: demo

```html
<template>
  <dp-layout-container class="container container-1">
    <template #asideLeft>
      <div class="section asideLeft">AsideLeft</div>
    </template>
    <template #main>
      <div class="section main">Main</div>
    </template>
  </dp-layout-container>
</template>
```

:::

### 布局二： 操作区(左) + 工具区(右)

::: demo

```html
<template>
  <dp-layout-container class="container container-2">
    <template #main>
      <div class="section main">Main</div>
    </template>
    <template #asideRight>
      <div class="section asideRight">AsideRight</div>
    </template>
  </dp-layout-container>
</template>
```

:::

### 布局三：任务区(左) + 操作区(中) + 工具区(右)

::: demo

```html
<template>
  <dp-layout-container class="container container-3">
    <template #asideLeft>
      <div class="section asideLeft">AsideLeft</div>
    </template>
    <template #main>
      <div class="section main">Main</div>
    </template>
    <template #asideRight>
      <div class="section asideRight">AsideRight</div>
    </template>
  </dp-layout-container>
</template>
```

:::

### 布局四： 任务区(左) + 操作区(右)[上 下]

::: demo

```html
<template>
  <dp-layout-container class="container container-4" mainBottomHeight="50%">
    <template #asideLeft>
      <div class="section asideLeft">AsideLeft</div>
    </template>
    <template #main>
      <div class="section main">Main</div>
    </template>
    <template #mainBottom>
      <div class="section mainBottom">MainBottom</div>
    </template>
  </dp-layout-container>
</template>
```

:::

| 参数                 | 说明                 | 类型   | 可选值 | 默认值 |
| -------------------- | -------------------- | ------ | ------ | ------ |
| aside-left-width     | 左侧侧边栏宽度       | String | --     | 25%    |
| aside-left-max-width | 左侧侧边栏宽度最大值 | String | --     | auto   |
| aside-right-width    | 右侧侧边栏宽度       | String | --     | 35%    |
| main-bottom-height   | 主体内容下侧栏目高度 | String | --     | 50%    |
