<template>
  <div>
    <el-tabs type="card" stretch @tab-click="tabChanged" class="bwd_ref_tabs">
      <el-tab-pane label="事件库映射">
        <Form
          :formCfg="searchCfg(eventOptions)"
          :formData="eventMapData"
        ></Form>
        <Table :tableConfig="tableConfig" :tableData="eventMapList"></Table>
      </el-tab-pane>
      <el-tab-pane label="主索引映射">
        <Form :formCfg="searchCfg(eventOptions)" :formData="mdmMapData"></Form>
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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('bwd')
export default {
  components: {
    Form,
    Table
  },
  data() {
    return {
      searchCfg,
      tableConfig
    }
  },
  computed: {
    ...mapState(['eventMapData', 'mdmMapData', 'eventMapList', 'mdmMapList']),
    ...mapGetters(['eventOptions', 'eventOptions'])
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
