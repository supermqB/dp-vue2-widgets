<template>
  <el-pagination
    :current-page.sync="_currentPage"
    :page-size.sync="_pageSize"
    :page-sizes="pageSizes"
    :layout="layout"
    :total="total"
    @size-change="sizeChangeHandler"
    @current-change="currentChangeHandler"
  />
</template>

<script>
export default {
  name: 'dp-pagination',
  props: {
    // 当前页数（支持.sync）
    currentPage: {
      type: Number,
      default: 1
    },
    // 每页显示条目个数（支持.sync）
    pageSize: {
      type: Number,
      default: 20
    },
    // 每页显示个数选择器的选项设置
    pageSizes: {
      type: Array,
      default: () => [5, 10, 20, 50]
    },
    // 组件布局
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    // 总条目数
    total: {
      type: Number
    },
    // 当pageSize（每页显示个数）发生变化时，是否需要设置currentPage（当前页数）为1
    toFirstPageOnSizeChange: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    // 使 currentPage 支持sync
    _currentPage: {
      get() {
        return this.currentPage
      },
      set(v) {
        this.$emit('update:currentPage', v)
      }
    },
    // 使 pageSize 支持sync
    _pageSize: {
      get() {
        return this.pageSize
      },
      set(v) {
        this.$emit('update:pageSize', v)
        if (this.toFirstPageOnSizeChange) {
          this.$emit('update:currentPage', 1)
        }
      }
    }
  },
  methods: {
    // pageSize变化事件
    sizeChangeHandler(v) {
      this.$emit('size-change', v)
    },
    // currentPage变化事件
    currentChangeHandler(v) {
      this.$emit('current-change', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.el-pagination {
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  ::v-deep {
    span:not([class*='suffix']),
    button {
      height: 20px;
      line-height: 20px;
    }

    .el-select .el-input {
      width: 85px;
    }
    .el-input--mini,
    .el-input--mini .el-input__inner {
      height: 20px;
    }
    .el-input__suffix {
      height: 28px;
      top: -4px;
    }
    .el-pager,
    .el-pager li {
      height: 20px;
      line-height: 20px;
    }
    .el-pager .more::before {
      line-height: 20px;
    }
    .el-pagination__editor.el-input {
      // width: 40px;
      height: 20px;
      .el-input__inner {
        height: 20px;
      }
    }
  }
}
</style>
