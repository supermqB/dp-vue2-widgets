<template>
  <div class="homePageWrap">
    <div class="header">
      <Breadcrumb baseLabel="首页"></Breadcrumb>
    </div>
    <div class="summary">
      <Summary :list="summaryList"></Summary>
    </div>
    <div class="detail">
      <el-tabs tab-position="right">
        <el-tab-pane v-for="(item, key) in summaryComponentList"
          :key="key"
          :label="item.label">
          <component :is="item.component"></component>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  import Bwd from './component/bwd.vue'
  import DataElement from './component/dataElement.vue'
  import Docs from './component/docs.vue'
  import Event from './component/event.vue'
  import Mdm from './component/mdm.vue'
  import Value from './component/value.vue'
  import Breadcrumb from '@/components/header/Breadcrumb.vue'
  import Summary from './component/summary.vue'

  import { summaryList, summaryComponentList } from './config'
  export default {
    components: {
      Bwd, DataElement, Docs, Event, Mdm, Value, 
      Breadcrumb, Summary
    },
    data() {
      return {
        summaryComponentList,
        summaryList,
      }
    }
  }
</script>

<style scoped lang="scss">
.homePageWrap {
  display: flex;
  flex-direction: column;
  height: 100%;
  .header {
    height: 41px;
    display: flex;
    padding: 0 10px;
    align-items: center;
    border-bottom: 1px solid #eee;
  }
  .summary {
    margin: 0 20px;
    padding: 15px 0;
    border-bottom: 1px solid #eee;
  }
  .detail {
    flex: 1;
    margin-top: 5px;
    margin-right: 40px;
    ::v-deep .el-tabs{
      margin-top: 20px;
    } 
  }
}
</style>