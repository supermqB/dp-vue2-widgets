<template>
  <el-table-column type="selection" v-bind="$attrs" :width="width" />
</template>

<script>
export default {
  name: 'TableColumnSelection',
  props: {
    width: {
      type: Number,
      default: 30
    }
  }
}
</script>
