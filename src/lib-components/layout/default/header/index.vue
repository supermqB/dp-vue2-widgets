<template>
  <div class="header">
    <HeaderTitle class="header-title" :titleText="titleText" />
    <HeaderMenu class="header-menu" :items="menuItems" />
    <HeaderUser class="header-user" :logoutEvent="logoutEvent" />
  </div>
</template>

<script>
import HeaderTitle from './Title'
import HeaderMenu from './Menu'
import HeaderUser from './User'
export default {
  name: 'AppHeader',
  components: { HeaderTitle, HeaderMenu, HeaderUser },
  props: {
    titleText: String,
    menuItems: Array,
    logoutEvent: Function
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 100%;
  // background: #001529;
  background: rgb(47, 99, 185);
  display: flex;
  justify-content: space-between;

  &-title {
    justify-content: flex-start;
    width: 280px;
    flex: none;
  }
  &-user {
    justify-content: flex-end;
    width: 200px;
    flex: none;
  }
  &-menu {
    flex-grow: 1;
    // flex-basis: 228 288;
    overflow: auto;
  }
}
</style>
