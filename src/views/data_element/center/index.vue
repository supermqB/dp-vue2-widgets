<template>
  <div class="ele_detail_wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>数据元管理</el-breadcrumb-item>
        <el-breadcrumb-item>数据元明细</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btn_area">
        <el-button type="primary">提 交</el-button>
        <el-button type="primary" @click="createElem">新 增</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formData="formData" :formCfg="formCfg" class="searchForm" />
      <div class="action_area">
        <el-button type="primary" plain>查 询</el-button>
        <el-link :underline="false" class="advbtn" @click="openAdvSearch"
          >高级搜索</el-link
        >
      </div>
    </div>
    <div class="table_area">
      <Table :tableConfig="tableConfig" />
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
        ref="advSearchDialog"
        class="advSearchDialog"
      >
        <Form v-bind="advForm" />
      </Dialog>
    </div>
  </div>
</template>
<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import Dialog from '@/components/Dialog.vue'
import formCfg from './config/searchForm'
import { getListTableHeader } from './config/listTableHeader'
import { formFieldsConfig as editElemFormConfig } from './config/editFrom'
import { keysObject } from '@/utils/lang'

import advSearchFormConfig from './config/advSearchForm'

export default {
  data() {
    const tableConfig = getListTableHeader.apply(this)

    return {
      formData: {
        type: '',
        wordAttr: '',
        status: ''
      },
      formCfg,

      tableConfig,

      editElemFormConfig,
      editElemFormData: keysObject(editElemFormConfig, 'id'),
      editElemFormRule: {
        identifier_seg1: { required: true },
        identifier_seg2: { required: true },
        identifier_seg3: { required: true },
        identifier: { required: true },
        identifier_prefix: { required: true },
        cn_name: { required: true },
        en_name: { required: true },
        description: { required: true },
        type: { required: true },
        format: { required: true }
      },
      editElemFormValid: false,
      editElemDialogTitle: '新增数据元',

      advForm: {
        formData: keysObject(advSearchFormConfig, 'id'),
        formCfg: advSearchFormConfig
      }
    }
  },
  components: { Form, Table, Dialog },
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
    }
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
    }
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
    //height: 40px;
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
      width: 920px;
      min-width: 500px;
    }
    form {
      display: flex;
      flex-direction: column;
      height: 400px;
      flex-wrap: wrap;
      .el-form-item {
        &.is-error .el-input__inner {
          border-color: #dcdfe6;
        }
        width: 380px;
        display: flex;
        justify-content: flex-end;
        min-height: 44px;
        margin: 0px;
        overflow: hidden;
        .el-input,
        .el-textarea {
          width: 240px;
        }
      }
    }
    &.advSearchDialog{
        .el-dialog{
            width: 600px;
            form{
                height: 220px;
                padding-left: 60px;
            }
        }
    }
  }
}
</style>
