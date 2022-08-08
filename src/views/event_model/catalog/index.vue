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
      <el-select v-model="version">
        <el-option
          v-for="(item, index) in versionList"
          :key="index"
          :label="item"
          :value="item"></el-option>
      </el-select>
      <el-button type="text" @click="addVersion">新增版本</el-button>
    </div>
    <Tree
      :currentNodeKey="current"
      @onClick="handleNodeClick"
      class="tree"
    ></Tree>
    <Bottom :labelList="['总数', '字段数']"></Bottom>
    <Dialog
      title="新增版本"
      ref="versionDialog"
      class="versionDialog"
    >
      <Form :formCfg="versionCfg" :formData="versionData" :formRule="versionRule" ></Form>
    </Dialog>
    <Dialog
      :title="`${catalogState === ADDSTATE ? '新增数据集' : '编辑数据集'}`"
      ref="catalogDialog"
      class="catalogDialog"
    >
      <Form :formCfg="catalogCfg" :formData="catalogData" :formRule="catalogRule" ></Form>
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
import { ADDSTATE, EDITSTATE, RUNNINGSTATE } from '@/utils/const'
export default {
  components: {
    Dialog, Form, Tree, Header, Bottom
  },
  data() {
    return {
      version: '',
      current: '1-1',
      versionList: [
        '卫生版1.0'
      ],
      catalogList: [],
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
        version: '',
        theme: '',
        code: '',
        nameCn: '',
        nameEn: '',
        description: ''
      }
    }
  },
  created() {
    this.ADDSTATE = ADDSTATE
  },
  async mounted () {
    // const res = await getVersionListApi()
  },
  methods: {
    handleNodeClick({ id, label }) {
      this.current = id
    },
    addVersion() {
      this.catalogDialogState = ADDSTATE
      this.$refs.versionDialog.toggleOpen()
    },
    addCatalog() {
      this.catalogState = ADDSTATE
      this.$refs.catalogDialog.toggleOpen()
    },
    editCatalog() {
      this.catalogState = EDITSTATE
      this.$refs.catalogDialog.toggleOpen()
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