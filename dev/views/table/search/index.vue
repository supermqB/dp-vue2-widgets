<template>
  <dp-layout-container aside-left-width="15%">
    <template #asideLeft>
      <dp-title text="标题" />
    </template>
    <template #main>
      <dp-blocks>
        <dp-block>
          <template #header>
            <dp-title text="数据表格" />
          </template>
          <dp-blocks>
            <dp-block class="main-header" size="40px">
              <main-header @change="handleSearchChange" />
            </dp-block>
            <dp-block class="main-table" no-border>
              <main-table ref="table" />
            </dp-block>
            <dp-block class="main-footer" size="40px" no-border>
              <main-footer
                :current-page.sync="currentPage"
                :page-size.sync="pageSize"
                :total="total"
              />
            </dp-block>
          </dp-blocks>
        </dp-block>
      </dp-blocks>
    </template>
  </dp-layout-container>
</template>

<script>
import MainHeader from './MainHeader'
import MainTable from './MainTable'
import MainFooter from './MainFooter'
export default {
  components: { MainHeader, MainTable, MainFooter },
  data() {
    return {
      searchModel: {},
      currentPage: 1,
      pageSize: 10,
      data: [],
      total: 50,
      loading: false
    }
  },
  mounted() {
    this.getData()
  },
  watch: {
    currentPage: function () {
      this.getData()
    },
    pageSize: function () {
      this.getData()
    }
  },
  methods: {
    getData() {
      console.log('== getData ==')
      console.log({
        s: this.searchModel,
        p: this.currentPage,
        ps: this.pageSize
      })
      // this.$refs.table.getData(this.searchModel, this.pageInfo)
    },
    handleSearchChange(v) {
      this.searchModel = v
      this.getData()
    },
    handlePageChange(v) {
      this.currentPage = v.currentPage
      this.pageSize = v.pageSize
      this.getData()
    }
  }
}
</script>
