<template>
  <div>
    <div class="headers">
      <Breadcrumb
        baseLabel="文献库"
        :currentLabel="title"></Breadcrumb>
      <div>
        <el-button type="primary">预览</el-button>
        <el-button type="primary" @click="openEditDialog">编辑</el-button>
        <el-button type="primary" @click="downloadLiterature">下载</el-button>
      </div>
    </div>
    <Abstract v-bind="detail"></Abstract>
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
import {
  downloadLiteratureApi,
  getSimilarLiteratureListApi,
  editLiteratureApi,
  queryLiteratureApi
} from '@/api/doc';
const contentList = [
  {
    id: ['summary'],
    label: '摘要'
  },
  {
    id: ['catalogGrp1', 'catalogGrp2', 'catalogGrp3'],
    label: '分类'
  },
  {
    id: ['keywords'],
    label: '关键字'
  },
  {
    id: ['source'],
    label: '来源'
  },
  {
    id: ['releaseTime'],
    label: '发布年限'
  },
  {
    id: ['reliability'],
    label: '置信度'
  }
]
export default {
  components: {
    Abstract,
    Breadcrumb,
    EditDialog
  },
  data() {
    return {
      title: '2809名体检人群中高血压与Hp感染的关联性分析',
      current: null,
      detail: {}
    }
  },
  async mounted() {
    const identifier = this.$route.params.identifier ? this.$route.params.identifier : 'S31990001'
    const res = await queryLiteratureApi(identifier)
    const {
      title, 
      titleEn,
      author,
      organization
    } = res.value
    this.detail = {
      title,
      titleEn,
      author,
      organization,
      contentList: []
    }
    this.current = Object.assign({}, res.value)
    this.title = title
    this.detail.contentList = contentList.map(item => {
      return {
        label: item.label,
        content: item.id.map(key => res.value[key]).join(' ')
      }
    })
  },
  methods: {
    async downloadLiterature() {
      await downloadLiteratureApi()
    },
    async editDocHandler(formData) {
      await editLiteratureApi(formData)
      this.$message.success('编辑文档成功！')
    },
    openEditDialog() {
      this.$refs.editDialog.open()
      this.$refs.editDialog.formData = this.current
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