<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="left_aside_container">
        <Catalog class="catalog"></Catalog>
        <Task
          :tableData="filteredTask"
          :treeSelectionData="filterTreeData"
          :hasItem2Do="!!task.selectedTasks.length"
          @checked-filter-keys="handleFiltered"
          @selected-items-changed="handleSelectedTasks"
          @search-key-change="handleSearchChanged"
          @complete-action="handleCompleteAction"
          class="task"></Task>
        <Bottom class="bottom" :labelList="['值域', '任务']"></Bottom>
      </div>
    </template>
    <template #main>
      <CenterPart></CenterPart>
    </template>
    <template #asideRight>
      <Suspect></Suspect>
    </template>
  </dp-layout-container>
</template>

<script>
// import Task from './task'
import Catalog from './catalog'
import Bottom from '@/components/bottom/Catalog.vue'
import CenterPart from './center'
import Suspect from './suspect'
import Task from '../common/SuspectTaskList.vue'
import { createNamespacedHelpers } from 'vuex'
import { confirm } from '@/utils/pops'
const { mapActions, mapState, mapGetters, mapMutations } = createNamespacedHelpers('value')

export default {
  name: 'ValueExamine',
  components: {
    Catalog,
    Task,
    Bottom,
    CenterPart,
    Suspect
  },
  mounted() {
    this.initValue()
  },
  computed:{
    ...mapState(['task']),
    ...mapGetters({
      filterTreeData: 'filterTreeData', 
      currentVersionItem: 'currentVersionItem', 
      filteredTask: 'filteredTask'
    })
  },
  methods: {
    ...mapActions(['initValue', 'querySuspect', 'completeTasks']),
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
::v-deep .left_aside_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  .catalog {
    flex: 1 1 auto;
  }
  .task {
    .table_container {
      height: 250px;
    }
  }
  .bottom {
    height: 30px;
  }
}
</style>
