<template>
  <dp-layout-root>
    <template #header>
      <AppHeader
        :titleText="title"
        :menuItems="menuItems"
        :logoutEvent="logoutEvent"
      />
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
import DpLayoutRoot from '../Root'
import AppHeader from './header'
import AppMain from './main'
import AppFooter from './footer'

export default {
  name: 'DefaultLayout',
  components: { AppHeader, AppMain, AppFooter, DpLayoutRoot },
  props: {
    title: {
      type: String,
      default: '项目标题'
    },
    menuItems: {
      type: Array,
      default: () => []
    },
    logoutEvent: Object
  }
}
</script>
