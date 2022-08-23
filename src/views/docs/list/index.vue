<template>
  <dp-layout-container>
    <template #asideLeft>
      <Group />
    </template>
    <template #main>
      <Center />
    </template>
  </dp-layout-container>
</template>

<script>
import Group from './Group'
import Center from './Center'

export default {
  components: { Group, Center }
}
</script>
