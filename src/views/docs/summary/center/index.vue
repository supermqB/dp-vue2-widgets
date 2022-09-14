<template>
  <div class="summaryWrap">
    <div class="headers">
      <Breadcrumb
        path="/docs/list"
        baseLabel="文献库"
        :currentLabel="detail.title"></Breadcrumb>
      <div>
        <el-button type="primary" @click="preview">预览</el-button>
        <el-button type="primary" @click="openEditDialog">编辑</el-button>
        <el-button type="primary" @click="downloadLiterature">下载</el-button>
      </div>
    </div>
    <Abstract v-bind="summaryDetail" class="abstract"></Abstract>
    <EditDialog
      mode="edit"
      ref="editDialog"
      @doc-edit="editDocHandler"
    />
    <el-dialog
      :visible.sync="pdfVisible">
      <Pdf
        ref="pdf"
        v-for="index in pdfTotal"
        :key="index"
        :src="pdfSrc"
        :page="index"></Pdf>
    </el-dialog>
  </div>
</template>

<script>
import Pdf from 'vue-pdf'
import CMapReaderFactory from 'vue-pdf/src/CMapReaderFactory'
import Abstract from './abstract.vue';
import EditDialog from '../../list/EditDialog.vue'
import Breadcrumb from '@/components/header/Breadcrumb.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapActions } = createNamespacedHelpers('docs/summary')
import { downloadLiteratureApi } from '@/api/doc'
export default {
  data() {
    return {
      pdfSrc: null,
      pdfTotal: null,
      pdfVisible: false
    }
  },
  components: {
    Abstract,
    Breadcrumb,
    EditDialog,
    Pdf
  },
  computed: {
    ...mapState(['detail', 'identifier']),
    ...mapGetters(['summaryDetail'])
  },
  methods: {
    ...mapActions(['submitEditLiterature', 'queryLiterature', 'getSimilarLiteratureList']),
    async downloadLiterature() {
      downloadLiteratureApi(this.identifier).then(res => {
        let url = window.URL.createObjectURL(res.data)
        const fileName = decodeURIComponent(res.headers["content-disposition"].split("=")[1])
        const a = document.createElement("a")
        a.setAttribute("href", url)
        a.setAttribute("download", fileName)
        document.body.append(a)
        a.click()
        document.body.removeChild(a)
      }).catch(() => {
        this.$message.error('当前文献待上传！')
      })
    },
    async preview() {
      downloadLiteratureApi(this.identifier).then(res => {
        const urlPdf = window.URL.createObjectURL(res.data)
        this.pdfSrc = Pdf.createLoadingTask({
          url: urlPdf,
          CMapReaderFactory
        })
        this.pdfSrc.promise.then(pdf => {
          this.pdfTotal = pdf.numPages
        })
        this.pdfVisible = true
      }).catch(() => {
        this.$message.error('当前文献待上传，不支持预览！')
      })
    },
    async editDocHandler(formData) {
      const res = await this.submitEditLiterature(formData)
      if (res.success) {
        await this.queryLiterature()
        await this.getSimilarLiteratureList()
        this.$message.success('编辑文档成功！')
        this.$refs.editDialog.toggleOpen()
      }
    },
    openEditDialog() {
      this.$refs.editDialog.toggleOpen()
      this.$refs.editDialog.formData = Object.assign({ catalogCode: [ this.detail.catalogCode ] }, this.detail)
    },
  }
}
</script>

<style lang="scss" scoped>
.summaryWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.headers {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 41px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #E5E5E5;
}
.abstract {
  flex: 1;
}

::v-deep .el-dialog__header {
  border-bottom: 0;
}
</style>