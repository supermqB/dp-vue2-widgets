<template>
  <dp-blocks class="main-table">
    <dp-block>
      <dp-table v-bind="tableProps" v-loading="loading" />
    </dp-block>
  </dp-blocks>
</template>

<script>
import tableColumnConfig from './tableColumn'

// import { createNamespacedHelpers } from 'vuex'

// const { mapState } = createNamespacedHelpers('table/demo1/data')
// console.log({ tableColumnConfig })
export default {
  data() {
    return {
      loading: false
    }
  },
  computed: {
    // ...mapState(['data', 'loading']),
    tableProps() {
      return {
        columns: tableColumnConfig,
        data: [], //this.data,
        selection: true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.main-table {
  padding: 0 6px;
}
</style>
