<template>
  <div class="wrapper">
    <Header
      title="事件目录"
      hasRun
      @add="addCatalog"
      @edit="editCatalog"
    ></Header>
    <div class="version">
      <span>版本</span>
      <el-select v-model="currentVersion" @change="onVersionChanged">
        <el-option
          v-for="(item, index) in versionList"
          :key="index"
          :label="item.versionName"
          :value="item.versionName"></el-option>
      </el-select>
      <el-button type="text" @click="addVersion">新增版本</el-button>
    </div>
    <Tree
      :data="catalogTreeList"
      :currentNodeKey="currentCatalog"
      @onClick="handleNodeClick"
      class="tree"
    ></Tree>
    <Bottom :labelList="['总数', '字段数']" :value="[totalNumber, pageInfo.totalSize]"></Bottom>
    <Dialog
      title="新增版本"
      :isOpen="versionDialog"
      ref="versionDialog"
      class="versionDialog"
    >
      <Form :formCfg="versionCfg" :formData="versionData" :formRule="versionRule" ></Form>
    </Dialog>
    <Dialog
      :title="`${catalogState === ADDSTATE ? '新增数据集' : '编辑数据集'}`"
      ref="catalogDialog"
      class="catalogDialog"
      @onClosed="resetCatalogForm"
      @dialog-complete="submitCatalog"
    >
      <Form 
        ref="catalogForm"
        :formCfg="catalogCfg(versionOptions, themeOptions, catalogState)"
        :formData="catalogData" :formRule="catalogRule"
      ></Form>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue'
import Form from '@/components/Form.vue'
import Tree from '@/components/SideTree.vue'
import Header from '@/components/header/Catalog.vue' 
import Bottom from '@/components/bottom/Catalog.vue'
import { versionCfg, versionRule } from './config/versionForm'
import { catalogCfg, catalogRule } from './config/catalogForm'
import { ADDSTATE, EDITSTATE } from '@/utils/const'
import { createNamespacedHelpers } from 'vuex'
import { updateCatalogApi, addCatalogApi } from '@/api/event'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('event')
export default {
  components: {
    Dialog, Form, Tree, Header, Bottom
  },
  data() {
    return {
      version: '',
      current: '1-1',
      versionCfg,
      versionRule,
      versionData: {
        version: '',
        parVersion: '',
        state: ''
      },
      catalogState: ADDSTATE,
      catalogCfg, 
      catalogRule,
      catalogData: {
        id: null,
        version: '',
        theme: '',
        code: '',
        nameCn: '',
        nameEn: '',
        description: ''
      },
      versionDialog: false,
      catalogDialog: false,
    }
  },
  computed: {
    ...mapState(['versionList', 'currentCatalog', 'currentVersion', 'pageInfo']),
    ...mapGetters(['versionOptions', 'themeOptions', 'currentCatalogItem', 'catalogTreeList', 'totalNumber'])
  },
  created() {
    this.ADDSTATE = ADDSTATE
  },
  methods: {
    ...mapMutations(['setCurrentCatalog', 'setCurrentVersion']),
    ...mapActions(['queryColumn', 'queryCatalog', 'addCatalog', 'updateCatalog']),
    onVersionChanged(val) {
      this.setCurrentVersion(val)
      this.queryCatalog()
    },
    handleNodeClick({id}) {
      this.setCurrentCatalog(id)
      this.queryColumn()
    },
    addVersion() {
      this.catalogDialogState = ADDSTATE
      this.$refs.versionDialog.toggleOpen()
    },
    resetCatalogForm() {
      this.$refs.catalogForm.resetFields()
    },
    addCatalog() {
      this.catalogState = ADDSTATE
      this.$refs.catalogDialog.toggleOpen()
      const { theme } = this.currentCatalogItem
      this.catalogData.version = this.currentVersion,
      this.catalogData.theme = theme
      this.catalogData.code = ''
      this.catalogData.nameCn = ''
    },
    editCatalog() {
      this.catalogState = EDITSTATE
      this.$refs.catalogDialog.toggleOpen()
      const { id, code, nameCn, nameEn, description, theme } = this.currentCatalogItem
      this.catalogData.id = id
      this.catalogData.version = this.currentVersion,
      this.catalogData.theme = theme
      this.catalogData.code = code
      this.catalogData.nameCn = nameCn
      this.catalogData.nameEn = nameEn
      this.catalogData.description = description
      
    },
    async submitCatalog() {
      const { id, version, theme, code, nameCn, nameEn, description } = this.catalogData
      if (this.catalogState === ADDSTATE) {
        await addCatalogApi(version, theme, code, nameCn, nameEn, description)
      } else {
        await updateCatalogApi(id, version, theme, code, nameCn, nameEn, description)
      }
    },
  }
}
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
}
.version {
  height: 41px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid #E5E5E5;
  span {
    width: 30px;
    display: inline-block;
    font-size: 13px;
  }
  .el-select {
    width: 120px;
  }
  .el-button {
    font-size: 13.5px;
  }
}
.tree {
  flex: 1;
  overflow: auto;
}

::v-deep .el-form-item {
  margin-bottom: 11px;
}

::v-deep .versionDialog .el-dialog{
  width: 535px;
  form {
    padding-right: 85px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    .el-select {
      margin: 0;
    }
  }
}

::v-deep .catalogDialog .el-dialog{
  width: 635px;
  form {
    padding-right: 110px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
</style>