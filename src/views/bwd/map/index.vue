<template>
  <div>
    <el-tabs
      v-model="mappingType"
      type="card"
      stretch
      @tab-click="tabChanged"
      class="bwd_ref_tabs"
    >
      <el-tab-pane label="事件库映射" name="DWD">
        <Form
          :formCfg="eventCfg(eventOptions, onChangeMap, clickEvent)"
          :formData="eventMapData"
        ></Form>
        <Table
          ref="tableList"
          :tableConfig="tableConfig(startMapMatch)"
          :tableData="eventMapList"
          @row-changed="handleSelectionChange"
        ></Table>
      </el-tab-pane>
      <el-tab-pane label="主索引映射" name="SBR">
        <Form
          :formCfg="mdmCfg(eventOptions, onChangeMap, clickEvent, 'SBR')"
          :formData="eventMapData"
        ></Form>
        <Table
          :tableConfig="tableConfig(startMapMatch)"
          :tableData="eventMapList"
        ></Table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import { eventCfg, mdmCfg } from './config/searchForm'
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
      mappingType: 'DWD',
      eventCfg,
      mdmCfg,
      tableConfig,
      eventFilter: ''
    }
  },
  computed: {
    ...mapState(['eventMapData', 'eventMapList']),
    ...mapGetters(['eventOptions'])
  },
  methods: {
    ...mapMutations(['setTabMapList']),
    ...mapActions([
      'queryMappingField',
      'queryMappingList',
      'filterMapList',
      'submitMapping'
    ]),
    tabChanged() {
      this.queryMappingList(this.mappingType)
      const { event } = this.eventMapData
      if (event) {
        this.setTabMapList()
      }
    },
    async onChangeMap() {
      const { event } = this.eventMapData
      await this.queryMappingField(event)
    },
    async clickEvent() {
      const { field } = this.eventMapData
      this.filterMapList(field)
    },
    async startMapMatch(index, data) {
      await this.submitMapping(index)
    },
    handleSelectionChange(val) {
      this.$refs.tableList = val
    }
  },
  mounted() {
    this.queryMappingList(this.mappingType)
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
