<template>
  <div class="dpui_searchBar">
    <dp-form :configs="searchFormConfig" :model="searchForm" />
    <el-button type="primary" plain class="searchBtn" @click="onSearch"
      >检索<span class="filter"></span
    ></el-button>
  </div>
</template>
<script>
import { debounce } from 'lodash'
import { keysObject } from '@/utils/lang'
export default {
  props: {
    inputConfigs: {
      type: Array,
      default: () => []
    },
    placeholder: {
      type: String,
      default: '请输入'
    },
    hideSearchInput: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return {
      searchForm: {},
      lastSearchForm: { searchText: '' }
    }
  },
  computed: {
    searchFormConfig() {
      let cfg = this.inputConfigs
      if (!this.hideSearchInput) {
        cfg.push({
          type: 'el-input',
          label: '',
          id: 'searchText',
          elOptions: {
            clearable: true,
            placeholder: this.placeholder,
            suffixIcon: 'el-icon-search'
          }
        })
      }
      this.searchForm = keysObject(cfg, 'id', 'defaultValue')
      return cfg
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
      let lastSearchForm = (this.lastSearchForm = { ...this.searchForm })
      this.$emit('onSearch', lastSearchForm)
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

  .searchBtn {
    // padding: 5px 8px;
    // .filter {
    //   display: inline-block;
    //   position: relative;
    //   margin-left: 2px;
    //   top: 1px;
    //   left: 1px;
    //   height: 12px;
    //   width: 12px;
    //   background-image: url('../assets/images/icons/filter.png');
    // }
  }
}
</style>
