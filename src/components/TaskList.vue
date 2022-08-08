<template>
  <div class="task">
    <div class="task-header">任务列表</div>
    <template>
      <el-input
        placeholder="机构系统/值域类型"
        v-model="searchInput"
        class="task-input"
      >
        <el-select
          v-model="status"
          slot="prepend"
          multiple
          clearable
          class="task-input-select"
          placeholder="筛选"
          size="55px"
          suffix-icon="el-icon-caret-bottom"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
            <el-checkbox v-model="item.value">{{ item.label }}</el-checkbox>
          </el-option>
          <div class="task-input-do">
            <el-button size="mini">重置</el-button>
            <el-button type="primary" size="mini">确定</el-button>
          </div>
        </el-select>

        <el-button slot="append" icon="el-icon-search"> </el-button>
      </el-input>
    </template>
    <div v-if="type === 'tree'" class="task-center">
      <el-menu
        :default-openeds="opends"
        class="task-menu"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-submenu
          v-for="(subItem, index) in mainData"
          :key="subItem.index"
          :index="index.toString()"
        >
          <template slot="title">
            <span>{{ subItem.title }}</span>
          </template>
          <el-menu-item
            v-for="(item, subIndex) in subItem.secData"
            :key="index + '-' + subIndex"
            :index="index + '-' + subIndex"
          >
            <div class="task-menu-inline">
              <div class="task-menu-value">
                {{ item.value }}
              </div>
              <div
                class="task-menu-status"
                v-bind:class="{
                  backStyle: item.type == 1 ? true : false,
                  doneStyle: item.type == 2 ? true : false,
                  autoStyle: item.type == 3 ? true : false,
                  handStyle: item.type == 4 ? true : false
                }"
              >
                {{ item.status }}
              </div>
            </div>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <el-row class="task-footer">
      <el-col :span="8" class="task-footer-left">总共: 159</el-col>
      <el-col :span="8" class="task-footer-center">已完成: 89</el-col>
      <el-col :span="8" class="task-footer-right">未完成: 80</el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'TaskList',
  data() {
    return {
      opends: ['0'],
      searchInput: '',
      options: [
        {
          value: 1,
          label: '已完成'
        },
        {
          value: 2,
          label: '人工分配'
        },
        {
          value: 3,
          label: '自动分配'
        }
      ],
      mainData: [
        {
          index: 1,
          secData: [
            {
              index: '1 - 1',
              value: '性别',
              type: 1, //1:被撤回,2:已完成,3,自动分配 4.人工分配
              status: '被撤回'
            },
            {
              index: '1 - 2',
              value: '婚姻',
              type: 3, //1:被撤回,2:已完成,3,自动分配 4.人工分配
              status: '自动分配'
            },
            {
              index: '1 - 3',
              value: '标本',
              type: 4, //1:被撤回,2:已完成,3,自动分配 4.人工分配
              status: '人工分配'
            }
          ],
          title: '瑞金HIS'
        },
        {
          index: 2,
          secData: [
            {
              index: '2 - 1',
              value: '性别',
              type: 1, //1:被撤回,2:已完成,3,自动分配 4.人工分配
              status: '被撤回'
            },
            {
              index: '2 - 2',
              value: '婚姻',
              type: 3, //1:被撤回,2:已完成,3,自动分配 4.人工分配
              status: '自动分配'
            },
            {
              index: '2 - 3',
              value: '标本',
              type: 4, //1:被撤回,2:已完成,3,自动分配 4.人工分配
              status: '人工分配'
            }
          ],
          title: '瑞金HIS'
        }
      ],
      status: [], //筛选状态
      type: 'tree', //type类型:tree, table
      doneActive: false,
      autoActive: false,
      handActive: true,
      backActive: false
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="scss" scoped>
.task {
  position: relative;
  height: 100%;

  &-header {
    height: 40px;
    padding-left: 6px;
    line-height: 40px;
    font-family: PingFangSC-Medium;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.65);
  }

  &-input {
    border-radius: 0;
    height: 28px;
    &-do {
      display: flex;
      justify-content: right;
      margin-right: 6px;
    }

    &-select {
      width: 70px;
    }
  }

  &-menu {
    &-inline {
      display: flex;
      justify-content: space-between;
      height: 28px;
      line-height: 28px;
      font-family: PingFangSC-Regular;
    }
    &-value {
      font-size: 13px;
      // color: #606266;
      width: 104px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      -o-text-overflow: ellipsis;
    }
    &-status {
      width: 52px;
      height: 16px;
      line-height: 16px;
      margin: auto 0;
      border-radius: 10px;
      font-size: 10px;
      color: #1989fa;
      background: rgba(25, 137, 250, 0.1);
      text-align: center;
    }
  }

  &-center {
    height: calc(100% - 103px);
    overflow-y: auto;
    margin-top: 6px;
  }

  &-footer {
    font-size: 12px;
    color: rgba(0, 0, 0, 0.65);
    width: 100%;
    height: 29px;
    line-height: 29px;
    background: #ffffff;
    border: 1px solid #e5e5e5;
    position: absolute;
    left: 0;
    bottom: 0;

    &-left {
      text-align: left;
      padding-left: 6px;
    }
    &-center {
      text-align: center;
    }
    &-right {
      text-align: right;
      padding-right: 6px;
    }
  }

  // 不同筛选状态样式
  .backStyle {
    color: #fa5555;
    background: rgba(250, 85, 85, 0.1);
  }
  .doneStyle {
    color: #67c23a;
    background: rgba(103, 194, 58, 0.1);
  }
  .autoStyle {
    color: #1989fa;
    background: rgba(25, 137, 250, 0.1);
  }
  .handStyle {
    color: #eb9e05;
    background: rgba(235, 158, 5, 0.1);
  }
}
::v-deep .el-submenu .el-menu-item,
::v-deep .el-submenu__title {
  height: 28px;
  line-height: 28px;
  color: #606266;
  font-size: 13px;
}
::v-deep .el-menu-item {
  padding-right: 16px !important;
}
::deep .el-input-group__append {
  border-left: 0;
  border-right: 0;
}
</style>
