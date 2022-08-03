<template>
  <div class="wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>事件模型管理</el-breadcrumb-item>
        <el-breadcrumb-item>E000-卫生事件记录(event_record)</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="status" 
        :class="[ status === 'running' ? 'running' : 'edit' ]">
        {{ status === 'running' ? '已启动' : '编辑中'  }}
      </div>
      <div class="buttons">
        <el-button type="primary" @click="addColumn">新增</el-button>
        <el-button type="primary" @click="editColumn">编辑</el-button>
      </div>
    </div>
    <div class="search">
      <Form class="searchForm" :formData="formData" :formCfg="formCfg"></Form>
      <div class="buttons">
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
import Form from '@/components/Form.vue';
import Table from '@/components/GeneralTable.vue';
import formCfg from './config/searchForm';
import tableConfig from './config/tableColumn';
import Dialog from '@/components/Dialog.vue';
import { columnCfg } from './config/columnForm';
import { adSearchCfg } from './config/adSearchForm';
import { ADDSTATE, EDITSTATE } from '@/utils/const'
export default {
  components: {
    Form, Table, Dialog
  },
  data() {
    return {
      status: '',
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
  created() {
    this.ADDSTATE = ADDSTATE
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
    justify-content: start;
    align-items: center;
    width: 100%;
    height: 41px;
    padding-left: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
    .status {
      width: 46px;
      height: 18px;
      margin-top: 1px;
      margin-left: 10px;
      line-height: 18px;
      text-align: center;
      border-radius: 10px;
      font-size: 10px;
      &.running {
        color: #67C23A;
        background-color: rgba(103,194,58,0.2);
      }
      &.edit {
        color: #EB9E05;
        background-color: rgba(235,158,5,0.2)
      }
    }
    .buttons {
      position: absolute;
      right: 0;
      top: 0;
      width: 135px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  }
  .search {
    position: relative;
    width: 100%;
    height: 41px;
    padding-left: 15px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
    .buttons {
      position: absolute;
      right: 0;
      top: 0;
      width: 135px;
      height: 100%;
      display: flex;
      align-items: center;
    }
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
      justify-content: end;
    }
  }
}

::v-deep .searchDialog .el-dialog{
  width: 700px;
  form {
    padding-right: 140px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
}

::v-deep .el-form-item {
  margin-bottom: 15px;
}
</style>