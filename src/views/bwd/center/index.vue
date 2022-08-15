<template>
  <div class="centerWrap">
    <div class="header">
      <div class="left">
        <Breadcrumb baseLabel="BWD文件管理" currentLabel="********">
        </Breadcrumb>
        <!-- <State :currentState="currentCatalogItem.state"></State> -->
      </div>
      <div>
        <el-button type="primary" @click="stateDialogVisible = true"
          >启用</el-button
        >
        <el-button type="primary" @click="onclickEditFileColumn"
          >编辑</el-button
        >
        <el-button type="primary" @click="onclickAddFileColumn">新增</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formCfg="searchCfg" :formData="searchData"></Form>
      <div style="line-height: 41px">
        <el-button type="text">高级搜索</el-button>
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
    <el-dialog
      class="bwd_state"
      title="提示"
      :visible.sync="stateDialogVisible"
      width="25%"
      center
    >
      <span>是否启用【患者信息记录文件】？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="stateDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="stateDialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <Dialog
      title="新增文件字段"
      ref="columnDialog"
      class="columnDialog"
      @dialog-closed="onClosedColumnForm"
      @dialog-complete="onClickSubmitColumn"
    >
      <Form
        ref="columnForm"
        :formCfg="[]"
        :formData="{}"
        :formRule="[]"
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
      stateDialogVisible: false
    }
  },
  methods: {
    onClosedColumnForm() {
      this.setColumnForm()
      this.$refs.columnForm.resetFields()
    },
    onclickAddFileColumn() {
      this.$refs.columnDialog.toggleOpen()
      this.setColumnForm()
    },
    onclickEditFileColumn() {
      this.$refs.columnDialog.toggleOpen()
      this.setColumnForm(this.currentColumnRow)
    },
    onClickSubmitColumn() {
      this.$refs.columnForm.validate(() => {
        this.submitColumn()
        this.$refs.columnDialog.toggleOpen()
      })
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
    height: 41px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
  }
  .table {
    flex: 1;
  }
}
::v-deep .bwd_state .el-dialog__footer {
  text-align: right;
}
::v-deep .bwd_state .el-dialog__body {
  text-align: center;
}
</style>
