<template>
  <div class="ref_detail_wrapper">
    <Form
      :formData="formData"
      :formCfg="formCfg"
      :style="{ padding: '6px' }"
      class="refqueryform"
    />
    <div class="title">
      <span>数据元:</span
      ><span style="padding-left: 6px">{{
        selectedDataElem ? selectedDataElem.cnName : ''
      }}</span>
    </div>
    <div class="table_container">
      <el-table :data="tableData" border>
        <el-table-column
          v-for="col in tableConfig"
          v-bind="col"
          :key="col.property"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers, mapState as globalMapState } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('dataElem/refDetails')
import Form from '@/components/Form.vue'
export default {
  data: () => ({
    tableConfig: [
      { property: 'dataSetName', label: '数据集名称' },
      { property: 'columnName', label: '字段名称' }
    ]
  }),
  computed: {
    ...mapState({ formData: state => state.formData }),
    ...globalMapState({
      selectedDataElem: state => state.dataElem.elemList.selectedItem
    }),
    ...mapGetters(['moduleList', 'curVersionList']),
    ...mapGetters({ tableData: 'curRefList' }),
    formCfg() {
      return [
        {
          type: 'el-select',
          options: this.moduleList,
          label: '模块',
          id: 'repo'
        },
        {
          type: 'el-select',
          options: this.curVersionList,
          label: '版本',
          id: 'version'
        }
      ]
    }
  },
  watch: {
    'formData.repo': function () {
      this.formData.version = ''
    }
  },
  methods: {},
  components: { Form }
}
</script>
<style lang="scss" scoped>
.ref_detail_wrapper {
  .title {
    padding: 6px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    span {
      font-size: 13px;
    }
  }
  .table_container {
    padding: 6px;
  }
}
</style>
<style lang="scss">
.ref_detail_wrapper {
  .refqueryform {
    .el-form-item {
      margin: 0;
    }
    .el-input {
      width: 170px;
    }
  }
}
</style>
