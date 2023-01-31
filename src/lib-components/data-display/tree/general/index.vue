<template>
  <el-tree
    ref="dpTree"
    v-bind="bind"
    :class="['tree-wrap', { 'tree-red-dot': showState, 'tree-list': isList }]"
    :node-key="nodeKey"
    :data="treeList"
    :current-node-key="curNodeKey"
    :expand-on-click-node="expandOnClickNode"
    :default-expand-all="defaultExpandAll"
    :default-expanded-keys="expandKeys"
    :indent="indent"
    highlight-current
    :filter-node-method="filterNodeMethod"
    @node-click="handleNodeClick"
    v-on="$listeners"
  >
    <div class="tree-node" slot-scope="{ node, data }">
      <div class="content-left">
        <span
          v-if="showState"
          :class="['blank', { 'red-circle': data.state }]"
        ></span>
        <span class="label">{{ data.label }}</span>
      </div>
      <div class="content-right" :style="{ width: slotWidth }">
        <span v-if="data.number !== undefined && data.number !== null">{{
          numFormat(data.number)
        }}</span>
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
  </el-tree>
</template>

<script>
import { unitFmt } from '@/utils/format'

/**
 * 获取可选中的第一个节点
 * @param {*} listData 树形数据
 * @param {*} parentKeys 记录当前节点所有祖辈节点的值 (用于默认展开)
 * @param {*} allowSelectNonleaf 是否允许选中非叶节点(触发选中事件)
 * @param {*} keyId 唯一标识属性，默认id
 * @returns
 */
const getDefaultNode = (
  listData,
  parentKeys,
  allowSelectNonleaf = false,
  keyId = 'id'
) => {
  let res = ''
  // let _parentKeys = [...parentKeys]
  listData.forEach(item => {
    if (res) {
      return
    }
    if (allowSelectNonleaf) {
      res = item[keyId]
    } else {
      if (Array.isArray(item.children)) {
        let _parentKeys
        ;({ res, parentKeys: _parentKeys } = getDefaultNode(item.children, [
          ...parentKeys,
          item[keyId]
        ]))
        if (res) {
          parentKeys = _parentKeys
        }
      } else {
        res = item[keyId]
      }
    }
  })
  return { res, parentKeys }
}

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
      default: 14
    },
    // 是否显示状态标识
    showState: {
      type: Boolean,
      default: true
    },
    // 是否进行数字转换
    numTransform: {
      type: Boolean,
      default: true
    },
    // 数字转换使用的方法
    numTransformFunc: {
      type: Function,
      default: unitFmt
    },
    // 右侧插槽宽度
    slotWidth: {
      type: String,
      default: 'auto'
    },
    // 是否允许选中非叶节点
    allowSelectNonleaf: {
      type: Boolean,
      default: false
    },
    // 当前选中的节点
    currentNodeKey: {
      type: [String, Number]
    },
    // 模糊搜索传值
    searchText: {
      type: String,
      default: ''
    },
    // 是否是列表
    isList: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      curNodeKey: '', // 当前选中节点
      expandKeys: [] // 默认展开节点
    }
  },
  computed: {
    // 根据 this.data 构建组件需要的 数据结构
    treeList() {
      const buildTree = tree => {
        if (!tree) return null

        return tree.map(node => {
          const children = buildTree(node.children)
          return Object.assign(
            {},
            (node => {
              const { id, state, type } = node
              const ids = id.split('-')
              return Object.assign({}, node, {
                type: type ? type : ids[0],
                state: !!(state * 1)
              })
            })(node),
            { children }
          )
        })
      }

      return buildTree(this.data)
    }
  },
  watch: {
    searchText(val) {
      this.filter(val)
    },
    data: {
      handler(val) {
        if (!this.currentNodeKey) {
          // 没有设置默认node(currentNodeKey)，自动获取第一个可选择的节点
          let res = '',
            parentKeys = []
          ;({ res, parentKeys } = getDefaultNode(
            val,
            [],
            this.allowSelectNonleaf,
            this.nodeKey
          ))
          this.curNodeKey = res
          // console.log(parentKeys)
          this.expandKeys = parentKeys
        } else {
          this.curNodeKey = this.currentNodeKey
        }

        this.$nextTick(() => {
          this.$refs.dpTree.setCurrentKey(this.curNodeKey)
          if (this.curNodeKey != '') this.handleNodeClick()
        })
      },
      deep: true
    }
  },
  methods: {
    // 数字格式化
    numFormat(number) {
      return this.numTransform ? this.numTransformFunc(number) : number
    },
    // 处理节点的点击事件
    handleNodeClick() {
      setTimeout(() => {
        if (this.$refs.dpTree) {
          const getTreeParentNodes = (tree, key) => {
            if (!tree) return []
            for (let node of tree) {
              if (node.id === key) {
                return [node]
              } else {
                const res = getTreeParentNodes(node.children, key)
                if (res && res.length) return [node, ...res]
              }
            }
            return []
          }

          const node = this.$refs.dpTree.getCurrentNode()
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
          if (Array.isArray(node.children) && !this.allowSelectNonleaf) {
            this.$refs.dpTree.setCurrentKey(this.curNodeKey)
            return false
          }
          this.curNodeKey = node[this.nodeKey]
          this.$emit('onNodeSelected', { ...node })
        }
      })
    },
    filter(val) {
      if (this.$refs.dpTree) this.$refs.dpTree.filter(val)
    },
    // 对树节点进行筛选时执行的方法，返回true显示，返回false隐藏
    filterNodeMethod(value, data) {
      if (!value) return true
      return data.label.indexOf(value) > -1
    }
  }
}
</script>

<style scoped lang="scss">
.tree-wrap {
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  .tree-node {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    font-size: 13px;
    padding-right: 6px;
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
        margin-right: 1px;
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
  &.tree-list {
    ::v-deep .el-tree-node__expand-icon {
      display: none;
    }
    .tree-node {
      padding: 0 12px;
    }
    &.tree-red-dot {
      .tree-node {
        padding: 0 6px;
      }
    }
  }
  &.tree-red-dot {
    ::v-deep .el-tree-node__expand-icon {
      margin: 0 2px 0 6px;
    }
  }
}

::v-deep .el-tree-node {
  .el-tree-node__content {
    height: 36px;
    position: relative;
  }
  .el-tree-node__expand-icon {
    padding: 0;
    margin: 0 4px 0 6px;
  }
  &.is-current > .el-tree-node__content {
    background-color: #f2f6ff !important;
    color: #303133;
    font-weight: bold;
  }
  &:focus > .el-tree-node__content {
    background-color: transparent;
  }
}
</style>
