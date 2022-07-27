<template>
  <div class="ele_detail_wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>数据元管理</el-breadcrumb-item>
        <el-breadcrumb-item>数据元明细</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btn_area">
        <el-button type="primary">提 交</el-button>
        <el-button type="primary">新 增</el-button>
      </div>
    </div>
    <div class="search">
      <el-form :model="formData" :inline="true">
        <el-form-item v-for="cfg in formCfg" :label="cfg.label" :prop="cfg.id">
          <component
            :is="cfg.type"
            v-bind="cfg.elOptions"
            v-model="formData[cfg.id]"
          >
            <el-option
              v-for="opt in cfg.options"
              :key="opt"
              :label="opt"
              :value="opt"
            >
            </el-option>
          </component>
        </el-form-item>
      </el-form>
      <div class="action_area">
        <el-button type="primary" plain>查 询</el-button>
        <el-link class="advbtn">高级搜索</el-link>
      </div>
    </div>
    <div class="table_area">
      <Table />
    </div>
  </div>
</template>
<script>
import Table from './Table.vue'

export default {
  data: () => ({
    formData: {
      type: '',
      wordAttr: '',
      status: ''
    },
    formCfg: [
      {
        type: 'el-autocomplete',
        elOptions: {
          'fetch-suggestions': (queryString, cb) => {
            let orginOptions = ['BY', 'DT', 'S', 'S1', 'S2']
            let filteredValues = queryString
              ? orginOptions.filter(item => item.indexOf(queryString) != -1)
              : orginOptions
            cb(filteredValues.map(item => ({ value: item })))
          },
          placeholder: '请输入并选择'
        },
        label: '类型',
        id: 'type'
      },
      {
        type: 'el-autocomplete',
        elOptions: {
          'fetch-suggestions': (queryString, cb) => {
            let orginOptions = ['人名', '公司名', '量词', '日期']
            let filteredValues = queryString
              ? orginOptions.filter(item => item.indexOf(queryString) != -1)
              : orginOptions
            cb(filteredValues.map(item => ({ value: item })))
          },
          placeholder: '请输入并选择'
        },
        label: '词性类别',
        id: 'wordAttr'
      },
      {
        type: 'el-select',
        options: ['已启用', '待提交'],
        label: '状态',
        id: 'status'
      }
    ]
  }),
  components: { Table }
}
</script>
<style lang="scss" scoped>
.ele_detail_wrapper {
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .btn_area {
      padding-right: 10px;
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    height: 40px;
    line-height: 40px;
    .action_area {
      .advbtn {
        color: #1890ff;
        text-decoration: underline;
        margin: 0 6px;
      }
    }
  }
}
</style>
