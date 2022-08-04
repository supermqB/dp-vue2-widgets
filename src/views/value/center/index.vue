<template>
  <div class="wrap">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>值域管理</el-breadcrumb-item>
        <el-breadcrumb-item><b>DICT_SEX</b></el-breadcrumb-item>
      </el-breadcrumb>
      <div class="buttons">
        <el-button type="primary">版本管理</el-button>
        <el-button type="primary">新增版本</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formCfg="formCfg" :formData="formData"></Form>
      <div>
        <el-button>查询</el-button>
        <el-button>新增</el-button>
        <el-button>编辑</el-button>
      </div>
    </div>
    <div class="table">
      <Table
        :tableConfig="tableConfig"
        :tableData="tableData"
        :pageInfo="pageInfo">
      </Table>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import { formCfg } from './config/searchForm'
import tableConfig from './config/tableColumn'
export default {
  components: {
    Form, Table
  },
  data() {
    return {
      formCfg,
      formData: {
        name: '',
        code: '',
        parent: '',
        level: ''
      },
      tableConfig,
      tableData: [{}, {}, {}],
      pageInfo: {
        curPage: 1,
        pageSize: 10,
        totalSize: 3,
        totalPage: 1
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    position: relative;
    display: flex;
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 41px;
    padding-left: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
    .buttons {
      position: absolute;
      right: 0;
      top: 0;
      width: 190px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  } 
  .search {
    position: relative;
    display: flex;
    padding-right: 15px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .table {
    flex-grow: 1;
    padding-bottom: 5px;
  }
}

::v-deep .el-form-item {
  margin-bottom: 0px;
}
</style>