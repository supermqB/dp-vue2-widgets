<template>
  <div class="centerWrap">
    <div class="header">
      <Breadcrumb
        baseLabel="BWD文件管理"
        currentLabel="********">
      </Breadcrumb>
      <div>
        <el-button type="primary">启用</el-button>
        <el-button type="primary">编辑</el-button>
        <el-button type="primary">新增</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formCfg="searchCfg" :formData="searchData"></Form>
      <div>
        <el-button type="text">高级搜索</el-button>
        <el-button>查询</el-button>
      </div>
    </div>
    <div class="table">
      <Table 
        :tableConfig="tableConfig"
        :tableData="tableData"
        :pageInfo="pageInfo"
      ></Table>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import Breadcrumb from '@/components/header/Breadcrumb.vue'
import { tableConfig } from './config/tableColumn'
import { searchCfg } from './config/searchForm'
export default {
  components: {
    Breadcrumb, Form, Table
  },
  data() {
    return {
      searchCfg,
      searchData: {
        field: '',
        nameEn: '',
        index: ''
      },
      tableConfig,
      tableData: [],
      pageInfo: {
        curPage: 1,
        pageSize: 10,
        totalSize: 3,
        totalPage: 1
      }
    }
  },
}
</script>

<style scoped lang="scss">
.centerWrap {
  height: 100%;
  padding-bottom: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 41px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
  }
  .search {
    height: 41px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E5E5E5;
  }
  .table {
    flex: 1
  }
}
</style>