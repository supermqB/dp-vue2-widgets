<template>
  <span
    class="menu-item"
    v-if="
      hasPermission(
        roles,
        item.meta && item.meta.permissions ? item.meta.permissions : []
      )
    "
  >
    <template v-if="!item.children || item.children.length == 0">
      <el-menu-item
        :index="item.value"
        :key="item.value"
        :redirect="item.redirect"
        ><span>{{ item.label }}</span></el-menu-item
      >
    </template>
    <template v-if="item.children && item.children.length > 0">
      <el-submenu
        :key="item.value"
        :index="item.value"
        popper-class="dp-header-nav--popup"
        :show-timeout="0"
        :hide-timeout="0"
      >
        <template slot="title"
          ><span>{{ item.label }}</span></template
        >
        <template v-for="subitem in item.children">
          <menuItem :item="subitem" :key="subitem.value" />
          <!-- <el-menu-item :key="subitem.value" :index="subitem.value">{{subitem.label}}</el-menu-item> -->
        </template>
      </el-submenu>
    </template>
  </span>
</template>

<script>
export default {
  name: 'menuItem',
  props: {
    item: Object
  },
  computed: {
    roles() {
      const authInfo = this.$store ? this.$store.getters['auth/info'] : false
      return authInfo && authInfo.roles ? authInfo.roles : []
    }
  },
  methods: {
    hasPermission(userRoles, routerPermissions) {
      if (
        !routerPermissions ||
        (routerPermissions.length && routerPermissions.length === 0)
      )
        return true
      let res = false
      userRoles.forEach(i => {
        if (routerPermissions.includes(i)) res = true
      })
      return res
    }
  }
}
</script>
