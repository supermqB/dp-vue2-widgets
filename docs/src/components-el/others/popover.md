# Popover 弹出框

::: demo

```html

  <dp-popover
    placement="top-start"
    title="标题"
    width="200"
    trigger="hover"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <dp-button slot="reference">hover 激活</dp-button>
  </dp-popover>

  <dp-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  >
    <dp-button slot="reference">click 激活</dp-button>
  </dp-popover>

  <!-- <dp-popover
    ref="popover"
    placement="right"
    title="标题"
    width="200"
    trigger="focus"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
  ></dp-popover>
  <dp-button v-popover:popover>focus 激活</dp-button> -->

  <dp-popover
    placement="bottom"
    title="标题"
    width="200"
    trigger="manual"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
    v-model="visible"
  >
    <dp-button slot="reference" @click="visible = !visible">手动激活</dp-button>
  </dp-popover>


<script>
  export default {
    data() {
      return {
        visible: false,
      }
    },
  }
</script>
```

:::
