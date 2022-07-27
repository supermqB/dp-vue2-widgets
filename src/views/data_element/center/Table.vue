<template>
  <el-table
    :data="tableData"
    highlight-current-row
    @current-change="handleCurrentChange"
  >
    <el-table-column width="30">
      <template #default="{ $index: idx, row, column }">
        <el-radio v-model="selectedIdx" :label="row.index"></el-radio>
      </template>
    </el-table-column>
    <el-table-column v-for="col in tableConfig" v-bind="col.elConfig">
      <template
        #default="{ $index: idx, row, column }"
        v-if="col.actions != null"
      >
        <component
          v-for="action in col.actions"
          :is="action.type"
          v-bind="action.typeProps"
          @click.native.prevent="
            rowAction({ idx, row, column }, action.callback)
          "
        >
          {{ action.name }}
        </component>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data: () => ({
    tableConfig: [
      {
        elConfig: {
          property: 'index',
          label: '序号',
          width: 120
        }
      },
      {
        elConfig: {
          property: 'code',
          label: '编码',
          width: 120
        }
      },
      {
        elConfig: {
          property: '',
          label: '操作',
          width: 50
        },
        actions: [
          {
            type: 'el-button',
            typeProps: {
              type: 'text',
              round: false
            },
            name: '删除',
            callback: (idx, tableData) => {
              console.log(idx)
            }
          }
        ]
      }
    ],
    tableData: [
      {
        index: 1,
        code: 'DE01.00.10.001'
      },
      {
        index: 2,
        code: 'DE01.00.10.002'
      },
      {
        index: 3,
        code: 'DE01.00.10.003'
      },
      {
        index: 4,
        code: 'DE01.00.10.004'
      },
      {
        index: 5,
        code: 'DE01.00.10.005'
      },
      {
        index: 6,
        code: 'DE01.00.10.006'
      },
      {
        index: 7,
        code: 'DE01.00.10.007'
      }
    ],
    selectedIdx: 0
  }),
  methods: {
    rowAction({ idx, row, column }, callback) {
      callback(idx, this.tableData)
    },
    handleCurrentChange(rowData) {
      console.log(rowData)
      this.selectedIdx = rowData.index
    }
  }
}
</script>
