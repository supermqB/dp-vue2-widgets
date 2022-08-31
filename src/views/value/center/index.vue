<template>
  <div class="wrap">
    <div class="header">
      <Breadcrumb
        baseLabel="值域管理"
        :currentLabel="`${currentDictItem.nameCn}(${currentDictItem.nameEn})`"></Breadcrumb>
      <div>
        <el-button type="primary" @click="editVersion" :disabled="!currentVersion">版本管理</el-button>
        <el-button type="primary" @click="addVersion" :disabled="!currentDict">新增版本</el-button>
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
      <IsMaster :isMaster="currentVersionItem ? currentVersionItem.isMaster : false"></IsMaster>
      <IsRunning :currentState="currentVersion ? currentVersionInfo.state : ''"></IsRunning>
    </div>
    <Detail
      :sourceType="currentDictItem.sourceType"
      v-bind="currentVersionInfo"></Detail>
    <div class="search">
      <Form
        :formCfg="searchValueCfg(
          currentVersionInfo.parentCode,
          currentVersionInfo.hierarchyRelation,
          currentVersionInfo.type
        )"
        :formData="searchForm"
      ></Form>
      <div class="operation">
        <el-button @click="queryDictValue" type="primary" plain>查询</el-button>
        <el-button @click="addValue" :disabled="!currentVersion" type="primary" plain>新增</el-button>
        <el-button @click="editValue" :disabled="!currentDictValue" type="primary" plain>编辑</el-button>
      </div>
    </div>
    <div class="table">
      <Table
        ref="dictValueTable"
        :key="`index${tableConfig.length}`"
        :tableConfig="tableConfig"
        :tableData="dictValueList"
        :pageInfo="pageInfo"
        @row-changed="val => setCurrentDictValue(val)"
        @page-changed="val => onPageInfoChange(val)">
      </Table>
    </div>
    <Dialog
      title="新增版本"
      ref="addVersionDialog"
      class="addVersionDialog"
      @dialog-complete="onClickAddVersion"
    >
      <Form
        :formCfg="addVersionCfg(versionList, downloadTemplate)"
        :formData="versionForm"
        :formRule="addVersionRule"
      ></Form>
    </Dialog>
    <Dialog
      title="版本信息管理"
      ref="editVersionDialog"
      class="editVersionDialog"
      @dialog-complete="onClickEditVersion"
    >
      <Form
        :formCfg="editVersionCfg(versionList, sourceTypeOptions)"
        :formData="dictVersionForm"></Form>
    </Dialog>
    <Dialog
      title="新增值域字典明细"
      ref="addValueDialog"
      class="addValueDialog"
      @dialog-complete="onClickAddValue">
      <div class="batchFlag">
        <span>新增方式：</span>
        <el-radio-group v-model="batchFlag">
          <el-radio :label="false">单条新增</el-radio>
          <el-radio :label="true">批量导入</el-radio>
        </el-radio-group>
      </div>
      <Form
        v-if="!batchFlag"
        :formCfg="dictValueFormCfg"
        :formData="dictValueForm"
        :formRule="valueRule"
      ></Form>
      <Upload v-if="batchFlag"
        v-model="file"
        @onDownload="downloadTemplate"
        class="upload"></Upload>
    </Dialog>
    <Dialog
      title="编辑值域字典明细"
      ref="editValueDialog"
      class="editValueDialog"
      @dialog-complete="onClickEditValue">
      <Form 
        :formCfg="dictValueFormCfg"
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
import Upload from '@/components/form/Upload.vue'
import { addVersionCfg, editVersionCfg, addVersionRule } from './config/versionForm'
import { searchValueCfg, addValueCfg, editValueCfg, valueRule } from './config/valueForm'
import { createNamespacedHelpers } from 'vuex'
import { getMAxValueCodeApi, downloadTemplateApi } from '@/api/value'
import { getMaxNumber } from '@/utils/lang'
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
    IsRunning,
    Upload
},
  data() {
    return {
      addVersionCfg,
      editVersionCfg,
      addVersionRule,
      addValueCfg,
      editValueCfg,
      searchValueCfg,
      valueRule,
      batchFlag: false,
      file: null,
    }
  },
  computed: {
    ...mapState([
      'currentVersion', 
      'currentDict',
      'currentVersionInfo',
      'currentDictValue',
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
      'currentDictItem',
      'tableConfig',
      'dictValueFormCfg',
      'sourceTypeOptions'
    ]),
    curVersion: {
      async set(value) {
        this.onVersionChange(value)
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
      'setCurrentVersion',
      'setSearchForm',
      'setVersionForm',
      'setVersionList',
      'setDictVersionForm',
      'setCurrentDictValue',
      'setDictValueForm'
    ]),
    ...mapActions([
      'queryDict',
      'queryVersion',
      'queryVersionInfo',
      'queryDictValue',
      'onPageInfoChange',
      'onVersionChange',
      'addDictVersion',
      'editDictVersion',
      'addDictValue',
      'editDictValue'
    ]),
    downloadTemplate() {
      const { id } = this.currentVersionItem
      downloadTemplateApi(id).then(res => {
        let url = window.URL.createObjectURL(res.data)
        const a = document.createElement("a");
        a.setAttribute("href", url);
        a.setAttribute("download", `${this.currentVersionInfo.type}.xlsx`);
        document.body.append(a);
        a.click();
        document.body.removeChild(a);
      })     
    },
    addVersion() {
      const { nameCn } = this.currentDictItem
      this.setVersionForm({ nameCn })
      this.$refs.addVersionDialog.toggleOpen()
    },
    editVersion() {
      const { nameEn, nameCn, sourceTypeCode } = this.currentDictItem
      this.setDictVersionForm({
        nameCn, 
        nameEn,
        sourceTypeCode
      })
      this.$refs.editVersionDialog.toggleOpen()
    },
    async onClickAddVersion() {
      await this.addDictVersion()
      this.$refs.addVersionDialog.toggleOpen()
      this.$message.success('添加版本成功！')
    },
    async onClickEditVersion() {
      await this.editDictVersion()
      this.$message.success('版本管理编辑成功！')
      this.$refs.editVersionDialog.toggleOpen()
      const current = this.versionList.find(
        item => item.value === this.dictVersionForm.version
      )
      this.setCurrentVersion(current.id)
      await this.queryVersion()
      await this.queryVersionInfo()
    },
    async addValue() {
      const { value } = await getMAxValueCodeApi(this.currentVersion)
      this.setDictValueForm({ 'term_code': getMaxNumber(value, 14) })
      this.batchFlag = false
      this.file = null
      this.$refs.addValueDialog.toggleOpen()
    },
    editValue() {
      this.setDictValueForm(this.currentDictValue)
      this.$refs.editValueDialog.toggleOpen()
    },
    async onClickAddValue() {
      if (this.batchFlag) {
        if (!this.file) {
          this.$message.warning('请选择批量导入文件')
          return
        }
      }
      await this.addDictValue(this.batchFlag ? this.file : null)
      this.$refs.addValueDialog.toggleOpen()
      this.$message.success('新增值域字典明细成功！')
    },
    async onClickEditValue() {
      await this.editDictValue()
      this.$refs.editValueDialog.toggleOpen()
      this.$message.success('编辑值域字典明细成功！')
    },
    handleChange(file) {
      this.file = file.name
    }
  },
  watch: {
    currentDictValue: {
      handler(cur) {
        this.$refs.dictValueTable.setCurrentRow(cur)
      }
    },
    currentDict: {
      handler() {
        this.setVersionList()
        this.setSearchForm()
      }
    }
  }
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
    flex-shrink: 0;
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
      display: flex;
      flex-direction: row;
      align-items: center;
      .batchAdd {
        margin-left: 10px;
        text-decoration: underline
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
  flex-wrap: wrap;
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
  width: 900px;

  .batchFlag {
    padding-left: 80px;
    padding-bottom: 15px;
    .el-radio-group {
      margin-left: 10px;
    }
  }
  .upload {
    margin: 0 10%;
    width: 50%;
    
  }
  .el-form {
    padding-right: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .el-form-item {
    width: 50%;
    margin-bottom: 6px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}

::v-deep .editValueDialog .el-dialog{
  width: 900px;
  .el-form {
    padding-right: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .el-form-item {
    width: 50%;
    margin-bottom: 6px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
}


</style>