<template>
  <transition name="app-fade" mode="out-in">
    <router-view></router-view>
  </transition>
</template>
<script>
export default {
  name: 'AppMain'
}
</script>
<style>
.app-fade-enter {
  opacity: 0;
}
.app-fade-leave {
  opacity: 1;
}
.app-fade-enter-active {
  transition: opacity 0.1s;
}
.app-fade-leave-active {
  opacity: 0;
  transition: opacity 0.1s;
}
</style>
