<template>
  <dp-blocks class="catalog">
    <!-- catalog__search-form: 目录模块中search-form区域 检索表单 -->
    <dp-block class="catalog__search-form" size="40px">
      <!-- <dp-search-form
        :configs="searchConfigs"
        :model="searchModel"
        @change="handleChange"
      />
       -->
      <search-form
        :configs="searchConfigs"
        :model="searchModel"
        @change="handleSearchChange"
      />
    </dp-block>
    <!-- catalog__tree-list: 目录模块中tree-list区域 树状列表 -->
    <dp-block class="catalog__tree-list">
      <dp-tree
        :data="data"
        @node-selected="handleNodeSelected"
        v-loading="loading"
      />
    </dp-block>
  </dp-blocks>
</template>

<script>
import SearchForm from './SearchForm'
export default {
  name: 'DpCatalog',
  components: { SearchForm },
  props: {
    // searchConfigs: 检索表单配置项
    searchConfigs: {
      type: Array,
      default: () => []
    },
    // searchModel: 检索表单数据对象
    searchModel: {
      type: Object,
      default: () => ({})
    },
    // load: 获取目录数据的方法 传入搜索栏参数 返回目录数据
    load: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      data: [],
      loading: false
    }
  },

  mounted() {
    this.getData()
  },
  methods: {
    async getData() {
      this.data = []
      this.loading = true
      try {
        this.data = await this.load(this.searchModel)
        this.loading = false
      } catch (e) {
        this.loading = false
        this.$message({ type: 'error', message: '系统错误' })
      }
    },
    handleSearchChange() {
      this.getData()
    },
    handleNodeSelected(v) {
      this.$emit('node-selected', v)
    }
  }
}
</script>

<style lang="scss" scoped></style>
