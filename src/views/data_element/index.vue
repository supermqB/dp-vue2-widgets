<template>
  <dp-layout-container>
    <template #asideLeft>
      <ElementGroup />
    </template>
  </dp-layout-container>
</template>

<script>
import ElementGroup from './ElementGroup'

export default {
  components: { ElementGroup }
}
</script>
