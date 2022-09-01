<template>
  <Dialog
    :title="title"
    ref="editDialog"
    @dialog-complete="completeEdit"
    class="mdm_editDialog"
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
import { keysObject } from '@/utils/lang'
import Form from '@/components/Form.vue'
import Dialog from '@/components/Dialog.vue'
import { alert } from '@/utils/pops'

import {
  createNamespacedHelpers,
  mapState as globalMapState,
  mapGetters as globalMapGetters
} from 'vuex'
const { mapState } = createNamespacedHelpers('mdm/tasks')
const mdmlistMappers = createNamespacedHelpers('mdm/mdmlist')

export default {
  data() {
    return {
      mode: 'create',
      formData: {}
    }
  },
  computed: {
    ...globalMapState({
      selectedMDM: state => state.mdm.selectedMDM,
      selectedMDMDesc: state => state.mdm.selectedMDMDesc
    }),
    ...globalMapGetters('mdm', ['curMDMColumns']),
    ...mapState({ workingTask: state => state.workingTask }),
    ...mdmlistMappers.mapState({
      selectedMdmRow: state => state.mdmTable.selectedItem
    }),
    title() {
      return this.mode == 'create' ? '新增主索引' : '编辑主索引'
    },
    mdmCols() {
      const mdmType = this.selectedMDM.type
      if (!mdmType) return []
      return this.curMDMColumns.filter(
        col =>
          ['data_create_time', 'data_modify_time'].indexOf(col.property) == -1
      )
    },
    formRule() {
      const validRules = {}
      this.mdmCols
        .filter(col => col.required)
        .forEach(col => {
          validRules[col.property] = { required: true }
        })
      return validRules
    },
    formCfg() {
      let suspectList = this.workingTask?.suspectList || []
      return this.mdmCols.map(({ property, label }) => {
        if (property.indexOf('_flag') > 1) {
          return {
            type: 'el-select',
            options: [
              { label: '是', value: '1' },
              { label: '否', value: '0' }
            ],
            label,
            id: property
          }
        }

        /* 默认使用 autocomplete */
        return {
          type: 'el-autocomplete',
          elOptions: {
            'fetch-suggestions': (queryString, cb) => {
              if (this.mode == 'edit') {
                return cb([])
              }
              let filteredSuspect = suspectList.filter(
                item =>
                  item[property] && item[property].indexOf(queryString) != -1
              )
              cb(filteredSuspect.map(item => ({ value: item[property] })))
            },
            placeholder: this.mode == 'create' ? '请输入并选择' : '请输入'
          },
          label,
          id: property
        }
      })
    }
  },
  watch: {
    formCfg(cfgs) {
      console.log('Form config changed...')
    }
  },
  methods: {
    ...mdmlistMappers.mapActions(['editMdmItem', 'createMdmItem']),
    open() {
      this.$nextTick(() => {
        let editForm = this.$refs.editForm
        editForm && editForm.clearValidate()
        this.$refs.editDialog.toggleOpen()
      })
    },
    startEdit() {
      this.mode = 'edit'
      this.formData = Object.assign(
        {},
        keysObject(this.formCfg, 'id'),
        this.selectedMdmRow
      )
      this.open()
    },
    startCreate() {
      this.mode = 'create'
      this.formData = Object.assign(
        {},
        keysObject(this.formCfg, 'id'),
        this.workingTask?.suspectList?.[0]
      )
      this.open()
    },
    async completeEdit() {
      const { valid } = await this.$refs.editForm.validate()

      if (valid) {
        const success =
          this.mode == 'edit'
            ? await this.editMdmItem(this.formData)
            : await this.createMdmItem(this.formData)
        success && this.$refs.editDialog.toggleOpen()
      } else {
        alert('请检查表单中的错误项。')
      }
    }
  },
  components: {
    Dialog,
    Form
  }
}
</script>
<style lang="scss" scoped>
::v-deep.mdm_editDialog {
  .el-dialog {
    width: 80%;
  }
  .el-form {
    max-height: 650px;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    overflow-y: auto;
    .el-form-item {
      width: 360px;
      display: flex;
      justify-content: flex-end;
      min-height: 44px;
      margin: 0px;
      overflow: hidden;
      .el-select,
      .el-input {
        width: 165px;
      }
    }
  }
}
</style>
