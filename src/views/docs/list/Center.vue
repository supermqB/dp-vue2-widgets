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
      <div
        v-for="(item, index) in listData"
        class="item"
        :key="index"
        @dblclick="forward2SumPage(item.identifier)"
      >
        <div>
          <div class="typespan">{{ item.docTypeName }}</div>
          <div class="title">
            {{ getItemTilte(item) }}
          </div>
        </div>
        <div class="sumline">
          {{ getItemSumline(item) }}
        </div>
      </div>
    </div>
    <div class="footer">
      <el-pagination
        :current-page.sync="pageInfo.curPage"
        :page-size.sync="pageInfo.pageSize"
        :page-sizes="[5, 10, 20, 50]"
        layout="total, sizes, prev, pager, next, jumper"
        :total="pageInfo.totalSize"
        :style="{ alignSelf: 'end' }"
      >
      </el-pagination>
    </div>
    <div>
      <EditDialog
        mode="create"
        ref="editDialog"
        @doc-create="createDocHandler"
      />
      <adv-search-dialog
        ref="advSearchDialog"
        :columns="advSearchCols"
        @adv-search-action="advSearchHandler"
      />
    </div>
  </div>
</template>

<script>
import { debounce } from 'lodash'
import EditDialog from './EditDialog.vue'
import Form from '@/components/Form.vue'
import { createNamespacedHelpers } from 'vuex'
import AdvSearchDialog from '@/views/common/AdvSearchDialog'
import tableHeader from './config/tableHeader'
const { mapState, mapMutations, mapActions } =
  createNamespacedHelpers('docs/list')

export default {
  computed: {
    ...mapState(['searchForm', 'listData', 'pageInfo', 'selectedDocTypeCtlg']),
    advSearchCols() {
      return tableHeader
    },
    pageInfoChangeSignal() {
      return this.pageInfo.curPage + ':' + this.pageInfo.pageSize
    }
  },
  methods: {
    startImport() {
      this.$refs.editDialog.open()
    },
    searchHandler() {
      this.search()
    },
    advSearchHandler(advSearchCriteria) {
      console.log(advSearchCriteria)
    },
    openAdvSearch() {
      this.$refs.advSearchDialog.open()
    },
    createDocHandler(docProps) {
      this.importDoc(docProps)
    },
    forward2SumPage(identifier) {
      this.$router.push(`/docs/summary/${identifier}`)
    },
    getItemTilte(item) {
      return [
        { label: '', value: `${item.title}【${item.identifier}】` },
        {
          label: '英文标题：',
          value: item.titleEn
        }
      ]
        .filter(f => !!f.value)
        .map(f => `${f.label}${f.value}`)
        .join('，')
    },
    getItemSumline(item) {
      return [
        { label: '作者：', value: item.author },
        { label: '机构', value: item.organization },
        { label: '发表年份：', value: item.releaseTime },
        {
          label: '来源：',
          value: item.source
        }
      ]
        .filter(f => !!f.value)
        .map(f => `${f.label}${f.value}`)
        .join('，')
    },
    ...mapActions(['search', 'importDoc'])
  },
  watch: {
    selectedDocTypeCtlg() {
      this.lazyList()
    },
    pageInfoChangeSignal() {
      this.lazyList()
    }
  },
  mounted() {
    this.search()
    this.lazyList = debounce(() => {
      this.search()
    }, 500)
    this.lazyList()
  },
  components: { Form, EditDialog, AdvSearchDialog }
}
</script>
<style lang="scss" scoped>
::v-deep.doclist_wrapper {
  display: flex;
  height: 100%;
  flex-direction: column;
  .header {
    display: flex;
    padding: 6px;
    height: 40px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e5e5e5;
    .btn_area {
      padding-right: 4px;
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
    overflow-y: auto;
    margin: 0 6px 6px 6px;
    border-bottom: 1px solid #f2f2f2;
    .item {
      height: 72px;
      border: 1px solid #f2f2f2;
      border-width: 1px 1px 0 1px;
      font-size: 12px;
      line-height: 12px;
      padding: 16px 6px;
      box-sizing: border-box;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      &:nth-child(odd) {
        background: #fafafa;
      }
      &:nth-child(even) {
        background: #ffffff;
      }
      &:hover {
        background-color: #eeffff;
      }
      .typespan {
        color: #fff;
        background-color: #1890ff;
        border-radius: 2px;
        margin-right: 6px;
        padding: 0 6px;
        height: 18px;
        line-height: 18px;
        text-align: center;
        display: inline-block;
      }
      .title {
        font-size: 13px;
        display: inline-block;
        color: rgba(0, 0, 0, 0.85);
        font-weight: bold;
      }
      .sumline {
        font-size: 12px;
        color: rgba(0, 0, 0, 0.45);
        line-height: 12px;
      }
    }
  }
  .footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
