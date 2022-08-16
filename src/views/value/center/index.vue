<template>
  <div class="wrap">
    <div class="header">
      <Breadcrumb
        baseLabel="值域管理"
        currentLabel="DICT_SEX"></Breadcrumb>
      <div>
        <el-button type="primary" @click="editVersion" :disabled="!currentVersion">版本管理</el-button>
        <el-button type="primary" @click="addVersion" :disabled="!currentValue">新增版本</el-button>
      </div>
    </div>
    <div class="version">
      <span>版本</span>
      <el-select v-model="curVersion">
        <el-option v-for="item in versionList"></el-option>
      </el-select>
      <IsMaster></IsMaster>
      <span>状态</span>
      <el-select v-model="state">
        <el-option v-for="item in STATEOPTIONS"></el-option>
      </el-select>
    </div>
    <Detail></Detail>
    <div class="search">
      <Form :formCfg="searchValueCfg" :formData="searchValueData"></Form>
      <div>
        <el-button>查询</el-button>
        <el-button @click="addValue" :disabled="!currentVersion">新增</el-button>
        <el-button @click="editValue" :disabled="!currentColumn">编辑</el-button>
      </div>
    </div>
    <div class="table">
      <Table
        :tableConfig="tableConfig"
        :tableData="columnList"
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
      title="新增值域字典"
      ref="addValueDialog"
      class="addValueDialog">
      <Form :formCfg="addValueCfg" :formData="addValueData"></Form>
    </Dialog>
    <Dialog
      title="编辑值域字典"
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
import Detail from './detail.vue'
import IsMaster from '@/components/state/IsMaster.vue'
import Breadcrumb from '@/components/header/Breadcrumb.vue'
import tableConfig from './config/tableColumn'
import { STATEOPTIONS } from '@/utils/const'
import { addVersionCfg, editVersionCfg } from './config/versionForm'
import { searchValueCfg, addValueCfg, editValueCfg } from './config/valueForm'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('value')

export default {
  components: {
    Form, Table, Dialog, Detail, Breadcrumb, IsMaster
  },
  data() {
    return {
      addVersionCfg,
      editVersionCfg,
      addVersionData: {
        version: '',
        nameEn: '',
        parVersion: '',
        file: null
      },
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
      state: '',
      STATEOPTIONS
    }
  },
  computed: {
    ...mapState([
      'currentVersion', 
      'currentColumn', 
      'pageInfo', 
      'columnList',
      'currentValue'
    ]),
    curVersion: {
      set(value) {
        this.setCurrentVersion(value)
      },
      get() {
        return this.currentVersion
      }
    }
  },
  mounted() {
  },
  methods: {
    ...mapMutations([
      'setCurrentVersion'
    ]),
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
    },
    handleChange(file) {
      this.file = file.name
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
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 41px;
    padding-left: 10px;
    padding-right: 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
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
  .version {
    display: flex;
    align-items: center;
    width: 100%;
    height: 41px;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
    box-sizing: border-box;
    border-bottom: 1px solid #E5E5E5;
    .el-select {
      margin: 0 10px 0 9px;
      width: 150px;
    }
  }
  .table {
    flex-grow: 1;
    padding-bottom: 5px;
  }
}

::v-deep .search .el-form {
  display: flex;
  .el-form-item {
    display: flex;
    margin-bottom: 0px;
  }
  .el-input {
    margin-right: 8px;
  }

  .el-select {
    margin-left: 0;
    margin-right: 8px;
  }
}

::v-deep .addVersionDialog .el-dialog{
  width: 600px;
  form {
    padding-right: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 8px;
      display: flex;
    }
  }
}

::v-deep .editVersionDialog .el-dialog{
  width: 600px;
  form {
    padding-right: 130px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 6px;
      display: flex;
    }
  }
}

::v-deep .addValueDialog .el-dialog{
  width: 600px;
  .el-form {
    padding-right: 120px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
  }
  .el-form-item {
    margin-bottom: 6px;
    display: flex;
    flex-direction: row;
  }
}

::v-deep .editValueDialog .el-dialog{
  width: 600px;
  form {
    padding-right: 120px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 6px;
      display: flex;
      flex-direction: row;
    }
  }
}
</style>