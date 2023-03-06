<template>
  <dp-blocks
    direction="row"
    :class="['logo', collapsed ? 'logo-collapsed' : '']"
  >
    <dp-block v-if="!collapsed">
      <dp-blocks direction="row">
        <dp-block size="auto">
          <div class="logo-icon"></div>
        </dp-block>
        <dp-block no-border class="logo-title">{{ appName }}</dp-block>
      </dp-blocks>
    </dp-block>
    <dp-block v-else>
      <el-tooltip
        class="item"
        effect="dark"
        :content="appName"
        placement="right"
      >
        <div class="logo-icon"></div>
      </el-tooltip>
    </dp-block>
  </dp-blocks>
</template>

<script>
export default {
  name: 'LayoutProductStyleAsideLogo',
  props: {
    collapsed: Boolean
  },
  computed: {
    appName() {
      return process.env.VUE_APP_APP_NAME || '系统名称'
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  background: #3257a4;
  color: white;

  padding: 0 14px;
  align-items: center;
  box-sizing: border-box;
  border-start-end-radius: 25px;
  overflow: hidden;
  &-collapsed {
    padding-right: 2px;
    cursor: pointer;
  }
}
.logo-icon {
  width: 22px;
  height: 22px;
  background-image: url('./logo.png');
}
.logo-title {
  margin-left: 10px;
  font-size: 16px;
}
</style>
