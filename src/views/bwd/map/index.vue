<template>
  <div class="mapWrap">
    <el-tabs
      v-model="mappingType"
      type="card"
      stretch
      @tab-click="tabChanged"
      class="bwd_ref_tabs"
    >
      <el-tab-pane label="事件库映射" :name="DWD"></el-tab-pane>
      <el-tab-pane label="主索引映射" :name="SBR"></el-tab-pane>
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
import { DWD, SBR } from '@/utils/const'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('bwd')
export default {
  components: {
    Form,
    Table
  },
  data() {
    return {
      eventCfg,
      mdmCfg,
      tableConfig,
      eventFilter: '',
      matchDialog: false
    }
  },
  created() {
    this.DWD = DWD
    this.SBR = SBR
  },
  computed: {
    ...mapState([
      'eventMapData',
      'eventMapList',
      'currentField',
      'currentBwd',
      'source'
    ]),
    ...mapGetters(['eventOptions', 'filterEventMapList']),
    mappingType: {
      get() {
        return this.source
      },
      set(value) {
        this.setSource(value)
      }
    },
    bwdField: {
      get() {
        return `${this.currentField}${this.currentBwd}`
      }
    },
  },
  methods: {
    ...mapMutations([
      'setTabMapList', 
      'setEventMapList', 
      'resetEventMapData',
      'setSource'
    ]),
    ...mapActions([
      'queryMappingField',
      'queryMappingList',
      'submitMapping',
      'matchCatalog'
    ]),
    async tabChanged() {
      await this.queryMappingList()
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
      const col = data.find(item => item.index === index)
      this.submitMapping(col)
    },
    handleSelectionChange(val) {
      this.$refs.tableList = val
    }
  },
  watch: {
    currentBwd: {
      handler() {
        this.queryMappingList()
      }
    },
    bwdField: {
      handler(cur) {
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
