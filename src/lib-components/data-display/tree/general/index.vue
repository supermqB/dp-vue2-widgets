<template>
  <div class="tree-general">
    <el-tree
      ref="sideTree"
      v-bind="bind"
      class="tree-wrap"
      :node-key="nodeKey"
      :data="data"
      :current-node-key="currentNodeKey"
      :expand-on-click-node="expandOnClickNode"
      :default-expand-all="defaultExpandAll"
      :indent="indent"
      highlight-current
      @node-click="handleNodeClick"
      v-on="$listeners"
    >
      <div class="tree-node" slot-scope="{ node, data }">
        <div class="tree-node-content">
          <div class="content-left">
            <span
              v-if="isShowRedDot"
              :class="['blank', { 'red-circle': data.state }]"
            ></span>
            <span class="label">{{ data.label }}</span>
          </div>
          <div class="content-right" :style="{ width: rightWidth }">
            <span>{{ showNumber(data) }}</span>
            <component
              v-for="(btn, index) in data.btns"
              :key="index"
              :is="btn.type"
              v-bind="btn.config"
            >
              <span v-if="btn.name" @click.stop="btn.click(data, node)">{{
                btn.name
              }}</span>
              <slot v-else :name="btn.type" :data="data" :row="btn"></slot>
            </component>
            <slot :data="data" :node="node"></slot>
          </div>
        </div>
      </div>
    </el-tree>
  </div>
</template>

<script>
import { unitFmt } from '@/utils/format'
import { noEmptyArray, getNodeKey } from '@/utils/lang'

export default {
  name: 'GeneralTree',
  props: {
    /**
     * id-String:唯一标识
     * label-String:名称
     * children-Array:子数组集合
     * state-Boolean:是否显示红点（非必填）
     * number-String/Number:右侧数字（非必填）
     * btns-Array:按钮或图标集合
     */
    data: {
      type: Array,
      default: () => []
    },
    // 其他传参
    bind: {
      type: Object,
      default: () => {}
    },
    // 每个树节点用来作为唯一标识的属性
    nodeKey: {
      type: String,
      default: 'id'
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
    // 是否显示红点异常
    isShowRedDot: {
      type: Boolean,
      default: true
    },
    // 是否进行数字转换
    isConvertUnits: {
      type: Boolean,
      default: true
    },
    // 右侧宽度
    rightWidth: {
      type: String,
      default: 'auto'
    },
    // 是否点击父级叶节点触发其他事件
    isParentLeaf: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    // 获取默认当前选中的节点
    currentNodeKey() {
      return getNodeKey(this.data, this.isParentLeaf, this.nodeKey)
    }
  },
  watch: {
    data: {
      handler() {
        this.handleNodeClick()
      },
      immediate: true
    }
  },
  methods: {
    // 处理数字
    showNumber({ number }) {
      if (number === undefined || number === null) return ''
      return this.isConvertUnits ? unitFmt(number) : number
    },
    handleNodeClick() {
      setTimeout(() => {
        if (this.$refs.sideTree) {
          const node = this.$refs.sideTree.getCurrentNode()
          if (!node || (noEmptyArray(node.children) && !this.isParentLeaf)) {
            return false
          }
          this.$emit('onNodeSelected', { ...node })
        }
      }, 100)
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
        .blank {
          width: 5px;
          height: 5px;
          border-radius: 5px;
          margin-right: 3px;
          &.red-circle {
            background-color: #f56c6c;
          }
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
        display: flex;
        align-items: center;
        justify-content: flex-end;
        overflow: hidden;
        i,
        img,
        .el-button,
        .el-link {
          margin-left: 10px;
        }
      }
    }
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
