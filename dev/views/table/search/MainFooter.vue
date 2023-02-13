<template>
  <dp-blocks class="main-footer" style="flex-direction: row">
    <dp-block> </dp-block>
    <dp-block no-border>
      <div class="page-container">
        <dp-pagination
          :current-page.sync="_currentPage"
          :page-size.sync="_pageSize"
          :total="total"
        />
      </div>
    </dp-block>
  </dp-blocks>
</template>

<script>
export default {
  props: {
    currentPage: Number,
    pageSize: Number,
    total: Number
  },
  data() {
    return {}
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
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.main-footer {
  padding: 0 6px;
}
.page-container {
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: right;
}
</style>
