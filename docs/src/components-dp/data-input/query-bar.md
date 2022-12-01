# QueryBar 表单查询

### 示例

::: demo

```html
<template>
  <dp-query-bar
    :inputConfigs="searchFormConfig"
    :searchForm="searchForm"
    inline
    queryName="查询"
    :autoSubmit="true"
    @onSearch="onSearch"
    @onChanged="onChanged"
  ></dp-query-bar>
</template>
<script>
  export default {
    data() {
      return {
        searchForm: {
          name: '', // 活动名称
          region: '' // 活动区域
        },
        searchFormConfig: [
          {
            type: 'el-input',
            label: '活动名称',
            id: 'name',
            elOptions: {
              clearable: true,
              placeholder: '请输入'
            }
          },
          {
            type: 'el-select',
            label: '活动区域',
            id: 'region',
            elOptions: {
              clearable: true,
              placeholder: '请输入'
            },
            options: [
              {
                label: '区域一',
                value: 'shanghai'
              },
              {
                label: '区域二',
                value: 'beijing'
              }
            ]
          }
        ]
      }
    },
    methods: {
      // 查询
      onSearch(val) {
        console.log(val, '查询')
      },
      onChanged(val) {
        console.log(val, '表单变化')
      }
    }
  }
</script>
```

:::

### 参数说明 props

| 参数         | 说明                       | 类型    | 可选值 | 默认值 |
| ------------ | -------------------------- | ------- | ------ | ------ |
| inputConfigs | 表单输入框配置，详情看示例 | Array   | --     | []     |
| searchForm   | 数据双向绑定 v-model       | Object  | --     |        |
| queryName    | 按钮名称                   | String  | --     | 检索   |
| autoSubmit   | 是否自动查询               | Boolean | --     | false  |

### 事件说明 event

| 参数      | 说明                         | 类型                   | 可选值 | 默认值 |
| --------- | ---------------------------- | ---------------------- | ------ | ------ |
| onChanged | 表单每项发生变化就触发的事件 | Function(form: Object) | --     | --     |
| onSearch  | 点击查询按钮触发的事件       | Function(form: Object) | --     | --     |
