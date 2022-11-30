<template>
  <el-table-column  v-bind="item" :show-overflow-tooltip="true">
    <template v-if="item.header" slot="header">
      <span :style="{ 'margin-right': '5px' }">{{ item.label }}</span>
      <el-tooltip effect="dark" :content="item.header.content" placement="top">
        <i class="el-icon-warning-outline"></i>
      </el-tooltip>
    </template>
    <template v-if="item.children">
      <tableColumn v-for="i in item.children" :key="i.prop" :item="i" ></tableColumn>
    </template>
  </el-table-column>
</template>
<script>

export default {
  name: 'tableColumn',
  props: {
    item:  Object,
  },
  data() {
    return {}
  },
  methods: {},
}
</script>
<style lang='scss' scoped>

</style>