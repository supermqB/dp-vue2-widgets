<template>
  <div class="mdmWrap">
    <Header
      title="主索引目录"
      :action-types="[actionType]"
      @run="enableCtlgHandler"
    ></Header>
    <div class="tree_header_row">
      <div>索引类别</div>
      <div class="cell2">数据源</div>
    </div>
    <Tree
      :data="mdmListData"
      :currentNodeKey="currentNodeKey"
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
      currentNodeKey: ''
    }
  },
  methods: {
    onSelected(node) {
      this.setSelectedMDM(node)
      this.loadMDMModuleDesc(this.selectedMDM.id)
    },
    enableCtlgHandler() {
      this.enableMDMModule()
    },
    ...mapMutations(['setSelectedMDM']),
    ...mapActions(['loadMDMModules', 'loadMDMModuleDesc', 'enableMDMModule'])
  },
  computed: {
    ...mapState({
      selectedMDM: state => state.selectedMDM,
      mdmList: state => state.mdmList
    }),
    actionType() {
      return this.selectedMDM.state == INCOMESTATE ? 'run' : 'run_disable'
    },
    mdmListData() {
      return [
        {
          id: '1',
          label: '',
          children: this.mdmList
        }
      ]
    }
  },
  mounted() {
    this.loadMDMModules()
  },
  watch: {
    mdmList(list) {
      const selectedMDMType = this.selectedMDM.type
      let selectedMDM = list.find(mdm => mdm.type == (selectedMDMType || 'reg'))
      /* update selectedMDM data only for default condition. */
      !selectedMDMType && this.onSelected(selectedMDM)
      this.$nextTick(() => {
        this.currentNodeKey = selectedMDM.id
      })
    }
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
