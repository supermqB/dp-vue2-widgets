# Rate 评分

::: demo

```html

  <div class="block">
    <span class="demonstration">默认不区分颜色</span>
    <dp-rate v-model="value1"></dp-rate>
  </div>
  <div class="block">
    <span class="demonstration">区分颜色</span>
    <dp-rate v-model="value2" :colors="colors"></dp-rate>
  </div>

<script>
  export default {
    data() {
      return {
        value1: null,
        value2: null,
        colors: ['#99A9BF', '#F7BA2A', '#FF9900'], // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
      }
    },
  }
</script>
```

:::
