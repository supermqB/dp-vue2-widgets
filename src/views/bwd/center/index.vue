<template>
  <div class="centerWrap">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>BWD文件管理</el-breadcrumb-item>
        <el-breadcrumb-item>患者信息记录文件</el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-button type="primary" @click="open">启用</el-button>
        <el-button type="primary" @click="editFileFields">编辑</el-button>
        <el-button type="primary" @click="addFileFields">新增</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formCfg="searchCfg" :formData="searchData"></Form>
      <div style="line-height: 36px">
        <el-button type="text" style="font-size: 13px">高级搜索</el-button>
        <el-button>查询</el-button>
      </div>
    </div>
    <div class="table">
      <Table
        :tableConfig="tableConfig"
        :tableData="tableData"
        :pageInfo="pageInfo"
      ></Table>
    </div>
    <Dialog
      title="编辑文件字段"
      ref="editFileFieldsDialog"
      class="editFileFieldsDialog"
    >
      <Form
        ref="fileFieldsForm"
        :formCfg="editFileFieldsCfg"
        :formData="editFileFieldsData"
        :formRule="fileFieldsRule"
      ></Form>
    </Dialog>
    <Dialog
      title="新增文件字段"
      ref="addFileFieldsDialog"
      class="addFileFieldsDialog"
    >
      <Form
        ref="fileFieldsForm"
        :formCfg="addFileFieldsCfg"
        :formData="addFileFieldsData"
        :formRule="fileFieldsRule"
      ></Form>
    </Dialog>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import State from '@/components/state/IsRunning.vue'
import Breadcrumb from '@/components/header/Breadcrumb.vue'
import { tableConfig } from './config/tableColumn'
import { searchCfg } from './config/searchForm'
import Dialog from '@/components/Dialog.vue'
import {
  addFileFieldsCfg,
  editFileFieldsCfg,
  fileFieldsRule
} from './config/fileFieldsForm'
export default {
  components: {
    Breadcrumb,
    Form,
    Table,
    State,
    Dialog
  },
  data() {
    return {
      searchCfg,
      searchData: {
        id: '',
        field: '',
        nameEn: '',
        index: ''
      },
      tableConfig,
      tableData: [],
      pageInfo: {
        curPage: 1,
        pageSize: 10,
        totalSize: 3,
        totalPage: 1
      },
      stateDialogVisible: false,
      addFileFieldsCfg,
      editFileFieldsCfg,
      addFileFieldsData: {},
      editFileFieldsData: {
        index: '11',
        nameCn: '医疗机构唯一标识',
        nameEn: 'org_id'
      },
      fileFieldsRule
    }
  },
  methods: {
    open() {
      this.$confirm('是否启用【患者信息记录文件】？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
    },
    editFileFields() {
      this.$refs.editFileFieldsDialog.toggleOpen()
    },
    addFileFields() {
      this.$refs.addFileFieldsDialog.toggleOpen()
    }
  }
}
</script>

<style scoped lang="scss">
.centerWrap {
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
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
  }
  .search {
    height: 36px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
  }
  .table {
    flex: 1;
  }
}
::v-deep .el-dialog {
  width: 700px;
  form {
    height: 200px;
    padding-right: 23%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 16px;
      display: inline-flex;
    }
  }
}
::v-deep .search {
  form {
    .el-form-item {
      display: inline-flex;
    }
    .el-form-item__content {
      line-height: 36 px;
      padding-right: 50px;
    }
    .el-input__inner {
      height: 28px;
    }
  }
}
</style>
