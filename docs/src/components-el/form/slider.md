# Slider 滑块

::: demo

```html

  <div class="block">
    <span class="demonstration">默认</span>
    <dp-slider v-model="value1"></dp-slider>
  </div>
  <div class="block">
    <span class="demonstration">自定义初始值</span>
    <dp-slider v-model="value2"></dp-slider>
  </div>
  <div class="block">
    <span class="demonstration">隐藏 Tooltip</span>
    <dp-slider v-model="value3" :show-tooltip="false"></dp-slider>
  </div>
  <div class="block">
    <span class="demonstration">格式化 Tooltip</span>
    <dp-slider v-model="value4" :format-tooltip="formatTooltip"></dp-slider>
  </div>
  <div class="block">
    <span class="demonstration">禁用</span>
    <dp-slider v-model="value5" disabled></dp-slider>
  </div>


<script>
  export default {
    data() {
      return {
        value1: 0,
        value2: 50,
        value3: 36,
        value4: 48,
        value5: 42,
      }
    },
    methods: {
      formatTooltip(val) {
        return val / 100
      },
    },
  }
</script>
```

:::
