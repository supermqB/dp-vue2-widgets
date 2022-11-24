<template>
  <div class="expand_div">
    <transition name="app-fade" mode="out-in">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <transition name="app-fade" mode="out-in">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
  </div>
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
