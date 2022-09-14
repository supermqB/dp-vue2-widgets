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
const { mapMutations, mapActions, mapState } = createNamespacedHelpers('docs/summary')
const { mapActions: mapDocActions } = createNamespacedHelpers('docs')

export default {
  components: {
    CenterVue,
    RightVue
  },
  computed: {
    ...mapState(['identifier'])
  },
  mounted() {
    this.init(this.$route.params.id)
  },
  activated() {
    this.init(this.$route.params.id)
  },
  methods: {
    ...mapMutations(['setID']),
    ...mapActions(['queryLiterature', 'getSimilarLiteratureList']),
    ...mapDocActions(['loadCommonDocCtlg']),
    async init(id) {
      if (!id) return
      this.setID(id)
      await this.queryLiterature()
      this.getSimilarLiteratureList()
      this.loadCommonDocCtlg()
    }
  },
  watch: {}
}
</script>