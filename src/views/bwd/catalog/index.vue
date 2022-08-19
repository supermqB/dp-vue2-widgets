<template>
  <div class="bwdWrap">
    <Header
      title="BWD目录"
      @add="addFileCatalog"
      @edit="editFileCatalog"
    ></Header>
    <div class="search">
      <el-popover placement="right-start" width="150" trigger="click">
        <el-tree
          show-checkbox
          ref="filterTree"
          node-key="id"
          :default-expanded-keys="['1', '2', '3', '4']"
          :default-checked-keys="[2]"
          :data="treeSelectionData"
          @check-change="checkedFilterHandler"
        >
        </el-tree>
        <div class="task-input-do">
          <el-button size="mini">重置</el-button>
          <el-button type="primary" @click="onClickSearch" size="mini"
            >查询</el-button
          >
        </div>
        <el-button type="text" slot="reference"> 筛选 </el-button>
      </el-popover>
      <span>搜索</span>
      <el-input placeholder="请输入" suffix-icon="el-icon-search"></el-input>
    </div>
    <Tree :data="catalogList" class="tree" @onClick="handleNodeClick"></Tree>
    <div class="dialog_port">
      <Dialog
        title="新增文件目录"
        ref="addFileCatalogDialog"
        class="addFileCatalogDialog"
      >
        <Form
          :formCfg="addFileCatalogCfg"
          :formData="addFileCatalogData"
          :formRule="fileCatalogRule"
        ></Form>
      </Dialog>
      <Dialog
        title="编辑文件目录"
        ref="editFileCatalogDialog"
        class="editFileCatalogDialog"
      >
        <Form
          :formCfg="editFileCatalogCfg"
          :formData="editFileCatalogData"
          :formRule="fileCatalogRule"
        ></Form>
      </Dialog>
    </div>
    <Bottom :labelList="['文件数', '字段数']"></Bottom>
  </div>
</template>

<script>
import Header from '@/components/header/Catalog.vue'
import Dialog from '@/components/Dialog.vue'
import Form from '@/components/Form.vue'
import Bottom from '@/components/bottom/Catalog.vue'
import Tree from '@/components/SideTree.vue'
import {
  editFileCatalogCfg,
  addFileCatalogCfg,
  fileCatalogRule
} from './config/fileCatalogForm'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('bwd')
export default {
  components: {
    Header,
    Dialog,
    Tree,
    Form,
    Bottom
  },
  data() {
    return {
      addFileCatalogCfg,
      editFileCatalogCfg,
      fileCatalogRule,
      addFileCatalogDialog: false,
      editFileCatalogDialog: false
    }
  },
  computed: {
    ...mapState([
      'treeSelectionData',
      'catalogList',
      'addFileCatalogData',
      'editFileCatalogData'
    ]),
    ...mapGetters(['currentCatalogItem'])
  },
  methods: {
    ...mapMutations([
      'setCatalogForm',
      'setCurrentCatalog',
      'setCurrentColumn'
    ]),
    ...mapActions(['queryColumn']),
    async handleNodeClick({ id }) {
      this.setCurrentCatalog(id)
      await this.queryColumn()
      this.setCurrentColumn()
    },
    async addFileCatalog() {
      this.$refs.addFileCatalogDialog.toggleOpen()
      this.setCatalogForm()
    },
    editFileCatalog() {
      this.$refs.editFileCatalogDialog.toggleOpen()
      this.setCatalogForm(this.currentCatalogItem)
    },
    checkedFilterHandler() {
      let checkedKeys = this.$refs.filterTree.getCheckedKeys()
      this.$emit('checked-filter-keys', checkedKeys)
    },
    async onClickSearch() {}
  }
}
</script>

<style scoped lang="scss">
.bwdWrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .search {
    height: 41px;
    padding: 0 7px 0 0px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    // border-bottom: 1px solid #e5e5e5;
    span {
      display: inline-block;
      padding-left: 7px;
      width: 70px;
      font-size: 14px;
    }
    .el-button {
      width: 50px;
      padding: 6.5px 8px;
      border-right: 1px solid #e5e5e5;
      font-size: 16px;
    }
  }
}
.el-tree {
  height: 200px;
}
.task-input-do {
  position: relative;
  left: 32px;
}
::v-deep .catalogTitleWrap .buttons .action.run {
  display: none;
}
::v-deep .addFileCatalogDialog .el-dialog {
  width: 700px;
  form {
    padding-right: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 16px;
      display: inline-flex;
    }
  }
}
::v-deep .editFileCatalogDialog .el-dialog {
  width: 700px;
  form {
    padding-right: 25%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 16px;
      display: inline-flex;
    }
  }
}
.tree {
  flex-grow: 1;
  overflow: auto;
}
</style>
