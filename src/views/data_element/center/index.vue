<template>
  <div class="ele_detail_wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>数据元管理</el-breadcrumb-item>
        <el-breadcrumb-item>数据元明细</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btn_area">
        <el-button type="primary" @click="startCommit">提 交</el-button>
        <el-button type="primary" @click="createElem">新 增</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formData="formData" :formCfg="formCfg" class="searchForm" />
      <div class="action_area">
        <el-button type="primary" plain @click="searchHandler">查 询</el-button>
        <el-link :underline="false" class="advbtn" @click="openAdvSearch"
          >高级搜索</el-link
        >
      </div>
    </div>
    <div class="table_area">
      <Table
        :tableConfig="tableConfig"
        :tableData="tableData"
        :pageInfo="pageInfo"
        @row-changed="selectItemHandler"
        ref="dp_table"
      />
    </div>
    <div class="dialog_port">
      <Dialog
        :title="editElemDialogTitle"
        ref="editElemDialog"
        class="elemDialog"
        @dialog-complete="completeEdit"
        :enableConfirm="editElemFormValid"
      >
        <Form
          :formData="editElemFormData"
          :formCfg="editElemFormConfig"
          :formRule="editElemFormRule"
          class="editForm"
          ref="editElemForm"
        />
      </Dialog>

      <Dialog
        title="高级搜索"
        @dialog-complete="completeAdvSearch"
        :enableConfirm="enableAdvConfirm"
        ref="advSearchDialog"
        class="advSearchDialog"
      >
        <Form v-bind="advForm" />
      </Dialog>
      <CommitDialogVue ref="commitDialog" />
    </div>
  </div>
</template>
<script>
import { isEmpty } from '@/utils/lang'
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import Dialog from '@/components/Dialog.vue'
import formCfg from './config/searchForm'
import { getListTableHeader } from './config/listTableHeader'
import {
  formFieldsConfig,
  formValidRule as editElemFormRule
} from './config/editFrom'

import advSearchFormConfig from './config/advSearchForm'
import CommitDialogVue from './CommitDialog.vue'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } =
  createNamespacedHelpers('dataElem/elemList')

export default {
  data() {
    const tableConfig = getListTableHeader.apply(this)

    return {
      formCfg,

      tableConfig,

      editElemFormConfig: formFieldsConfig.filter(
        item =>
          [
            'type',
            'format',
            'valueDomainName',
            'valueDomainSrc',
            'regexpText'
          ].indexOf(item.id) == -1
      ),
      editElemFormRule,
      editElemFormValid: false,
      editElemDialogTitle: '新增数据元'
    }
  },
  computed: {
    ...mapState({
      formData: state => state.queryCriteria,
      tableData(state) {
        return state.tableData
      },
      pageInfo(state) {
        return state.pageInfo
      },
      editElemFormData: state => state.editElemFormData,
      advForm: state => ({
        formData: state.advQueryCriteria,
        formCfg: advSearchFormConfig
      }),
      enableAdvConfirm: state => {
        let crt = state.advQueryCriteria
        return !!(
          crt.cols &&
          crt.cols.length &&
          (!isEmpty(crt.contains) ||
            !isEmpty(crt.equals) ||
            !isEmpty(crt.atleast) ||
            !isEmpty(crt.exclude))
        )
      }
    })
  },
  components: { Form, Table, Dialog, CommitDialogVue },
  methods: {
    completeEdit() {
      console.log(this.editElemFormData)
    },
    completeAdvSearch() {
      console.log(this.advForm.formData)
    },
    createElem() {
      this.editElemDialogTitle = '新增数据元'
      this.$refs.editElemDialog.toggleOpen()
      this.$refs.editElemForm &&
        this.$refs.editElemForm.$refs.el_form.resetFields()
    },
    openAdvSearch() {
      this.$refs.advSearchDialog.toggleOpen()
    },
    ...mapActions({ searchHandler: 'search' }),
    ...mapActions(['startCommit']),
    ...mapMutations({ selectItemHandler: 'setSelectItem' })
  },
  watch: {
    editElemFormData: {
      handler(formData) {
        formData.identifier_prefix = [
          formData.identifier_seg1,
          formData.identifier_seg2,
          formData.identifier_seg3
        ].join('.')
        formData.identifier = formData.identifier_prefix + '.001'
        this.$refs.editElemForm.$refs.el_form.validate(valid => {
          this.editElemFormValid = valid
        })
      },
      deep: true
    },
    pageInfo: {
      handler(pageinfo) {
        this.searchHandler()
      },
      deep: true
    }
  },
  mounted() {
    this.$refs.dp_table.setCurrentRow(this.tableData[0])
  }
}
</script>
<style lang="scss" scoped>
.ele_detail_wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .btn_area {
      padding-right: 10px;
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    line-height: 40px;
    .action_area {
      .advbtn {
        color: #1890ff;
        text-decoration: underline;
        margin: 0 6px;
      }
    }
  }
  .table_area {
    flex-grow: 1;
  }
}
</style>
<style lang="scss">
.ele_detail_wrapper {
  .search {
    .searchForm {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .el-form-item {
        margin-bottom: 0px;
        width: 210px;
        display: flex;
        justify-content: end;
        .el-select {
          width: 165px;
        }
      }
    }
  }
  .dialog_port .dp_dialog {
    .el-dialog {
      width: 850px;
      min-width: 500px;
    }
    form {
      display: flex;
      flex-direction: column;
      align-content: center;
      height: 270px;
      margin-right: 50px;
      flex-wrap: wrap;
      .el-form-item {
        &.is-error {
          .el-input__inner,
          .el-textarea__inner {
            border-color: #dcdfe6;
          }
        }
        width: 360px;
        display: flex;
        justify-content: flex-end;
        min-height: 44px;
        margin: 0px;
        overflow: hidden;
        .el-input,
        .el-textarea {
          width: 240px;
          .el-textarea__inner {
            padding: 5px 8px;
          }
        }
      }
    }
    &.advSearchDialog {
      .el-dialog {
        width: 600px;
        form {
          height: auto;
          padding-left: 60px;
        }
      }
    }
  }
}
</style>
