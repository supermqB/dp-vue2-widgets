# tag 标签

### 示例

::: demo

```html
<template>
      <dp-tag type="start" size="big">新任务/待分配</dp-tag>
      <dp-tag type="process" size="big">审核/加工</dp-tag>
      <dp-tag type="recall" size="big">已撤回</dp-tag>
      <dp-tag type="done" size="big">已审核/已加工</dp-tag>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    handleClick(tag) {
      console.log('点击标签啦', tag)
    }
  }
}
</script>

```

:::



| 参数 | 说明         | 类型   | 可选值 | 默认值   |
| ---- | ------------ | ------ | ------ | -------- |
| type | 标签类型 | String | start, process, recall, done  | - |
| size | 标签大小 | String | big, medium | - |