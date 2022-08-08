<template>
  <dp-layout-container>
    <template #asideLeft>
      <Catalog></Catalog>
    </template>
    <template #main>
      <Center></Center>
    </template>
    <template #asideRight>
      <Map></Map>
    </template>
  </dp-layout-container>
</template>

<script>
import Catalog from './catalog'
import Center from './center'
import Map from './map'
export default {
  name: 'ValueExamine',
  components: {
    Catalog, Center, Map
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
