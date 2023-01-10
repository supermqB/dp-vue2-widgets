<template>
  <div class="dpui_sideCatalog_wrapper">
    <el-tree
      class="treeWrap"
      ref="sideTree"
      node-key="id"
      :current-node-key="currentNodeKey"
      :filter-node-method="filterNodeMethod"
      :data="treeList"
      :expand-on-click-node="false"
      :default-expand-all="defaultExpandAll"
      @node-click="handleNodeClick"
      :indent="11"
      highlight-current
    >
      <div
        class="treeNode"
        :ref="'dom' + data.id"
        slot-scope="{ data, node }"
        @click="
          event =>
            isDisabledByType(data.type) ? event.stopPropagation() : null
        "
      >
        <div class="label">
          <span class="front">
            <i v-if="data.state"></i>
            <span v-else class="blank"></span>
            <span>{{ data.label }}</span>
          </span>
          <span>
            <span>{{ 'number' in data ? unitFmt(data.number) : '' }}</span>
            <span>{{ data.endText }}</span>
          </span>
        </div>
        <div class="disabled" v-if="!node.isLeaf"></div>
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
  name: 'SideCatalog',
  props: {
    data: {
      type: Array,
      default: () => [] // id, label, state 非必填(true, false), number 非必要
    },
    currentNodeKey: {
      type: String,
      default: ''
    },
    defaultExpandAll: {
      type: Boolean,
      default: false
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
    unitFmt(num) {
      return unitFmt(num)
    },
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
          const dom = this.$refs[`dom${id}`]
          const ids = id.split('-')
          this.$emit(
            'onItemSelected',
            {
              id: ids.length > 1 ? ids[1] : ids[0],
              type,
              label,
              list: list.map(item => item.id).join('.')
            },
            dom
          )
          this.$emit('onNodeSelected', { ...node }, dom)
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
      this.emitItemSelected()
    }
  }
}
</script>

<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  .treeWrap {
    flex: 1;
    overflow: auto;
  }
}
.treeNode {
  width: 100%;
  height: 100%;
  padding-top: 2px;
  padding-right: 10px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  font-size: 13px;
  .label {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    overflow: hidden;
    .front {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    i {
      display: inline-block;
      width: 5px;
      height: 5px;
      padding-right: 3px;
      padding-bottom: 2px;
      border-radius: 5px;
      background-color: #f56c6c;
    }
    .blank {
      display: inline-block;
      padding-right: 3px;
      padding-bottom: 2px;
      width: 5px;
      height: 5px;
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
  /* .treeNode .label {
    color: #2f63b9;
  } */
}
::v-deep .el-tree-node:focus > .el-tree-node__content {
  background-color: transparent;
}
</style>
