<template>
  <div class="wrap">
    <p>疑似列表</p>
    <Table
      :tableData="[]"
      :tableConfig="config">
    </Table>
  </div>
</template>

<script>
import Table from '@/components/GeneralTable.vue'
export default {
  components: {
    Table
  },
  data() {
    return {
      config: [
        {
          colConfig: {
            property: 'index1',
            label: '系统',
            minWidth: 55
          }
        },{
          colConfig: {
            property: 'name',
            label: '代码',
            minWidth: 55
          }
        },{
          colConfig: {
            property: 'state',
            label: '名称',
            minWidth: 70
          }
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-direction: column;
  p {
    height: 30px;
    margin: 7px 8px 0px 8px;
    padding-left: 3px;
    line-height: 30px;
    text-align: left;
    /* border: 1px solid #eee; */
  }
}
</style>