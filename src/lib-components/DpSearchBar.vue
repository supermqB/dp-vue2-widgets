<template>
  <div class="dpui_searchBar">
    <Form :formCfg="searchFormConfig" :formData="searchForm"></Form>
    <el-button type="primary" plain class="searchBtn" @click="onSearch"
      >检索<span class="filter"></span
    ></el-button>
  </div>
</template>
<script>
/* 配置参考 src/views/data_elem_new/config/searchForm.js */
import Form from './Form.vue'
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
    }
  },
  data: () => {
    return {
      lastSearchForm: { searchText: '' }
    }
  },
  computed: {
    searchFormConfig() {
      return [
        ...this.inputConfigs,
        {
          type: 'el-input',
          label: '',
          id: 'searchText',
          elOptions: {
            clearable: true,
            placeholder: '请输入',
            suffixIcon: 'el-icon-search'
          }
        }
      ]
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
    }
  },
  components: {
    Form
  }
}
</script>
<style lang="scss" scoped>
.dpui_searchBar {
  display: flex;
  align-items: center;
  height: 100%;
  ::v-deep.el-form {
    display: flex;
    .el-form-item {
      margin-right: 4px;
      margin-bottom: 0;
    }
  }

  .searchBtn {
    padding: 5px 8px;
    .filter {
      display: inline-block;
      position: relative;
      margin-left: 2px;
      top: 1px;
      left: 1px;
      height: 12px;
      width: 12px;
      background-image: url('../assets/images/icons/filter.png');
    }
  }
}
</style>
