# Progress 进度条

::: demo

```html

  <dp-progress :percentage="50"></dp-progress>
  <dp-progress :percentage="100" :format="format"></dp-progress>
  <dp-progress :percentage="100" status="success"></dp-progress>
  <dp-progress :percentage="100" status="warning"></dp-progress>
  <dp-progress :percentage="50" status="exception"></dp-progress>

<script>
  export default {
    methods: {
      format(percentage) {
        return percentage === 100 ? '满' : `${percentage}%`
      },
    },
  }
</script>
```

:::
