# LayoutRoot 根节点布局

::: demo

```html
<template>
  <dp-layout-root class="dp-layout-root" minWidth="0">
    <template #header>
      <div class="header">Header</div>
    </template>
    <template #main>
      <div class="main">Main</div>
    </template>
    <template #footer>
      <div class="footer">Footer</div>
    </template>
  </dp-layout-root>
</template>
```

:::

| 参数          | 说明                                                               | 类型   | 可选值 | 默认值 |
| ------------- | ------------------------------------------------------------------ | ------ | ------ | ------ |
| min-width     | 容器的最小宽度<br/>浏览器窗口宽度小于最小宽度<br/>会出现横向滚动条 | String | -      | 1366px |
| header-height | Header 区域高度                                                    | String | -      | 51px   |
| footer-height | Footer 区域高度                                                    | String | -      | 32px   |
