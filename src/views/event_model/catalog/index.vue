<template>
  <div class="wrapper">
    <Header
      title="事件目录"
      hasRun
      @add="onClickAddCatalog"
      @edit="onClickEditCatalog"
      @run="onClickRunCatalog"
    ></Header>
    <div class="version">
      <span>版本</span>
      <el-select v-model="curVersion">
        <el-option
          v-for="(item, index) in versionList"
          :key="index"
          :label="item.versionName"
          :value="item.versionName"></el-option>
      </el-select>
      <el-button type="text" @click="newVersion">新增版本</el-button>
    </div>
    <Tree
      ref="tree"
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
      @dialog-closed="onVersionFormClosed"
      @dialog-complete="onClickSubmitVersion"
    >
      <Form
        ref="versionForm"
        :formCfg="versionCfg(versionOptions)"
        :formData="versionForm" 
        :formRule="versionRule"
      ></Form>
    </Dialog>
    <Dialog
      :title="`${!catalogForm.id ? '新增数据集' : '编辑数据集'}`"
      ref="catalogDialog"
      class="catalogDialog"
      @dialog-closed="onCatalogFormClosed"
      @dialog-complete="onClickSubmitCatalog"
    >
      <Form 
        ref="catalogForm"
        :formCfg="catalogCfg(versionOptions, themeOptions, !!catalogForm.id)"
        :formData="catalogForm" :formRule="catalogRule"
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
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('event')
export default {
  components: {
    Dialog, Form, Tree, Header, Bottom
  },
  data() {
    return {
      versionCfg,
      versionRule,
      catalogCfg, 
      catalogRule,
      versionDialog: false,
      catalogDialog: false,
    }
  },
  computed: {
    ...mapState([
      'versionList', 
      'currentCatalog', 
      'pageInfo', 
      'currentVersion', 
      'versionForm', 
      'catalogForm'
    ]),
    curVersion: {
      get() {
        return this.currentVersion
      },
      async set(val) {
        this.setCurrentVersion(val)
        await this.queryCatalog()
        this.setCurrentCatalog()
        this.resetColumnList()
        await this.queryColumn()
        this.setCurrentColumn()
      }
    },
    ...mapGetters([
      'versionOptions', 
      'themeOptions', 
      'currentCatalogItem', 
      'catalogTreeList', 
      'totalNumber'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentCatalog', 
      'setCurrentVersion',
      'setCurrentColumn',
      'setVersionForm',
      'setCatalogForm',
      'resetColumnList'
    ]),
    ...mapActions([
      'queryCatalog',
      'queryColumn',
      'addVersion', 
      'runCatalog', 
      'submitCatalog', 
      'getMaxCode'
    ]),
    async handleNodeClick({id}) {
      this.setCurrentCatalog(id)
      await this.queryColumn()
      this.setCurrentColumn()
    },
    newVersion() {
      // this.catalogDialogState = ADDSTATE
      this.$refs.versionDialog.toggleOpen()
    },
    onVersionFormClosed(){
      this.setVersionForm()
      this.$refs.versionForm.resetFields()
    },
    onCatalogFormClosed() {
      this.setCatalogForm()
      this.$refs.catalogForm.resetFields()
    },
    onClickRunCatalog() {
      if (!this.currentCatalog) return
      this.$confirm(`是否启用【${this.currentCatalogItem.nameCn}】的所有表单信息`, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.runCatalog()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消启动'
        });          
      });
    },
    async onClickAddCatalog() {
      this.getMaxCode({ version: this.currentVersion, theme: this.currentCatalogItem.theme})
      this.$refs.catalogDialog.toggleOpen()
      this.setCatalogForm()
    },
    onClickEditCatalog() {
      if (!this.currentCatalog) return
      this.$refs.catalogDialog.toggleOpen()
      this.setCatalogForm(this.currentCatalogItem)
    },
    onClickSubmitCatalog() {
      this.$refs.catalogForm.validate(() => {
        this.submitCatalog()
        this.$refs.catalogDialog.toggleOpen()
      })
    },
    onClickSubmitVersion() {
      this.$refs.versionForm.validate(() => {
        this.addVersion()
        this.$refs.versionDialog.toggleOpen()
      })
      
    }
  },
  watch: {
    currentCatalogItem: {
      handler() {
        this.$nextTick(() => {
          this.$refs.tree.setCurrent()
        })
      }
    }
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
    .el-form-item {
      display: flex;
      flex-direction: row;
    }
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
    .el-form-item {
      margin-bottom: 3px;
      display: flex;
      flex-direction: row;
    }
  }
}
</style>