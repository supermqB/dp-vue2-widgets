<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <Breadcrumb
          baseLabel="事件模型管理"
          :currentLabel="`${currentCatalogLabel}(event_record)`">
        </Breadcrumb>
        <State></State>
      </div>
      <div>
        <el-button type="primary" @click="addColumn">新增</el-button>
        <el-button type="primary" @click="editColumn">编辑</el-button>
      </div>
    </div>
    <div class="search">
      <Form class="searchForm" :formData="formData" :formCfg="formCfg"></Form>
      <div>
        <el-button>查询</el-button>
        <el-button type="text" @click="advancedSearch">高级搜索</el-button>
      </div>
    </div>
    <div class="content">
      <Table
        :tableConfig="tableConfig"
        :tableData="tableData"
        :pageInfo="pageInfo"
      ></Table>
    </div>
    <Dialog
      :title="`${columnState === ADDSTATE ? '新增字段' : '编辑字段'}`"
      ref="columnDialog"
      class="columnDialog"
    >
      <Form :formCfg="columnCfg" :formData="columnData"></Form>
    </Dialog>
    <Dialog
      title="高级搜索"
      ref="searchDialog"
      class="searchDialog"
    >
      <Form :formCfg="adSearchCfg" :formData="adSearchData"></Form>
    </Dialog>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import formCfg from './config/searchForm'
import tableConfig from './config/tableColumn'
import Dialog from '@/components/Dialog.vue'
import Breadcrumb from '@/components/header/Breadcrumb.vue'
import State from '@/components/state/IsRunning.vue'
import { columnCfg } from './config/columnForm'
import { adSearchCfg } from './config/adSearchForm'
import { ADDSTATE, EDITSTATE } from '@/utils/const'
import { mapGetters } from 'vuex'
export default {
  components: {
    Form, Table, Dialog, Breadcrumb, State
  },
  data() {
    return {
      formData: {
        identifier: '',
        field: '',
        type: '',
        status: '',
        primary: ''
      },
      formCfg,
      tableConfig,
      tableData: [
        {
          index: 1
        },{
          index: 2
        }, {
          index: 3
        }
      ],
      pageInfo: {
        curPage: 1,
        pageSize: 10,
        totalSize: 3,
        totalPage: 1
      },
      columnState: ADDSTATE,
      columnCfg,
      columnData: {
        name: '',
        nameCn: '',
        nameEn: '',
        definition: '',
        primaryKeyFlag: '',
        requiredFlag: '',
        indexFlag: ''
      },
      adSearchCfg,
      adSearchData: {
        index1: '',
        index2: '',
        index3: '',
        index4: '',
        index5: ''
      }
    }
  },
  computed: {
    ...mapGetters(['currentCatalogLabel', 'currentCatalogState'])
  },
  created() {
    this.ADDSTATE = ADDSTATE
    this.EDITSTATE = EDITSTATE
  },
  methods: {
    addColumn() {
      this.columeState = ADDSTATE
      this.$refs.columnDialog.toggleOpen()
    },
    editColumn() {
      this.columeState = EDITSTATE
      this.$refs.columnDialog.toggleOpen()
    },
    advancedSearch() {
      this.$refs.searchDialog.toggleOpen()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100%;
  padding-bottom: 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  .header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 41px;
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .search {
    position: relative;
    /* height: 41px; */
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E5E5E5;
  }
  .content {
    flex-grow: 1;
    padding: 0 5px;
  }
}

::v-deep .columnDialog .el-dialog{
  width: 800px;
  form {
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .el-form-item {
      width: 340px;
      display: flex;
      justify-content: flex-end;
    }
    .el-select {
      margin: 0;
    }
  }
}

::v-deep .searchDialog .el-dialog{
  width: 700px;
  form {
    padding-right: 140px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .el-select {
      margin: 0;
    }
  }
}

::v-deep .searchForm {
  .el-form-item {
    margin-bottom: 0px;
  }
  .el-form-item__label {
    padding-right: 8px;
  }
  .el-select {
    margin: 0;
  }
}
</style>