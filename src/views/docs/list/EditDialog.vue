<template>
  <Dialog
    :title="title"
    ref="editDialog"
    @dialog-complete="completeEdit"
    class="docs_editDialog"
  >
    <Form
      :formCfg="formCfg"
      :formData="formData"
      :formRule="formRule"
      ref="editForm"
    />
  </Dialog>
</template>
<script>
import Form from '@/components/Form.vue'
import Dialog from '@/components/Dialog.vue'
import { getEditFormCfg, editFormRule } from './config/editForm'
import { keysObject } from '@/utils/lang'
export default {
  props: {
    mode: {
      type: String,
      default: () => 'create'
    }
  },
  data() {
    return {
      docType: 'S',
      formData: {}
    }
  },
  computed: {
    title() {
      return this.mode == 'create' ? '导入文献' : '修改文献'
    },
    formCfg() {
      return getEditFormCfg(this.mode)
    },
    formRule() {
      return editFormRule
    }
  },
  watch: {
    formCfg(cfg) {
      this.formData = keysObject(cfg, 'id')
    }
  },
  methods: {
    completeEdit() {},
    open() {
      this.$refs.editDialog.toggleOpen()
    }
  },
  components: { Form, Dialog }
}
</script>
<style lang="scss" scoped>
::v-deep.docs_editDialog {
  .el-dialog {
    min-width: 500px;
    width: 850px;
  }
  form {
    display: flex;
    flex-direction: column;
    align-content: center;
    height: 320px;
    margin-right: 50px;
    flex-wrap: wrap;
    .el-form-item {
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
}
</style>
