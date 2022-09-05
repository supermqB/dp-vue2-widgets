<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="left_aside_container">
        <Catalog class="catalog"></Catalog>
        <Task></Task>
        <Bottom 
          :labelList="['值域', '任务']"
          :value="[pageInfo.totalSize, task.taskList.length ]"
          class="bottom"
        ></Bottom>
      </div>
    </template>
    <template #main>
      <CenterPart></CenterPart>
    </template>
    <template #asideRight>
      <Suspect></Suspect>
    </template>
  </dp-layout-container>
</template>

<script>
import Task from './task'
import Catalog from './catalog'
import Bottom from '@/components/bottom/Catalog.vue'
import CenterPart from './center'
import Suspect from './suspect'
import { createNamespacedHelpers } from 'vuex'
const { mapActions, mapState } = createNamespacedHelpers('value')

export default {
  name: 'ValueExamine',
  components: {
    Catalog,
    Task,
    Bottom,
    CenterPart,
    Suspect
  },
  mounted() {
    this.initValue()
  },
  computed:{
    ...mapState(['task', 'pageInfo']),
  },
  methods: {
    ...mapActions(['initValue'])
  }
}
</script>

<style lang="scss" scoped>
.left_aside_container {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: hidden;
  .catalog {
    flex: 1 1 auto;
  }
  .bottom {
    height: 30px;
  }
}
</style>
