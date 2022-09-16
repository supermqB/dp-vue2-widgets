<template>
  <div class="bwdWrap">
    <Header
      title="业务目录"
      hasRun
      @add="addFileCatalog"
      @edit="editFileCatalog"
      @run="onClickRunCatalog"
      :actionTypes="
        currentBwdItem.state === RUNNINGSTATE
          ? ['add', 'edit_disable', 'run_disable']
          : ['add', 'edit', 'run']
      "
    ></Header>
    <div class="search">
      <!-- <el-popover placement="right-start" width="150" trigger="click">
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
          <el-button size="mini" @click="reset">重置</el-button>
          <el-button type="primary" @click="onClickSearch" size="mini"
            >查询</el-button
          >
        </div>
        <el-button type="text" slot="reference"> 筛选 </el-button>
      </el-popover> -->
      <span>搜索</span>
      <el-input
        placeholder="请输入"
        v-model="bwdFilter"
        @input="onBwdFilterChange"
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
        @dialog-closed="onfileCatalogFormClosed"
        @dialog-complete="onClickSubmitFileCatalog"
      >
        <Form
          ref="fileCatalogForm"
          :formCfg="fileCatalogCfg(themeOptions)"
          :formData="fileCatalogData"
          :formRule="fileCatalogRule"
        ></Form>
      </Dialog>
    </div>
    <Bottom
      :labelList="['文件数', '字段数']"
      :value="[totalNumber, pageInfo.totalSize]"
    ></Bottom>
  </div>
</template>

<script>
import Header from '@/components/header/Catalog.vue'
import Dialog from '@/components/Dialog.vue'
import Form from '@/components/Form.vue'
import Bottom from '@/components/bottom/Catalog.vue'
import Tree from '@/components/SideTree.vue'
import { RUNNINGSTATE } from '@/utils/const'
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
      fileCatalogDialog: false,
      RUNNINGSTATE
    }
  },
  computed: {
    ...mapState([
      'treeSelectionData',
      'bwdList',
      'currentBwd',
      'fileCatalogData',
      'pageInfo',
      'totalNumber',
      'themeOptions'
    ]),
    ...mapGetters(['currentBwdItem', 'categoryOptions'])
  },
  methods: {
    ...mapMutations([
      'setCatalogForm', 
      'setCurrentBwd', 
      'setCurrentField'
    ]),
    ...mapActions([
      'loadBwdModules',
      'queryField',
      'queryVersion',
      'queryMappingList',
      'submitFileCatalog',
      'queryTotalNum',
      'runCatalog'
    ]),
    onClickRunCatalog() {
      if (this.currentBwdItem.state != 3) {
        return this.$confirm(`是否启用【${this.currentBwdItem.label}】？`, {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.runCatalog()
        })
      }
    },
    // 根据目录的id渲染中间详细信息
    async handleNodeClick({ id }) {
      this.setCurrentBwd(id)
      await this.queryVersion()
      await this.queryField()
      await this.queryMappingList()
      this.setCurrentField()
    },
    // 左侧编辑新增
    async addFileCatalog() {
      this.$refs.fileCatalogDialog.toggleOpen()
      this.setCatalogForm()
      this.$nextTick(() => {
        this.$refs.fileCatalogForm.clearValidate()
      })
    },
    editFileCatalog() {
      if (!this.currentBwd) return
      this.$refs.fileCatalogDialog.toggleOpen()
      this.setCatalogForm(this.currentBwdItem)
    },
    // 表单重置
    onfileCatalogFormClosed() {
      this.setCatalogForm()
      this.$refs.fileCatalogForm.resetFields()
    },
    // 表单确定提交
    async onClickSubmitFileCatalog() {
      const { valid } = await this.$refs.fileCatalogForm.validate()
      if (valid) {
        if(await this.submitFileCatalog())
          this.$refs.fileCatalogDialog.toggleOpen()
      } else {
        this.$alert('请检查输入项是否完整！')
      }
    },
    // 左侧搜索框
    onBwdFilterChange(val) {
      this.$refs.tree.filter(val)
    },
    // 筛选弹窗点击操作
    checkedFilterHandler() {
      let checkedKeys = this.$refs.filterTree.getCheckedKeys()
      this.$emit('checked-filter-keys', checkedKeys)
    },
    // 筛选弹窗重置，默认医疗类
    reset() {
      this.$refs.filterTree.setCheckedKeys([2])
    },
    // 筛选框的查询功能
    async onClickSearch() {}
  },
  // Vue完成DOM挂载bwd列表
  // mounted() {
  //   this.loadBwdModules()
  //   this.queryTotalNum()
  // },
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
    height: 39px;
    padding: 0 7px 0 0px;
    box-sizing: border-box;
    display: flex;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    span {
      display: inline-block;
      padding-left: 7px;
      width: 50px;
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
::v-deep .fileCatalogDialog .el-dialog {
  width: 600px;
  form {
    padding-right: 19%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    flex-wrap: wrap;
    .el-form-item {
      margin-bottom: 16px;
      display: inline-flex;
    }
    .el-tag {
      height: 20px
    } 
  }
}
.tree {
  flex-grow: 1;
  overflow: auto;
}
</style>
