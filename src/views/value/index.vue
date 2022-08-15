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
import Task from './task'
import Catalog from './catalog'
import Bottom from '@/components/bottom/Catalog.vue'
import Center from './center'
import Suspect from './suspect'

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
::v-deep.left_aside_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  overflow: hidden;
  .catalog {
    flex: 1 1 auto;
    height: 47.5%;
    /* min-height: 100px; */
  }
  .task {
    height: 52.5%;
    // height: 380px; /* doesn't work */
    .table_container {
      height: calc(100% - 120px)
    }
  }
  .bottom {
    height: 30px;
  }
}
</style>
