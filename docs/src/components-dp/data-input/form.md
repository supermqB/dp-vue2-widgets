# Form 表单

### 典型表单

::: demo

```html
<template>
  <div class="form-box">
    <dp-form
      ref="dpForm"
      :configs="searchFormConfig"
      :model="searchForm"
      :show-message="true"
      inline
    ></dp-form>
  </div>
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
    }
  }
</script>
```

:::

### 表单验证

::: demo

```html
<template>
  <div class="form-box">
    <dp-form
      ref="dpForm"
      :configs="searchFormConfig"
      :model="searchForm"
      :show-message="true"
      :rule="rules"
      inline
    ></dp-form>
    <div class="btn-box">
      <el-button @click="resetForm">重置</el-button>
      <el-button type="primary" @click="submitForm">保存</el-button>
    </div>
  </div>
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
        ],
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ]
        }
      }
    },
    methods: {
      // 重置
      resetForm() {
        this.$refs.dpForm.resetFields()
      },
      submitForm() {
        this.$refs.dpForm.validate().then(({ valid, errObj }) => {
          if (!valid) {
            alert('不符合校验')
            return
          } else {
            console.log('保存', this.searchForm)
          }
        })
      }
    }
  }
</script>
```

:::

### 参数说明 props

| 参数    | 说明                       | 类型   | 可选值 | 默认值 |
| ------- | -------------------------- | ------ | ------ | ------ |
| configs | 表单输入框配置，详情看示例 | Array  | --     | []     |
| model   | 数据双向绑定 v-model       | Object | --     |        |
| rule    | 表单验证                   | Object | --     | --     |

### 事件说明 event

| 参数          | 说明                                                 | 类型     | 可选值 | 默认值 |
| ------------- | ---------------------------------------------------- | -------- | ------ | ------ |
| resetFields   | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | Function | --     | --     |
| validate      | 表单校验，通过则可使用 then 链接                     | Function | --     | --     |
| clearValidate | 移除该表单项的校验结果                               | Function | --     | --     |
