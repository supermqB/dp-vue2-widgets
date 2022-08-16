<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <Breadcrumb baseLabel="事件模型管理" :currentItem="currentCatalogItem">
        </Breadcrumb>
        <State :currentState="currentCatalogItem.state"></State>
      </div>
      <div>
        <el-button type="primary" @click="onclickAddColumn">新增</el-button>
        <el-button type="primary" @click="onclickEditColumn">编辑</el-button>
      </div>
    </div>
    <div class="search">
      <Form class="searchForm" :formData="searchForm" :formCfg="formCfg"></Form>
      <div class="right">
        <el-button @click="onClickSearch">查询</el-button>
        <el-button type="text" @click="advancedSearch">高级搜索</el-button>
      </div>
    </div>
    <div class="content">
      <Table
        ref="columnTable"
        :tableConfig="tableConfig"
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
          columnCfg(queryDataElement, dataElementData, setDataElementInfo)
        "
        :formData="columnForm"
        :formRule="columnRule"
      ></Form>
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
import { columnCfg, columnRule } from './config/columnForm'
import { adSearchCfg } from './config/adSearchForm'
import { createNamespacedHelpers } from 'vuex'
import { queryDataElementApi } from '@/api/event'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('event')
export default {
  components: {
    Form,
    Table,
    Dialog,
    Breadcrumb,
    State
  },
  data() {
    return {
      formCfg,
      tableConfig,
      columnCfg,
      columnRule,
      adSearchCfg,
      dataElementData: []
    }
  },
  computed: {
    ...mapGetters(['currentCatalogItem', 'currentColumnRow']),
    ...mapState([
      'columnList',
      'pageInfo',
      'searchForm',
      'adSearchForm',
      'columnForm',
      'currentColumn',
      'currentCatalog'
    ])
  },
  methods: {
    ...mapMutations([
      'setPageInfo',
      'setColumnForm',
      'setCurrentColumn',
      'setIsAdvance'
    ]),
    ...mapActions(['submitColumn', 'adQueryColumn', 'queryColumn']),
    async pageInfoChanged(val) {
      this.setPageInfo(val)
      await this.queryColumn()
      this.setCurrentColumn()
    },
    async onClickSearch() {
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
    onclickEditColumn() {
      this.$refs.columnDialog.toggleOpen()
      this.setColumnForm(this.currentColumnRow)
    },
    async onClickSubmitColumn() {
      await this.$refs.columnForm.validate()
      this.submitColumn()
      this.$refs.columnDialog.toggleOpen()
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
    async queryDataElement(val) {
      const res = await queryDataElementApi(val)
      this.dataElementData = res.value.records.map(item => {
        return {
          id: item.id,
          value: item.id,
          label: item.nameCn,
          obj: item
        }
      })
    },
    setDataElementInfo(val) {
      const dataElement = this.dataElementData.find(item => item.id === val)
      if (dataElement) {
        const { valueRange, valueDomainName, type, format, identifier, id } =
          dataElement.obj
        this.setColumnForm({
          valueRange,
          valueDomainName,
          type,
          format,
          identifier,
          dataElementId: id
        })
      }
    }
  },
  watch: {
    currentColumnRow: {
      handler(cur) {
        this.$refs.columnTable.setCurrentRow(cur)
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
    padding: 0 10px;
    box-sizing: border-box;
    border-bottom: 1px solid #e5e5e5;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .search {
    position: relative;
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .right {
      display: flex;
      align-items: center;
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
    height: 320px;
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
  .el-form-item {
    display: flex;
    margin-bottom: 0px;
  }
  .el-form-item__label {
    padding: 0 8px;
  }
}
</style>
