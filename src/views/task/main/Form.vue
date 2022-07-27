<template>
  <div class="task-main-form">
    <div class="task-main-form__item">
      <label>任务名称22</label><el-input />
    </div>
    <div class="task-aside-form__item">
      <label>任务状态</label><el-input />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskAssignMainForm',
  data() {
    return { }
  }
}
</script>
<style lang="scss" scoped>
.task-main {
  &-form {
    display: flex;
    &__item {
      width: 200px;
    }
  }
}
</style>
