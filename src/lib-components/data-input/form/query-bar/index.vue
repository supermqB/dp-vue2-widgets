<template>
  <div class="dpui_searchBar">
    <dp-form :configs="inputConfigs" :model="searchForm" v-bind="$attrs" />
    <el-button type="primary" plain class="searchBtn" @click="onSearch">{{
      queryName
    }}</el-button>
  </div>
</template>
<script>
import { debounce } from 'lodash'

export default {
  model: {
    prop: 'searchForm',
    event: 'onChanged'
  },
  props: {
    inputConfigs: {
      type: Array,
      default: () => {
        return []
      }
    },
    searchForm: {
      type: Object,
      default: () => ({})
    },
    queryName: {
      type: String,
      default: () => '检索'
    },
    autoSubmit: {
      type: Boolean,
      default: () => false
    }
  },
  data: () => {
    return {
      lastSearchForm: {}
    }
  },
  watch: {
    searchForm: {
      handler(newForm) {
        if (
          Object.entries(newForm).some(([ok, ov]) => {
            return this.lastSearchForm[ok] != ov
          })
        ) {
          this.lastSearchForm = { ...this.searchForm }
          this.$emit('onChanged', { ...newForm })
          this.autoSubmit && this.__onSearch()
        }
      },
      deep: true
    }
  },
  mounted() {
    this.__onSearch = debounce(() => {
      this.onSearch()
    }, 500)
  },
  methods: {
    onSearch() {
      this.$emit('onSearch', this.lastSearchForm)
    }
  }
}
</script>
<style lang="scss" scoped>
.dpui_searchBar {
  display: flex;
  align-items: center;
  height: 100%;
  ::v-deep .el-form {
    display: flex;
    .el-form-item {
      margin-right: 4px;
      margin-bottom: 0;
    }
  }
}
</style>
