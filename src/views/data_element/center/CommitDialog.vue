<template>
  <DialogVue title="数据元提交" ref="dialog" class="dataElem_commit_dlg">
    <div style="display:flex; justify-content:end; padding-right: 7px;">
      <FormVue
        :formData="formData"
        :formCfg="formCfg"
        :formRule="formRule"
      ></FormVue>
    </div>
    <GeneralTableVue
      :tableConfig="[
        {
          colConfig: {
            property: 'index',
            label: '序号',
            width: 40
          }
        },
        {
          colConfig: {
            property: 'cn_name',
            label: '数据元名称'
          }
        },
        {
          colConfig: {
            property: 'en_name',
            label: '数据元英文名'
          }
        },
        {
          colConfig: {
            property: 'status',
            label: '状态'
          }
        }
      ]"
      :tableData="tableData"
      multipleSelect
    />
  </DialogVue>
</template>
<script>
import DialogVue from '@/components/Dialog.vue'
import FormVue from '@/components/Form.vue'
import GeneralTableVue from '@/components/GeneralTable.vue'
export default {
  data() {
    return {
      tableData: [
        {
          index: 1,
          cn_name: '婚姻状况',
          en_name: 'MARRIGE_STATUS',
          status: '待提交'
        },
        {
          index: 2,
          cn_name: '民族',
          en_name: 'NATION',
          status: '待提交'
        }
      ],
      formCfg: [
        {
          type: 'el-select',
          options: ['待提交', '待审核', '审核通过'],
          label: '修改状态',
          id: 'status'
        }
      ],
      formRule: {
        status: { required: true }
      },
      formData: {
        status: '待提交'
      }
    }
  },
  components: {
    DialogVue,
    FormVue,
    GeneralTableVue
  },
  methods: {
    show() {
      this.$refs.dialog.toggleOpen()
    }
  }
}
</script>
<style lang="scss">
.dialog_port .el-dialog__wrapper.dp_dialog.dataElem_commit_dlg {
  .el-dialog {
    width: 600px;
    form {
      height: auto;
    }
  }
}
</style>
