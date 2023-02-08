# SearchForm 检索表单

dp-search-form: 检索表单，主要用来放在列表数据或表格数据的上方，实现检索条件的输入，可自适应页面宽度，收起显示不下的表单项。

::: demo

```html
<template>
  <dp-search-form
    :configs="formConfigs"
    :model="formModel"
    @change="handleChange"
  />
</template>
<script>
  export default {
    data() {
      return {
        containerWidth: '800',
        formModel: {
          name: ''
        },
        formConfigs: [
          {
            type: 'el-input',
            label: '项目名称',
            id: 'name',
            elOptions: {
              clearable: true,
              placeholder: '请输入'
            }
          },
          {
            type: 'el-select',
            label: '状态',
            id: 'status',
            elOptions: {
              clearable: true
            },
            options: [
              {
                label: '未开始',
                value: 0
              },
              {
                label: '进行中',
                value: 1
              },
              {
                label: '已完成',
                value: 2
              }
            ]
          },
          {
            type: 'el-select',
            label: '活动区域',
            id: 'region',
            elOptions: {
              clearable: true
            },
            options: [
              {
                label: '上海',
                value: 'sh'
              },
              {
                label: '北京',
                value: 'bj'
              },
              {
                label: '杭州',
                value: 'hz'
              }
            ]
          },
          {
            type: 'el-select',
            label: '排序方式',
            id: 'order',
            elOptions: {
              clearable: true
            },
            options: [
              {
                label: '按时间正序',
                value: 'time_asc'
              },
              {
                label: '按时间倒序',
                value: 'time_desc'
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleChange(v) {
        console.log('表单发生了变化')
        console.log(v)
      }
    }
  }
</script>
```

:::

### Props

| 参数          | 说明                                     | 类型   | 可选值 | 默认值 |
| ------------- | ---------------------------------------- | ------ | ------ | ------ |
| configs       | 表单项配置                               | array  | --     | --     |
| model         | 表单数据对象                             | object | --     | --     |
| debounce-wait | 触发 change 的防抖延迟时长(单位:毫秒 ms) | number | --     | 200    |

### Events

| 事件名称 | 说明                   | 回调参数           |
| -------- | ---------------------- | ------------------ |
| change   | 表单内容发生改变时触发 | 表单数据对象 model |
