<template>
  <dp-layout-container>
    <template #asideLeft>
      <TaskAssignAside />
    </template>
    <template #main>
      <TaskAssignMain />
    </template>
  </dp-layout-container>
</template>

<script>
import TaskAssignAside from './aside'
import TaskAssignMain from './main'
export default {
  name: 'TaskAssign',
  components: { TaskAssignAside, TaskAssignMain }
}
</script>
