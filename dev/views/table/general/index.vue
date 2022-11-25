<template>
  <dp-general-table
    :tableData="tableData"
    :tableConfig="tableConfig"
    :pageInfo="pageInfo"
    @page-changed="pageChange"
  >
    <el-table-column label="爱好" prop="like">
      <template v-slot="{ row }">
        <el-tag v-for="(item, index) in row.like" :key="index" type="warning">{{
          item
        }}</el-tag>
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
            prop: 'date'
          }
        },
        {
          colConfig: {
            label: '姓名',
            prop: 'name'
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

<style lang="scss" scoped></style>
