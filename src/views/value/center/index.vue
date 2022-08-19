<template>
  <div class="wrap">
    <div class="header">
      <Breadcrumb
        baseLabel="值域管理"
        :currentLabel="currentDictItem.label"></Breadcrumb>
      <div>
        <el-button type="primary" @click="editVersion" :disabled="!currentVersion && false">版本管理</el-button>
        <el-button type="primary" @click="addVersion" :disabled="!currentValue && false">新增版本</el-button>
      </div>
    </div>
    <div class="version">
      <span>版本</span>
      <el-select v-model="curVersion">
        <el-option
          v-for="item in versionList"
          :key="item.id"
          :value="item.id"
          :label="item.label"
        ></el-option>
      </el-select>
      <IsMaster :isMaster="currentVersion ? currentVersionItem.isMaster : false"></IsMaster>
      <IsRunning :currentState="currentVersion ? currentVersionInfo.state : ''"></IsRunning>
    </div>
    <Detail
      :sourceType="currentDictItem.sourceType"
      v-bind="currentVersionInfo"></Detail>
    <div class="search">
      <Form :formCfg="searchValueCfg" :formData="searchForm"></Form>
      <div class="operation">
        <el-button>查询</el-button>
        <el-button @click="addValue" :disabled="!currentVersion && false">新增</el-button>
        <el-button @click="editValue" :disabled="!currentColumn && false">编辑</el-button>
      </div>
    </div>
    <div class="table">
      <Table
        :tableConfig="tableConfig"
        :tableData="dictValueList"
        :pageInfo="pageInfo">
      </Table>
    </div>
    <Dialog
      title="新增版本"
      ref="addVersionDialog"
      class="addVersionDialog">
      <Form :formCfg="addVersionCfg" :formData="versionForm"></Form>
    </Dialog>
    <Dialog
      title="版本信息管理"
      ref="editVersionDialog"
      class="editVersionDialog">
      <Form :formCfg="editVersionCfg" :formData="dictVersionForm"></Form>
    </Dialog>
    <Dialog
      title="新增值域字典"
      ref="addValueDialog"
      class="addValueDialog">
      <Form
        :formCfg="addValueCfg"
        :formData="dictValueForm"
        :formRule="valueRule"
      ></Form>
    </Dialog>
    <Dialog
      title="编辑值域字典"
      ref="editValueDialog"
      class="editValueDialog">
      <Form 
        :formCfg="editValueCfg"
        :formData="dictValueForm"
        :formRule="valueRule">
      </Form>
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
import IsRunning from '@/components/state/IsRunning.vue'
import tableConfig from './config/tableColumn'
import { addVersionCfg, editVersionCfg } from './config/versionForm'
import { searchValueCfg, addValueCfg, editValueCfg, valueRule } from './config/valueForm'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('value')

export default {
  components: {
    Form,
    Table,
    Dialog,
    Detail,
    Breadcrumb,
    IsMaster,
    IsRunning
},
  data() {
    return {
      addVersionCfg,
      editVersionCfg,
      addValueCfg,
      editValueCfg,
      searchValueCfg,
      valueRule,
      tableConfig
    }
  },
  computed: {
    ...mapState([
      'currentVersion', 
      'currentColumn',
      'currentValue',
      'currentVersionInfo',
      'pageInfo',
      'versionList',
      'dictValueList',
      'dictValueForm',
      'dictVersionForm',
      'versionForm',
      'searchForm'
    ]),
    ...mapGetters([
      'currentVersionItem',
      'currentDictItem'
    ]),
    curVersion: {
      set(value) {
        this.setCurrentVersion(value)
        this.queryVersionInfo()
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
    ...mapActions([
      'queryVersionInfo'
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
    .operation {
      .el-button {
        border-color: #1890FF;
        color: #1890FF
      }
    }
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