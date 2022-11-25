<template>
  <div class="el_table_wrapper">
    <div class="table_container">
      <el-table
        :data="tableData"
        v-bind="$attrs"
        v-on="$listeners"
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
          :selectable="selectable"
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
          <template v-if="col.header" slot="header">
            <span :style="{ 'margin-right': '5px' }">{{
              col.header.name || col.colConfig.label
            }}</span>
            <el-tooltip
              effect="dark"
              :content="col.header.content"
              placement="top"
            >
              <i class="el-icon-warning-outline"></i>
            </el-tooltip>
          </template>
          <template
            #default="{ $index: rowIdx, row, column }"
            v-if="col.actions != null"
          >
            <component
              v-for="action in col.actions"
              :key="action.id"
              :is="action.type"
              v-model="row[action.id]"
              v-bind="typeProps(action.typeProps, row)"
              @click.native.prevent="
                rowAction({ rowIdx, row, column }, action.callback)
              "
            >
              {{
                typeof action.name == 'function'
                  ? action.name(row)
                  : action.name
              }}
            </component>
          </template>
        </el-table-column>
        <slot></slot>
      </el-table>
    </div>
    <div class="table_footer">
      <div class="bottomTip" v-html="bottomTip"></div>
      <el-pagination
        v-if="pageInfo != null"
        @size-change="sizeChangeHandler"
        @current-change="pageChangeHandler"
        :current-page.sync="pageInfo.curPage"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.totalSize"
      >
      </el-pagination>
    </div>
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
    currentRow: {
      type: Object,
      default: () => null
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
      default: () => false
    },
    selectable: {
      type: Function,
      default: () => true
    },
    bottomTip: {
      type: String,
      default: () => ``
    }
  },
  data() {
    return {
      selectedIdx: 0
    }
  },
  watch: {
    currentRow(row) {
      this.setCurrentRow(row)
    }
  },
  methods: {
    rowAction({ rowIdx, row, column }, callback) {
      if (!callback) return
      callback(row.index, this.tableData, row)
    },
    rowChangeHandler(rowData) {
      if (rowData == null) {
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
    typeProps(propDefs, row) {
      let props = {}
      for (let key in propDefs) {
        props[key] =
          typeof propDefs[key] == 'function'
            ? propDefs[key](row)
            : propDefs[key]
      }
      return props
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
    padding: 6px 6px 0 6px;
    box-sizing: border-box;
  }
}
</style>

<style lang="scss">
.el-table__body tr.current-row > td {
  background-color: #f2f6ff !important;
}
.el_table_wrapper {
  .table_container {
    height: 300px; /*table default height*/
    overflow: auto;
    .el-table {
      font-size: 13px;
      .el-table__body-wrapper.is-scrolling-right {
        padding-right: 6px;
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
  .table_footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 6px;
    .bottomTip {
      font-size: 12px;
      color: #9c9c9c;
      .highlight {
        color: red;
      }
    }
    .el-pagination .el-select .el-input {
      width: 85px;
    }
    .el-input--mini .el-input__inner {
      height: 20px;
      line-height: 20px;
    }
    .el-pagination__editor.el-input {
      width: 40px;
      .el-input__inner {
        height: 20px;
      }
    }
  }
}
</style>
