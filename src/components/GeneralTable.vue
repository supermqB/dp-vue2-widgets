<template>
  <div class="el_table_wrapper">
    <div class="table_container">
      <el-table
        :data="tableData"
        height="100%"
        width="100%"
        highlight-current-row
        @current-change="rowChangeHandler"
        @selection-change="selChgHandler"
        border
        stripe
        ref="el_table"
      >
        <el-table-column type="selection" width="30" v-if="multipleSelect">
        </el-table-column>
        <el-table-column width="30" v-else>
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
          <template v-else #default="{ $index: rowIdx, row, column }">
            <!-- <el-tooltip :content="`${row[column.property]}`" placement="top"> -->
            <div
              style="
                text-overflow: ellipsis;
                overflow: hidden;
                word-break: keep-all;
                white-space: pre;
              "
              :title="formatCell(row[column.property], col.formatter)"
            >{{ formatCell(row[column.property], col.formatter) }}</div>
            <!-- </el-tooltip> -->
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-pagination
      v-if="pageInfo != null"
      @size-change="sizeChangeHandler"
      @current-change="pageChangeHandler"
      :current-page.sync="pageInfo.curPage"
      :page-sizes="[5, 10, 20, 50]"
      :page-size="pageInfo.pageSize"
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
          /*  {
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
          } */
        ]
      }
    },
    tableData: {
      type: Array,
      default: function () {
        return [
          /*  {
            index: 1,
            code: 'DE01.00.10.001'
          },
          {
            index: 2,
            code: 'DE01.00.10.002'
          } */
        ]
      }
    },
    pageInfo: {
      type: Object
      /* default: function () {
        return {
          curPage: 2,
          pageSize: 40,
          totalSize: 400,
          totalPage: 10
        }
      } */
    },
    multipleSelect: {
      type: Boolean,
      default: () => {
        return false
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
    rowChangeHandler(rowData) {
      if (rowData == null) {
        console.log('no item is selected...')
        return
      }
      this.selectedIdx = rowData.index
      this.$emit('row-changed', rowData)
    },
    selChgHandler(selection) {
      this.$emit('selection-changed', selection)
    },
    sizeChangeHandler(pageSize) {
      this.pageInfo.pageSize = pageSize
      this.$emit('page-changed', { pageSize, curPage: 1 })
    },
    pageChangeHandler(currentPage) {
      this.pageInfo.curPage = currentPage
      this.$emit('page-changed', { curPage: currentPage })
    },
    setCurrentRow(row) {
      this.$refs.el_table.setCurrentRow(row)
    },
    formatCell(val, formatter) {
      return formatter ? formatter(val) : val
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
    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
.el_table_wrapper {
  .table_container {
    height: 300px; /*table default height*/
    overflow: auto;
    .el-table {
        font-size: 13px;
      &.el-table--border .el-table__cell:first-child .cell {
        padding-left: 0;
      }
      .el-table_1_column_1 {
        .el-radio__label {
          display: none;
        }
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
