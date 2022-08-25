<template>
  <div class="centerWrap">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>BWD文件管理</el-breadcrumb-item>
        <el-breadcrumb-item>
          <!-- {{ currentBwd.label }} <img :src="icon(currentBwd.state)" /> -->
        </el-breadcrumb-item>
      </el-breadcrumb>
      <div>
        <el-button type="primary" @click="open">启用</el-button>
        <el-button type="primary" @click="editFileFields">编辑</el-button>
        <el-button type="primary" @click="addFileFields">新增</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formCfg="searchCfg" :formData="searchData"></Form>
      <div style="line-height: 36px">
        <el-button @click="onClickSearch">查询</el-button>
        <el-button type="text" style="font-size: 13px" @click="advancedSearch"
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
      adSearchCfg
    }
  },
  computed: {
    ...mapGetters(['currentCatalogItem', 'currentFieldsRow']),
    ...mapState({
      currentBwd: 'currentBwd',
      pageInfo: 'pageInfo',
      searchData: 'searchData',
      fieldsList: 'fieldsList',
      fileFieldsData: 'fileFieldsData',
      adSearchData: 'adSearchData',
      currentColumn: 'currentColumn'
    })
  },
  methods: {
    ...mapMutations([
      'setFieldsForm',
      'setIsAdvance',
      'setCurrentField',
      'setPageInfo'
    ]),
    ...mapActions(['queryField', 'submitFields']),
    open() {
      this.$confirm(
        `是否${this.currentCatalogItem.state}【患者信息记录文件】？`,
        {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }
      )
    },
    async pageInfoChanged(val) {
      this.setPageInfo(val)
      await this.queryField()
      this.setCurrentField()
    },
    async onClickSearch() {
      this.setIsAdvance(false)
      await this.queryField()
      this.setCurrentField()
    },
    async onClickSubmitFields() {
      const { valid } = await this.$refs.fileFieldsForm.validate()
      if (valid) {
        this.submitFields()
        this.$refs.fileFieldsDialog.toggleOpen()
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
      this.setFieldsForm(this.currentFieldsRow)
    },
    addFileFields() {
      this.$refs.fileFieldsDialog.toggleOpen()
      this.setFieldsForm()
    },
    advancedSearch() {
      this.$refs.searchDialog.toggleOpen()
    },
    async onClickAdvanceSearch() {}
  },
  watch: {
    currentFieldsRow: {
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
  }
  .search {
    height: 36px;
    padding: 0 10px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
  }
  .table {
    flex: 1;
  }
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
    .el-form-item {
      display: inline-flex;
      margin-bottom: 0px;
    }
    .el-form-item__content {
      line-height: 38 px;
      padding-right: 50px;
    }
    .el-input__inner {
      height: 28px;
    }
  }
}
</style>
