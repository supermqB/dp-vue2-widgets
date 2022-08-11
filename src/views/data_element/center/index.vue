<template>
  <div class="ele_detail_wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>数据元管理</el-breadcrumb-item>
        <el-breadcrumb-item>数据元明细</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btn_area">
        <el-button type="primary" @click="openCommitDialog">提 交</el-button>
        <el-button type="primary" @click="openCreateDialog">新 增</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formData="formData" :formCfg="formCfg" class="searchForm" />
      <div class="action_area">
        <el-button type="primary" plain @click="searchHandler(false)"
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
        @dialog-complete="searchHandler(true)"
        :enableConfirm="enableAdvConfirm"
        ref="advSearchDialog"
        class="advSearchDialog"
        closeAfterConfirm
      >
        <Form v-bind="advForm" />
      </Dialog>
      <CommitDialogVue ref="commitDialog" />
    </div>
  </div>
</template>
<script>
import { isEmpty, toFixedNumStr } from '@/utils/lang'
import { get } from '@/utils/request'
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import Dialog from '@/components/Dialog.vue'
import getSearchFormCfg from './config/searchForm'
import { getListTableHeader } from './config/listTableHeader'
import {
  getFormFieldsConfig,
  formValidRule as editElemFormRule
} from './config/editFrom'

import advSearchFormConfig from './config/advSearchForm'
import CommitDialogVue from './CommitDialog.vue'

import { createNamespacedHelpers, mapState as globalMapState } from 'vuex'
const { mapState, mapMutations, mapActions } =
  createNamespacedHelpers('dataElem/elemList')

export default {
  data() {
    const tableConfig = getListTableHeader.apply(this)
    const formCfg = getSearchFormCfg.apply(this)
    const formFieldsConfig = getFormFieldsConfig.apply(this)
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
            'regexpText',
            'state'
          ].indexOf(item.id) == -1
      ),
      editElemFormRule,
      editElemFormValid: false,
      editElemDialogTitle: '新增数据元',
      editDlgOpen: false,
      advDlgOpen: false
    }
  },
  computed: {
    ...mapState({
      formData: state => state.queryCriteria,
      advForm: state => ({
        formData: state.advQueryCriteria,
        formCfg: advSearchFormConfig
      }),

      tableData(state) {
        return state.tableData
      },
      pageInfo(state) {
        return state.pageInfo
      },

      selectedItem: state => state.selectedItem,
      editElemFormData: state => state.editElemFormData,

      enableAdvConfirm: state => {
        let crt = state.advQueryCriteria
        return !!(
          crt.colNames &&
          crt.colNames.length &&
          (!isEmpty(crt.contains) ||
            !isEmpty(crt.equals) ||
            !isEmpty(crt.atleast) ||
            !isEmpty(crt.exclude))
        )
      }
    }),
    ...globalMapState({
      groupTreeData: state => state.dataElem.elemGroup.grouptree,
      wordSpeechList: state => state.dataElem.wordSpeechList
    }),
    pageInfoChangeSignal() {
      return this.pageInfo.curPage + ':' + this.pageInfo.pageSize
    }
  },
  methods: {
    openEditDialog() {
      setTimeout(() => {
        this.editElemDialogTitle = '编辑数据元'
        this.presetEditDialog(this.selectedItem)
        this.$nextTick(() => {
          this.$refs.editElemForm.$refs.el_form.clearValidate()
        })
        this.$refs.editElemDialog.toggleOpen()
      }, 500)
    },
    openCreateDialog() {
      this.editElemDialogTitle = '新增数据元'
      this.presetEditDialog()
      this.$nextTick(() => {
        this.$refs.editElemForm.$refs.el_form.clearValidate()
      })
      this.$refs.editElemDialog.toggleOpen()
    },
    setEditDialogIdSegOptions() {
      let { identifierSeg1, identifierSeg2, identifierSeg3 } =
        this.editElemFormData
      let lastSegReg = /.*\.(\d+)$/

      if (!identifierSeg1) return
      let seg1List = this.groupTreeData[0].directoryList
      this.editElemFormConfig[0].options = seg1List.map(
        ({ ctlgIdentifier, ctlgName }) => ({
          label: ctlgName,
          value: ctlgIdentifier
        })
      )

      let seg2List = seg1List.find(
        item => item.ctlgIdentifier == identifierSeg1
      ).directoryList
      this.editElemFormConfig[1].options = seg2List.map(
        ({ ctlgIdentifier, ctlgName }) => ({
          label: ctlgName,
          value: lastSegReg.exec(ctlgIdentifier)[1]
        })
      )
      /* value is not in current candidates. */
      if (
        this.editElemFormConfig[1].options.find(
          item => item.value == identifierSeg2
        ) == null
      ) {
        this.editElemFormData.identifierSeg2 = ''
        this.editElemFormData.identifierSeg3 = ''
        return
      }

      let seg3List = seg2List.find(
        item => lastSegReg.exec(item.ctlgIdentifier)[1] == identifierSeg2
      ).directoryList
      this.editElemFormConfig[2].options = seg3List.map(
        ({ ctlgIdentifier, ctlgName }) => ({
          label: ctlgName,
          value: lastSegReg.exec(ctlgIdentifier)[1]
        })
      )

      if (
        this.editElemFormConfig[2].options.find(
          item => item.value == identifierSeg3
        ) == null
      ) {
        this.editElemFormData.identifierSeg3 = ''
      }
    },
    completeEdit() {
      console.log(this.editElemFormData)
      this.$refs.editElemForm.$refs.el_form.validate(valid => {
        this.editElemFormValid = valid

        if (valid) {
          this.editElem(this.editElemFormData).then(done => {
            done && this.$refs.editElemDialog.toggleOpen()
          })
        } else {
          this.$alert('请检查表单中的错误项。')
        }
      })
    },
    openAdvSearch() {
      this.$refs.advSearchDialog.toggleOpen()
    },
    searchHandler(isAdv) {
      this.setAdvanceMode(isAdv)
      this.search()
    },
    openCommitDialog() {
      this.startCommit()
      this.$refs.commitDialog.toggleOpen()
    },
    ...mapActions(['search', 'editElem', 'startCommit', 'presetEditDialog']),
    ...mapMutations({ selectItemHandler: 'setSelectItem' }),
    ...mapMutations(['setAdvanceMode'])
  },
  watch: {
    editElemFormData: {
      async handler(formData) {
        this.setEditDialogIdSegOptions()

        let segs = [
          formData.identifierSeg1,
          formData.identifierSeg2,
          formData.identifierSeg3
        ]
        let tmpIdentifierPrefix = segs.join('.')

        if (
          segs.some(seg => !seg) ||
          tmpIdentifierPrefix == formData.identifierPrefix
        ) {
          if (
            !Object.keys(editElemFormRule).some(
              k => formData[k] == null || formData[k] == ''
            )
          ) {
            /*             this.$refs.editElemForm.$refs.el_form.validate(valid => {
              this.editElemFormValid = valid
            }) */
          } else {
            this.editElemFormValid = false
          }
          return
        }
        const { value: maxId } = await get('data-element/getEleMaxId', {
          identifierPrefix: tmpIdentifierPrefix
        })
        formData.identifier =
          tmpIdentifierPrefix + '.' + toFixedNumStr(parseInt(maxId) + 1, 3)
        formData.identifierPrefix = tmpIdentifierPrefix

        /*         this.$refs.editElemForm.$refs.el_form.validate(valid => {
          this.editElemFormValid = valid
        }) */
      },
      deep: true
    },
    pageInfoChangeSignal() {
      this.search()
    },
    tableData(val) {
      let selected = val.find(item => item.id == this.selectedItem?.id)
      this.$refs.dp_table.setCurrentRow(selected ? this.selectedItem : val[0])
    }
  },
  components: { Form, Table, Dialog, CommitDialogVue }
}
</script>
<style lang="scss" scoped>
.ele_detail_wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .header {
    display: flex;
    padding-left: 6px;
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
    margin-top: -8px;
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
        /* width: 210px; */
        display: flex;
        justify-content: end;
        .el-select {
          width: 165px;
        }
      }
      .el-form-item__label {
        width: 45px;
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
            //border-color: #dcdfe6;
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
          padding-left: 50px;
          .el-form-item {
            width: 370px;
          }
        }
      }
    }
  }
}
</style>
