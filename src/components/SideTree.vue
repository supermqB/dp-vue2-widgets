<template>
  <div class="treeWrap">
    <el-tree
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
        slot-scope="{ node, data }"
        @click="
          event => (data.isTopCannotBeSelected ? event.stopPropagation() : null)
        "
      >
        <p class="label">
          <img :src="icon(data.state)" />
          <span :title="data.label">{{ data.label }}</span>
        </p>
        <p class="number">{{ data.number }}</p>
        <div class="disabled" v-if="data.isTopCannotBeSelected"></div>
      </div>
    </el-tree>
  </div>
</template>

<script>
import {
  STOPSTATE,
  RUNNINGSTATE,
  EDITINGSTATE,
  COMPLETESTATE,
  INCOMESTATE
} from '@/utils/const'
export default {
  props: {
    data: {
      type: Array,
      default: () => [] // id, label, state 非必填, number 非必要
    },
    currentNodeKey: {
      type: String,
      default: ''
    },
    defaultExpandAll: {
      type: Boolean,
      default: true
    },
    isTopCannotBeSelected: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    treeList() {
      const res = this.data.map(item => {
        return Object.assign({}, item, {
          isTopCannotBeSelected: this.isTopCannotBeSelected
        })
      })
      return res
    }
  },
  methods: {
    filter(val) {
      this.$refs.sideTree.filter(val)
    },
    handleNodeClick(node) {
      this.$emit('onClick', node)
    },
    filterNodeMethod(value, data) {
      if (!value) return true
      return data.label.indexOf(value) > -1
      // this.$emit('onFilterNodeMethod', { value, data, node })
    },
    icon(state) {
      switch (state) {
        case STOPSTATE:
          return require('@/assets/images/common/icons/income.png')
        case RUNNINGSTATE:
          return require('@/assets/images/common/icons/running.png')
        case EDITINGSTATE:
          return require('@/assets/images/common/icons/editing.png')
        case COMPLETESTATE:
          return require('@/assets/images/common/icons/complete.png')
        case INCOMESTATE:
          return require('@/assets/images/common/icons/income.png')
      }
    },
    setCurrent() {
      this.$nextTick(() =>
        this.$refs.sideTree.setCurrentKey(this.currentNodeKey)
      )
    },
    expandParents (node) {
      node.expanded = true
      if (node.parent) {
        this.expandParents(node.parent)
      }
    }
  },
  watch: {
    currentNodeKey(cur, old) {
      this.setCurrent()
      if (!old) {
        this.$nextTick(() => {
          const selected = this.$refs.sideTree.getCurrentNode()
          if (this.$refs.sideTree.getNode(selected) && this.$refs.sideTree.getNode(selected).parent) {
            this.expandParents(this.$refs.sideTree.getNode(selected).parent)
          }
        })
      }
    },
    data() {
      this.setCurrent()
    }
  }
}
</script>

<style scoped lang="scss">
.treeWrap {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.treeNode {
  /* position: relative; */
  width: 100%;
  height: 100%;
  padding-top: 2px;
  padding-right: 10px;
  display: flex;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  img {
    padding-right: 4px;
  }
  .label {
    width: 130px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.disabled {
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  /* background-color: #eee; */
  /* opacity: 0.5; */
  z-index: 10
}

::v-deep .el-tree-node__content {
  height: 36px;
  position: relative
}

::v-deep .el-tree-node__content > .el-tree-node__expand-icon {
  /* height: 36px; */
  z-index: 12;
  padding: 4px;
  display: inline-block;
}

::v-deep .el-tree-node.is-current > .el-tree-node__content {
  background-color: #d8fffe !important;
}
::v-deep .el-tree-node:focus > .el-tree-node__content {
  /* background-color: #d8fffe; */
  background-color: transparent;
}
</style>
