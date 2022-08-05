<template>
  <dp-layout-container>
    <template #asideLeft>
      <Catalog class="catalog"></Catalog>
      <Task class="task"></Task>
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
import Center from './center'
import Suspect from './suspect'
// import TaskList from '@/components/TaskList'
// import ValueTable from './ValueTable'
// import ValueDetails from './ValueDetails'

export default {
  name: 'ValueExamine',
  components: { 
    // TaskList, ValueTable, ValueDetails
    Catalog, Task, Center, Suspect
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
.catalog {
  height: 45%;
}
.task {
  height: 55%;
}
</style>
