<template>
  <div class="wrap">
    <div class="header">
      <h3>任务列表</h3>
      <el-button type="primary">完成</el-button>
    </div>
    <div class="search">
      <el-popover placement="right-start" width="200" trigger="click">
        <el-tree
          show-checkbox
          ref="filterTree"
          :data="treeSelectionData"
          @check-change="checkedFilterHandler"
        >
        </el-tree>
        <el-button type="text" slot="reference"> 筛选 </el-button>
      </el-popover>
      <span>搜索</span>
      <el-input suffix-icon="el-icon-search"></el-input>
    </div>
    <div class="list">
      <Table
        :tableData="tableData"
        :tableConfig="tableHeaderConfig"
        :multipleSelect="true"
      ></Table>
    </div>
  </div>
</template>

<script>
import Table from '@/components/GeneralTable.vue'

export default {
  components: {
    Table
  },
  props: {
    tableHeaderConfig: {
      type: Array,
      default: () => {
        return [
          {
            colConfig: {
              property: 'src',
              label: '来源',
              minWidth: 50
            }
          },
          {
            colConfig: {
              property: 'name',
              label: '名称',
              minWidth: 55
            }
          },
          {
            colConfig: {
              property: 'state',
              label: '状态',
              minWidth: 60
            }
          }
        ]
      }
    },
    tableData: {
      type: Array,
      default: () => {
        return [
          {
            src: '王俊',
            name: '阿司匹林',
            state: '待完成'
          },
          {
            src: '王俊',
            name: '药物A',
            state: '待完成'
          },
          {
            src: '丁思丝',
            name: '药物A',
            state: '待完成'
          }
        ]
      }
    },
    treeSelectionData: {
      type: Array,
      default: () => {
        return []/* [
          {
            id: '1',
            label: '全选',
            children: [
              {
                id: '2',
                label: '来源',
                children: [
                  {
                    id: 4,
                    label: '王俊'
                  },
                  {
                    id: 5,
                    label: '丁丝丝'
                  }
                ]
              },
              {
                id: '3',
                label: '名称',
                children: [
                  {
                    id: 6,
                    label: '药品疑似'
                  },
                  {
                    id: 7,
                    label: '地区疑似'
                  }
                ]
              }
            ]
          } 
        ]*/
      }
    }
  },
  methods: {
    checkedFilterHandler() {
      let checkedKeys = this.$refs.filterTree.getCheckedKeys()
      this.$emit('checked-filter-keys', checkedKeys)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  .header {
    padding: 5px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #e5e5e5;
    h3 {
      font-size: 15px;
      font-weight: normal;
    }
    .buttons {
      display: flex;
      justify-content: end;
      align-items: center;
      font-size: 15px;
    }
  }
  .search {
    height: 41px;
    padding: 5px 5px 5px 0;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
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
</style>
