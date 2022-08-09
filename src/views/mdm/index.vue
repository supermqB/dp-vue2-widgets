<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="left_aside_container">
        <CatalogVue class="catalog" />
        <TaskList class="task" />
        <Bottom class="bottom" :labelList="['数据量', '任务量']"></Bottom>
      </div>
    </template>
    <template #main> 
        <Center/>
    </template>
    <template #asideRight> </template>
  </dp-layout-container>
</template>

<script>
import CatalogVue from './left/Catalog.vue'
import TaskList from '@/views/value/task'
import Bottom from '@/components/bottom/Catalog.vue'
import Center from './center'

export default {
  components: { CatalogVue, TaskList, Bottom,Center }
}
</script>
<style lang="scss" scoped>
.left_aside_container {
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
    height: 350px;
    padding-bottom: 6px;
  }
  .bottom {
    height: 30px;
  }
}
</style>
