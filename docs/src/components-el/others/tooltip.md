# Tooltip 文字提示

::: demo

```html

  <div class="box">
    <div class="top">
      <dp-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="top-start"
      >
        <dp-button>上左</dp-button>
      </dp-tooltip>
      <dp-tooltip
        class="item"
        effect="dark"
        content="Top Center 提示文字"
        placement="top"
      >
        <dp-button>上边</dp-button>
      </dp-tooltip>
      <dp-tooltip
        class="item"
        effect="dark"
        content="Top Right 提示文字"
        placement="top-end"
      >
        <dp-button>上右</dp-button>
      </dp-tooltip>
    </div>
    <div class="left">
      <dp-tooltip
        class="item"
        effect="dark"
        content="Left Top 提示文字"
        placement="left-start"
      >
        <dp-button>左上</dp-button>
      </dp-tooltip>
      <dp-tooltip
        class="item"
        effect="dark"
        content="Left Center 提示文字"
        placement="left"
      >
        <dp-button>左边</dp-button>
      </dp-tooltip>
      <dp-tooltip
        class="item"
        effect="dark"
        content="Left Bottom 提示文字"
        placement="left-end"
      >
        <dp-button>左下</dp-button>
      </dp-tooltip>
    </div>

    <div class="right">
      <dp-tooltip
        class="item"
        effect="dark"
        content="Right Top 提示文字"
        placement="right-start"
      >
        <dp-button>右上</dp-button>
      </dp-tooltip>
      <dp-tooltip
        class="item"
        effect="dark"
        content="Right Center 提示文字"
        placement="right"
      >
        <dp-button>右边</dp-button>
      </dp-tooltip>
      <dp-tooltip
        class="item"
        effect="dark"
        content="Right Bottom 提示文字"
        placement="right-end"
      >
        <dp-button>右下</dp-button>
      </dp-tooltip>
    </div>
    <div class="bottom">
      <dp-tooltip
        class="item"
        effect="dark"
        content="Bottom Left 提示文字"
        placement="bottom-start"
      >
        <dp-button>下左</dp-button>
      </dp-tooltip>
      <dp-tooltip
        class="item"
        effect="dark"
        content="Bottom Center 提示文字"
        placement="bottom"
      >
        <dp-button>下边</dp-button>
      </dp-tooltip>
      <dp-tooltip
        class="item"
        effect="dark"
        content="Bottom Right 提示文字"
        placement="bottom-end"
      >
        <dp-button>下右</dp-button>
      </dp-tooltip>
    </div>
  </div>

<style>
  .box {
    width: 400px;

    .top {
      text-align: center;
    }

    .left {
      float: left;
      width: 60px;
    }

    .right {
      float: right;
      width: 60px;
    }

    .bottom {
      clear: both;
      text-align: center;
    }

    .item {
      margin: 4px;
    }

    .left .dp-tooltip__popper,
    .right .dp-tooltip__popper {
      padding: 8px 10px;
    }
  }
</style>
```

:::
