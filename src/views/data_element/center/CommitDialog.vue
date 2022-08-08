<template>
  <DialogVue
    title="数据元提交"
    ref="dialog"
    class="dataElem_commit_dlg"
    :isOpen.sync="isOpen"
    :enableConfirm="isFormValid"
    @dialog-complete="completeCommitHandler"
  >
    <div
      class="form_row"
      style="display: flex; justify-content: end; padding-right: 0px"
    >
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
            width: 55
          }
        },
        {
          colConfig: {
            property: 'nameCn',
            label: '数据元名称',
            width: 250
          }
        },
        {
          colConfig: {
            property: 'nameEn',
            label: '数据元英文名'
          }
        },
        {
          colConfig: {
            property: 'state',
            label: '状态',
            width: 80
          },
          formatter(val) {
            return { 0: '停用', 1: '待提交', 2: '待审核', 3: '启用' }[val]
          }
        }
      ]"
      :tableData="tableData"
      @selection-changed="selChgHandler"
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
          options: [
            //{ label: '待提交', value: '1' },
            //{ label: '待审核', value: '2' },
            { label: '启用', value: '3' }
            //{ label: '停用', value: '0' }
          ],
          label: '修改状态',
          id: 'status'
        }
      ],
      formRule: {
        status: { required: true }
      },
      formData: {
        status: '3'
      },
      selectedItems: []
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
    },
    isFormValid() {
      return !!this.selectedItems.length
    }
  },
  methods: {
    ...mapActions(['clearCommit', 'completeCommit']),
    selChgHandler(selection) {
      this.selectedItems = selection.map(item => item.id)
    },
    completeCommitHandler() {
      this.completeCommit(this.selectedItems)
    }
  },
  components: {
    DialogVue,
    FormVue,
    GeneralTableVue
  }
}
</script>
<style lang="scss" scoped>
::v-deep.el-dialog__wrapper.dp_dialog.dataElem_commit_dlg {
  .el-dialog {
    width: 800px;
    form {
      height: auto;
      margin-right: 5px;
    }
  }
}
</style>
