<template>
  <el-tree
    node-key="id"
    :current-node-key="current"
    :data="data"
    :expand-on-click-node="false"
    default-expand-all
    @node-click="handleNodeClick"
    :indent="12">
    <div 
      class="treeNode" 
      slot-scope="{ node, data }"
      @click="(event) => { if (data.theme) { event.stopPropagation() } }"
    >
      <p class="label">
        <img v-if="data.state === RUNNINGSTATE" src="@/assets/images/event/running.png" />
        <img v-else src="@/assets/images/event/editing.png" />
        {{ data.label }}
      </p>
      <p class="number">{{ data.number }}</p>
    </div>
  </el-tree>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      current: ''
    }
  },
}
</script>

<style scoped lang="scss">
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
::v-deep .el-tree-node__content>.el-tree-node__expand-icon {
  padding: 4px
}

::v-deep .el-tree-node.is-current>.el-tree-node__content {
  background-color: #D8FFFE!important;
}
</style>