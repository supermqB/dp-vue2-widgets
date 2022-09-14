<template>
  <div class="mdm_ceter_wrapper">
    <div class="header">
      <div class="crumb">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>主索引管理</el-breadcrumb-item>
          <el-breadcrumb-item
            >{{ selectedMDM.label }} <img :src="icon(selectedMDM.state)"
          /></el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="btn_area">
        <!--el-button type="primary" @click="startEditMDM">编 辑</el-button-->
        <el-button type="primary" @click="startCreateMDM" v-if="!isFrozenMDM"
          >新 增</el-button
        >
      </div>
    </div>
    <div class="search">
      <div class="summary">
        <div v-for="item in mdmprops" :key="item.prop" class="propItem">
          <span class="propLabel">{{ item.prop }}</span>
          <span class="propValue">{{ item.value }}</span>
        </div>
      </div>
      <Form
        v-bind="searchForm"
        :class="['searchForm', selectedMDM.type]"
      ></Form>
      <div class="action_area">
        <el-button type="primary" plain @click="searchHandler()"
          >查 询</el-button
        >
        <el-link :underline="false" class="advbtn" @click="openAdvSearch"
          >高级搜索</el-link
        >
      </div>
    </div>
    <div class="table_area">
      <Table
        :tableConfig="tableConfig"
        :key="'tablekey_' + tableConfig.length"
        :tableData="mdmTable.tableData"
        :pageInfo="mdmTable.pageInfo"
        @row-changed="selectItemHandler"
        ref="mdm_table"
      />
    </div>
    <div class="dlg_ports">
      <edit-dialog ref="editDialog" />
      <adv-search-dialog
        ref="advSearchDialog"
        :columns="curMDMColumns"
        @adv-search-action="advSearchHandler"
      />
    </div>
  </div>
</template>
<script>
import {
  RUNNINGSTATE,
  EDITINGSTATE,
  COMPLETESTATE,
  INCOMESTATE
} from '@/utils/const'
import {
  mapState as globalMapState,
  mapGetters as globalMapGetters,
  createNamespacedHelpers
} from 'vuex'
const { mapState, mapMutations, mapActions } =
  createNamespacedHelpers('mdm/mdmlist')

import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import EditDialog from './EditDialog.vue'
import AdvSearchDialog from '@/views/common/AdvSearchDialog'
import { tableConfigGen } from './config/tableConfig'

export default {
  data() {
    return {
      tableConfig: []
    }
  },
  computed: {
    ...globalMapState({
      selectedMDM: state => state.mdm.selectedMDM,
      selectedMDMDesc: state => state.mdm.selectedMDMDesc
    }),
    ...globalMapGetters('mdm', ['curMDMColumns']),
    ...mapState({
      searchForm: state => state.searchForm,
      mdmTable: state => state.mdmTable
    }),
    isFrozenMDM() {
      return ['pat', 'fml', 'emp'].indexOf(this.selectedMDM.type) != -1
    },
    mdmprops() {
      let cTime = this.selectedMDMDesc.createTime
      let uTime = this.selectedMDMDesc.updateTime
      if (!cTime || !uTime) return []
      return [
        { prop: '标准来源：', value: this.selectedMDMDesc.standardSrc },
        { prop: ' 创建时间：', value: cTime.substr(0, cTime.indexOf('.')) },
        { prop: '更新时间：', value: uTime.substr(0, uTime.indexOf('.')) }
      ]
    },
    pageInfoChangeSignal() {
      var signal =
        this.mdmTable.pageInfo.curPage + ':' + this.mdmTable.pageInfo.pageSize
      console.log('pagination signal:' + signal)
      return signal
    }
  },
  watch: {
    selectedMDM(curMDM) {
      const mdmType = curMDM.type
      this.setSearchFormConfig(mdmType)
    },
    selectedMDMDesc() {
      let tblCfg = tableConfigGen.call(this, this.curMDMColumns)
      this.isFrozenMDM && tblCfg.pop()
      this.tableConfig = tblCfg
      this.search()
    },
    pageInfoChangeSignal() {
      this.search()
    },
    'mdmTable.tableData'(val) {
      let curSelectedItem = this.mdmTable.selectedItem
      let selected = val.find(item => item.id == curSelectedItem?.id)
      this.$refs.mdm_table.setCurrentRow(selected ? curSelectedItem : val[0])
    }
  },
  methods: {
    icon(state) {
      switch (state) {
        case RUNNINGSTATE:
          return require('@/assets/images/common/icons/running.png')
        case EDITINGSTATE:
          return require('@/assets/images/common/icons/editing.png')
        case COMPLETESTATE:
          return require('@/assets/images/common/icons/complete.png')
        case INCOMESTATE:
          return require('@/assets/images/common/icons/income.png')
      }
    },
    startEditMDM() {
      setTimeout(() => {
        this.$refs.editDialog.startEdit()
      }, 500)
    },
    startCreateMDM() {
      this.$refs.editDialog.startCreate()
    },
    searchHandler() {
      const curPage = this.mdmTable.pageInfo.curPage
      if (curPage == 1) {
        this.search()
      } else {
        this.mdmTable.pageInfo.curPage = 1
      }
    },
    openAdvSearch() {
      this.$refs.advSearchDialog.open()
    },
    advSearchHandler(criteria) {
      console.log(criteria)
    },
    ...mapMutations({ selectItemHandler: 'setTableSelectItem' }),
    ...mapMutations(['setSearchFormConfig']),
    ...mapActions(['search', 'loadDrugformList'])
  },
  mounted() {
    this.loadDrugformList()
  },
  components: { Form, Table, EditDialog, AdvSearchDialog }
}
</script>
<style lang="scss">
.mdm_ceter_wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    padding: 0 6px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
  }
  .search {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .summary {
      display: flex;
      font-size: 13px;
      height: 36px;
      line-height: 36px;
      padding: 0 6px;
      width: 100%;
      .propItem {
        &:first-child {
          width: 40%;
        }
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 30%;
        .propLabel {
          color: #9c9c9c;
        }
        .propValue {
          color: #606266;
        }
      }
    }
    .searchForm {
      display: flex;
      width: 80%;
      flex: 1 1 auto;
      justify-content: flex-start;
      flex-wrap: wrap;
      .el-form-item {
        margin-bottom: 0px;
        height: 36px;
        display: flex;
        justify-content: end;
        .el-select,
        .el-input {
          width: 165px;
        }
      }
      .el-form-item__label {
        width: 80px;
      }
      &.mat {
        .el-form-item__label {
          //width: 180px;
        }
      }
    }
    .action_area {
      width: 150px;
      padding: 6px;
      display: flex;
      justify-content: flex-end;
      align-items: flex-start;
      .advbtn {
        color: #1890ff;
        text-decoration: underline;
        margin: 6px;
      }
    }
  }

  .table_area {
    flex-grow: 1;
    margin-top: -6px;
  }
}
</style>
