<template>
  <Dialog
    :title="`导出${title}`"
    @dialog-complete="completeHanlder"
    @dialog-closed="closed"
    ref="outputDialog"
    class="outputDialog"
    :closeAfterConfirm="false"
  >
    <div class="wrapper">
      <p class="label">选择导出{{ title }}</p>
      <el-input
        v-model="search"
        clearable:true
        @input="filter"
        placeholder="请搜索"
        suffix-icon="el-icon-search"
      ></el-input>
      <el-tree
        ref="outputTree"
        :props="props"
        :data="outputData"
        :default-expanded-keys="['all']"
        :filter-node-method="filterNode"
        :load="loadNode"
        :lazy="lazy"
        show-checkbox
        node-key="id"
      >
      </el-tree>
    </div>
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog.vue'
export default {
  components: {
    Dialog
  },
  computed: {
    outputData() {
      return [
        {
          id: 'all',
          label: '全部',
          children: this.data
        }
      ]
    }
  },
  props: {
    title: {
      type: String,
      default: '值域'
    },
    data: {
      type: Array,
      default: () => []
    },
    lazy: {
      type: Boolean,
      default: false
    },
    lazyFunc: {
      type: Function,
      default: null
    }
  },
  data() {
    return {
      search: '',
      props: {
        isLeaf: 'leaf',
        label: 'label',
        children: 'children'
        // canSelectd, parent
      }
    }
  },
  methods: {
    toggleOpen() {
      this.$refs.outputDialog.toggleOpen()
      if (this.$refs.outputTree) {
        this.$refs.outputTree.store._getAllNodes().forEach(node => {
          if (node.data.id !== 'all') {
            node.expanded = false
          }
        })
      }
    },
    closed() {
      this.$refs.outputTree.setCheckedKeys([])
    },
    completeHanlder() {
      if (!this.lazy) {
        const res = this.$refs.outputTree.getCheckedKeys(true)
        this.$emit('output-file', res)
      } else {
        const list = this.$refs.outputTree
          .getCheckedNodes(false)
          .filter(item => item.canSelectd)
        const parentList = [
          ...new Set(list.filter(item => item.parent).map(item => item.parent))
        ]
        const res = list
          .filter(item => !parentList.some(id => id === item.id))
          .map(item => item.id)
        this.$emit('output-file', res)
      }
    },
    filterNode(value, data) {
      if (!value) return true
      return data.label.indexOf(value) !== -1
    },
    filter(val) {
      this.$refs.outputTree.filter(val)
    },
    async loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([
          {
            id: 'all',
            label: '全部'
          }
        ])
      }
      if (node.level === 1) {
        return resolve(this.data)
      }
      if (node.data.children) {
        const res = node.data.children.map(item => {
          if (!item.children)
            return Object.assign({}, item, { canSelectd: true })
          return item
        })
        return resolve(res)
      }
      const res = await this.lazyFunc(node.data.id)
      const list = res.map(item => {
        return Object.assign({}, item, {
          canSelectd: true,
          parent: node.data.id
        })
      })
      return resolve(list)
    }
  }
}
</script>

<style lang="scss" scoped>
::v-deep .el-dialog {
  width: 600px;
}
.wrapper {
  max-height: 600px;
  display: flex;
  flex-direction: column;
  border: 1px solid #dcdfe6;
  .label {
    height: 36px;
    padding-left: 12px;
    background-color: #f5f7fa;
    line-height: 36px;
    font-size: 14px;
    color: #303133;
  }
  .el-input {
    margin-top: 10px;
    margin-left: 10px;
    width: calc(50% - 20px);
  }
  .el-tree {
    margin: 10px;
    flex: 1;
    overflow: auto;
  }
}
</style>
