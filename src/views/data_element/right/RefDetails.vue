<template>
  <div class="ref_detail_wrapper">
    <Form
      :formData="formData"
      :formCfg="formCfg"
      :style="{ padding: '6px' }"
      class="refqueryform"
    />
    <div class="title">
      <span>数据元:</span><span style="padding-left: 6px;">{{ info.dataEleName }}</span>
    </div>
    <div class="table_container">
      <el-table :data="info.tableData" border>
        <el-table-column
          v-for="col in info.tableConfig"
          v-bind="col"
          :key="col.property"
        >
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import Form from '@/components/Form.vue'
export default {
  data: () => ({
    formCfg: [
      {
        type: 'el-select',
        options: ['标准事件库', '业务明细库'],
        label: '模块',
        id: 'repo'
      },
      {
        type: 'el-select',
        options: [],
        label: '版本',
        id: 'version'
      }
    ],
    formData: {
      repo: '',
      version: ''
    },
    info: {
      dataEleName: '性别代码',
      tableConfig: [
        { property: 'data_table', label: '数据集名称' },
        { property: 'data_table_field', label: '字段名称' }
      ],
      tableData: [
        { data_table: '卫生事件记录', data_table_field: '性别代码' },
        { data_table: '卫生事件记录', data_table_field: '性别代码' },
        { data_table: '卫生事件记录', data_table_field: '性别代码' }
      ]
    }
  }),
  watch: {
    formData: {
      handler({ repo, version }) {
        let versions = {
          标准事件库: ['v1.0', 'v1.1'],
          业务明细库: ['v1', 'v2']
        }[repo]

        this.formCfg[1].options = versions

        if (versions.indexOf(version) == -1) {
          this.formData.version = ''
        }
      },
      deep: true
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
