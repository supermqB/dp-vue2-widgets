# TimePicker 时间选择器

::: demo

```html

  <dp-time-select
    v-model="value"
    :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }"
    placeholder="选择时间"
  ></dp-time-select>

<script>
  export default {
    data() {
      return {
        value: '',
      }
    },
  }
</script>
```

:::
