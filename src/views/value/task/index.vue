<template>
  <div class="wrap">
    <div class="header">
      <h3>任务列表</h3>
      <el-button type="primary">完成</el-button>
    </div>
    <div class="search">
      <el-button type="text">
        筛选
      </el-button>
      <span>搜索</span>
      <el-input suffix-icon="el-icon-search"></el-input>
    </div>
    <div class="list">
      <Table
        :tableData="[]"
        :tableConfig="config"
        :multipleSelect="true"></Table>
    </div>
  </div>
</template>

<script>
import Table from '@/components/GeneralTable.vue'
export default {
  components: {
    Table
  },
  data() {
    return {
      config: [
        {
          colConfig: {
            property: 'index',
            label: '来源',
            minWidth: 55
          }
        },{
          colConfig: {
            property: 'name',
            label: '名称',
            minWidth: 55
          }
        },{
          colConfig: {
            property: 'state',
            label: '状态',
            minWidth: 70
          }
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  .header {
    height: 41px;
    padding: 0 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    h3 {
      font-size: 16px;
      font-weight: normal;
    }
    .buttons {
      display: flex;
      justify-content: end;
      align-items: center;
    }
  }
  .search {
    height: 41px;
    padding: 0 7px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #E5E5E5;
    .el-button {
      font-size: 16px;
    }
    span {
      display: inline-block;
      padding: 0 5px;
      width: 50px;
      font-size: 14px;
    }
  }
  .list {
    flex-grow: 1;
  }
}
</style>