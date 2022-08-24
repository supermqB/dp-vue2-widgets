<template>
  <div class="suspectWrap">
    <p>疑似列表</p>
    <Table
      :tableData="suspectList"
      :tableConfig="config"
      :pageInfo="null"
      :isShowRadio="false"
      class="suspectTable">
    </Table>
  </div>
</template>

<script>
import Table from '@/components/GeneralTable.vue'
import { createNamespacedHelpers } from 'vuex'
const { mapState, mapGetters } = createNamespacedHelpers('value')
const config = [
  {
    colConfig: {
      property: 'system',
      label: '系统',
      minWidth: 55
    }
  },{
    colConfig: {
      property: 'code',
      label: '代码',
      minWidth: 55
    }
  },{
    colConfig: {
      property: 'name',
      label: '名称',
      minWidth: 70
    }
  }
]
export default {
  components: {
    Table
  },
  computed: {
    ...mapState(['task']),
    ...mapGetters(['suspectList'])
  },
  data() {
    return {
      config,
    }
  }
}
</script>

<style lang="scss" scoped>
.suspectWrap {
  height: 100%;
  display: flex;
  flex-direction: column;
  p {
    height: 30px;
    margin: 7px 8px 0px 8px;
    padding-left: 3px;
    line-height: 30px;
    text-align: left;
  }
}

.suspectTable {
  flex: 1;
}
</style>