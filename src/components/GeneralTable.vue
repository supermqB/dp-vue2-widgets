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
        <el-table-column
          type="selection"
          width="30"
          fixed
          v-if="multipleSelect && isShowSelection"
        >
        </el-table-column>
        <el-table-column width="30" fixed v-else-if="isShowSelection">
          <template #default="{ row, $index }">
            <el-radio
              v-model="selectedIdx"
              :label="row.index"
              v-if="isShowRadio"
            ></el-radio>
            <span v-else>{{ $index + 1 }}</span>
          </template>
        </el-table-column>
        <el-table-column
          v-for="col in tableConfig"
          v-bind="col.colConfig"
          :key="col.colConfig.property"
          show-overflow-tooltip
        >
          <template
            #default="{ $index: rowIdx, row, column }"
            v-if="col.actions != null"
          >
            <component
              v-for="action in col.actions"
              :key="action.id"
              :is="action.type"
              v-model="row[action.id]"
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
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    pageInfo: {
      type: Object,
      default: () => null
    },
    multipleSelect: {
      type: Boolean,
      default: () => false
    },
    isShowRadio: {
      type: Boolean,
      default: () => true
    },
    isShowSelection: {
      type: Boolean,
      default: () => true
    },
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
.el-table__body tr.current-row>td{
  background-color: #D8FFFE !important;
}
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
