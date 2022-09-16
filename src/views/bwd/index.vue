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
import { createNamespacedHelpers } from 'vuex'
const { mapMutations, mapActions } =
  createNamespacedHelpers('bwd')
export default {
  name: 'ValueExamine',
  components: {
    Catalog,
    Center,
    Map
  },
  methods: {
    ...mapActions([
      'loadBwdModules', 
      'queryTotalNum', 
      'queryField', 
      'queryMappingList',
      'queryVersion'
    ]),
    ...mapMutations(['setCurrentField'])
  },
  async mounted() {
    await this.loadBwdModules()
    await this.queryVersion()
    await this.queryField()
    this.queryTotalNum()
    this.queryMappingList()
    this.setCurrentField()
  }
}
</script>

<style lang="scss" scoped></style>
