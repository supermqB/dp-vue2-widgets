<template>
  <div>
    <div>数据元</div>
    <div>
      <el-input
        placeholder="请搜索"
        suffix-icon="el-icon-search"
        v-model="search"
      >
      </el-input>
    </div>
    <div>
      <el-tree
        :data="grouptree"
        show-checkbox
        node-key="id"
        :props="{ children: 'children', label: 'label' }"
      >
      </el-tree>
    </div>
    <div>
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
  })
}
</script>
