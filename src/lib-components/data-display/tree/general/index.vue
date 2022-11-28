<template>
  <div class="tree-general">
    <el-tree
      ref="sideTree"
      v-bind="bind"
      class="tree-wrap"
      :node-key="nodeKey"
      :data="treeList"
      :current-node-key="currentNodeKey"
      :expand-on-click-node="expandOnClickNode"
      :default-expand-all="defaultExpandAll"
      :indent="indent"
      highlight-current
      :filter-node-method="filterNodeMethod"
      @node-click="handleNodeClick"
    >
      <div
        class="tree-node"
        slot-scope="{ node, data }"
        @click="
          event =>
            isDisabledByType(data.type) ? event.stopPropagation() : null
        "
      >
        <div class="tree-node-content">
          <div class="content-left">
            <span v-if="data.state" class="red-circle"></span>
            <span class="label">{{ data.label }}</span>
          </div>
          <div class="content-right">
            <span>{{ 'number' in data ? unitFmt(data.number) : '' }}</span>
            <slot :data="data" :node="node"></slot>
          </div>
        </div>
        <div v-if="!node.isLeaf" class="disabled"></div>
      </div>
    </el-tree>
  </div>
</template>

<script>
import { reMapTree, getTreeParentNodes } from '@/utils/lang'
import { unitFmt } from '@/utils/format'

const reMapFunc = node => {
  const { id, state, type } = node
  const ids = id.split('-')
  return Object.assign({}, node, {
    type: type ? type : ids[0],
    state: !!(state * 1)
  })
}

export default {
  name: 'GeneralTree',
  props: {
    data: {
      type: Array,
      default: () => [] // id, label, state: 是否显示红点，非必填(true, false), number 非必要
    },
    bind: {
      type: Object,
      default: () => {}
    },
    // 每个树节点用来作为唯一标识的属性
    nodeKey: {
      type: String,
      default: 'id'
    },
    // 当前选中的节点
    currentNodeKey: {
      type: [String, Number]
    },
    // 是否在点击节点的时候展开或者收缩节点， 默认值为 true，如果为 false，则只有点箭头图标的时候才会展开或者收缩节点。
    expandOnClickNode: {
      type: Boolean,
      default: true
    },
    // 是否默认展开所有节点
    defaultExpandAll: {
      type: Boolean,
      default: false
    },
    // 相邻级节点间的水平缩进，单位为像素
    indent: {
      type: Number,
      default: 12
    },
    disabledTypes: {
      type: Array,
      default: () => []
    },
    searchText: {
      type: String,
      default: ''
    }
  },
  computed: {
    treeList() {
      return reMapTree(this.data, reMapFunc)
    }
  },
  methods: {
    unitFmt,
    isDisabledByType(type) {
      if (!this.disabledTypes.length) {
        return false
      } else {
        return this.disabledTypes.indexOf(type) > -1
      }
    },
    filter(val) {
      if (this.$refs.sideTree) this.$refs.sideTree.filter(val)
    },
    handleNodeClick(node) {
      this.emitItemSelected()
    },
    filterNodeMethod(value, data) {
      if (!value) return true
      return data.label.indexOf(value) > -1
    },
    setCurrent() {
      this.$nextTick(() => {
        this.$refs.sideTree.setCurrentKey(this.currentNodeKey)
        const selected = this.$refs.sideTree.getCurrentNode()
        if (
          selected &&
          this.$refs.sideTree.getNode(selected) &&
          this.$refs.sideTree.getNode(selected).parent
        ) {
          this.expandParents(this.$refs.sideTree.getNode(selected).parent)
        }
        this.emitItemSelected()
        this.filter(this.searchText)
      })
    },
    expandParents(node) {
      node.expanded = true
      if (node.parent) {
        this.expandParents(node.parent)
      }
    },
    emitItemSelected() {
      setTimeout(() => {
        if (this.$refs.sideTree) {
          const node = this.$refs.sideTree.getCurrentNode()
          if (!node) return
          const list = getTreeParentNodes(this.treeList, node.id)
          const { id, type, label } = node
          const ids = id.split('-')
          this.$emit('onItemSelected', {
            id: ids.length > 1 ? ids[1] : ids[0],
            type,
            label,
            list: list.map(item => item.id).join('.')
          })
          this.$emit('onNodeSelected', { ...node })
        }
      })
    }
  },
  watch: {
    searchText: {
      handler() {
        this.filter(this.searchText)
      }
    },
    currentNodeKey: {
      handler() {
        this.setCurrent()
      },
      immediate: true
    },
    data() {
      this.setCurrent()
    }
  }
}
</script>

<style scoped lang="scss">
.tree-general {
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  .tree-wrap {
    flex: 1;
    overflow: auto;
  }
  .tree-node {
    width: 100%;
    height: 100%;
    padding-right: 10px;
    display: flex;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    overflow: hidden;
    &-content {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      overflow: hidden;
      .content-left {
        flex: 1;
        display: flex;
        align-items: center;
        margin-right: 10px;
        overflow: hidden;
        .red-circle {
          width: 5px;
          height: 5px;
          margin-right: 3px;
          border-radius: 5px;
          background-color: #f56c6c;
        }
        .label {
          flex: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
      .content-right {
        min-width: 10px;
      }
    }
  }

  .disabled {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
  }
}

::v-deep .el-tree-node__content {
  height: 36px;
  position: relative;
}

::v-deep .el-tree-node__content > .el-tree-node__expand-icon {
  z-index: 12;
  padding: 4px;
  display: inline-block;
}

::v-deep .el-tree-node.is-current > .el-tree-node__content {
  background-color: #f2f6ff !important;
}
::v-deep .el-tree-node:focus > .el-tree-node__content {
  background-color: transparent;
}
</style>
