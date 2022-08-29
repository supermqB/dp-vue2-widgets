<template>
  <div class="grp_wrapper">
    <div class="title">文献分类</div>
    <div class="search_container">
      <el-input
        placeholder="请输入"
        suffix-icon="el-icon-search"
        :value="search"
        @input="setSearch"
      >
      </el-input>
    </div>
    <div class="grouptree">
      <el-tree
        :data="grouptree"
        :filter-node-method="filterTreeNode"
        node-key="id"
        :default-expanded-keys="['all']"
        ref="grouptree"
        show-checkbox
        @check-change="docTypeCtlgChanged"
      >
        <template #default="{ node, data }">
          <div class="ctlgRow">
            <span class="label" :title="data.label">{{ data.label }}</span
            ><span class="count">{{ data.count }}</span>
          </div></template
        >
      </el-tree>
    </div>
  </div>
</template>
<script>
const LABEL_NAME = 'label'

import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('docs/list')

export default {
  data() {
    return {}
  },
  computed: {
    ...mapState({ search: 'search', grouptree: 'docCtlg' })
  },
  watch: {
    search(val) {
      this.$refs.grouptree.filter(val)
    }
  },
  methods: {
    filterTreeNode(value, data) {
      if (!value) return true
      return data[LABEL_NAME].indexOf(value) !== -1
    },
    docTypeCtlgChanged() {
      let checkedKeys = this.$refs.grouptree.getCheckedKeys()
      this.setSelectedDocTypeCtlg(checkedKeys)
    },
    ...mapMutations(['setSearch', 'setSelectedDocTypeCtlg'])
  }
}
</script>
<style lang="scss" scoped>
::v-deep.grp_wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.65);
    padding: 6px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .search_container {
    height: 28px;
    padding: 6px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
  }
  .grouptree {
    flex-grow: 1;
    .el-tree-node__content {
      height: 36px;
    }
    .el-tree--highlight-current
      .el-tree-node.is-current
      > .el-tree-node__content {
      background-color: #d8fffe;
    }
    .ctlgRow {
      font-size: 13px;
      .label {
        width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: inline-block;
        margin-top: 2px;
      }
      .count {
        position: absolute;
        right: 6px;
        margin-top: 2px;
      }
    }
  }
}
</style>
