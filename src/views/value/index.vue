<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="left_aside_container">
        <Catalog class="catalog"></Catalog>
        <Task class="task"></Task>
        <Bottom class="bottom" :labelList="['值域', '任务']"></Bottom>
      </div>
    </template>
    <template #main>
      <!-- <ValueTable /> -->
      <Center></Center>
    </template>
    <template #asideRight>
      <!-- <ValueDetails /> -->
      <Suspect></Suspect>
    </template>
  </dp-layout-container>
</template>

<script>
// import Task from './task'
import Catalog from './catalog'
import Bottom from '@/components/bottom/Catalog.vue'
import Center from './center'
import Suspect from './suspect'
import Task from '../common/SuspectTaskList.vue'

export default {
  name: 'ValueExamine',
  components: {
    Catalog,
    Task,
    Bottom,
    Center,
    Suspect
  },
  data() {
    return {
      //选中的值域id
      // 选中的任务id
      active: null //选中表里某行待处理数据
    }
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
      height: 450px;
    }
  }
  .bottom {
    height: 30px;
  }
}
</style>
