<template>
  <div class="left_aside_container">
    <CatalogVue class="catalog" />
    <TaskList
      class="task"
      :treeSelectionData="filterTreeData"
      :tableHeaderConfig="taskTableConfig"
    />
    <Bottom class="bottom" :labelList="['数据量', '任务量']"></Bottom>
  </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex'
const { mapGetters } = createNamespacedHelpers('mdm/tasks')
import { taskTableConfig } from './configs'
import CatalogVue from './Catalog.vue'
import TaskList from '@/views/value/task'
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
    ...mapGetters(['filterTreeData'])
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
    height: 380px; /* doesn't work */
    .table_container {
      height: 300px;
    }
  }
  .bottom {
    height: 30px;
  }
}
</style>
