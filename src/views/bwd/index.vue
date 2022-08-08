<template>
  <dp-layout-container>
    <template #asideLeft>
      <Catalog></Catalog>
    </template>
    <template #main>
      center
    </template>
    <template #asideRight>
      映射
    </template>
  </dp-layout-container>
</template>

<script>
import Catalog from './catalog'
export default {
  name: 'ValueExamine',
  components: {
    Catalog
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
