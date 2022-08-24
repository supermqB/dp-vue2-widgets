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
      <el-input
        placeholder="请输入"
        v-model="bwdFilter"
        @change="onBwdFilterChange"
        clearable
        suffix-icon="el-icon-search"
      ></el-input>
    </div>
    <Tree
      ref="tree"
      :data="bwdList"
      class="tree"
      :currentNodeKey="currentBwd"
      @onClick="handleNodeClick"
    ></Tree>
    <div class="dialog_port">
      <Dialog
        :title="`${!fileCatalogData.id ? '新增文件目录' : '编辑文件目录'}`"
        ref="fileCatalogDialog"
        class="fileCatalogDialog"
      >
        <Form
          ref="fileCatalogForm"
          :formCfg="fileCatalogCfg"
          :formData="fileCatalogData"
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
import { fileCatalogCfg, fileCatalogRule } from './config/fileCatalogForm'
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
      bwdFilter: '',
      fileCatalogCfg,
      fileCatalogRule,
      fileCatalogDialog: false
    }
  },
  computed: {
    ...mapState([
      'treeSelectionData',
      'bwdList',
      'currentBwd',
      'fileCatalogData'
    ]),
    ...mapGetters(['currentBwdItem'])
  },
  methods: {
    ...mapMutations(['setCatalogForm', 'setCurrentBwd']),
    ...mapActions(['loadBwdModules', 'loadCurrentBwdValue']),
    // 后面渲染详细信息
    async handleNodeClick({ id }) {
      this.setCurrentBwd(id)
      this.loadCurrentBwdValue(this.currentBwd.id)
    },
    // 左侧编辑新增
    async addFileCatalog() {
      this.$refs.fileCatalogDialog.toggleOpen()
      this.setCatalogForm()
    },
    editFileCatalog() {
      if (!this.currentCatalog) return
      this.$refs.fileCatalogDialog.toggleOpen()
      this.setCatalogForm(this.currentBwdItem)
    },
    // 左侧搜索框
    onBwdFilterChange(val) {
      this.$refs.tree.filter(val)
    },
    // 筛选弹窗操作
    checkedFilterHandler() {
      let checkedKeys = this.$refs.filterTree.getCheckedKeys()
      this.$emit('checked-filter-keys', checkedKeys)
    },
    async onClickSearch() {}
  },
  // 挂载bwd列表
  mounted() {
    this.loadBwdModules()
  },
  // 实时监视左侧选中的bwd文件
  watch: {
    currentBwdItem: {
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
::v-deep .fileCatalogDialog .el-dialog {
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
