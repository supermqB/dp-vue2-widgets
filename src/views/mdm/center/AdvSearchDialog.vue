<template>
  <Dialog
    title="高级搜索"
    @dialog-complete="searchHandler(true)"
    :enableConfirm="enableAdvConfirm"
    ref="advSearchDialog"
    class="mdmAdvSearchDialog"
    closeAfterConfirm
  >
    <Form :formData="formData" :formCfg="formCfg" />
  </Dialog>
</template>
<script>
import { keysObject } from '@/utils/lang'
import Form from '@/components/Form.vue'
import Dialog from '@/components/Dialog.vue'
import getAdvFormConfig from '@/views/data_element/center/config/advSearchForm'
import {
  mapState as globalMapState,
  mapGetters as globalMapGetters,
  createNamespacedHelpers
} from 'vuex'
export default {
  data() {
    return {
      formData: {},
      enableAdvConfirm: false
    }
  },
  computed: {
    ...globalMapGetters('mdm', ['curMDMColumns']),
    formCfg() {
      return getAdvFormConfig(() =>
        this.curMDMColumns.map(({ label, property }) => ({
          label,
          value: property
        }))
      )
    }
  },
  watch: {
    formCfg(cfg) {
      this.formData = keysObject(cfg, 'id')
    }
  },
  methods: {
    open() {
      this.$refs.advSearchDialog.toggleOpen()
    }
  },
  components: { Form, Dialog }
}
</script>
<style lang="scss" scoped>
::v-deep.mdmAdvSearchDialog {
  .el-dialog {
    width: 600px;
    form {
      height: auto;
      padding-left: 50px;
      display: flex;
      flex-direction: column;
      align-content: center;
      margin-right: 50px;
      flex-wrap: wrap;
      .el-form-item {
        width: 370px;
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
}
</style>
