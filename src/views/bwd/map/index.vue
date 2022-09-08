<template>
  <div class="mapWrap">
    <el-tabs
      v-model="mappingType"
      type="card"
      stretch
      @tab-click="tabChanged"
      class="bwd_ref_tabs"
    >
      <el-tab-pane label="事件库映射" name="DWD">
        
      </el-tab-pane>
      <el-tab-pane label="主索引映射" name="SBR">
        <!-- <Form
          :formCfg="mdmCfg(eventOptions, onChangeMap, clickEvent, 'SBR')"
          :formData="eventMapData"
        ></Form>
        <Table
          :isShowSelection="false"
          :tableConfig="tableConfig(startMapMatch)"
          :tableData="eventMapList"
        ></Table> -->
      </el-tab-pane>
    </el-tabs>
    <Form
      class="form"
      :formCfg="eventCfg(eventOptions, onChangeMap, mappingType)"
      :formData="eventMapData"
    ></Form>
    <Table
      :isShowSelection="false"
      :tableConfig="tableConfig(startMapMatch)"
      :tableData="filterEventMapList"
      @row-changed="handleSelectionChange"
    ></Table>
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
      eventFilter: '',
      matchDialog: false
    }
  },
  computed: {
    ...mapState(['eventMapData', 'eventMapList', 'currentField']),
    ...mapGetters(['eventOptions', 'filterEventMapList'])
  },
  methods: {
    ...mapMutations(['setTabMapList', 'setEventMapList', 'resetEventMapData']),
    ...mapActions([
      'queryMappingField',
      'queryMappingList',
      'submitMapping',
      'matchCatalog'
    ]),
    async tabChanged() {
      await this.queryMappingList(this.mappingType)
      this.resetEventMapData()
      this.setEventMapList()
    },
    onChangeMap() {
      const { event } = this.eventMapData
      if (!event) {
        this.setEventMapList()
      } else {
        this.queryMappingField(event)
      }
    },
    async startMapMatch(index, data) {
      this.submitMapping(data[index])
    },
    handleSelectionChange(val) {
      this.$refs.tableList = val
    }
  },
  mounted() {
    this.queryMappingList(this.mappingType)
  },
  watch: {
    currentField: {
      handler() {
        this.setEventMapList()
        this.resetEventMapData()
      }
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

.mapWrap {
  display: flex;
  height: 100%;
  flex-direction: column;
  .form {
    margin-right: 10px;
  }
}
</style>
