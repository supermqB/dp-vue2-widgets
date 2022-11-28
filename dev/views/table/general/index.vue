<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题22" />
        <div class="tree-box">
          <dp-general-tree
            :data="treeData"
            :defaultExpandAll="defaultExpandAll"
            :currentNodeKey="currentNodeKey"
            :isShowRedDot="isShowRedDot"
            :isConvertUnits="isConvertUnits"
            :rightWidth="rightWidth"
            @onNodeSelected="onNodeSelected"
          >
            <template v-slot="{ data, node }">
              <i :class="data.icon" @click.stop="handleClick(data, node)"></i>
            </template>
            <template #el-button="{ data, row }">
              <span @click.stop="handleButton(data, row)">{{ row.name }}</span>
            </template>
          </dp-general-tree>
        </div>
      </div>
    </template>
    <template #main>
      <dp-general-table
        :tableData="tableData"
        :tableConfig="tableConfig"
        :pageInfo="pageInfo"
        @page-changed="pageChange"
      >
        <el-table-column label="爱好" prop="like">
          <template v-slot="{ row }">
            <el-tag
              v-for="(item, index) in row.like"
              :key="index"
              type="warning"
              >{{ item }}</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="地址" prop="address"> </el-table-column>
      </dp-general-table>
    </template>
  </dp-layout-container>
</template>

<script>
export default {
  data() {
    return {
      defaultExpandAll: true,
      isShowRedDot: true,
      isConvertUnits: true,
      rightWidth: '80px',
      treeData: [
        {
          id: '1',
          label: '一级',
          children: [
            {
              id: '1-1',
              label:
                '我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1',
              children: [
                {
                  id: '1-1-1',
                  label: '我是一级1-1-1',
                  icon: 'el-icon-delete'
                }
              ],
              state: true,
              icon: 'el-icon-circle-plus-outline'
            },
            {
              id: '1-2',
              label: '我是一级1-2',
              children: [],
              state: false,
              btns: [
                {
                  type: 'el-link',
                  name: '编辑',
                  config: {
                    type: 'primary'
                  },
                  click: this.handleIcon
                },
                {
                  type: 'el-link',
                  name: '删除',
                  config: {
                    type: 'danger'
                  },
                  click: this.handleIcon
                }
              ]
            },
            {
              id: '1-3',
              label: '我是一级1-3',
              children: [],
              state: true,
              number: '200+'
            }
          ],
          state: true,
          number: 22300
        },
        {
          id: '2',
          label: '二级',
          children: [],
          children: [
            {
              id: '2-1',
              label: '我是二级1-1',
              state: true,
              btns: [
                {
                  type: 'el-button',
                  name: '按钮',
                  config: {
                    size: 'mini'
                  },
                  click: this.handleIcon
                }
              ]
            }
          ]
        }
      ],
      currentNodeKey: '1',
      tableData: [
        {
          date: '2016-05-02',
          name: '王大虎',
          like: ['篮球', '足球', '羽毛球'],
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-04',
          name: '王小虎',
          like: ['音乐', '看电影'],
          address: '上海市普陀区金沙江路 1517 弄'
        }
      ],
      tableConfig: [
        {
          colConfig: {
            label: '日期',
            prop: 'date'
          }
        },
        {
          colConfig: {
            label: '姓名',
            prop: 'name'
          },
          actions: [
            {
              id: 'name',
              type: 'el-button',
              typeProps: {
                type: 'text',
                size: 'small'
              },
              name: row => {
                return row.name
              }
            }
          ]
        }
      ],
      pageInfo: {
        curPage: 1,
        pageSize: 10,
        totalSize: 2
      }
    }
  },
  methods: {
    // 页码或每页条数改变
    pageChange(val) {
      console.log(val, '此处可调接口')
    },
    handleClick(data, node) {
      console.log(data, '点击', node)
    },
    handleIcon(data, node) {
      console.log(data, '点击图标', node)
    },
    handleButton(data, row) {
      console.log(data, '点击按钮', row)
    },
    onNodeSelected(node) {
      console.log('点击当前行', node)
    }
  }
}
</script>

<style lang="scss" scoped>
.section {
  height: 100%;
  display: flex;
  flex-direction: column;
  .tree-box {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  }
}
</style>
