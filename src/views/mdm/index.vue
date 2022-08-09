<template>
  <dp-layout-container>
    <template #asideLeft>
      <CatalogVue class="catalog"/>
      <TaskList class="task"/>
    </template>
    <template #main> </template>
    <template #asideRight> </template>
  </dp-layout-container>
</template>

<script>
import CatalogVue from './left/Catalog.vue'
import TaskList from '@/views/value/task'

export default {
  components: { CatalogVue, TaskList }
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
