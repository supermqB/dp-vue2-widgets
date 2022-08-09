<template>
  <div class="mdmWrap">
    <Header title="主索引目录" :action-types="['run']"></Header>
    <div class="tree_header_row">
      <div>索引类别</div>
      <div class="cell2">数据量</div>
    </div>
    <Tree :data="catalogList" class="tree"></Tree>
  </div>
</template>

<script>
import Header from '@/components/header/Catalog.vue'
import Bottom from '@/components/bottom/Catalog.vue'
import Tree from '@/components/SideTree.vue'

import { EDITINGSTATE } from '@/utils/const'
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
          id: '1-1',
          label: '药品（中成药/西药）',
          number: 2398
        },
        {
          id: '1-2',
          label: '行政区划',
          number: 23,
          state: EDITINGSTATE
        },
        {
          id: '1-3',
          label: '检查项目',
          number: 298
        }
      ]
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
  .tree {
    flex-grow: 1;
    overflow: auto;
  }
}
</style>
