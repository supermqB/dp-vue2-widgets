<template>
  <div class="header-menu">
    <dp-header-nav
      :menu-items="items"
      :active-index="activeIndex"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import DpHeaderNav from '../../../header-nav'
export default {
  name: 'HeaderMenu',
  components: { DpHeaderNav },
  props: {
    items: Array
  },
  computed: {
    activeIndex() {
      return this.$route.name
    }
  },
  methods: {
    handleSelect(idx) {
      this.$router.push({ name: idx })
    }
  }
}
</script>

<style lang="scss" scoped>
.header-menu {
  text-align: center;
}
</style>
