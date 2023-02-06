# Tree 树形结构列表

该组件可以使用 ElementUI 里 Tree 内部传参和方法。
可以在 data 里配置 state(是否单个显示红点标识)、number(右侧数字)、btns(按钮或图标集合)，也可以使用默认插槽或具名插槽处理业务逻辑，使用方式可以看以下示例。

### 基础用法

::: demo

```html
<template>
  <dp-tree
    :data="treeData"
    :defaultExpandAll="defaultExpandAll"
    :slotWidth="slotWidth"
    :bind="bind"
    @onNodeSelected="onNodeSelected"
    @node-expand="handleExpand"
  >
    <template v-slot="{ data, node }">
      <i :class="data.icon" @click.stop="handleClick(data, node)"></i>
    </template>
    <template #el-button="{ data, row }">
      <span @click.stop="handleButton(data, row)">{{ row.name }}</span>
    </template>
  </dp-tree>
</template>

<script>
  export default {
    data() {
      return {
        defaultExpandAll: true,
        slotWidth: '80px',
        bind: {
          // 'icon-class': 'el-icon-menu' // 自定义树节点的图标
        },
        treeData: [
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
                    click: this.handleIcon
                  },
                  {
                    type: 'el-link',
                    name: '删除',
                    config: {
                      type: 'danger'
                    },
                    click: this.handleIcon
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
                    click: this.handleIcon
                  }
                ]
              }
            ]
          }
        ]
      }
    },
    methods: {
      handleClick(data, node) {
        console.log(data, '点击', node)
      },
      handleIcon(data, node) {
        console.log(data, '点击图标', node)
      },
      handleButton(data, row) {
        console.log(data, '点击按钮', row)
      },
      onNodeSelected(node) {
        console.log('点击当前行', node)
      },
      // 自定义方法
      handleExpand(item, node, self) {
        console.log(item, node, self, '节点展开')
      }
    }
  }
</script>
```

:::

### 列表带异常标识

::: demo

```html
<template>
  <dp-tree
    :data="treeData"
    :defaultExpandAll="true"
    :isList="true"
    :showState="true"
    @onNodeSelected="onNodeSelected"
  ></dp-tree>
</template>

<script>
  export default {
    data() {
      return {
        treeData: [
          {
            id: '1',
            label: '一级',
            state: true,
            number: 22300
          },
          {
            id: '2',
            label: '二级',
            state: false
          },
          {
            id: '3',
            label: '三级',
            state: false
          }
        ]
      }
    },
    methods: {
      onNodeSelected(node) {
        console.log('点击当前行', node)
      }
    }
  }
</script>
```

:::

### 列表不带异常标识

::: demo

```html
<template>
  <dp-tree
    :data="treeData"
    :defaultExpandAll="true"
    :isList="true"
    :showState="false"
    @onNodeSelected="onNodeSelected"
  ></dp-tree>
</template>

<script>
  export default {
    data() {
      return {
        treeData: [
          {
            id: '1',
            label: '一级',
            state: true
          },
          {
            id: '2',
            label: '二级',
            state: false
          },
          {
            id: '3',
            label: '三级',
            state: false
          }
        ]
      }
    },
    methods: {
      onNodeSelected(node) {
        console.log('点击当前行', node)
      }
    }
  }
</script>
```

:::

### Props

| 参数                 | 说明                                 | 类型     | 可选值 | 默认值  |
| -------------------- | ------------------------------------ | -------- | ------ | ------- |
| data                 | 展示数据                             | array    | -      | -       |
| node-key             | 每个树节点用来作为唯一标识的属性     | string   | -      | id      |
| expand-on-click-node | 是否在点击节点的时候展开或者收缩节点 | boolean  | -      | true    |
| default-expand-all   | 是否默认展开所有节点                 | boolean  | -      | false   |
| indent               | 相邻级节点间的水平缩进，单位为像素   | number   | -      | 12      |
| show-state           | 是否显示状态标识                     | boolean  | -      | true    |
| num-transform        | 是否进行数字转换                     | boolean  | -      | true    |
| num-transform-func   | 数字转换使用的方法                   | function | -      | unitFmt |
| slot-width           | 右侧插槽宽度                         | string   | -      | auto    |
| allow-select-nonleaf | 是否允许选中非叶节点                 | boolean  | -      | false   |
| current-node-key     | 当前选中的节点                       | string   | -      | -       |
| search-text          | 模糊搜索传值                         | string   | -      | -       |
| is-list              | 是否是纯列表                         | boolean  | -      | false   |

### Event

| 事件名称                   | 说明             | 回调参数       |
| -------------------------- | ---------------- | -------------- |
| node-selected              | 节点被选中时触发 | node: 节点内容 |
| onNodeSelected(不建议使用) | 节点被选中时触发 | node: 节点内容 |
