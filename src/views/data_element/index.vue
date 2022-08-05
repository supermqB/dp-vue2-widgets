<template>
  <dp-layout-container>
    <template #asideLeft>
      <ElementGroup />
    </template>
    <template #main>
      <CenterDetail />
    </template>
    <template #asideRight>
      <RightTabs />
    </template>
  </dp-layout-container>
</template>

<script>
import ElementGroup from './ElementGroup'
import CenterDetail from './center'
import RightTabs from './right'

export default {
  components: { ElementGroup, CenterDetail, RightTabs },
  mounted(){
      this.$store.dispatch('dataElem/loadWordSpeechList')
      this.$store.dispatch('dataElem/elemList/search')
  }
}
</script>
