# Catalog 目录

目录(dp-cataolog)模块是一个由树形结构列表(dp-tree)集成检索功能的常用模块组件。

顶部检索栏里默认包含一个名称为 name 的 text 输入框

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
            label: '目录 1',
            children: [
              {
                id: '1-1',
                label: '目录 1.1',
                children: [
                  {
                    id: '1-1-1',
                    label: '目录 1.1.1 (叶)'
                  },
                  {
                    id: '1-1-2',
                    label: '目录 1.1.2 (叶)'
                  },
                  {
                    id: '1-1-3',
                    label: '目录 1.1.3 (叶)'
                  }
                ],
                state: true
              },
              {
                id: '1-2',
                label: '目录 1.2',
                children: [],
                state: false // 是否显示标识
              },
              {
                id: '1.3',
                label: '目录 1.3',
                children: [
                  {
                    id: '1-3-1',
                    label: '目录 1.2.1 (叶)'
                  },
                  {
                    id: '1-3-2',
                    label: '目录 1.3.2 (叶)'
                  }
                ],
                state: true
              },
              {
                id: '1.4',
                label: '目录 1.4 (叶)'
              },
              {
                id: '1.5',
                label: '目录 1.5 (叶)'
              }
            ],
            state: true
          },
          {
            id: '2',
            label: '目录 2',
            children: [
              {
                id: '2-1',
                label: '目录 2.1 (叶)',
                state: true
              },
              {
                id: '2-2',
                label: '目录 2.2',
                children: [
                  {
                    id: '2.2.1',
                    label: '目录 2.2.1 (叶)'
                  },
                  {
                    id: '2.2.2',
                    label: '目录 2.2.2 (叶)'
                  }
                ],
                state: true
              },
              {
                id: '2-3',
                label: '目录 2.3 (叶)',
                state: true
              },
              {
                id: '2-4',
                label: '目录 2.4',
                children: []
              }
            ]
          }
        ]
      }
    },
    methods: {
      async load(params = {}) {
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
              params.name ? params.name : ''
            )

            resolve(result)
          }, 500)
        })
      },
      handleNodeSelected(node) {
        console.log('点击当前行', node)
      }
    }
  }
</script>
```

:::

### 增加检索条件

::: demo

```html
<template>
  <dp-catalog
    :load="load"
    @node-selected="handleNodeSelected"
    :search-configs="searchConfigs"
  />
</template>

<script>
  const { cloneDeep } = require('lodash')
  export default {
    data() {
      return {
        searchConfigs: [
          {
            type: 'el-select',
            id: 'region',
            elOptions: {
              clearable: true
            },
            width: '100px',
            options: [
              {
                label: '区域一',
                value: 'shanghai'
              },
              {
                label: '区域二',
                value: 'beijing'
              }
            ]
          }
        ],
        data: [
          {
            id: '1',
            label: '目录 1',
            children: [
              {
                id: '1-1',
                label: '目录 1.1',
                children: [
                  {
                    id: '1-1-1',
                    label: '目录 1.1.1 (叶)'
                  },
                  {
                    id: '1-1-2',
                    label: '目录 1.1.2 (叶)'
                  },
                  {
                    id: '1-1-3',
                    label: '目录 1.1.3 (叶)'
                  }
                ],
                state: true
              },
              {
                id: '1-2',
                label: '目录 1.2',
                children: [],
                state: false // 是否显示标识
              },
              {
                id: '1.3',
                label: '目录 1.3',
                children: [
                  {
                    id: '1-3-1',
                    label: '目录 1.2.1 (叶)'
                  },
                  {
                    id: '1-3-2',
                    label: '目录 1.3.2 (叶)'
                  }
                ],
                state: true
              },
              {
                id: '1.4',
                label: '目录 1.4 (叶)'
              },
              {
                id: '1.5',
                label: '目录 1.5 (叶)'
              }
            ],
            state: true
          },
          {
            id: '2',
            label: '目录 2',
            children: [
              {
                id: '2-1',
                label: '目录 2.1 (叶)',
                state: true
              },
              {
                id: '2-2',
                label: '目录 2.2',
                children: [
                  {
                    id: '2.2.1',
                    label: '目录 2.2.1 (叶)'
                  },
                  {
                    id: '2.2.2',
                    label: '目录 2.2.2 (叶)'
                  }
                ],
                state: true
              },
              {
                id: '2-3',
                label: '目录 2.3 (叶)',
                state: true
              },
              {
                id: '2-4',
                label: '目录 2.4',
                children: []
              }
            ]
          }
        ]
      }
    },
    methods: {
      async load(params = {}) {
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
        console.log('检索参数:' + JSON.stringify(params))
        return await new Promise(resolve => {
          setTimeout(() => {
            const result = catalogFilter(
              cloneDeep(this.data),
              params.name ? params.name : ''
            )

            resolve(result)
          }, 500)
        })
      },
      handleNodeSelected(node) {
        console.log('点击当前行2', node)
      }
    }
  }
</script>
```

:::

### Props

| 参数           | 说明                                                    | 类型             | 可选值 | 默认值 |
| -------------- | ------------------------------------------------------- | ---------------- | ------ | ------ |
| search-configs | 检索表单项配置                                          | array            | -      | -      |
| search-model   | 检索表单数据对象                                        | object           | -      | -      |
| load           | 加载数据的方法<br/>方法参数 params 里默认包含 name 参数 | function(params) | -      | -      |

### Events

| 事件名称      | 说明             | 回调参数       |
| ------------- | ---------------- | -------------- |
| node-selected | 节点被选中时触发 | node: 节点内容 |
