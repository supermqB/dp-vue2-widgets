<template>
  <DialogVue
    title="数据元提交"
    ref="dialog"
    class="dataElem_commit_dlg"
    :isOpen.sync="isOpen"
  >
    <div style="display: flex; justify-content: end; padding-right: 7px">
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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations, mapActions } =
  createNamespacedHelpers('dataElem/elemList')

export default {
  data() {
    return {
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
  computed: {
    ...mapState({
      tableData: state => state.pendingCommitItems
    }),
    isOpen: {
      get: function () {
        return !!this.tableData.length
      },
      set: function (opening) {
        /* clear tableData properly. */
        !opening && this.clearCommit()
      }
    }
  },
  components: {
    DialogVue,
    FormVue,
    GeneralTableVue
  },
  methods: {
    ...mapActions(['clearCommit'])
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
