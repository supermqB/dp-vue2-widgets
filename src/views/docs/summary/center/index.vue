<template>
  <div>
    <div class="headers">
      <Breadcrumb
        baseLabel="文献库"
        :currentLabel="title"></Breadcrumb>
      <div>
        <el-button type="primary">预览</el-button>
        <el-button type="primary">编辑</el-button>
        <el-button type="primary">下载</el-button>
      </div>
    </div>
    <Abstract></Abstract>
  </div>
</template>

<script>
import Abstract from './abstract.vue';
import Breadcrumb from '@/components/header/Breadcrumb.vue'

export default {
  components: { Abstract, Breadcrumb },
  data() {
    return {
      title: '2809名体检人群中高血压与Hp感染的关联性分析 '
    }
  }
}
</script>

<style lang="scss" scoped>
.headers {
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 41px;
  padding-left: 10px;
  padding-right: 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #E5E5E5;
}
</style>