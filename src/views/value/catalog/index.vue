<template>
  <div class="wrap">
    <Header
      title="值域目录"
      :actionTypes="['add', 'edit']"
      @add="addCatalog"
      @edit="editCatalog"
    ></Header>
    <div class="search">
      <span>搜索</span>
      <el-input suffix-icon="el-icon-search"></el-input>
    </div>
    <Tree
      :data="dictList"
      currentNodeKey="currentDict"
      @onClick="handleNodeClick"
      class="tree"
    ></Tree>
    <Dialog
      title="新增值域字典"
      ref="addCatalogDialog"
      class="addCatalogDialog"
      @dialog-complete="onClickSubmitCatalog"
    >
      <Form
        :formCfg="addCatalogCfg"
        :formData="dictForm"
        :formRule="catalogRule"
      ></Form>
    </Dialog>
    <Dialog
      title="编辑值域字典"
      ref="editCatalogDialog"
      class="editCatalogDialog"
      @dialog-complete="onClickSubmitCatalog"
    >
      <Form
        :formCfg="editCatalogCfg"
        :formData="dictForm"
        :formRule="catalogRule"
      ></Form>
    </Dialog>
  </div>
</template>

<script>
import Tree from '@/components/SideTree.vue'
import Dialog from '@/components/Dialog.vue'
import Form from '@/components/Form.vue'
import Header from '@/components/header/Catalog.vue'
import {
  addCatalogCfg,
  editCatalogCfg,
  catalogRule
} from './config/catalogForm'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapActions, mapMutations } = createNamespacedHelpers('value')

export default {
  components: {
    Tree,
    Dialog,
    Form,
    Header
  },
  data() {
    return {
      catalogRule,
      addCatalogCfg,
      editCatalogCfg
    }
  },
  computed: {
    ...mapState([
      'dictForm', 
      'dictList', 
      'currentDict'
    ])
  },
  methods: {
    ...mapMutations([
      'setCurrentVersion',
      'setCurrentDictValue'
    ]),
    ...mapActions([
      'queryDict',
      'queryVersion',
      'queryDictValue',
      'submitDict'
    ]),
    async handleNodeClick({}) {
      await this.queryVersion()
      this.setCurrentVersion()
      await this.queryDictValue()
      this.setCurrentDictValue()
    },
    addCatalog() {
      this.$refs.addCatalogDialog.toggleOpen()
    },
    editCatalog() {
      this.$refs.editCatalogDialog.toggleOpen()
    },
    async onClickSubmitCatalog() {
      await this.submitDict()
      await this.queryDict()
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: auto;
  .search {
    height: 41px;
    padding: 0 7px 0 15px;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    span {
      display: inline-block;
      width: 50px;
      font-size: 14px;
    }
  }
  .tree {
    flex: 1 1 auto;
    overflow: auto;
    padding-top: 5px;
    border-bottom: 1px solid #e5e5e5;
  }
}

::v-deep .addCatalogDialog .el-dialog {
  width: 900px;
  form {
    height: 320px;
    padding-right: 70px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 4px;
      display: inline-flex;
    }
  }
}

::v-deep .editCatalogDialog .el-dialog {
  width: 570px;
  form {
    padding-right: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 4px;
      display: inline-flex;
    }
  }
}
</style>
