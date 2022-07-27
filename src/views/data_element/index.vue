<template>
  <dp-layout-container>
    <template #asideLeft>
      <ElementGroup />
    </template>
    <template #main>
      <CenterDetail />
    </template>
  </dp-layout-container>
</template>

<script>
import ElementGroup from './ElementGroup'
import CenterDetail from './center'

export default {
  components: { ElementGroup, CenterDetail }
}
</script>
