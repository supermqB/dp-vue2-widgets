<template>
  <div class="taskWrap">
    <Task
      :tableData="filteredTask"
      :treeSelectionData="filterTreeData"
      :hasItem2Do="!!task.selectedTasks.length"
      @checked-filter-keys="handleFiltered"
      @selected-items-changed="handleSelectedTasks"
      @search-key-change="handleSearchChanged"
      @complete-action="handleCompleteAction"
      @selection-chg-handler="selectionChgHandler"
      class="task">
    </Task>
  </div>
</template>

<script>
import Task from '../../common/SuspectTaskList.vue'
import { createNamespacedHelpers } from 'vuex'
import { confirm } from '@/utils/pops'
const { mapActions, mapState, mapGetters, mapMutations } = createNamespacedHelpers('value')

export default {
  components: {
    Task
  },
  computed:{
    ...mapState(['task', 'pageInfo']),
    ...mapGetters({
      filterTreeData: 'filterTreeData', 
      currentVersionItem: 'currentVersionItem', 
      filteredTask: 'filteredTask'
    })
  },
  methods: {
    ...mapActions(['querySuspect', 'completeTasks']),
    ...mapMutations(['setCheckedFilters', 'setSelectedTasks', 'setSearchKey']),
    handleSelectedTasks(val) {
      this.setSelectedTasks(val)
    },
    handleSearchChanged(val) {
      this.setSearchKey(val)
      const {id} = this.currentVersionItem
      this.querySuspect(id)
    },
    handleFiltered(val) {
      this.setCheckedFilters(val)
    },
    selectionChgHandler(item) {
    },
    async handleCompleteAction() {
      const confirmed = await confirm('是否确认已完成选中任务？')
      if (confirmed) {
        await this.completeTasks()
        const {id} = this.currentVersionItem
        await this.querySuspect(id)
      }
    },
  }
}
</script>

<style lang="scss" scoped>
::v-deep .taskWrap {
  .table_container {
    height: 250px;
  }
}
</style>
