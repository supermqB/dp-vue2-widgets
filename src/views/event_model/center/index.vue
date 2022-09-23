<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <Breadcrumb
          baseLabel="事件模型管理"
          :currentLabel="`${
            currentCatalog
              ? `${currentCatalogItem.nameCn}(${currentCatalogItem.nameEn})`
              : ''
          }`"
        >
        </Breadcrumb>
        <State :currentState="currentCatalogItem.state"></State>
      </div>
      <div>
        <el-button
          type="primary"
          @click="onclickAddColumn"
          :disabled="!currentCatalog"
          >新增</el-button
        >
        <el-button type="primary" @click="onclickImportColumn">导入</el-button>
      </div>
    </div>
    <div class="search">
      <Form class="searchForm" :formData="searchForm" :formCfg="formCfg"></Form>
      <div class="right">
        <el-button @click="onClickSearch" type="primary" plain>查询</el-button>
        <el-button class="advance" type="text" @click="advancedSearch"
          >高级搜索</el-button
        >
      </div>
    </div>
    <div class="content">
      <Table
        ref="columnTable"
        :tableConfig="tableCfg"
        :tableData="columnList"
        :pageInfo="pageInfo"
        @row-changed="val => setCurrentColumn(val.id)"
        @page-changed="val => pageInfoChanged(val)"
      ></Table>
    </div>
    <Dialog
      :title="`${!columnForm.id ? '新增字段' : '编辑字段'}`"
      ref="columnDialog"
      class="columnDialog"
      @dialog-closed="onClosedColumnForm"
      @dialog-complete="onClickSubmitColumn"
    >
      <Form
        ref="columnForm"
        :formCfg="
          columnCfg(
            setDataElementInfo,
            dataElement.dataElementList,
            queryDataElement,
            columnForm.valueDomainName,
            valueVersionList
          )
        "
        :formData="columnForm"
        :formRule="columnRule"
      ></Form>
    </Dialog>
    <Dialog
      title="导入字段"
      ref="importDialog"
      class="importDialog"
      @dialog-complete="onClickImport"
    >
      <Upload
        v-model="file"
        @onDownload="downloadTemplate"
        class="upload"
      ></Upload>
    </Dialog>
    <Dialog
      title="高级搜索"
      ref="searchDialog"
      class="searchDialog"
      @dialog-complete="onClickAdvanceSearch"
    >
      <Form :formCfg="adSearchCfg" :formData="adSearchForm"></Form>
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
import { RUNNINGSTATE } from '@/utils/const'
import { columnCfg, columnRule } from './config/columnForm'
import { adSearchCfg } from './config/adSearchForm'
import Upload from '@/components/form/Upload.vue'
import { processDownloadFile } from '@/utils/download'
import { downloadTemplateApi } from '@/api/event'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('event')
export default {
  components: {
    Form,
    Table,
    Dialog,
    Breadcrumb,
    State,
    Upload
  },
  data() {
    return {
      formCfg,
      tableConfig,
      columnCfg,
      columnRule,
      adSearchCfg,
      RUNNINGSTATE,
      file: null
    }
  },
  mounted() {},
  computed: {
    ...mapGetters(['currentCatalogItem', 'currentColumnRow']),
    ...mapState({
      columnList: 'columnList',
      pageInfo: 'pageInfo',
      searchForm: 'searchForm',
      adSearchForm: 'adSearchForm',
      columnForm: 'columnForm',
      currentColumn: 'currentColumn',
      currentCatalog: 'currentCatalog',
      valueVersionList: 'valueVersionList',
      dataElement: 'dataElement'
    }),
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
                type: 'el-button',
                name: '编辑',
                typeProps: {
                  type: 'text',
                  disabled: this.currentCatalogItem.state === RUNNINGSTATE
                },
                callback: (index, data, row) => this.onclickEditColumn(row)
              }
            ]
          }
        ]
      }
    }
  },
  mounted() {},
  methods: {
    ...mapMutations([
      'setPageInfo',
      'setColumnForm',
      'setCurrentColumn',
      'setIsAdvance'
    ]),
    ...mapActions([
      'submitColumn',
      'adQueryColumn',
      'queryColumn',
      'getValueVersionList'
    ]),
    ...mapActions({
      queryDataElement: 'queryDataElement',
      setDataElementInfo: 'setDataElementInfo',
      addBatchEvent: 'addBatchEvent'
    }),
    async downloadTemplate() {
      const { id } = this.currentCatalogItem
      const res = await downloadTemplateApi(id)
      processDownloadFile(res)
    },
    async pageInfoChanged(val) {
      this.setPageInfo(val)
      await this.queryColumn()
      this.setCurrentColumn()
    },
    async onClickSearch() {
      this.setPageInfo({ curPage: 1 })
      this.setIsAdvance(false)
      await this.queryColumn()
      this.setCurrentColumn()
    },
    onClosedColumnForm() {
      this.setColumnForm()
      this.$refs.columnForm.resetFields()
    },
    onclickAddColumn() {
      this.$refs.columnDialog.toggleOpen()
      this.setColumnForm()
    },
    onclickImportColumn() {
      this.file = null
      this.$refs.importDialog.toggleOpen()
    },
    async onClickImport() {
      if (!this.file) {
        this.$message.warning('请选择批量导入文件')
        return
      }
      console.log(file, 111)
      if (await this.addBatchEvent(this.file)) {
        this.$refs.importDialog.toggleOpen()
        this.$message.success('导入字段成功！')
      }
    },
    onclickEditColumn(row) {
      this.$refs.columnDialog.toggleOpen()
      this.setColumnForm(row)
    },
    async onClickSubmitColumn() {
      const { valid } = await this.$refs.columnForm.validate()
      if (valid) {
        if (await this.submitColumn()) this.$refs.columnDialog.toggleOpen()
      } else {
        this.$alert('请检查输入项是否完整！')
      }
    },
    async onClickAdvanceSearch() {
      this.setIsAdvance(true)
      await this.queryColumn()
      this.setCurrentColumn()
      this.$refs.searchDialog.toggleOpen()
    },
    advancedSearch() {
      this.$refs.searchDialog.toggleOpen()
    },
    handleChange(file) {
      this.file = file.name
    }
  },
  watch: {
    currentColumnRow: {
      handler(cur) {
        this.$refs.columnTable.setCurrentRow(cur)
      }
    },
    'columnForm.valueDomainName': {
      handler(cur, old) {
        this.getValueVersionList(cur)
        old ? this.setColumnForm({ dictTableId: '' }) : null
      }
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
    padding: 0 13px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
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
    border-bottom: 1px solid #e5e5e5;
    .right {
      display: flex;
      align-items: center;
      .advance {
        text-decoration: underline;
      }
    }
  }
  .content {
    flex-grow: 1;
    padding: 0 5px;
  }
}

::v-deep .columnDialog .el-dialog {
  width: 800px;
  form {
    height: 330px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    .el-form-item {
      width: 340px;
      margin-bottom: 4px;
      display: flex;
      justify-content: flex-end;
    }
    .el-select {
      margin: 0;
    }
  }
}
::v-deep .importDialog .el-dialog {
  width: 900px;
  .upload {
    margin: 0 10%;
    width: 50%;
  }
}
::v-deep .searchDialog .el-dialog {
  width: 600px;
  .el-form {
    padding-right: 100px;
  }
  .el-form-item {
    margin-bottom: 8px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
  }
  .el-select {
    margin: 0;
  }
}

::v-deep .searchForm {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .el-form-item {
    display: flex;
    margin-bottom: 0px;
  }
  .el-form-item__label {
    padding: 0 8px;
  }
}
::v-deep .el-table th.el-table__cell > .cell {
  padding-right: 0px;
}
</style>
