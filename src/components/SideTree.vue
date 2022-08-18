<template>
  <div class="treeWrap">
    <el-tree
      ref="sideTree"
      node-key="id"
      :current-node-key="currentNodeKey"
      :filter-node-method="filterNodeMethod"
      :data="treeList"
      :expand-on-click-node="false"
      default-expand-all
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
      </div>
    </el-tree>
  </div>
</template>

<script>
import {
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
    handleNodeClick(node) {
      this.$emit('onClick', node)
    },
    filterNodeMethod(value, data, node) {
      this.$emit('onFilterNodeMethod', { value, data, node })
    },
    icon(state) {
      switch (state) {
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
    }
  },
  watch: {
    currentNodeKey() {
      this.setCurrent()
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
  position: relative;
  width: 100%;
  height: 28px;
  padding-top: 3px;
  padding-right: 10px;
  display: flex;
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
::v-deep .el-tree-node__content > .el-tree-node__expand-icon {
  padding: 4px;
}

::v-deep .el-tree-node.is-current > .el-tree-node__content {
  background-color: #d8fffe!important;
}
::v-deep .el-tree-node:focus > .el-tree-node__content {
  /* background-color: #d8fffe; */
  background-color: transparent;
}
</style>
