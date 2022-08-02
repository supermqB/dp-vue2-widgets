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

export default {
  components: { EventCatalog, EventCenter }
}
</script>
