<template>
  <div class="doclist_wrapper">
    <div class="header">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>文献库</el-breadcrumb-item>
        <el-breadcrumb-item>文献明细</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="btn_area">
        <el-button type="primary" @click="startImport">导 入</el-button>
      </div>
    </div>
    <div class="search">
      <Form v-bind="searchForm" class="searchForm" />
      <div class="action_area">
        <el-button type="primary" plain @click="searchHandler">查 询</el-button>
        <el-link :underline="false" class="advbtn" @click="openAdvSearch"
          >高级搜索</el-link
        >
      </div>
    </div>
    <div class="list">
      <div v-for="item in listData">
        <div>
          <span>{{ item.type }}</span> {{ item.title }}【{{
            item.identifier
          }}】,英文标题：{{ item.titleEn }}
        </div>
        <div>
          作者：{{ item.author }}，机构：{{ item.org }}，发表年份：{{
            item.year
          }}，来源：{{ item.source }}
        </div>
      </div>
    </div>
    <div class="footer">
      <el-pagination
        @size-change="sizeChangeHandler"
        @current-change="pageChangeHandler"
        :current-page.sync="pageInfo.curPage"
        :page-sizes="[5, 10, 20, 50]"
        :page-size="pageInfo.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.totalSize"
        :style="{ alignSelf: 'end' }"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapMutations } = createNamespacedHelpers('docs/list')
import Form from '@/components/Form.vue'

export default {
  computed: {
    ...mapState(['searchForm', 'listData', 'pageInfo'])
  },
  methods: {
    startImport() {},
    searchHandler() {},
    openAdvSearch() {},
    sizeChangeHandler() {},
    pageChangeHandler() {}
  },
  components: { Form }
}
</script>
<style lang="scss" scoped>
::v-deep.doclist_wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  .header {
    display: flex;
    padding-left: 6px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .btn_area {
      padding-right: 10px;
    }
  }
  .search {
    display: flex;
    justify-content: space-between;
    padding: 0 6px;
    line-height: 40px;
    .action_area {
      .advbtn {
        color: #1890ff;
        text-decoration: underline;
        margin: 0 6px;
      }
    }

    .searchForm {
      display: flex;
      width: 80%;
      flex: 1 1 auto;
      justify-content: flex-start;
      flex-wrap: wrap;
      .el-form-item {
        margin-bottom: 0px;
        height: 36px;
        display: flex;
        justify-content: end;
        .el-select,
        .el-input {
          width: 165px;
        }
      }
      .el-form-item__label {
        width: 45px;
      }
    }
  }
  .list {
    flex: 1 1 auto;
  }
  .footer {
      display: flex;
      justify-content: flex-end;
  }
}
</style>
