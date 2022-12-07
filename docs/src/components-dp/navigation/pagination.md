# Pagination 分页

::: demo

```html
<template>
  <div class="demo-pagination">
    <div class="info">
      <div>
        <span>总条数：</span
        ><el-input style="width: 100px" v-model.number="total" type="number" />
      </div>
      <div>
        <span>当前页数：</span>
        <el-input
          style="width: 100px"
          v-model.number="currentPage"
          type="number"
          :min="1"
        />
      </div>
      <div>
        <span>每页显示条数：</span>
        <el-select v-model="pageSize" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
    </div>
    <div class="component">
      <div class="pagination">
        <dp-pagination
          :currentPage.sync="currentPage"
          :pageSize.sync="pageSize"
          :total="total"
          @size-change="sizeChangeHandler"
          @current-change="currentChangeHandler"
        />
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        pageSize: 20,
        currentPage: 1,
        total: 100,
        options: [
          {
            value: 5,
            label: 5
          },
          {
            value: 10,
            label: 10
          },
          {
            value: 20,
            label: 20
          },
          {
            value: 50,
            label: 50
          }
        ]
      }
    },
    methods: {
      sizeChangeHandler(v) {
        console.log('== sizeChangeHandler ==', v)
      },
      currentChangeHandler(v) {
        console.log('== currentChangeHandler ==', v)
      }
    }
  }
</script>
```

:::

### 参数说明 props

| 参数                    | 说明                                                                            | 类型    | 可选值 | 默认值                                    |
| ----------------------- | ------------------------------------------------------------------------------- | ------- | ------ | ----------------------------------------- | --- |
| current-page            | 当前页数，支持 .sync 修饰符                                                     | Number  | --     | 1                                         |
| page-size               | 每页显示条目个数，支持 .sync 修饰符                                             | Number  | --     | 20                                        |
| total                   | 总条目数                                                                        | Number  | --     | --                                        |
| page-sizes              | 每页显示个数选择器的选项设置                                                    | Array   | --     | [5, 10, 20, 50]                           |
| layout                  | 组件布局                                                                        | String  | --     | 'total, sizes, prev, pager, next, jumper' |
| toFirstPageOnSizeChange | 当 pageSize（每页显示个数）发生变化时，是否需要设置 currentPage（当前页数）为 1 | Boolean | --     | true                                      | --  |

### 事件说明 event

| 参数           | 说明                     | 回调参数 |
| -------------- | ------------------------ | -------- |
| current-change | currentPage 改变时会触发 | 每页条数 |
| size-change    | pageSize 改变时会触发    | 当前页   |

<el-alert
    title="不建议使用上面两个事件，直接使用current-page和page-size的.sync修饰符"
    type="warning"
    :closable="false" />
