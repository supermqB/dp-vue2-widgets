<template>
  <div>
    <el-tabs type="card" stretch @tab-click="tabChanged" class="bwd_ref_tabs">
      <el-tab-pane label="事件库映射">
        <Form :formCfg="searchCfg" :formData="eventMapData"></Form>
        <Table :tableConfig="tableConfig" :tableData="eventMapList"></Table>
      </el-tab-pane>
      <el-tab-pane label="主索引映射">
        <Form :formCfg="searchCfg" :formData="mdmMapData"></Form>
        <Table :tableConfig="tableConfig" :tableData="mdmMapList"></Table>
      </el-tab-pane>
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
    Form,
    Table
  },
  data() {
    return {
      searchCfg,
      eventMapData: {
        index1: '',
        index2: ''
      },
      mdmMapData: {
        index1: '',
        index2: ''
      },
      tableConfig,
      eventMapList: [
        {
          seqNo: '匹配',
          name: '11',
          nameCn: '111'
        }
      ],
      mdmMapList: [
        {
          seqNo: '匹配',
          name: '22',
          nameCn: '222'
        }
      ]
    }
  },
  methods: {
    tabChanged() {}
  }
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
