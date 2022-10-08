<template>
  <div class="header">
    <HeaderTitle class="header-title" />
    <HeaderMenu class="header-menu" />
    <HeaderUser class="header-user" />
  </div>
</template>

<script>
import HeaderTitle from './components/Title'
import HeaderMenu from './components/Menu'
import HeaderUser from './components/User'
export default {
  name: 'AppHeader',
  components: { HeaderTitle, HeaderMenu, HeaderUser }
}
</script>

<style lang="scss" scoped>
.header {
  background: #001529;
  display: flex;
  justify-content: space-between;

  &-title {
    justify-content: flex-start;
    width: 280px;
  }
  &-user {
    justify-content: flex-end;
    width: 200px;
    // flex-grow: 1;
  }
  &-menu {
    flex-grow: 1;
    // width: 500px;
  }
}
</style>
