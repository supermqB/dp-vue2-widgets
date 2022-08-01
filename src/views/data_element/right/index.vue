<template>
  <el-tabs type="card" stretch @tab-click="tabChanged" class="data_ele_ref_tabs">
    <el-tab-pane label="质控规则"><CheckRuleVue/></el-tab-pane>
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
    CheckRuleVue, RefDetailsVue
  }
}
</script>
<style lang="scss">
.data_ele_ref_tabs{
    .el-tabs__header{
        margin: 0;
    }
    .el-tabs__item {
        font-size: 13px;
    }
}
</style>
