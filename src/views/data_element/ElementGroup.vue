<template>
  <div class="elegrp_wrapper">
    <div class="title">数据元</div>
    <div class="search_container">
      <el-input
        placeholder="请搜索"
        suffix-icon="el-icon-search"
        v-model="search"
      >
      </el-input>
    </div>
    <div class="grouptree">
      <el-tree
        :data="grouptree"
        :filter-node-method="filterTreeNode"
        show-checkbox
        default-expand-all
        node-key="id"
        :props="{ children: 'children', label: 'label' }"
        ref="grouptree"
      >
      </el-tree>
    </div>
    <div class="groupsum">
      <div v-for="item in groupSum">{{ item.key }} : {{ item.value }}</div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    search: '',
    groupSum: [
      { key: '选中', value: 154 },
      { key: '总数', value: 2148 }
    ],
    grouptree: [
      {
        id: '0',
        label: '全部',
        children: [
          {
            id: 'DE01',
            label: '标识类信息',
            children: [
              {
                id: 'DE01.01',
                label: '标识',
                children: [{ id: 'DE01.01.01', label: '标识' }]
              }
            ]
          },
          {
            id: 'DE02',
            label: '卫生服务对象信息',
            children: [
              {
                id: 'DE02.01',
                label: '人口及社会经济学特征',
                children: [
                  { id: 'DE02.01.01', label: '人口学' },
                  { id: 'DE02.01.02', label: '社会经济学特征' },
                  { id: 'DE02.01.03', label: '区划信息' }
                ]
              }
            ]
          }
        ]
      }
    ]
  }),
  watch: {
    search(val) {
      this.$refs.grouptree.filter(val)
    }
  },
  methods: {
    filterTreeNode(value, data) {
      console.log(value, data)
      if (!value) return true
      return data.label.indexOf(value) !== -1
    }
  }
}
</script>
<style lang="scss" scoped>
.elegrp_wrapper {
  display: flex;
  flex-direction: column;
  height: 100%;
  .title {
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.65);
    padding: 6px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
  }
  .search_container {
    height: 40px;
    padding: 6px;
    border-top: 1px solid #e5e5e5;
    border-bottom: 1px solid #e5e5e5;
    box-sizing: border-box;
  }
  .grouptree {
    flex-grow: 1;
  }
  .groupsum {
    font-size: 13px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 29px;
    border-top: 1px solid #e5e5e5;
  }
}
</style>
