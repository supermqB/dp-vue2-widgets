# avatar 头像

::: demo

```html

  <dp-row class="demo-avatar demo-basic">
    <dp-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <dp-avatar :size="50" :src="circleUrl"></dp-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <dp-avatar :size="size" :src="circleUrl"></dp-avatar>
        </div>
      </div>
    </dp-col>
    <dp-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <dp-avatar shape="square" :size="50" :src="squareUrl"></dp-avatar>
        </div>
        <div class="block" v-for="size in sizeList" :key="size">
          <dp-avatar shape="square" :size="size" :src="squareUrl"></dp-avatar>
        </div>
      </div>
    </dp-col>
  </dp-row>

<script>
  export default {
    data() {
      return {
        circleUrl:
          'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
        squareUrl:
          'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
        sizeList: ['large', 'medium', 'small'],
      }
    },
  }
</script>
```

:::
