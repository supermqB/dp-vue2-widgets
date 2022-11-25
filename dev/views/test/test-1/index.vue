<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题" />
        <dp-subtitle text="小标题" />
        <dp-search-bar
          class="searchBar"
          v-model="form"
          placeholder="请输入名称检索"
          @onSearch="onSearchCtlg"
        />
        <div>form: {{ form }}</div>
        <!-- <dp-side-catalog
          class="treeNodeInfo"
          ref="tree"
          @onClick="handleNodeClick"
          :data="treeList"
          :currentNodeKey="currentNodeKey"
        /> -->
      </div>
    </template>
    <template #main>
      <div class="section main">Main</div>
    </template>
  </dp-layout-container>
</template>

<script>
export default {
  data() {
    return {
      form: {},
      treeList: [
        {
          id: '1593523894682050562',
          label: '上海市中医药大学附属曙光医院-专用引擎',
          state: 0,
          engineId: '1593523894682050562',
          engineName: '上海市中医药大学附属曙光医院-专用引擎',
          engineState: '0',
          ip: null,
          defaultEngine: 1
        },
        {
          id: '1593523894682050561',
          label: '通用引擎',
          state: 0,
          engineId: '1593523894682050561',
          engineName: '通用引擎',
          engineState: '0',
          ip: null,
          defaultEngine: 0
        }
      ],
      currentNodeKey: '1593523894682050561'
    }
  },
  methods: {
    handleNodeClick() {},
    onSearchCtlg(v, v2) {
      console.log({ v, v2 })
    }
  }
}
</script>

<style></style>
