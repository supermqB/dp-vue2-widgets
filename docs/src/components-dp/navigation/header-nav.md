# HeaderNav 顶部导航菜单

::: demo

```html
<template>
  <div>
    <dp-header-nav
      :menu-items="menuItems"
      :active-index="activeIndex"
      @select="handleSelect"
    />
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menuItems: [
          {
            value: 'menu-1',
            label: '最多五个字'
          },
          {
            value: 'menu-2',
            label: '菜单二',
            children: [
              {
                value: 'menu-2-1',
                label: '最多五个字'
              },
              {
                value: 'menu-2-2',
                label: '菜单二-2'
              },
              {
                value: 'menu-2-3',
                label: '菜单三-3'
              }
            ]
          }
        ],
        activeIndex: 'menu-1'
      }
    },
    methods: {
      handleSelect(index, indexPath, item) {
        console.log({ index, indexPath, item })
      }
    }
  }
</script>
```

:::
