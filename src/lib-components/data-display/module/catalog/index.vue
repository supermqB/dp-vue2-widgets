<template>
  <dp-blocks class="catalog">
    <!-- catalog__search-bar: 目录模块中search-bar区域 检索栏 -->
    <dp-block class="catalog__search-bar" height="40px">
      <dp-search-bar v-model="searchForm" @search="handleSearch" />
    </dp-block>
    <!-- catalog__tree-list: 目录模块中tree-list区域 树状列表 -->
    <dp-block class="catalog__tree-list" noBorder>
      <dp-tree
        :data="data"
        @node-selected="handleNodeSelected"
        v-loading="loading"
      />
    </dp-block>
  </dp-blocks>
</template>

<script>
export default {
  name: 'DpCatalog',
  props: {
    // load: 获取目录数据的方法 传入搜索栏参数 返回目录数据
    load: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      searchForm: {
        searchText: ''
      },
      data: [],
      loading: false
    }
  },
  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      try {
        this.loading = true
        this.data = await this.load(this.searchForm)
        this.loading = false
      } catch (e) {
        this.loading = false
        this.$message({ type: 'error', message: '系统错误' })
      }
    },
    handleSearch() {
      this.getData()
    },
    handleNodeSelected(v) {
      this.$emit('node-selected', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.catalog {
  &__search-bar {
    padding: 0 6px;
  }
  // &__tree-list {
  // }
}
</style>
