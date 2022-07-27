<template>
  <dp-layout-container>
    <template #asideLeft>
      <TaskList />
    </template>
    <template #main>
      <ValueTable />
    </template>
    <template #asideRight>
      <ValueDetails />
    </template>
  </dp-layout-container>
</template>

<script>
import TaskList from '@/components/TaskList'
import ValueTable from './ValueTable'
import ValueDetails from './ValueDetails'

export default {
  name: 'ValueExamine',
  components: { TaskList, ValueTable, ValueDetails },
  data() {
    return {
      //选中的值域id
      // 选中的任务id
      active: null //选中表里某行待处理数据
    }
  }
}
</script>

<style lang="scss" scoped></style>
