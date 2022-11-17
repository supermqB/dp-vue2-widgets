# Badge 标记

::: demo

```html

  <dp-badge :value="12" class="item">
    <dp-button size="small">评论</dp-button>
  </dp-badge>
  <dp-badge :value="3" class="item">
    <dp-button size="small">回复</dp-button>
  </dp-badge>
  <dp-badge :value="1" class="item" type="primary">
    <dp-button size="small">评论</dp-button>
  </dp-badge>
  <dp-badge :value="2" class="item" type="warning">
    <dp-button size="small">回复</dp-button>
  </dp-badge>

  <dp-dropdown trigger="click">
    <span class="dp-dropdown-link">
      点我查看
      <i class="dp-icon-caret-bottom dp-icon--right"></i>
    </span>
    <dp-dropdown-menu slot="dropdown">
      <dp-dropdown-item class="clearfix">
        评论
        <dp-badge class="mark" :value="12" />
      </dp-dropdown-item>
      <dp-dropdown-item class="clearfix">
        回复
        <dp-badge class="mark" :value="3" />
      </dp-dropdown-item>
    </dp-dropdown-menu>
  </dp-dropdown>

<style>
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
</style>
```

:::
