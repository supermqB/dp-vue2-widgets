<template>
  <Dialog :title="title" ref="editDialog" class="editDialog">
    <Form v-bind="editForm" />
  </Dialog>
</template>
<script>
import Form from '@/components/Form.vue'
import Dialog from '@/components/Dialog.vue'
import { drugColumns } from './config/tableConfig'
import { createNamespacedHelpers } from 'vuex'
const { mapState } = createNamespacedHelpers('mdm/tasks')
export default {
  data() {
    return {
      title: '新增主索引'
    }
  },
  computed: {
    ...mapState({ workingTask: state => state.workingTask }),
    editForm() {
      let suspectList = workingTask.suspectList
      let formCfg = drugColumns.map(({ property, label }) => {
        return {
          type: 'el-autocomplete',
          elOptions: {
            'fetch-suggestions': (queryString, cb) => {
              let filteredSuspect = suspectList.filter(
                item => item[property] && item[property].indexOf(queryString) != -1
              )
              cb(filteredSuspect.map(item => ({ value: item[property] })))
            },
            placeholder: '请输入并选择'
          },
          label,
          id: property
        }
      })
      let formData = keysObject(formCfg, 'id'),
      return { formCfg, formData }
    }
  },
  components: {
    Dialog,
    Form
  }
}
</script>
