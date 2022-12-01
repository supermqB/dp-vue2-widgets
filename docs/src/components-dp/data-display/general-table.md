# GeneralTable 通用表格

### 示例

该组件原生支持 ElTable 的所有 Attributes 属性&事件，如需要使用 ElTable 相关属性请直接参考 ElementUI 文档 ElTable 部分。可以使用 tableConfig 配置表格列，也可以使用插槽形式。

::: demo

```html
<template>
  <dp-general-table
    :tableData="tableData"
    :tableConfig="tableConfig"
    :pageInfo="pageInfo"
    class="demo-table"
    @page-changed="pageChange"
  >
    <el-table-column label="爱好" prop="like" width="240">
      <template v-slot="{ row }">
        <el-tag v-for="(item, index) in row.like" :key="index" type="warning"
          >{{ item }}</el-tag
        >
      </template>
    </el-table-column>
    <el-table-column label="地址" prop="address"> </el-table-column>
  </dp-general-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-02',
            name: '王大虎',
            like: ['篮球', '足球', '羽毛球'],
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            like: ['音乐', '看电影'],
            address: '上海市普陀区金沙江路 1517 弄'
          }
        ],
        tableConfig: [
          {
            colConfig: {
              label: '日期',
              prop: 'date',
              width: '100'
            }
          },
          {
            colConfig: {
              label: '姓名',
              prop: 'name',
              width: '60'
            },
            actions: [
              {
                id: 'name',
                type: 'el-button',
                typeProps: {
                  type: 'text',
                  size: 'small'
                },
                name: row => {
                  return row.name
                }
              }
            ]
          }
        ],
        pageInfo: {
          curPage: 1,
          pageSize: 10,
          totalSize: 2
        }
      }
    },
    methods: {
      // 页码或每页条数改变
      pageChange(val) {
        console.log(val, '此处可调接口')
      }
    }
  }
</script>
```

:::

### 参数说明 props

| 参数            | 说明                                                                                                   | 类型                 | 可选值 | 默认值                                  |
| --------------- | ------------------------------------------------------------------------------------------------------ | -------------------- | ------ | --------------------------------------- | --- |
| tableData       | 表格数据                                                                                               | Array                | --     | []                                      |
| tableConfig     | 表格配置                                                                                               | Array                | --     | []                                      |
| colConfig       | tableConfig 数组下表格配置项，如：label，prop，width 等等                                              | Object               | --     | {}                                      |     |
| actions         | tableConfig 数组下自定义表格列内容，也可以使用插槽代替                                                 | Array                | --     | []                                      |
| id              | actions 数组下唯一标识                                                                                 | Number/String        | --     | --                                      |
| type            | actions 数组下组件类型，如：el-button，div                                                             | String               | --     | --                                      |
| typeProps       | actions 数组下组件类型的配置，如：size，style，class                                                   | Object               | --     | --                                      |
| pageInfo        | 配置代表显示分页                                                                                       | Object               | --     | {curPage: 1, pageSize: 10,totalSize: 0} |
| currentRow      | 设置当前高亮行                                                                                         | Object               | --     | --                                      |
| multipleSelect  | 是否显示多选框                                                                                         | Boolean              | --     | false                                   |
| isShowRadio     | 是否显示单选框                                                                                         | Boolean              | --     | true                                    |
| isShowSelection | 是否显示左侧固定列，可以是序号                                                                         | Boolean              | --     | false                                   |
| selectable      | 仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选 | Function(row, index) | --     |                                         |
| bottomTip       | 表格底部文字描述                                                                                       | String               | --     | ''                                      |     |

### 事件说明 event

| 参数        | 说明                       | 类型     | 可选值 | 默认值 |
| ----------- | -------------------------- | -------- | ------ | ------ |
| pageChanged | 页码或每页条数改变时的方法 | Function | --     | --     |
