<template>
  <el-menu
    class="menu"
    @select="handleSelect"
    :collapse="collapsed"
    background-color="#3257a4"
    text-color="#ffffff"
    active-text-color="#ffffff"
    :collapse-transition="false"
    :active-index="activeIndex"
    :default-active="activeIndex"
  >
    <el-menu-item v-for="item in items" :index="item.value" :key="item.value">
      <!-- <i :class="icon el-icon-menu"></i> -->
      <div
        :class="['icon', 'icon-' + item.value]"
        :style="getIconStyle(item.meta && item.meta.icon)"
      ></div>
      <div class="label" slot="title">{{ item.label }}</div>
    </el-menu-item>
    <!-- <el-menu-item index="3" disabled>
      <i class="el-icon-document"></i>
      <span slot="title">导航三</span>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting"></i>
      <span slot="title">导航四</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
export default {
  name: 'LayoutProductStyleAsideMenu',
  props: {
    collapsed: Boolean,
    items: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    activeIndex() {
      // console.log(this.$route.name)
      return this.$route.name
    }
  },
  methods: {
    handleSelect(index, indexPath, ...r) {
      // console.log('handleSelect', index, indexPath, r)
      this.$router.push({ name: index })
    },
    getIconStyle(v) {
      let top = 0
      let left = 0
      if (v) {
        const [row, col] = v.split('-')
        if (row && col) {
          top = -(row - 1) * 16
          left = -(col - 1) * 16
        }
      }

      return { '--top': top + 'px', '--left': left + 'px' }
    }
  }
}
</script>

<style lang="scss" scoped>
.el-menu {
  border: none;
  ::v-deep {
    .el-menu-item {
      padding-left: 16px !important;
      padding: 0px 18px;
      height: 44px;
      // line-height: 44px;
      // padding: 0 16px;
      border: none;
      font-size: 14px;
      display: flex;
      align-items: center;

      &.is-active {
        background-color: #1890ff !important;
        .icon {
          opacity: 1;
        }
      }
      &:hover {
        background-color: #1890ff !important;
        color: #fff !important;
        .icon {
          opacity: 1;
        }
      }
      > .icon {
        // transition: none;
        flex: 0 0 16px;
        overflow: hidden;
        border: none;
        width: 16px;
        height: 16px;
        // background: #ff2299;

        // background-attachment: fixed;
      }
      > .el-tooltip > .icon {
        display: block;
        margin: 14px 0;
      }
      .icon {
        background-image: url('./icons.png');
        background-repeat: no-repeat;
        background-position-x: var(--left);
        background-position-y: var(--top);
        opacity: 0.7;
      }
      > .label {
        flex: 1;
        // display: inline-block;
        margin-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-all;
        vertical-align: initial !important;
      }

      .icon {
        width: 16px;
        height: 16px;
        font-size: 16px;
      }
      .el-tooltip {
        padding: 0 16px !important;
      }
    }
  }
}
</style>
