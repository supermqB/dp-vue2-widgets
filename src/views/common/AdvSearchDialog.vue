<template>
  <Dialog
    title="高级搜索"
    @dialog-complete="completeHanlder"
    :enableConfirm="enableConfirm"
    ref="advSearchDialog"
    class="advSearchDialog"
    closeAfterConfirm
  >
    <Form :formData="formData" :formCfg="formCfg" />
  </Dialog>
</template>
<script>
import { keysObject, isEmpty } from '@/utils/lang'
import Form from '@/components/Form.vue'
import Dialog from '@/components/Dialog.vue'

function getAdvFormConfig(getColOptions) {
  return [
    {
      type: 'el-select',
      options: [{ label: '全部', value: 'all' }, ...getColOptions()],
      label: '检索范围',
      id: 'colNames',
      elOptions: {
        multiple: true
      }
    },
    {
      type: 'el-input',
      label: '包含全部检索词',
      id: 'contains',
      elOptions: {
        placeholder: '多个检索词以逗号，分隔'
      }
    },
    {
      type: 'el-input',
      label: '包含精确检索词',
      id: 'equals',
      elOptions: {
        placeholder: '多个检索词以逗号，分隔'
      }
    },
    {
      type: 'el-input',
      label: '包含至少一个检索词',
      id: 'atleast',
      elOptions: {
        placeholder: '多个检索词以逗号，分隔'
      }
    },
    {
      type: 'el-input',
      label: '不包含检索词',
      id: 'exclude',
      elOptions: {
        placeholder: '多个检索词以逗号，分隔'
      }
    }
  ]
}

export default {
  props: {
    columns: {
      type: Array,
      default: () => [{ label: '编号', property: 'index' }]
    }
  },
  data() {
    return {
      formData: {},
      enableAdvConfirm: false
    }
  },
  computed: {
    formCfg() {
      return getAdvFormConfig(() =>
        this.columns.map(({ label, property }) => ({
          label,
          value: property
        }))
      )
    },
    enableConfirm() {
      let crt = this.formData
      return !!(
        crt.colNames &&
        crt.colNames.length &&
        (!isEmpty(crt.contains) ||
          !isEmpty(crt.equals) ||
          !isEmpty(crt.atleast) ||
          !isEmpty(crt.exclude))
      )
    }
  },
  watch: {
    formCfg(cfg) {
      this.formData = keysObject(cfg, 'id')
    },
    'formData.colNames'(names) {
      /* remove other options if all is set. */
      if (names && names.length != 1 && names.indexOf('all') != -1) {
        this.formData.colNames = ['all']
      }
    }
  },
  methods: {
    open() {
      this.$refs.advSearchDialog.toggleOpen()
    },
    completeHanlder() {
      this.$emit('adv-search-action', this.formData)
    }
  },
  components: { Form, Dialog }
}
</script>
<style lang="scss" scoped>
::v-deep.dp_dialog.advSearchDialog {
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
