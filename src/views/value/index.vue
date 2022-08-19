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
import { createNamespacedHelpers } from 'vuex'
const { mapActions } = createNamespacedHelpers('value')

export default {
  name: 'ValueExamine',
  components: {
    Catalog,
    Task,
    Bottom,
    Center,
    Suspect
  },
  mounted() {
    this.initValue()
  },
  methods: {
    ...mapActions(['initValue'])
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
      height: 300px;
    }
  }
  .bottom {
    height: 30px;
  }
}
</style>
