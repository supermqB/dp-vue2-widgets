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
        @input="filter"
        placeholder="请搜索"
        suffix-icon="el-icon-search"></el-input>
      <el-tree
        ref="outputTree"
        :data="outputData"
        :default-expanded-keys="['all']"
        :filter-node-method="filterNode"
        show-checkbox
        node-key="id">
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
      }
    },
    data() {
      return {
        search: ''
      }
    },
    methods: {
      toggleOpen() {
        this.$refs.outputDialog.toggleOpen()
      },
      closed() {
        this.$refs.outputTree.setCheckedKeys([])
      },
      completeHanlder() {
        const res = this.$refs.outputTree.getCheckedKeys(true)
        this.$emit('output-file', res)
      },
      filterNode(value, data) {
        if (!value) return true;
        return data.label.indexOf(value) !== -1;
      },
      filter(val) {
        this.$refs.outputTree.filter(val)
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
  border: 1px solid #DCDFE6;
  .label {
    height: 36px;
    padding-left: 12px;
    background-color: #F5F7FA;
    line-height: 36px;
    font-size: 14px;
    color: #303133
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