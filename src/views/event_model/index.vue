<template>
  <dp-layout-container>
    <template #asideLeft>
      <EventCatalog></EventCatalog>
    </template>
    <template #main>
      <EventCenter></EventCenter>
    </template>
  </dp-layout-container>
</template>

<script>
import EventCatalog from './catalog'
import EventCenter from './center'
import { mapActions } from 'vuex'

export default {
  components: { EventCatalog, EventCenter },
  mounted() {
    this.init()
  },
  methods: {
    ...mapActions({
      init: 'event/initEvent'
  })
  }
}
</script>
