<template>
  <dp-layout-container>
    <template #asideLeft>
        <LeftView/>
    </template>
    <template #main>
      <Center />
    </template>
    <template #asideRight>
      <SuspectList />
    </template>
  </dp-layout-container>
</template>

<script>
import LeftView from './left/index.vue'
import Center from './center'
import SuspectList from './right/SuspectList.vue'

export default {
  components: { LeftView, Center, SuspectList }
}
</script>

