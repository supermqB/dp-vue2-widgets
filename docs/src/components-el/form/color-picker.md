# ColorPicker 颜色选择器

::: demo

```html

  <div class="block">
    <span class="demonstration">有默认值</span>
    <dp-color-picker v-model="color1"></dp-color-picker>
  </div>
  <div class="block">
    <span class="demonstration">无默认值</span>
    <dp-color-picker v-model="color2"></dp-color-picker>
  </div>

<script>
  export default {
    data() {
      return {
        color1: '#409EFF',
        color2: null,
      }
    },
  }
</script>
```

:::
