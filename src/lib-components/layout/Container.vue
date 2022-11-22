<template>
  <el-container class="dp-layout-container">
    <el-aside
      :width="asideLeftWidth"
      v-if="hasSlot.asideLeft"
      class="aside-left"
      :style="{ maxWidth: asideLeftMaxWidth }"
    >
      <slot name="asideLeft" />
    </el-aside>
    <el-main v-if="hasSlot.main">
      <template v-if="!hasSlot.mainBottom">
        <slot name="main" />
      </template>
      <template v-else>
        <el-container direction="vertical">
          <el-main>
            <slot name="main" />
          </el-main>
          <el-main :style="{ flexBasis: mainBottomHeight }">
            <slot name="mainBottom" />
          </el-main>
        </el-container>
      </template>
    </el-main>
    <el-aside
      :width="asideRightWidth"
      v-if="hasSlot.asideRight"
      class="aside-right"
    >
      <slot name="asideRight" />
    </el-aside>
  </el-container>
</template>

<script>
export default {
  name: 'DpLayoutContainer',
  props: {
    asideLeftWidth: {
      type: String,
      default: '25%'
    },
    asideLeftMaxWidth: {
      type: String,
      default: 'auto'
    },
    asideRightWidth: {
      type: String,
      default: '35%'
    },
    mainBottomHeight: {
      type: String,
      default: '50%'
    }
  },
  computed: {
    hasSlot() {
      return {
        asideLeft: typeof this.$slots.asideLeft !== 'undefined',
        asideRight: typeof this.$slots.asideRight !== 'undefined',
        main: typeof this.$slots.main !== 'undefined',
        mainBottom: typeof this.$slots.mainBottom !== 'undefined'
      }
    }
  }
}
</script>
<style lang="scss">
.el-container.dp-layout-container {
  height: 100%;
  background-color: #eef0f5;
  .el-aside,
  .el-main {
    background-color: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .el-main {
    padding: 0;
  }

  .el-aside.aside-left {
    border-right: 1px solid #e5e5e5;
  }

  .el-aside.aside-right {
    border-left: 1px solid #e5e5e5;
  }

  .el-container.is-vertical {
    height: 100%;
    background-color: #eef0f5;

    .el-main {
      padding: 0;
      background-color: #ffffff;
      flex-basis: 0%;
      flex-grow: 1;
      flex-shrink: 0;
      min-height: 0;
    }
    .el-main + .el-main {
      flex-grow: 0;
      flex-shrink: 1;
      flex-basis: 50%;
      min-height: 0;
      border-top: 1px solid #e5e5e5;
    }
  }
}
</style>
