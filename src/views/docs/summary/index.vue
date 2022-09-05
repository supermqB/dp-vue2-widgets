<template>
  <dp-layout-container>
    <template #main>
      <CenterVue></CenterVue>
    </template>
    <template #asideRight>
      <RightVue></RightVue>
    </template>
  </dp-layout-container>
</template>

<script>
import CenterVue from './center'
import RightVue from './right'
import { createNamespacedHelpers } from 'vuex'
const { mapMutations, mapActions } = createNamespacedHelpers('docs/summary')
export default {
  components: {
    CenterVue,
    RightVue
  },
  async mounted() {
    const identifier = this.$route.params.identifier ? this.$route.params.identifier : 'S31990001'
    this.setIdentifier(identifier)
    this.queryLiterature()
    this.getSimilarLiteratureList()
  },
  methods: {
    ...mapMutations(['setIdentifier']),
    ...mapActions(['queryLiterature', 'getSimilarLiteratureList']),
  }
}
</script>