<template>
  <div class="header-menu">
    <dp-header-nav
      :menu-items="menuItems"
      :active-index="activeIndex"
      @select="handleSelect"
    ></dp-header-nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderMenu',
  data() {
    return {
      menuItems: [
        {
          value: 'value',
          label: '值域'
        },
        {
          value: 'data_element',
          label: '数据元'
        },
        {
          value: 'mdm',
          label: '主索引'
        },

        {
          value: 'event_model',
          label: '事件模型'
        },
        {
          value: 'bwd',
          label: '业务模型'
        },
        {
          value: 'docs',
          label: '文献库',
          children: [
            {
              value: 'docs/index',
              label: '文献检索'
            },
            {
              value: 'docs/list',
              label: '文献明细'
            }
          ]
        }
      ]
    }
  },
  computed: {
    activeIndex() {
      return this.$route.name
    }
  },
  methods: {
    handleSelect(idx) {
      if (idx === 'docs/summary') {
        this.$router.push({
          name: idx,
          params: {
            identifier: 'S31990001'
          }
        })
      } else {
        this.$router.push({ name: idx })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.header-menu {
  text-align: center;
}
// .header-menu {
// background: rgb(210, 41, 41);
// }

// .el-menu-item,
// .el-submenu ::v-deep .el-submenu__title {
//   width: 120px;
//   height: 48px;
//   line-height: 48px;
//   text-align: center;
// }
//
</style>
<style lang="scss">
// .submenu-popper .el-menu--popup {
//   min-width: auto;
// }
</style>
