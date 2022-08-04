<template>
  <el-tree
    node-key="id"
    :current-node-key="currentNodeKey"
    :data="treeList"
    :expand-on-click-node="false"
    default-expand-all
    @node-click="handleNodeClick"
    :indent="11">
    <div 
      class="treeNode" 
      slot-scope="{ node, data }"
      @click="event => data.isTopCannotBeSelected ? event.stopPropagation() : null"
    >
      <p class="label">
        <img :src="icon(data.state)" />
        <span>{{ data.label }}</span>
      </p>
      <p class="number">{{ data.number }}</p>
    </div>
  </el-tree>
</template>

<script>
import { RUNNINGSTATE, EDITINGSTATE } from '@/utils/const'
export default {
  props: {
    data: {
      type: Array,
      default: () => [ // id, label, state, number
        {
          id: '1',
          label: '事件记录(0)',
          number: '数据源',
          state: RUNNINGSTATE,
          children: [
            {
              id: '1-1',
              label: 'E000-卫生事件记录',
              number: 1240,
              state: EDITINGSTATE
            }, {
              id: '1-2',
              label: 'E001-卫生事件日志',
              number: 1040,
              state: EDITINGSTATE
            }, {
              id: '1-3',
              label: 'E002-卫生事件入口hhhhhh',
              number: 600,
              state: RUNNINGSTATE
            }
          ]
        },{
          id: '2',
          label: '摘要信息(B)',
          state: RUNNINGSTATE,
          children: [
            {
              id: '2-1',
              label: 'E000-个人信息表',
              number: 2398,
              state: EDITINGSTATE
            }
          ]
        }
      ]
    },
    currentNodeKey: {
      type: String,
      default: ''
    },
    isTopCannotBeSelected: {
      type: Boolean,
      default: true
    },
  },
  computed: {
    treeList() {
      const res = this.data.map(item => {
        return Object.assign({}, item, { isTopCannotBeSelected : this.isTopCannotBeSelected })
      })
      return res
    }
  },
  methods: {
    handleNodeClick(node) {
      this.$emit('onClick', node)
    },
    icon(state) {
      switch(state) {
        case RUNNINGSTATE:
          return require("@/assets/images/common/icons/running.png")
        case EDITINGSTATE:
          return require("@/assets/images/common/icons/editing.png")
      }
    }
  }
}
</script>

<style scoped lang="scss">
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
    padding-right: 3px;
  }
  .label {
    width: 130px;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
  }
}
::v-deep .el-tree-node__content>.el-tree-node__expand-icon {
  padding: 4px
}

::v-deep .el-tree-node.is-current>.el-tree-node__content {
  background-color: #D8FFFE!important;
}
</style>