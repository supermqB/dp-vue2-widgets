<template>
  <div class="dpui_searchBar">
    <dp-form :configs="searchFormConfig" :model="searchForm" />
    <dp-icon-button v-if="showSearchBtn"
      text="检索"
      class="searchBtn"
      :icon="searchIcon"
      @click="onSearch"
    />
  </div>
</template>
<script>
/* 配置参考 src/views/data_elem_new/config/searchForm.js */
import { debounce } from 'lodash'
import searchIcon from '@/assets/images/icons/filter.png'

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
    placeholder: {
      type: String,
      default: '请输入'
    },
    hideSearchInput: {
      type: Boolean,
      default: false
    },
    showSearchBtn: {
      type: Boolean,
      default: true
    }
  },
  data: () => {
    return {
      searchIcon,
      lastSearchForm: { searchText: '' }
    }
  },
  computed: {
    searchFormConfig() {
      let config = this.inputConfigs
      if (!this.hideSearchInput) {
        config = [
          ...config,
          {
            type: 'el-input',
            label: '',
            id: 'searchText',
            elOptions: {
              clearable: true,
              placeholder: this.placeholder,
              suffixIcon: 'el-icon-search'
            }
          }
        ]
      }
      return config
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
          this.__onSearch()
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
      this.$emit('search', this.lastSearchForm)
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
