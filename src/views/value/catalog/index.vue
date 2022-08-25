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
      <el-input
        v-model="dictFilter"
        @change="onDictFilterChange"
        clearable
        suffix-icon="el-icon-search"></el-input>
    </div>
    <Tree
      ref="tree"
      :data="dictList"
      :currentNodeKey="currentDict"
      @onClick="onDictChange"
      class="tree"
    ></Tree>
    <Dialog
      title="新增值域字典"
      ref="addCatalogDialog"
      class="addCatalogDialog"
      @dialog-complete="onClickSubmitAddCatalog"
    >
      <Form
        ref="addDictForm"
        :formCfg="addCatalogCfg(classList, subClassOptions, subClassChange, sourceTypeOptions)"
        :formData="dictForm"
        :formRule="catalogRule"
      ></Form>
    </Dialog>
    <Dialog
      title="编辑值域字典"
      ref="editCatalogDialog"
      class="editCatalogDialog"
      @dialog-complete="onClickSubmitEditCatalog"
    >
      <Form
        ref="editDictForm"
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
import { getMaxDictCodeApi } from '@/api/value'
import { getMaxNumber } from '@/utils/lang'
const { mapState, mapGetters, mapActions, mapMutations } = createNamespacedHelpers('value')

export default {
  components: {
    Tree,
    Dialog,
    Form,
    Header
  },
  data() {
    return {
      dictFilter: '',
      catalogRule,
      addCatalogCfg,
      editCatalogCfg
    }
  },
  computed: {
    ...mapState([
      'dictForm', 
      'dictList',
      'classList',
      'dictValueList',
      'task',
      'currentDict',
      'currentVersionInfo',
    ]),
    ...mapGetters([
      'currentDictItem',
      'sourceTypeOptions'
    ]),
    subClassOptions() {
      this.dictForm.subClass = ''
      this.dictForm.ctlgCode = ''
      const res = this.classList.find(item => item.id === this.dictForm.class)
      if (res) return res.children
      return []
    }
  },
  methods: {
    ...mapMutations([
      'setCurrentDict',
      'setCurrentVersion',
      'setCurrentDictValue',
      'setDictForm'
    ]),
    ...mapActions([
      'queryDict',
      'queryVersion',
      'queryVersionInfo',
      'queryDictValue',
      'submitDict',
      'onDictChange'
    ]),
    async subClassChange(val) {
      this.dictForm.ctlgCode = val
      const { value } = await getMaxDictCodeApi(val)
      const dictCode = getMaxNumber(value, 7)
      this.setDictForm({ dictCode })
    },
    async addCatalog() {
      this.$refs.addCatalogDialog.toggleOpen()
      this.$nextTick(() => {
        this.$refs.addDictForm.resetFields()
      })
    },
    editCatalog() {
      const { code, classifyCode } = this.currentVersionInfo
      const { nameEn, nameCn } = this.currentDictItem
      this.setDictForm({
        dictCode: code,
        ctlgCode: classifyCode,
        nameCn, 
        nameEn
      })
      this.$refs.editCatalogDialog.toggleOpen()
      this.$nextTick(() => {
        this.$refs.editDictForm.resetFields()
      })
    },
    onDictFilterChange(val) {
      this.$refs.tree.filter(val)
    },
    async onClickSubmitAddCatalog() {
      const { valid } = await this.$refs.addDictForm.validate()
      if (valid) {
        await this.submitDict(true)
        this.$message.success('新增值域字典成功！')
        this.$refs.addCatalogDialog.toggleOpen()
        await this.queryDict()
      } else {
        this.$alert('请检查输入项是否完整！')
      }
    },
    async onClickSubmitEditCatalog() {
      const { valid } = await this.$refs.editDictForm.validate()
      if (valid) {
        await this.submitDict(false)
        this.$message.success('值域字典编辑成功！')
        this.$refs.editCatalogDialog.toggleOpen()
        await this.queryDict()
      } else {
        this.$alert('请检查输入项是否完整！')
      }
    }
  },
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
