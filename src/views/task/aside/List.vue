<template>
  <div class="task-aside-list">
    <div class="task-aside-list__title">
      机构系统
    </div>
    <div class="task-aside-list__table">
        <el-table
          ref="table"
          :show-header="false"
          :data="tableData"
          style="width: 100%;"
          border
          v-loading="loading"
          @current-change="handleCurrentChange"
          highlight-current-row
        >
          <el-table-column
            prop="title"
          >
          </el-table-column>
          <el-table-column
            prop="statusName"
          >
          </el-table-column>
        </el-table>
    </div>
  </div>
</template>
<script>
export default {
  title: 'TaskAssignAsideList',
  data() {
    return {
      loading: false
    }
  },
  computed: {
    tableData() {
      return this.$store.getters['task/parentList']
    }
  },
  async created() {
    await this.getData()
    if(this.tableData.length > 0) {
      this.$refs.table.setCurrentRow(this.tableData[0])
    }
  },
  methods: {
    async getData() {
      this.loading = true
      await this.$store.dispatch('task/getParentListData')
      this.loading = false
    },
    handleCurrentChange(row) {
      this.$store.commit('task/setParentInfo', row)
    }
  }
}
</script>
<style lang="scss" scoped>
.task-aside {
  &-list {
    display: block;
    flex-direction: column;
    padding: 6px;
    &__title {
      background-color: #F5F7FA;
      border: 1px solid #F2F2F2;
      border-bottom: none;
      padding: 6px;
      font-size: 13px;
      color: rgba(0,0,0,0.65);
    }

    &__table {
      flex: 1;
    }
  }
}
</style>
