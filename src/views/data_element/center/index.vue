<template>
  <div class="ele_detail_wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>数据元管理</el-breadcrumb-item>
        <el-breadcrumb-item>数据元明细</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btn_area">
        <el-button type="primary">提 交</el-button>
        <el-button type="primary">新 增</el-button>
      </div>
    </div>
    <div class="search">
      <Form :formData="formData" :formCfg="formCfg" class="searchForm" />
      <div class="action_area">
        <el-button type="primary" plain>查 询</el-button>
        <el-link :underline="false" class="advbtn">高级搜索</el-link>
      </div>
    </div>
    <div class="table_area">
      <Table :tableConfig="tableConfig" />
    </div>
    <div class="dialog_port">
      <Dialog title="编辑数据元" ref="editElemDialog">
        <Form
          :formData="editElemFormData"
          :formCfg="editElemFormConfig"
          :formRule="editElemFormRule"
          class="editForm"
        />
      </Dialog>
    </div>
  </div>
</template>
<script>
import Form from '@/components/Form.vue'
import Table from '@/components/GeneralTable.vue'
import Dialog from '@/components/Dialog.vue'

export default {
  data() {
    return {
      formData: {
        type: '',
        wordAttr: '',
        status: ''
      },
      formCfg: [
        {
          type: 'el-autocomplete',
          elOptions: {
            'fetch-suggestions': (queryString, cb) => {
              let orginOptions = ['BY', 'DT', 'S', 'S1', 'S2']
              let filteredValues = queryString
                ? orginOptions.filter(item => item.indexOf(queryString) != -1)
                : orginOptions
              cb(filteredValues.map(item => ({ value: item })))
            },
            placeholder: '请输入并选择'
          },
          label: '类型',
          id: 'type'
        },
        {
          type: 'el-autocomplete',
          elOptions: {
            'fetch-suggestions': (queryString, cb) => {
              let orginOptions = ['人名', '公司名', '量词', '日期']
              let filteredValues = queryString
                ? orginOptions.filter(item => item.indexOf(queryString) != -1)
                : orginOptions
              cb(filteredValues.map(item => ({ value: item })))
            },
            placeholder: '请输入并选择'
          },
          label: '词性',
          id: 'wordAttr'
        },
        {
          type: 'el-select',
          options: ['全部', '已启用', '待提交'],
          label: '状态',
          id: 'status'
        }
      ],
      tableConfig: [
        {
          elConfig: {
            property: 'index',
            label: '序号',
            width: 120
          }
        },
        {
          elConfig: {
            property: 'code',
            label: '编码',
            width: 120
          }
        },
        {
          elConfig: {
            property: '',
            label: '操作'
          },
          actions: [
            {
              type: 'el-button',
              typeProps: {
                type: 'text',
                round: false
              },
              id: 'edit',
              name: '编辑',
              callback: (idx, tableData) => {
                this.$refs.editElemDialog.toggleOpen()
              }
            }
          ]
        }
      ],
      editElemFormConfig: [
        {
          type: 'el-select',
          options: ['标识类信息', '卫生服务对象信息'],
          label: '大类',
          id: 'type1'
        },
        {
          type: 'el-select',
          options: ['标识'],
          label: '小类',
          id: 'type2'
        },
        {
          type: 'el-select',
          options: ['标识'],
          label: '细类',
          id: 'type3'
        }
      ],
      editElemFormData: {
        type1: '',
        type2: '',
        type3: ''
      },
      editElemFormRule:{
          type1:[
              {required: true}
          ]
      }
    }
  },
  components: { Form, Table, Dialog }
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
}
</style>
