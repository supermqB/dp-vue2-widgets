<!-- <template>
  <dp-layout-container drag>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题22" />
        <dp-subtitle text="小标题22" />
      </div>
    </template>
    <template #main>
      <div class="section main">Main</div>
    </template>
  </dp-layout-container>
</template>

<script>
export default {}
</script>

<style></style> -->
<template>
  <div class="test-tag">
    <div class="big">
      <dp-tag type="start" size="big" @click="handleClick">新任务/待分配</dp-tag>

      <dp-tag type="process" size="big">审核/加工</dp-tag>

      <dp-tag type="recall" size="big">已撤回</dp-tag>

      <dp-tag type="done" size="big">已审核/已加工</dp-tag>
    </div>

    <div class="medium">
      <dp-tag type="start" size="medium">新任务/待分配</dp-tag>

      <dp-tag type="process" size="medium">审核/加工</dp-tag>

      <dp-tag type="recall" size="medium">已撤回</dp-tag>

      <dp-tag type="done" size="medium">已审核/已加工</dp-tag>
    </div>

    <div class="default">
      <dp-tag type="start">新任务/待分配</dp-tag>

      <dp-tag type="process">审核/加工</dp-tag>

      <dp-tag type="recall">已撤回</dp-tag>

      <dp-tag type="done">已审核/已加工</dp-tag>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: ['标签一', '标签二', '标签三'],
      val: ''
    }
  },
  methods: {
    // blurFn() {
    //   if (this.val === '') return
    //   this.arr.push(this.val)
    //   this.val = ''
    // },
    // handleClose(tag) {
    //   // 找到点击的是哪个
    //   let i = this.arr.findIndex(item => {
    //     return tag === item
    //   })
    //   // 删除之
    //   this.arr.splice(i, 1)
    // },
    handleClick(tag) {
      console.log('点击标签啦', tag)
    }
  }
}
</script>

<style scoped>
.test-tag {
  height: 100px;
  margin: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
</style>