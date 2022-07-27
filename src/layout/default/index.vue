<template>
  <dp-layout-root>
    <template #header>
      <AppHeader />
    </template>
    <template #main>
      <AppMain />
    </template>
    <template #footer>
      <AppFooter />
    </template>
  </dp-layout-root>
</template>

<script>
import AppHeader from './header'
import AppMain from './main'
import AppFooter from './footer'

export default {
  name: 'DefaultLayout',
  components: { AppHeader, AppMain, AppFooter }
}
</script>
