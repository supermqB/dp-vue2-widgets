<template>
  <el-table
    v-bind="$attrs"
    v-on="$listeners"
    height="100%"
    width="100%"
    highlight-current-row
    border
    stripe
    ref="dp_table"
  >
    <!-- 选择器列 -->
    <template v-if="selection">
      <column-selection :selectable="$attrs.selectable" />
    </template>

    <template v-for="col in columns">
      <column-common :key="col.colConfig.property" :col="col" />
    </template>
    <slot></slot>
  </el-table>
</template>
<script>
import ColumnSelection from '../column/Selection'
import ColumnCommon from '../column/Common'

export default {
  props: {
    // // 表格数据
    // data: {
    //   type: Array,
    //   default: () => []
    // },
    // 表格列配置
    columns: {
      type: Array,
      default: () => []
    },
    // 是否需要自动选中第一个
    selectFirst: {
      type: Boolean,
      default: false
    },
    // 是否显示选择器
    selection: {
      type: Boolean,
      default: false
    }
    // // 选择控件是否可操作 （function(row,index) => boolean)
    // selectable: {
    //   type: Function
    // }
  },
  components: { ColumnSelection, ColumnCommon },
  data() {
    return {
      selectedIdx: 0
    }
  },
  mounted() {},
  watch: {
    '$attrs.data'(v) {
      if (this.selectFirst) {
        // 自动选中表格第一行
        if (v.length > 0) {
          this.$refs.dp_table.setCurrentRow(v[0])
        }
      }
    }
  },
  methods: {}
}
</script>
