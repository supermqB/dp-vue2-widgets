<template>
  <div>
    <el-tabs type="card">
      <el-tab-pane label="事件库映射">
        <Form :formCfg="searchCfg" :formData="searchData"></Form>
        <Table :tableConfig="tableConfig" :tableData="[]"></Table>
      </el-tab-pane>
      <el-tab-pane label="主索引映射"></el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import { searchCfg } from './config/searchForm'
import { tableConfig } from './config/tableColumn'
export default {
  components: {
    Form, Table
  },
  data() {
    return {
      searchCfg,
      searchData: {
        index1: '',
        index2: ''
      },
      tableConfig
    }
  },
}
</script>

<style scoped lang="scss">
::v-deep .el-form-item {
  margin-bottom: 0px;
  display: flex;
  justify-content: flex-end;
}

::v-deep .el-tabs__header {
  margin-bottom: 5px;
}
</style>