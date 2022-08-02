<template>
  <div class="wrapper">
    <div class="header">
      <h3>事件目录</h3>
      <div class="buttons">
        <el-button @click="addVersion">+</el-button>
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
      <el-button type="text">新增版本</el-button>
    </div>
    <div class="tree">
      <el-tree
        node-key="id"
        :current-node-key="current"
        :data="catalogList"
        :expand-on-click-node="false"
        default-expand-all
        :indent="12"
        @node-click="handleNodeClick">
        <div 
          class="treeNode" 
          slot-scope="{ node, data }"
          @click="(event) => { if (data.theme) { event.stopPropagation() } }"
        >
          <p class="label">
            <i v-if="data.status" class="el-icon-remove" />
            <i v-else class="el-icon-success" />
            {{ data.label }}
          </p>
          <p class="number">{{ data.number }}</p>
        </div>
      </el-tree>
    </div>
    <div class="bottom">
      <p>总数: {{ 74 }}</p>
      <p>字段数: {{ 78 }}</p>
    </div>
    <Dialog
      title="新增版本"
      ref="addVersion"
    >
      <Form :formCfg="versionForm"></Form>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog.vue';
import Form from '@/components/Form.vue';
import versionForm from './config/versionForm';
import { getCatalogApi, getVersionListApi } from '@/api/event';
export default {
  components: {
    Dialog, Form
  },
  data() {
    return {
      version: '',
      current: '1-1',
      versionList: [
        '卫生版1.0'
      ],
      catalogList: [
        {
          id: '1',
          label: '事件记录(0)',
          number: '数据源',
          theme: true,
          children: [
            {
              id: '1-1',
              label: 'E000-卫生事件记录',
              number: 1240
            }, {
              id: '1-2',
              label: 'E001-卫生事件日志',
              number: 1040
            }, {
              id: '1-3',
              label: 'E002-卫生事件入口hhhhhh',
              number: 600
            }
          ]
        },{
          id: '2',
          label: '摘要信息(B)',
          theme: true,
          children: [
            {
              id: '2-1',
              label: 'E000-个人信息表',
              number: 2398,
            }
          ]
        }
      ],
      versionForm
    }
  },
  mounted() {},
  methods: {
    handleNodeClick(data) {
      if (!data.theme) this.current = data.id
      console.log(this.current)
    },
    addVersion() {
      this.$refs.addVersion.toggleOpen()
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
.treeNode {
  position: relative;
  width: 100%;
  height: 28px;
  padding-right: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  .label {
    width: 130px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
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

/* ::v-deep .el-tree-node__content {
  position: relative;
} */

::v-deep .el-tree-node__content>.el-tree-node__expand-icon {
  padding: 4px
}

::v-deep .el-tree-node.is-current>.el-tree-node__content {
  background-color: #D8FFFE!important;
}
</style>