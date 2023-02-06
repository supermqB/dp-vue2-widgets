# Catalog 目录

目录(dp-cataolog)模块是一个由检索栏(dp-search-bar)和树形结构列表(dp-tree)这两个基础组件组合成的常用模块组件。

### 基础用法

::: demo

```html
<template>
  <dp-catalog :load="load" @node-selected="handleNodeSelected" />
</template>

<script>
  const { cloneDeep } = require('lodash')
  export default {
    data() {
      return {
        data: [
          {
            id: '1',
            label: '一级',
            children: [
              {
                id: '1-1',
                label:
                  '我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1我是一级1-1',
                children: [
                  {
                    id: '1-1-1',
                    label: '我是一级1-1-1',
                    icon: 'el-icon-delete'
                  }
                ],
                state: true,
                icon: 'el-icon-circle-plus-outline'
              },
              {
                id: '1-2',
                label: '我是一级1-2',
                children: [],
                state: false, // 是否显示标识
                btns: [
                  {
                    type: 'el-link',
                    name: '编辑',
                    config: {
                      type: 'primary'
                    },
                    click: this.handleIconClick
                  },
                  {
                    type: 'el-link',
                    name: '删除',
                    config: {
                      type: 'danger'
                    },
                    click: this.handleIconClick
                  }
                ] // 图标集合
              },
              {
                id: '1-3',
                label: '我是一级1-3',
                children: [],
                state: true,
                number: '200+'
              }
            ],
            state: true,
            number: 22300
          },
          {
            id: '2',
            label: '二级',
            children: [
              {
                id: '2-1',
                label: '我是二级1-1',
                state: true,
                btns: [
                  {
                    type: 'el-button',
                    name: '按钮',
                    config: {
                      size: 'mini'
                    },
                    click: this.handleIconClick
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      async load(params = { searchText: '' }) {
        const catalogFilter = (data, filterText, prop = 'label') => {
          return data.filter(v => {
            if (typeof v[prop] !== 'undefined') {
              if (typeof v.children !== 'undefined' && v.children.length > 0) {
                v.children = catalogFilter(v.children, filterText)
              }
              if (
                (v.children && v.children.length > 0) ||
                v[prop].indexOf(filterText) > -1
              ) {
                return true
              }
            }
            return false
          })
        }

        return await new Promise(resolve => {
          setTimeout(() => {
            const result = catalogFilter(
              cloneDeep(this.data),
              params.searchText
            )

            resolve(result)
          }, 500)
        })
      },
      handleIconClick(data, node) {
        console.log(data, '点击图标', node)
      },
      handleNodeSelected(node) {
        console.log('点击当前行', node)
      }
    }
  }
</script>
```

:::

### Props

| 参数 | 说明           | 类型                   | 可选值 | 默认值 |
| ---- | -------------- | ---------------------- | ------ | ------ |
| load | 加载数据的方法 | function(searchParams) | -      | -      |

### Events

| 事件名称      | 说明             | 回调参数       |
| ------------- | ---------------- | -------------- |
| node-selected | 节点被选中时触发 | node: 节点内容 |
