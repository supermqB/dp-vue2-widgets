<template>
  <el-table-column v-bind="col.colConfig" show-overflow-tooltip>
    <template v-if="col.header" slot="header">
      <!-- 表头增加tooltip -->
      <span :style="{ 'margin-right': '5px' }">{{
        col.header.name || col.colConfig.label
      }}</span>
      <el-tooltip effect="dark" :content="col.header.content" placement="top">
        <i class="el-icon-warning-outline"></i>
      </el-tooltip>
    </template>

    <template
      #default="{ $index: rowIdx, row, column }"
      v-if="col.actions != null"
    >
      <component
        v-for="action in col.actions"
        :key="action.id"
        :is="action.type"
        v-model="row[action.id]"
        v-bind="typeProps(action.typeProps, row)"
        @click.native.prevent="
          rowAction({ rowIdx, row, column }, action.callback)
        "
      >
        {{ typeof action.name == 'function' ? action.name(row) : action.name }}
      </component>
    </template>
  </el-table-column>
</template>

<script>
export default {
  name: 'TableColumnCommon',
  props: {
    col: {
      type: Object
    }
  },
  methods: {
    rowAction({ rowIdx, row, column }, callback) {
      if (!callback) return
      callback(row.index, this.data, row)
    },
    typeProps(propDefs, row) {
      let props = {}
      for (let key in propDefs) {
        props[key] =
          typeof propDefs[key] == 'function'
            ? propDefs[key](row)
            : propDefs[key]
      }
      return props
    }
  }
}
</script>

<style></style>
