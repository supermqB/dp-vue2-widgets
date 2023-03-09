<template>
  <div class="login-page__bg">
    <div id="canvas_box"></div>
  </div>
</template>

<script>
// import '../utils/waves'

export default {
  name: 'LoginWaves',
  mounted() {
    this.init()
  },
  methods: {
    init() {
      const Waves = require('../utils/waves')
      // console.log({ Waves })
      var waves = new Waves('#canvas_box', {
        resize: true,
        waves: 2,
        width: 300
      })
      waves.animate()
    }
  }
}
</script>

<style>
.login-page__bg {
  width: 100%;
  height: 100%;
  background-color: #000;
  overflow: hidden;
}

#canvas_box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
