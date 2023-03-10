<template>
  <dp-blocks
    direction="row"
    style="padding: 0 10px; align-items: center; box-sizing: border-box"
  >
    <dp-block>
      <el-button type="text" @click="handleClickCollapsed">
        {{ collapsed ? '展开' : '收起' }}
      </el-button>
    </dp-block>
    <dp-block size="200px">
      <el-button type="primary" @click="handleClickBack"> 返回首页 </el-button>
      <el-button type="primary" @click="handleClickExit"> 退出 </el-button>
    </dp-block>
  </dp-blocks>
</template>

<script>
export default {
  name: 'LayoutProductStyleMainHeader',
  props: {
    collapsed: Boolean
  },
  data() {
    return {
      portalUrl: 'http://172.16.29.16:12201'
    }
  },
  methods: {
    handleClickCollapsed() {
      this.$emit('update:collapsed', !this.collapsed)
    },
    handleClickBack() {
      window.location.href = this.portalUrl
    },
    handleClickExit() {
      if (confirm('确定要退出登录吗')) {
        this.$store.dispatch('auth/logout').then(r => {
          if (r.success) {
            window.location.href =
              window.location.origin + this.$router.history.base
          }
        })
      }
    }
  }
}
</script>
