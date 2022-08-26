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
      <IsMaster :isMaster="currentVersionItem ? currentVersionItem.isMaster : false"></IsMaster>
      <IsRunning :currentState="currentVersion ? currentVersionInfo.state : ''"></IsRunning>
    </div>
    <Detail
      :sourceType="currentDictItem.sourceType"
      v-bind="currentVersionInfo"></Detail>
    <div class="search">
      <Form :formCfg="searchValueCfg(currentVersionInfo.parentCode, currentVersionInfo.hierarchyRelation)" :formData="searchForm"></Form>
      <div class="operation">
        <el-button @click="queryDictValue">查询</el-button>
        <el-button @click="addValue" :disabled="!currentVersion && false">新增</el-button>
        <el-button @click="editValue" :disabled="!currentColumn && false">编辑</el-button>
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
      <Form
        :formCfg="dictValueFormCfg"
        :formData="dictValueForm"
        :formRule="valueRule"
      ></Form>
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
    IsRunning
},
  data() {
    return {
      addVersionCfg,
      editVersionCfg,
      addVersionRule,
      addValueCfg,
      editValueCfg,
      searchValueCfg,
      valueRule
    }
  },
  computed: {
    ...mapState([
      'currentVersion', 
      'currentColumn',
      'currentValue',
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
        // console.log(res)
        // let str = typeof res.headers['content-disposition'] === 'undefined'
        //           ? res.headers['Content-Disposition'].split(';')[1]
        //           : res.headers['content-disposition'].split(';')[1]
      
        // let fileName = typeof str.split('fileName=')[1] === 'undefined'
        //                 ? str.split('filename=')[1]
        //                 : str.split('fileName=')[1]
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
      // await this.queryDict()
      await this.queryVersion()
      await this.queryVersionInfo()
      // await this.queryDictValue()
    },
    async addValue() {
      const { value } = await getMAxValueCodeApi(this.currentVersion)
      this.setDictValueForm({ '术语编码': getMaxNumber(value, 14) })
      this.$refs.addValueDialog.toggleOpen()
    },
    editValue() {
      this.setDictValueForm(this.currentDictValue)
      this.$refs.editValueDialog.toggleOpen()
    },
    async onClickAddValue() {
      await this.addDictValue()
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