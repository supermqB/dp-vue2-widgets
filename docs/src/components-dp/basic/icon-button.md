# IconButton 带图标按钮

### 带图标按钮

::: demo

```html
<template>
  <div style="height:40px">
    <dp-icon-button text="检索" :icon="searchIcon" @click="handleClick" />
    <dp-icon-button
      text="检索"
      :icon="searchIcon"
      @click="handleClick"
      disabled
    />
  </div>
  <div style="height:40px">
    <dp-icon-button text="三个字" :icon="searchIcon" @click="handleClick" />
    <dp-icon-button
      text="三个字"
      :icon="searchIcon"
      @click="handleClick"
      disabled
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        searchIcon: '/images/icons/filter.png'
      }
    },
    methods: {
      handleClick() {
        console.log('==click==')
      }
    }
  }
</script>
```

:::

| 参数     | 说明         | 类型    | 可选值 | 默认值 |
| -------- | ------------ | ------- | ------ | ------ |
| text     | 按钮文本内容 | String  | --     | --     |
| icon     | 图片地址路径 | String  | --     | --     |
| disabled | 是否禁用     | Boolean | --     | false  |
