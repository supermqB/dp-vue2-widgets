<template>
  <div class="wrapper">
    <div class="header">
      <h3>事件目录</h3>
      <div class="buttons">
        <img src="@/assets/images/event/add.png" @click="addCatalog"/>
        <img src="@/assets/images/event/edit.png"  @click="editCatalog"/>
        <img src="@/assets/images/event/run.png" />
      </div>
    </div>
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
    <div class="tree">
      <!-- :data="catalogList" -->
      <Tree
        :currentNodeKey="current"
        @onClick="handleNodeClick"
      ></Tree>
    </div>
    <div class="bottom">
      <p>总数: {{ 74 }}</p>
      <p>字段数: {{ 78 }}</p>
    </div>
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
import Tree from '@/components/Tree.vue'
import { versionCfg, versionRule } from './config/versionForm'
import { catalogCfg, catalogRule } from './config/catalogForm'
import { ADDSTATE, EDITSTATE, RUNNINGSTATE } from '@/utils/const'

export default {
  components: {
    Dialog, Form, Tree
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
.header {
  height: 41px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #E5E5E5;
  h3 {
    font-size: 16px;
    font-weight: normal;
  }
  .buttons {
    display: flex;
    justify-content: end;
    align-items: center;
    img {
      margin: 0 4px;
      cursor: pointer;
    }
  }
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
  padding-bottom: 30px;
  overflow: auto;
}
.bottom {
  width: 100%;
  height: 31px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: start;
  align-items: center;
  padding-left: 10px;
  box-sizing: border-box;
  border-top: 1px solid #E5E5E5;
  font-size: 12px;
  p {
    width: 80px;
  }
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
    align-items: end;
  }
}

::v-deep .catalogDialog .el-dialog{
  width: 635px;
  form {
    padding-right: 110px;
    display: flex;
    flex-direction: column;
    align-items: end;
  }
}
</style>