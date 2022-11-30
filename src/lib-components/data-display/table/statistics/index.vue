<template>
  <div class="el_table_wrapper">
    <div class="table_container">
      <el-table
        height="100%"
        :data="data"
        style="width: 100%"
        :span-method="spanMethod"
        stripe
      >
        <tableColumn v-for="item in tableTitle" :key="item.prop" :item="item" />
      </el-table>
    </div>
  </div>
</template>
<script>
import tableColumn from './Column.vue'
export default {
  components: {
    tableColumn
  },
  props: {
    tableTitle: {
      // 多表头
      type: Array,
      default: () => []
    },
    data: {
      // 数据
      type: Array,
      default: () => []
    },
    lastColIndex: {
      // 最后一行合并的列数
      type: Number,
      default: 1
    },
    lastColText: {
      type: String,
      default: '合计'
    },
    callback: {
      // 自定义合并
      default: null
    },
    columnIndex: {
      // 需要修改的列（暂时不用,默认0）
      type: [Number, Array],
      default: 0
    }
  },
  data() {
    return {
      rowArr: [] // 合并行集合
    }
  },
  computed: {
    groupBy() {
      // 合并行的依据字段
      return this.tableTitle[0].prop
    },
    lastCloArr() {
      // 最后一行合并列集合
      let arr = []
      for (let i = 1; i < this.lastColIndex; i++) {
        arr.push(i)
      }
      return arr
    }
  },
  watch: {
    'data.length': {
      handler() {
        this.getarr()
      },
      immediate: true
    }
  },
  methods: {
    getarr() {
      // 判断
      const data = this.data
      let pos = 0
      for (var i = 0; i < data.length; i++) {
        if (i === 0) {
          this.rowArr.push(1)
          pos = 0
        } else {
          // 判断当前元素与上一个元素是否相同
          if (data[i][this.groupBy] === data[i - 1][this.groupBy]) {
            this.rowArr[pos] += 1
            this.rowArr.push(0)
          } else {
            this.rowArr.push(1)
            pos = i
          }
        }
      }
    },

    // 当前行row、当前列column、当前行号rowIndex、当前列号columnIndex四个属性
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (typeof this.callback === 'function') {
        // 有自定义使用自定义
        return this.callback({ row, column, rowIndex, columnIndex })
      } else {
        // 默认处理
        // 处理最后一行合并列col
        if (row[this.groupBy] === this.lastColText) {
          if (columnIndex === 0) {
            return {
              rowspan: 1,
              colspan: this.lastColIndex
            }
          }
          if (this.lastCloArr.includes(columnIndex)) {
            return {
              rowspan: 0,
              colspan: 0
            }
          }
        }
        // 处理合并行row
        if (
          (Array.isArray(this.columnIndex) &&
            this.columnIndex.includes(columnIndex)) ||
          columnIndex === this.columnIndex
        ) {
          const _row = this.rowArr[rowIndex]
          const _col = _row > 0 ? 1 : 0
          return {
            rowspan: _row,
            colspan: _col
          }
        }
      }
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
    padding: 6px 6px 6px 6px;
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
}
</style>

