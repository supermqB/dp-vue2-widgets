<template>
  <div class="wrap">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>值域管理</el-breadcrumb-item>
        <el-breadcrumb-item><b>DICT_SEX</b></el-breadcrumb-item>
      </el-breadcrumb>
      <div class="buttons">
        <el-button type="primary" @click="editVersion">版本管理</el-button>
        <el-button type="primary" @click="addVersion">新增版本</el-button>
      </div>
    </div>
    <div class="version">
      <Version></Version>
    </div>
    <div class="search">
      <Form :formCfg="searchValueCfg" :formData="searchValueData"></Form>
      <div>
        <el-button>查询</el-button>
        <el-button @click="addValue">新增</el-button>
        <el-button @click="editValue">编辑</el-button>
      </div>
    </div>
    <div class="table">
      <Table
        :tableConfig="tableConfig"
        :tableData="tableData"
        :pageInfo="pageInfo">
      </Table>
    </div>
    <Dialog
      title="新增版本"
      ref="addVersionDialog"
      class="addVersionDialog">
      <Form :formCfg="addVersionCfg" :formData="addVersionData"></Form>
    </Dialog>
    <Dialog
      title="版本信息管理"
      ref="editVersionDialog"
      class="editVersionDialog">
      <Form :formCfg="editVersionCfg" :formData="editVersionData"></Form>
    </Dialog>
    <Dialog
      title="新增值域"
      ref="addValueDialog"
      class="addValueDialog">
      <Form :formCfg="addValueCfg" :formData="addValueData"></Form>
    </Dialog>
    <Dialog
      title="值域编辑"
      ref="editValueDialog"
      class="editValueDialog">
      <Form :formCfg="editValueCfg" :formData="editValueData"></Form>
    </Dialog>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import Dialog from '@/components/Dialog.vue'
import Version from './version.vue'
import tableConfig from './config/tableColumn'
import { addVersionCfg, editVersionCfg } from './config/versionForm'
import { searchValueCfg, addValueCfg, editValueCfg } from './config/valueForm'

export default {
  components: {
    Form, Table, Dialog, Version
  },
  data() {
    return {
      addVersionCfg,
      editVersionCfg,
      addVersionData: {},
      editVersionData: {},
      addValueCfg,
      editValueCfg,
      addValueData: {},
      editValueData: {},
      searchValueCfg,
      searchValueData: {
        name: '',
        code: '',
        parent: '',
        level: ''
      },
      tableConfig,
      tableData: [{}, {}, {}],
      pageInfo: {
        curPage: 1,
        pageSize: 10,
        totalSize: 3,
        totalPage: 1
      }
    }
  },
  mounted() {
  },
  methods: {
    addVersion() {
      this.$refs.addVersionDialog.toggleOpen()
    },
    editVersion() {
      this.$refs.editVersionDialog.toggleOpen()
    },
    addValue() {
      this.$refs.addValueDialog.toggleOpen()
    },
    editValue() {
      this.$refs.editValueDialog.toggleOpen()
    }
  },
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  height: 100%;
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
    .buttons {
      position: absolute;
      right: 0;
      top: 0;
      width: 190px;
      height: 100%;
      display: flex;
      align-items: center;
    }
  } 
  .search {
    position: relative;
    display: flex;
    padding-right: 10px;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-left: 10px;
    box-sizing: border-box;
  }
  .table {
    flex-grow: 1;
    padding-bottom: 5px;
  }
}

::v-deep .search {
  .el-form-item {
    margin-bottom: 0px;
  }

  .el-select {
    margin-left: 0;
    margin-right: 0
  }
}

::v-deep .addVersionDialog .el-dialog{
  width: 600px;
  form {
    padding-right: 120px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 12px;
    }
  }
}

::v-deep .editVersionDialog .el-dialog{
  width: 600px;
  form {
    padding-right: 120px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 12px;
    }
  }
}

::v-deep .addValueDialog .el-dialog{
  width: 600px;
  form {
    padding-right: 120px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 12px;
    }
  }
}

::v-deep .editValueDialog .el-dialog{
  width: 600px;
  form {
    padding-right: 120px;
    display: flex;
    flex-direction: row;
    justify-content: end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 12px;
    }
  }
}
</style>