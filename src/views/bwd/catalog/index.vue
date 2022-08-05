<template>
  <div class="bwdWrap">
    <Header title="BWD目录"></Header>
    <Tree :data="catalogList" class="tree"></Tree>
    <Bottom :labelList="['文件数', '字段数']"></Bottom>
  </div>
</template>

<script>
import Header from '@/components/header/Catalog.vue'
import Bottom from '@/components/bottom/Catalog.vue'
import Tree from '@/components/SideTree.vue'
export default {
  components: {
    Header, Tree, Bottom
  },
  data() {
    return {
      catalogList: [
        {
          id: '1',
          label: '医疗类',
          children: [
            {
              id: '1-1',
              label: '患者信息记录文件'
            },
            {
              id: '1-2',
              label: '挂号记录文件'
            },
            {
              id: '1-3',
              label: '入院登记文件'
            },
            {
              id: '1-4',
              label: '患者就诊记录文件'
            },
            {
              id: '1-5',
              label: '检验报告单主表文件'
            },
            {
              id: '1-6',
              label: '检验报告单丛表文件'
            },
            {
              id: '1-7',
              label: '检查报告单主表文件'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.bwdWrap {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tree {
  flex-grow: 1;
  overflow: auto;
}
</style>
