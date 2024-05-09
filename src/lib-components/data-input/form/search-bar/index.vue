<template>
  <div class="dpui_searchBar">
    <dp-form :configs="filteredSearchConfig" :model="searchForm" />
    <dp-icon-button v-if="showSearchBtn"
      text="检索"
      class="searchBtn"
      :icon="searchIcon"
      @click="onSearch"
    />
    <div v-if="shrinkable" class="shrink-box">
      <div v-if="shrunk" @click="expand">
        <div class="expand-icon icon"></div>
      </div>
      <div v-if="!shrunk" @click="shrink">
        <div class="shrink-icon icon"></div>
      </div>
    </div>
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
      lastSearchForm: { searchText: '' },
      shrunk: true
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
    },
    shrinkable() {
      return this.searchFormConfig.some(cfg => {
        return cfg.shrinkable != null;
      });
    },
    filteredSearchConfig() {
      if (!this.shrinkable || !this.shrunk) {
        return this.searchFormConfig;
      }
      return this.searchFormConfig.filter(cfg => {
        return !cfg.shrinkable;
      });
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
    },
    shrink() {
      this.shrunk = true;
    },
    expand() {
      this.shrunk = false;
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
  .shrink-box {
    margin-left: 6px;
    .icon {
      width: 12px;
      height: 11px;
      &.shrink-icon {
        background-image: url("../../../../assets/images/icons/double_arrow_right.svg");
        transform: rotate(180deg);
      }
      &.expand-icon {
        background-image: url("../../../../assets/images/icons/double_arrow_right.svg");
      }
    }

  }
}
</style>
