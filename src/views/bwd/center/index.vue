<template>
  <div class="centerWrap">
    <div class="header">
      <div class="left">
        <!-- <el-breadcrumb separator="/">
          <el-breadcrumb-item>BWD文件管理</el-breadcrumb-item>
          <el-breadcrumb-item>
            <b>{{ currentBwdItem.label }} ({{ currentBwdItem.nameEn }}) </b>
            <img :src="icon(currentBwdItem.state)" />
          </el-breadcrumb-item>
        </el-breadcrumb> -->
        <Breadcrumb
          baseLabel="BWD文件管理"
          :currentLabel="`${currentBwdItem.label}(${currentBwdItem.nameEn})`"  
        ></Breadcrumb>
        <img :src="icon(currentBwdItem.state)" />
      </div>
      <div>
        <el-button
          type="primary"
          @click="editFileFields"
          :disabled="currentBwdItem.state === RUNNINGSTATE || !currentFieldRow"
          >编辑</el-button
        >
        <el-button
          type="primary"
          @click="addFileFields"
          :disabled="currentBwdItem.state === RUNNINGSTATE"
          >新增</el-button
        >
      </div>
    </div>
    <div class="search">
      <Form :formCfg="searchCfg(versionList, onVersionChange)" :formData="searchData"></Form>
      <div class="buttons">
        <el-button @click="onClickSearch">查询</el-button>
        <el-button
          type="text"
          style="font-size: 13px"
          @click="advancedSearch"
          disabled
          >高级搜索</el-button
        >
      </div>
    </div>
    <div class="table">
      <Table
        ref="columnTable"
        :tableConfig="tableConfig"
        :tableData="fieldsList"
        :pageInfo="pageInfo"
        @row-changed="rowChange"
        @page-changed="val => pageInfoChanged(val)"
      ></Table>
    </div>
    <Dialog
      :title="`${fileFieldsData.id ? '编辑文件字段' : '新增文件字段'}`"
      ref="fileFieldsDialog"
      class="fileFieldsDialog"
      @dialog-closed="onClosedFieldsForm"
      @dialog-complete="onClickSubmitFields"
    >
      <Form
        ref="fileFieldsForm"
        :formCfg="fileFieldsCfg"
        :formData="fileFieldsData"
        :formRule="fileFieldsRule"
      ></Form>
    </Dialog>
    <Dialog
      title="高级搜索"
      ref="searchDialog"
      class="searchDialog"
      @dialog-complete="onClickAdvanceSearch"
    >
      <Form
        ref="adSearchForm"
        :formCfg="adSearchCfg"
        :formData="adSearchData"
      ></Form>
    </Dialog>
  </div>
</template>

<script>
import { STOPSTATE, RUNNINGSTATE } from '@/utils/const'
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import State from '@/components/state/IsRunning.vue'
import Breadcrumb from '@/components/header/Breadcrumb.vue'
import { tableConfig } from './config/tableColumn'
import { searchCfg } from './config/searchForm'
import { adSearchCfg } from './config/adSearchForm'
import Dialog from '@/components/Dialog.vue'
import { fileFieldsCfg, fileFieldsRule } from './config/fileFieldsForm'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('bwd')
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
      tableConfig,
      fileFieldsCfg,
      fileFieldsRule,
      adSearchCfg,
      RUNNINGSTATE
    }
  },
  computed: {
    ...mapGetters(['currentBwdItem', 'currentFieldRow', 'pageInfo']),
    ...mapState({
      currentBwd: 'currentBwd',
      pageInfo: 'pageInfo',
      searchData: 'searchData',
      fieldsList: 'fieldsList',
      fileFieldsData: 'fileFieldsData',
      adSearchData: 'adSearchData',
      versionList: 'versionList'
    })
  },
  methods: {
    ...mapMutations([
      'setFieldsForm',
      'setIsAdvance',
      'setCurrentField',
      'setPageInfo',
      'setEventMapList'
    ]),
    ...mapActions(['queryField', 'submitFields', 'queryMappingList']),
    icon(state) {
      switch (state) {
        case RUNNINGSTATE:
          return require('@/assets/images/common/icons/running.png')
        case STOPSTATE:
          return require('@/assets/images/common/icons/income.png')
      }
    },
    rowChange(val) {
      this.setCurrentField(val.id)
    },
    async pageInfoChanged(val) {
      this.setPageInfo(val)
      await this.queryField()
      this.setCurrentField()
    },
    async onClickSearch() {
      this.setPageInfo({ curPage: 1 })
      this.setIsAdvance(false)
      await this.queryField()
      this.setCurrentField()
    },
    async onClickAdvanceSearch() {
      this.setIsAdvance(true)
      await this.queryField()
      this.setCurrentField()
      this.$refs.searchDialog.toggleOpen()
    },
    // 取消表单重置
    onClosedFieldsForm() {
      this.setColumnForm()
      this.$refs.fileFieldsForm.resetFields()
    },
    // 提交表单验证
    async onClickSubmitFields() {
      const { valid } = await this.$refs.fileFieldsForm.validate()
      if (valid) {
        if (await this.submitFields()) this.$refs.fileFieldsDialog.toggleOpen()
      } else {
        this.$alert('请检查输入项是否完整！')
      }
    },
    onClosedFieldsForm() {
      this.setFieldsForm()
      this.$refs.fileFieldsForm.resetFields()
    },
    editFileFields() {
      this.$refs.fileFieldsDialog.toggleOpen()
      this.setFieldsForm(this.currentFieldRow)
    },
    addFileFields() {
      this.$refs.fileFieldsDialog.toggleOpen()
      this.setFieldsForm({ index: this.pageInfo.totalSize + 1 })
    },
    advancedSearch() {
      this.$refs.searchDialog.toggleOpen()
    },
    async onVersionChange() {
      this.queryMappingList()
      await this.queryField()
      this.setCurrentField()
      this.setEventMapList()
    },
  },
  watch: {
    currentFieldRow: {
      handler(cur) {
        this.$refs.columnTable.setCurrentRow(cur)
      }
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
    .left {
      display: flex;
      flex-direction: row;
      align-items: center;
      img {
        margin-left: 4px;
        margin-top: 2px;
      }
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
    .buttons {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
  }
  .table {
    flex: 1;
  }
}
::v-deep .el-form-item {
  margin-top: -2px;
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
    display: flex;
    flex-wrap: wrap;
    .el-form-item {
      display: inline-flex;
      padding-top: 1px;
      margin-bottom: -1px;
    }
    .el-form-item__label {
      width: 77px;
      padding-right: 6px!important;
      text-align: left;
    }
    .el-form-item__content {
      line-height: 38px;
      padding-right: 10px;
    }
    .el-input__inner {
      height: 28px;
    }
  }
}
</style>
