<template>
  <div class="mdmWrap">
    <Header title="主索引目录" :action-types="['run']"></Header>
    <div class="tree_header_row">
      <div>索引类别</div>
      <div class="cell2">数据量</div>
    </div>
    <Tree
      :data="catalogList"
      currentNodeKey="1-1"
      class="tree"
      @onClick="onSelected"
    ></Tree>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapState as globalMapState } from 'vuex'
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('mdm')
import Header from '@/components/header/Catalog.vue'
import Bottom from '@/components/bottom/Catalog.vue'
import Tree from '@/components/SideTree.vue'

import { INCOMESTATE, COMPLETESTATE } from '@/utils/const'
export default {
  components: {
    Header,
    Tree,
    Bottom
  },
  data() {
    return {
      catalogList: [
        {
          id: '1',
          label: '',
          children: [
            {
              id: '1-1',
              label: '药品（中成药/西药）',
              name: 'mdm_data_drug',
              number: 2398,
              state: INCOMESTATE
            },
            {
              id: '1-2',
              label: '行政区划',
              number: 23,
              name: 'mdm_data_region',
              state: COMPLETESTATE
            },
            {
              id: '1-3',
              label: '耗材',
              name: 'mdm_data_mat',
              number: 298,
              state: INCOMESTATE
            }
          ]
        }
      ]
    }
  },
  methods: {
    onSelected(node) {
      this.setSelectedMDM(node)
    },
    ...mapMutations(['setSelectedMDM'])
  },
  mounted() {
    this.onSelected(this.catalogList[0].children[0])
  }
}
</script>

<style scoped lang="scss">
.mdmWrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  .tree_header_row {
    height: 36px;
    line-height: 36px;
    font-size: 13px;
    border-bottom: 1px solid #e5e5e5;
    display: flex;
    justify-content: space-between;
    & > div {
      padding-left: 6px;
    }
    .cell2 {
      width: 51px;
      border-left: 1px solid #e5e5e5;
      height: 18px;
      line-height: 18px;
      align-self: center;
    }
  }
  ::v-deep.tree {
    flex-grow: 1;
    overflow: auto;
    & > .el-tree > .el-tree-node > .el-tree-node__content {
      display: none;
    }
    .el-tree-node__content {
      height: 36px;
      padding-left: 0px !important;
      .el-tree-node__expand-icon {
        display: none;
      }
      .treeNode {
        .label {
          padding-left: 10px;
        }
      }
    }
  }
}
</style>
