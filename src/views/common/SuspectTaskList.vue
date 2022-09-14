<template>
  <div class="wrap">
    <div class="header">
      <h3>
        <span>任务列表</span>
        <i
          @click="() => (visible = !visible)"
          :class="[visible ? 'el-icon-arrow-down' : 'el-icon-arrow-up']"
        ></i>
      </h3>
      <div
        :class="['todo', { disabled: !hasItem2Do }]"
        @click="completeHandler"
      ></div>
    </div>
    <CollapseTransition :visible="visible">
      <div class="search">
        <el-popover placement="right-start" width="200" trigger="click">
          <el-tree
            show-checkbox
            ref="filterTree"
            :data="treeSelectionData"
            node-key="id"
            @check-change="checkedFilterHandler"
          >
          </el-tree>
          <el-button type="text" slot="reference"> 筛选 </el-button>
        </el-popover>
        <span>搜索</span>
        <el-input
          v-model="searchKey"
          @change="searchKeyChanged"
          suffix-icon="el-icon-search"
        ></el-input>
      </div>
      <div class="list">
        <Table
          :tableData="tableData"
          :tableConfig="tableHeaderConfig"
          multiple-select
          hide-pagination
          @selection-changed="selectionChgHandler"
        ></Table>
      </div>
    </CollapseTransition>
  </div>
</template>

<script>
import Table from '@/components/GeneralTable.vue'
import CollapseTransition from '@/components/transition/Collapse.vue'
export default {
  components: {
    Table,
    CollapseTransition
  },
  props: {
    tableHeaderConfig: {
      type: Array,
      default: () => {
        return [
          {
            colConfig: {
              property: 'source',
              label: '来源',
              minWidth: 40
            }
          },
          {
            colConfig: {
              property: 'name',
              label: '名称',
              minWidth: 40
            }
          },
          {
            colConfig: {
              property: 'state',
              label: '状态',
              minWidth: 40
            }
          }
        ]
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return []
      }
    },
    treeSelectionData: {
      type: Array,
      default: () => {
        return []
      }
    },
    hasItem2Do: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      visible: true,
      searchKey: ''
    }
  },
  methods: {
    checkedFilterHandler() {
      let checkedKeys = this.$refs.filterTree.getCheckedKeys()
      this.$emit('checked-filter-keys', checkedKeys)
    },
    selectionChgHandler(selectedItems) {
      this.$emit('selected-items-changed', selectedItems)
    },
    completeHandler() {
      this.hasItem2Do && this.$emit('complete-action')
    },
    searchKeyChanged(searchKey) {
      this.$emit('search-key-change', searchKey)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  .header {
    height: 36px;
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    /* border-bottom: 1px solid #e5e5e5; */
    h3 {
      font-size: 15px;
      font-weight: normal;
      i {
        padding: 6px;
        cursor: pointer;
      }
    }
    .todo {
      width: 16px;
      height: 16px;
      cursor: pointer;
      background-image: url('@/assets/images/common/icons/todo.png');
      &.disabled {
        background-image: url('@/assets/images/common/icons/todo_disable.png');
      }
    }
  }
  .search {
    height: 41px;
    padding: 5px 5px 5px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    .el-button {
      font-size: 15px;
    }
    span {
      display: inline-block;
      padding: 0 5px;
      width: 50px;
      font-size: 14px;
    }
  }
  .list {
    flex-grow: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
