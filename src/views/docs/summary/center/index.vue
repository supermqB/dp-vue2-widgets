<template>
  <div>
    <div class="headers">
      <Breadcrumb
        baseLabel="文献库"
        :currentLabel="detail.title"></Breadcrumb>
      <div>
        <el-button type="primary">预览</el-button>
        <el-button type="primary" @click="openEditDialog">编辑</el-button>
        <el-button type="primary" @click="downloadLiterature">下载</el-button>
      </div>
    </div>
    <Abstract v-bind="summaryDetail"></Abstract>
    <EditDialog
      mode="edit"
      ref="editDialog"
      @doc-edit="editDocHandler"
    />
  </div>
</template>

<script>
import Abstract from './abstract.vue';
import EditDialog from '../../list/EditDialog.vue'
import Breadcrumb from '@/components/header/Breadcrumb.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('docs/summary')
import { downloadLiteratureApi } from '@/api/doc'
export default {
  components: {
    Abstract,
    Breadcrumb,
    EditDialog
  },
  computed: {
    ...mapState(['detail']),
    ...mapGetters(['summaryDetail'])
  },
  methods: {
    ...mapActions(['submitEditLiterature', 'queryLiterature']),
    async downloadLiterature() {
      await downloadLiteratureApi()
    },
    async editDocHandler(formData) {
      await this.submitEditLiterature(formData)
      this.queryLiterature()
      this.$message.success('编辑文档成功！')
      this.$refs.editDialog.open()
    },
    openEditDialog() {
      this.$refs.editDialog.open()
      this.$refs.editDialog.formData = Object.assign({}, this.detail)
    },
  }
}
</script>

<style lang="scss" scoped>
.headers {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 41px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #E5E5E5;
}
</style>