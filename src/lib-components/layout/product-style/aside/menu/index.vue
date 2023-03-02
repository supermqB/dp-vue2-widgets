<template>
  <div :style="{ width: expanded ? '200px' : '80px' }" class="menu">
    <div>
      <el-button type="primary" @click="handleClick">
        {{ expanded ? '收起' : '展开' }}
      </el-button>
    </div>
    <br />
    <div>我是{{ expanded ? '展开的' : '收起的' }}菜单</div>
  </div>
</template>

<script>
export default {
  name: 'LayoutProductStyleAsideMenu',
  data() {
    return {
      expanded: true
    }
  },
  methods: {
    handleClick() {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style lang="scss" scoped>
.menu {
  height: 100%;
  width: 100%;
  // overflow: auto;

  background: #2f63b9;
  color: white;
  padding: 20px 6px;
  box-sizing: border-box;
}
</style>
