# Loading 加载

::: demo

```html

  <template>
    <dp-table v-loading="loading" :data="tableData" style="width: 100%">
      <dp-table-column prop="date" label="日期" width="180"></dp-table-column>
      <dp-table-column prop="name" label="姓名" width="180"></dp-table-column>
      <dp-table-column prop="address" label="地址"></dp-table-column>
    </dp-table>
  </template>


<style>
  body {
    margin: 0;
  }
</style>

<script>
  export default {
    data() {
      return {
        tableData: [
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          },
        ],
        loading: true,
      }
    },
  }
</script>
```

:::
