<template>
  <div class="el_table_wrapper">
    <div class="table_container">
      <el-table
        :data="tableData"
        highlight-current-row
        @current-change="rowRowHanlder"
        border
      >
        <el-table-column width="30">
          <template #default="{ $index: idx, row, column }">
            <el-radio v-model="selectedIdx" :label="row.index"></el-radio>
          </template>
        </el-table-column>
        <el-table-column
          v-for="col in tableConfig"
          v-bind="col.colConfig"
          :key="col.colConfig.property"
        >
          <template
            #default="{ $index: rowIdx, row, column }"
            v-if="col.actions != null"
          >
            <component
              v-for="action in col.actions"
              :key="action.id"
              :is="action.type"
              v-bind="action.typeProps"
              @click.native.prevent="
                rowAction({ rowIdx, row, column }, action.callback)
              "
            >
              {{ action.name }}
            </component>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      @size-change="sizeChangeHandler"
      @current-change="pageChangeHandler"
      :current-page.sync="pageInfo.curPage"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="20"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pageInfo.totalSize"
      :style="{ alignSelf: 'end' }"
    >
    </el-pagination>
  </div>
</template>
<script>
export default {
  props: {
    tableConfig: {
      type: Array,
      default: function () {
        return [
          {
            colConfig: {
              property: 'index',
              label: '序号',
              width: 120
            }
          },
          {
            colConfig: {
              property: 'code',
              label: '编码',
              width: 120
            }
          },
          {
            colConfig: {
              property: '',
              label: '操作'
            },
            actions: [
              {
                type: 'el-button',
                typeProps: {
                  type: 'text',
                  round: false
                },
                id: 'edit',
                name: '编辑',
                callback(idx, tableData) {
                  //this.$refs.editdialog.toggleOpen()
                }
              }
            ]
          }
        ]
      }
    },
    tableData: {
      type: Array,
      default: function () {
        return [
          {
            index: 1,
            code: 'DE01.00.10.001'
          },
          {
            index: 2,
            code: 'DE01.00.10.002'
          }
        ]
      }
    },
    pageInfo: {
      type: Object,
      default: function () {
        return {
          curPage: 2,
          pageSize: 40,
          totalSize: 400,
          totalPage: 10
        }
      }
    }
  },
  data() {
    return {
      selectedIdx: 0
    }
  },
  methods: {
    rowAction({ rowIdx, row, column }, callback) {
      callback(row.index, this.tableData)
    },
    rowRowHanlder(rowData) {
      console.log(rowData)
      this.selectedIdx = rowData.index
    },
    sizeChangeHandler(pageSize) {
      this.pageInfo.pageSize = pageSize
    },
    pageChangeHandler(currentPage) {
      this.pageInfo.curPage = currentPage
    },
    completeEditElem() {
      console.log('edit data elem')
    }
  }
}
</script>
<style lang="scss" scoped>
.el_table_wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  .table_container {
    flex-grow: 1;
    padding: 6px;
  }
}
</style>

<style lang="scss">
.el_table_wrapper {
  .table_container {
    .el-table {
      &.el-table--border .el-table__cell:first-child .cell {
        padding-left: 0;
      }
      .cell {
        .el-button {
          padding: 0;
        }
      }
    }
  }
}
</style>
