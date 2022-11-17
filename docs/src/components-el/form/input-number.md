# InputNumber 计数器

::: demo

```html

  <dp-input-number
    v-model="num"
    @change="handleChange"
    :min="1"
    :max="10"
    label="描述文字"
  ></dp-input-number>

<script>
  export default {
    data() {
      return {
        num: 1,
      }
    },
    methods: {
      handleChange(value) {
        console.log(value)
      },
    },
  }
</script>
```

:::
