# Status 状态标签

### 示例

::: demo

```html
<template>
  <dp-status type="start">新任务/待分配</dp-status>
  <dp-status type="process">审核/加工</dp-status>
  <dp-status type="recall">已撤回</dp-status>
  <dp-status type="done">已审核/已加工</dp-status>
</template>
```

:::

| 参数 | 说明     | 类型   | 可选值                       | 默认值 |
| ---- | -------- | ------ | ---------------------------- | ------ |
| type | 标签类型 | String | start, process, recall, done | -      |
| size | 标签大小 | String | big, medium                  | -      |
