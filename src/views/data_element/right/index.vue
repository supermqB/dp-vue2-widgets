<template>
  <el-tabs
    type="card"
    stretch
    @tab-click="tabChanged"
    class="data_ele_ref_tabs"
  >
    <el-tab-pane label="质控规则"><CheckRuleVue /></el-tab-pane>
    <el-tab-pane label="引用明细"><RefDetailsVue /></el-tab-pane>
  </el-tabs>
</template>
<script>
import CheckRuleVue from './CheckRule.vue'
import RefDetailsVue from './RefDetails.vue'
export default {
  methods: {
    tabChanged() {}
  },
  components: {
    CheckRuleVue,
    RefDetailsVue
  }
}
</script>
<style lang="scss">
.data_ele_ref_tabs {
  height: 100%;
  overflow: hidden;
  .el-tabs__content {
    height: calc(100% - 40px);
    #pane-0 {
      height: 100%;
      .el-tab-pane {
        height: 100%;
      }
    }
  }
  &.el-tabs--card > .el-tabs__header {
    .el-tabs__nav {
      border-left: none;
    }
    margin: 0;
    #tab-0 {
      margin-right: 0px;
    }
    #tab-1 {
      margin-left: 0px;
    }
    .el-tabs__item {
      height: 28px;
      margin: 6px;
      line-height: 26px;
      border: 1px solid #dcdfe6;
      &.is-active {
        border: 1px solid #1890ff;
      }
    }
  }

  .el-tabs__item {
    font-size: 13px;
  }
}
</style>
