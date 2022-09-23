<template>
  <div class="wrap">
    <div class="header">
      <Breadcrumb
        baseLabel="值域管理"
        :currentLabel="`${currentDictItem.nameCn}(${currentDictItem.nameEn})`"
      ></Breadcrumb>
      <div>
        <el-button
          type="primary"
          @click="editVersion"
          :disabled="!currentVersion"
          >版本管理</el-button
        >
        <el-button type="primary" @click="addVersion" :disabled="!currentDict"
          >新增版本</el-button
        >
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
      <IsMaster
        :isMaster="currentVersionItem ? currentVersionItem.isMaster : false"
      ></IsMaster>
      <IsRunning
        :currentState="currentVersion ? currentVersionInfo.state : ''"
      ></IsRunning>
    </div>
    <Detail
      :sourceType="currentDictItem.sourceType"
      v-bind="currentVersionInfo"
    ></Detail>
    <div class="search">
      <Form
        :formCfg="
          searchValueCfg(
            currentVersionInfo.parentCode,
            currentVersionInfo.hierarchyRelation,
            currentVersionInfo.type
          )
        "
        :formData="searchForm"
      ></Form>
      <div class="operation">
        <el-button @click="onSearch" type="primary" plain>查询</el-button>
        <el-button
          @click="addValue(false)"
          :disabled="!currentVersion"
          type="primary"
          plain
          >新增</el-button
        >
        <el-button
          @click="addValue(true)"
          :disabled="!currentDictValue"
          type="primary"
          plain
          >导入</el-button
        >
      </div>
    </div>
    <div class="table">
      <Table
        ref="dictValueTable"
        :key="`index${tableConfig.length}`"
        :tableConfig="tableCfg"
        :tableData="dictValueList"
        :pageInfo="pageInfo"
        @row-changed="val => setCurrentDictValue(val)"
        @page-changed="val => onPageInfoChange(val)"
      >
      </Table>
    </div>
    <Dialog
      title="新增版本"
      ref="addVersionDialog"
      class="addVersionDialog"
      @dialog-complete="onClickAddVersion"
      @dialog-closed="onAddVersionDialogClosed"
    >
      <Form
        ref="addVersionForm"
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
      @dialog-closed="onEditVersionDialogClosed"
    >
      <Form
        ref="editVersionForm"
        :formCfg="editVersionCfg(versionOptions, sourceTypeOptions)"
        :formData="dictVersionForm"
      ></Form>
    </Dialog>
    <Dialog
      :title="`${batchFlag ? '导入值域字典明细' : '新增值域字典明细'}`"
      ref="addValueDialog"
      class="addValueDialog"
      @dialog-complete="onClickAddValue"
    >
      <Form
        v-if="!batchFlag"
        :formCfg="dictValueFormCfg"
        :formData="dictValueForm"
        :formRule="valueRule"
      ></Form>
      <Upload v-if="batchFlag"
        ref="uploadRef"
        v-model="dictValueForm.file"
        @onDownload="downloadTemplate"
        class="upload"
      ></Upload>
    </Dialog>
    <Dialog
      title="编辑值域字典明细"
      ref="editValueDialog"
      class="editValueDialog"
      @dialog-complete="onClickEditValue"
    >
      <Form
        :formCfg="dictValueFormCfg"
        :formData="dictValueForm"
        :formRule="valueRule"
      >
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
import Upload from '@/components/form/Upload.vue'
import {
  addVersionCfg,
  editVersionCfg,
  addVersionRule
} from './config/versionForm'
import {
  searchValueCfg,
  addValueCfg,
  editValueCfg,
  valueRule
} from './config/valueForm'
import { createNamespacedHelpers } from 'vuex'
import { getMAxValueCodeApi, downloadTemplateApi } from '@/api/value'
import { getMaxNumber } from '@/utils/lang'
import { RUNNINGSTATE } from '@/utils/const'
import { processDownloadFile } from '@/utils/download'
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
      RUNNINGSTATE
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
      'searchForm',
      'task'
    ]),
    ...mapGetters([
      'currentVersionItem',
      'currentDictItem',
      'currentDictValueItem',
      'tableConfig',
      'dictValueFormCfg',
      'sourceTypeOptions',
      'versionOptions'
    ]),
    curVersion: {
      async set(value) {
        this.onVersionChange(value)
      },
      get() {
        return this.currentVersion
      }
    },
    tableCfg() {
      if (!this.tableConfig.length) {
        return [
          {
            colConfig: {
              property: '',
              label: '',
              minWidth: 150
            }
          }
        ]
      } else {
        return [
          ...this.tableConfig,
          {
            colConfig: {
              property: 'state',
              label: '操作',
              minWidth: 150,
              fixed: 'right'
            },
            actions: [
              {
                id: 'edit',
                type: 'el-button',
                name: '编辑',
                typeProps: {
                  type: 'text',
                  disabled: row => row.state === RUNNINGSTATE
                },
                callback: (index, data, row) => this.editValue(row)
              }, {
                id: 'delete',
                type: 'el-button',
                name: '删除',
                typeProps: {
                  type: 'text',
                  disabled: row => row.state === RUNNINGSTATE
                },
                callback: (index, data, row) => this.onClickDeleteValue(row)
              }
            ]
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations([
      'setCurrentVersion',
      'setSearchForm',
      'setVersionForm',
      'setVersionList',
      'setDictVersionForm',
      'setCurrentDictValue',
      'setDictValueForm',
      'setPageInfo'
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
      'addBatchDictValue',
      'editDictValue',
      'deleteDictValue'
    ]),
    async downloadTemplate() {
      const { id } = this.currentVersionItem
      const res = await downloadTemplateApi(id)
      processDownloadFile(res)
    },
    onSearch() {
      this.setPageInfo({ curPage: 1 })
      this.queryDictValue()
    },
    onAddVersionDialogClosed() {
      this.$refs.addVersionForm.resetFields()
    },
    onEditVersionDialogClosed() {
      this.$refs.editVersionForm.resetFields()
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
      if (await this.addDictVersion()) {
        this.$refs.addVersionDialog.toggleOpen()
        this.$message.success('添加版本成功！')
      }
    },
    async onClickEditVersion() {
      if (await this.editDictVersion()) {
        this.$message.success('版本管理编辑成功！')
        this.$refs.editVersionDialog.toggleOpen()
      }
    },
    async addValue(batchFlag) {
      this.batchFlag = batchFlag
      if (batchFlag) {
        this.$nextTick(() => {
          this.$refs.uploadRef.clearFileName()
        })
      }
      const { value } = await getMAxValueCodeApi(this.currentVersion)
      const form = Object.assign(
        {},
        { term_code: getMaxNumber(value, 14) },
        this.task.currentSuspect
      )
      this.setDictValueForm(form)
      this.file = null
      this.$refs.addValueDialog.toggleOpen()
    },
    editValue(row) {
      this.setDictValueForm(row)
      this.$refs.editValueDialog.toggleOpen()
    },
    async onClickAddValue() {
      if (this.batchFlag) {
        if (!this.dictValueForm.file) {
          this.$message.warning('请选择批量导入文件')
          return
        }
        if (await this.addBatchDictValue(this.dictValueForm.file)) {
          this.$refs.addValueDialog.toggleOpen()
          this.$message.success('导入值域字典明细成功！')
        }
      } else {
        if (await this.addDictValue()) {
          this.$refs.addValueDialog.toggleOpen()
          this.$message.success('新增值域字典明细成功！')
        }
      }
    },
    async onClickEditValue() {
      if (await this.editDictValue()) {
        this.$refs.editValueDialog.toggleOpen()
        this.$message.success('编辑值域字典明细成功！')
      }
    },
    async onClickDeleteValue(row) {
      const { term_code } = row
      await this.$confirm('是否删除该值域字典明细？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
      if (await this.deleteDictValue(term_code)) {
        this.$message.success('值域字典明细删除成功！')
      }
    },
    handleChange(file) {
      this.file = file.name
    }
  },
  watch: {
    dictValueList: {
      handler() {
        setTimeout(() => {
          this.$refs.dictValueTable.setCurrentRow(this.currentDictValueItem)
        }, 60)
      }
    },
    currentDict: {
      handler() {
        this.setPageInfo({curPage : 1})
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
    border-bottom: 1px solid #e5e5e5;
  }
  .search {
    width: 100%;
    box-sizing: border-box;
    position: relative;
    display: flex;
    padding-left: 10px;
    padding-right: 10px;
    justify-content: space-between;
    align-items: center;
    .operation {
      display: flex;
      flex-direction: row;
      align-items: center;
      .batchAdd {
        margin-left: 10px;
        text-decoration: underline;
      }
    }
  }
  .version {
    display: flex;
    align-items: center;
    width: 100%;
    height: 41px;
    flex-shrink: 0;
    padding-left: 10px;
    padding-right: 10px;
    font-size: 13px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    .el-select {
      margin: 0 10px 0 9px;
      width: 150px;
    }
  }
  .table {
    flex-grow: 1;
    flex-shrink: 1;
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
  .el-form-item__label {
    width: 64px;
    text-align: left;
  }
  .el-input {
    margin-right: 8px;
  }

  .el-select {
    margin-left: 0;
    margin-right: 8px;
  }
}

::v-deep .addVersionDialog .el-dialog {
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

::v-deep .editVersionDialog .el-dialog {
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

::v-deep .addValueDialog .el-dialog {
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

::v-deep .editValueDialog .el-dialog {
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
