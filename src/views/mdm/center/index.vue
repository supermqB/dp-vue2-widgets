<template>
  <div class="mdm_ceter_wrapper">
    <div class="header">
      <div class="crumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>主索引管理</el-breadcrumb-item>
          <el-breadcrumb-item
            >{{ `${selectedMDM.label}（${selectedMDM.name}）` }}
            <img :src="icon(selectedMDM.state)"
          /></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="btn_area">
        <el-button type="primary" @click="startEditMDM">编 辑</el-button>
        <el-button type="primary" @click="startCreateMDM">新 增</el-button>
      </div>
    </div>
    <div class="search">
      <div class="summary">
        <div v-for="item in mdmprops" :key="item.prop" class="propItem">
          <span class="propLabel">{{ item.prop }}</span>
          <span class="propValue">{{ item.value }}</span>
        </div>
      </div>
      <Form v-bind="searchForm" class="searchForm"></Form>
      <div class="action_area">
        <el-button type="primary" plain @click="searchHandler(false)"
          >查 询</el-button
        >
        <el-link :underline="false" class="advbtn" @click="openAdvSearch"
          >高级搜索</el-link
        >
      </div>
    </div>
    <div class="table_area">
      <Table
        :tableConfig="mdmTable.tableConfig"
        :tableData="mdmTable.tableData"
        :pageInfo="mdmTable.pageInfo"
        @row-changed="selectItemHandler"
        ref="mdm_table"
      />
    </div>
    <div class="dlg_ports">
        <edit-dialog ref="editDialog"/>
    </div>
  </div>
</template>
<script>
import {
  RUNNINGSTATE,
  EDITINGSTATE,
  COMPLETESTATE,
  INCOMESTATE
} from '@/utils/const'
import { mapState as globalMapState, createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } =
  createNamespacedHelpers('mdm/mdmlist')

import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import EditDialog from './EditDialog.vue' 

export default {
  data() {
    return {
      mdmprops: [
        { prop: '标准来源：', value: 'xxxx' },
        { prop: ' 创建日期：', value: '2022/01/01' },
        { prop: '更新日期：', value: '2022/05/01' }
      ]
    }
  },
  computed: {
    ...globalMapState({ selectedMDM: state => state.mdm.selectedMDM }),
    ...mapState({
      searchForm: state => state.searchForm,
      mdmTable: state => state.mdmTable
    })
  },
  methods: {
    icon(state) {
      switch (state) {
        case RUNNINGSTATE:
          return require('@/assets/images/common/icons/running.png')
        case EDITINGSTATE:
          return require('@/assets/images/common/icons/editing.png')
        case COMPLETESTATE:
          return require('@/assets/images/common/icons/complete.png')
        case INCOMESTATE:
          return require('@/assets/images/common/icons/income.png')
      }
    },
    startEditMDM() {
        this.$refs.editDialog.startEdit();
    },
    startCreateMDM() {
        this.$refs.editDialog.startCreate();
    },
    searchHandler() {},
    openAdvSearch() {},
    ...mapMutations({ selectItemHandler: 'setTableSelectItem' }),
    ...mapMutations(['setSearchFormConfig'])
  },
  watch: {
    selectedMDM(curMDM) {
      this.setSearchFormConfig(curMDM.type)
    }
  },
  components: { Form, Table ,EditDialog}
}
</script>
<style lang="scss">
.mdm_ceter_wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    padding: 0 6px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
  }
  .search {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .summary {
      display: flex;
      font-size: 13px;
      height: 36px;
      line-height: 36px;
      padding: 0 6px;
      .propItem {
        width: 200px;
        .propLabel {
          color: #9c9c9c;
        }
        .propValue {
          color: #606266;
        }
      }
    }
    .searchForm {
      display: flex;
      width: 80%;
      flex: 1 1 auto;
      justify-content: flex-start;
      flex-wrap: wrap;
      .el-form-item {
        margin-bottom: 0px;
        display: flex;
        justify-content: end;
        .el-select,
        .el-input {
          width: 165px;
        }
      }
      .el-form-item__label {
        width: 80px;
      }
    }
    .action_area {
      width: 150px;
      padding: 6px 0;
      .advbtn {
        color: #1890ff;
        text-decoration: underline;
        margin: 6px;
      }
    }
  }

  .table_area {
    flex-grow: 1;
  }
}
</style>
