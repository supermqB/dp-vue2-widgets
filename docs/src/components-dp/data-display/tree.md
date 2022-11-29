# Tree 树形控件

该组件可以使用 ElementUI 里 Tree 内部传参和方法。
可以在 data 里配置 state(是否单个显示红点标识)、number(右侧数字)、btns(按钮或图标集合)，也可以使用默认插槽或具名插槽处理业务逻辑，使用方式可以看以下示例。

### 示例

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
          'icon-class': 'el-icon-menu' // 自定义树节点的图标
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
            children: [],
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

### 参数说明

| 参数               | 说明                                 | 类型           | 可选值 | 默认值                     |
| ------------------ | ------------------------------------ | -------------- | ------ | -------------------------- |
| data               | 展示数据                             | array          | -      | -                          |
| bind               | 其他传参                             | object         | -      | -                          |
| nodeKey            | 每个树节点用来作为唯一标识的属性     | string         | -      | id                         |
| expandOnClickNode  | 是否在点击节点的时候展开或者收缩节点 | boolean        | -      | true                       |
| defaultExpandAll   | 是否默认展开所有节点                 | boolean        | -      | false                      |
| indent             | 相邻级节点间的水平缩进，单位为像素   | number         | -      | 12                         |
| showState          | 是否显示状态标识                     | boolean        | -      | true                       |
| numTransform       | 是否进行数字转换                     | boolean        | -      | true                       |
| slotWidth          | 右侧插槽宽度                         | string         | -      | auto                       |
| allowSelectNonleaf | 是否允许选中非叶节点                 | boolean        | -      | false                      |
| onNodeSelected     | 节点被点击时的回调                   | function(node) | -      | 参数为：该节点所对应的对象 |
