<template>
  <Dialog
    :title="title"
    ref="editDialog"
    @dialog-complete="completeEdit"
    class="mdm_editDialog"
  >
    <Form :formCfg="formCfg" :formData="formData" />
  </Dialog>
</template>
<script>
import { keysObject } from '@/utils/lang'
import Form from '@/components/Form.vue'
import Dialog from '@/components/Dialog.vue'

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
    formCfg() {
      let suspectList = this.workingTask.suspectList
      return this.curMDMColumns.map(({ property, label }) => {
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
    ...mdmlistMappers.mapActions(['editMdmItem']),
    open() {
      this.$nextTick(() => {
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
        this.workingTask?.suspectList[0]
      )
      this.open()
    },
    completeEdit() {
      this.editMdmItem(this.formData)
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
    }
  }
}
</style>
