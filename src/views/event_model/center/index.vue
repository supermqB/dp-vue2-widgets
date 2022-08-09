<template>
  <div class="wrapper">
    <div class="header">
      <div class="left">
        <Breadcrumb
          baseLabel="事件模型管理"
          :currentLabel="`${currentCatalogItem ? `${currentCatalogItem.nameCn}(${currentCatalogItem.nameEn})` : ''}`">
        </Breadcrumb>
        <State :currentState="currentCatalogItem.state"></State>
      </div>
      <div>
        <el-button type="primary" @click="addColumn">新增</el-button>
        <el-button type="primary" @click="editColumn">编辑</el-button>
      </div>
    </div>
    <div class="search">
      <Form class="searchForm" :formData="searchForm" :formCfg="formCfg"></Form>
      <div>
        <el-button @click="queryColumn">查询</el-button>
        <el-button type="text" @click="advancedSearch">高级搜索</el-button>
      </div>
    </div>
    <div class="content">
      <Table
        ref="columnTable"
        :tableConfig="tableConfig"
        :tableData="columnList"
        :pageInfo="pageInfo"
        @page-changed="val => pageInfoChanged(val)"
      ></Table>
    </div>
    <Dialog
      :title="`${columnState === ADDSTATE ? '新增字段' : '编辑字段'}`"
      ref="columnDialog"
      class="columnDialog"
      @onClosed="resetColumnForm"
      @dialog-complete="submitColumn"
    >
      <Form ref="columnForm" :formCfg="columnCfg(queryDataElement, dataElementData, setDataElementInfo)" :formData="columnData"></Form>
    </Dialog>
    <Dialog
      title="高级搜索"
      ref="searchDialog"
      class="searchDialog"
    >
      <Form :formCfg="adSearchCfg" :formData="adSearchData"></Form>
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
import { columnCfg } from './config/columnForm'
import { adSearchCfg } from './config/adSearchForm'
import { ADDSTATE, EDITSTATE } from '@/utils/const'
import { createNamespacedHelpers } from 'vuex'
import { queryDataElementApi, addCatalogColumnApi, updateCatalogColumnApi } from '@/api/event'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('event')
export default {
  components: {
    Form, Table, Dialog, Breadcrumb, State
  },
  data() {
    return {
      formCfg,
      tableConfig,
      columnState: '',
      columnCfg,
      columnData: {
        id: '',
        elementNameCn: '',
        type: '',
        format: '', // 表示格式
        identifier: '', // 数据元标识
        nameCn: '',
        nameEn: '',
        definition: '', // 字段定义
        primaryKeyFlag: '', // 
        requiredFlag: '',
        indexFlag: '',
        valueRange: '',
        valueDomainName: '',
        dataElementId: '',
        datasetId: ''
      },
      adSearchCfg,
      adSearchData: {
        index1: '',
        index2: '',
        index3: '',
        index4: '',
        index5: ''
      },
      dataElementData: []
    }
  },
  computed: {
    ...mapGetters(['currentCatalogItem', 'currentColumnRow' ]),
    ...mapState(['columnList', 'pageInfo', 'searchForm', 'currentColumn', 'currentCatalog'])
  },
  created() {
    this.ADDSTATE = ADDSTATE
    this.EDITSTATE = EDITSTATE
  },
  methods: {
    ...mapMutations(['setPageInfo']),
    ...mapActions(['queryColumn']),
    pageInfoChanged(val) {
      this.setPageInfo(val)
      this.queryColumn({})
    },
    resetColumnForm() {
      // this.$refs.columnForm.resetFields()
    },
    addColumn() {
      this.columnState = ADDSTATE
      this.$refs.columnDialog.toggleOpen()
    },
    editColumn() {
      this.columnState = EDITSTATE
      this.$refs.columnDialog.toggleOpen()
      Object.assign(this.columnData, this.currentColumnRow)
    },
    async submitColumn() {
      if (this.columnState === ADDSTATE) {
        await addCatalogColumnApi(this.columnData)
        this.$message.success("新增字段成功！")
      } else {
        await updateCatalogColumnApi(this.columnData)
        this.$message.success("编辑字段成功！")
      }
    },
    advancedSearch() {
      this.$refs.searchDialog.toggleOpen()
      this.currentColumnRow
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
      this.dataElementData.forEach(item => {
        if (item.id === val) {
          ['valueRange', 'valueDomainName', 'type', 'format', 'identifier' ].forEach(key => {
            this.columnData[key] = item['obj'][key]
          })
          console.log(item.id, this.currentCatalog)
          this.columnData.dataElementId = item.id
          this.columnData.datasetId = this.currentCatalog
          console.log(this.columnData)
        }
      })
    }
  },
  watch: {
    currentColumnRow: {
      handler(cur) {
        this.$nextTick(() => {
          this.$refs.columnTable.setCurrentRow(cur)
        })
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
    border-bottom: 1px solid #E5E5E5;
    .left {
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
  }
  .search {
    position: relative;
    /* height: 41px; */
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #E5E5E5;
  }
  .content {
    flex-grow: 1;
    padding: 0 5px;
  }
}

::v-deep .columnDialog .el-dialog{
  width: 800px;
  form {
    height: 400px;
    padding-left: 10px;
    padding-right: 10px;
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    flex-wrap: wrap;
    .el-form-item {
      width: 340px;
      margin-bottom: 13.5px;
      display: flex;
      justify-content: flex-end;
    }
    .el-select {
      margin: 0;
    }
  }
}

::v-deep .searchDialog .el-dialog{
  width: 700px;
  .form {
    padding-right: 140px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .el-select {
      margin: 0;
    }
  }
}

::v-deep .searchForm{
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