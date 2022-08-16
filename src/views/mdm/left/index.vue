<template>
  <div class="left_aside_container">
    <CatalogVue class="catalog" />
    <TaskList
      class="task"
      :treeSelectionData="filterTreeData"
      :tableHeaderConfig="taskTableConfig"
      :tableData="filteredTask"
      :hasItem2Do="!!selectedTasks.length"
      @checked-filter-keys="handleFiltered"
      @selected-items-changed="handleSelectedTasks"
      @complete-action="handleCompleteAction"
    />
    <Bottom class="bottom" :labelList="['数据量', '任务量']"></Bottom>
  </div>
</template>
<script>
import { createNamespacedHelpers, mapState as globalMapState } from 'vuex'
const { mapState, mapGetters, mapMutations, mapActions } =
  createNamespacedHelpers('mdm/tasks')
import { taskTableConfig } from './configs'
import CatalogVue from './Catalog.vue'
import TaskList from '@/views/common/SuspectTaskList.vue'
import Bottom from '@/components/bottom/Catalog.vue'
export default {
  data() {
    return {
      taskTableConfig
    }
  },
  components: {
    CatalogVue,
    TaskList,
    Bottom
  },
  computed: {
    ...mapState({ selectedTasks: state => state.selectedTasks }),
    ...mapGetters(['filterTreeData', 'filteredTask']),
    ...globalMapState({ selectedMDM: state => state.mdm.selectedMDM })
  },
  methods: {
    ...mapMutations(['setCheckedFilters', 'setSelectedTasks']),
    ...mapActions(['listSuspectTasks', 'completeTasks']),
    handleFiltered(keys) {
      this.setCheckedFilters(keys)
    },
    handleSelectedTasks(tasks) {
      this.setSelectedTasks(tasks)
    },
    handleCompleteAction() {
      this.completeTasks()
    }
  },
  watch: {
    selectedMDM() {
      this.listSuspectTasks()
    }
  },
  mounted() {
    //this.listSuspectTasks()
  }
}
</script>
<style lang="scss" scoped>
::v-deep.left_aside_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  .catalog {
    flex: 1 1 auto;
    min-height: 100px;
  }
  .task {
    .table_container {
      height: 300px;
    }
  }
  .bottom {
    height: 30px;
  }
}
</style>
