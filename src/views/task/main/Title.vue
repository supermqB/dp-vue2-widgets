<template>
  <div class="task-main-title">
    <div class="task-aside-title__text">{{parentInfo.title}} / {{parentInfo.type}}</div>
  </div>
</template>

<script>
export default {
  name: 'TaskAssignMainTitle',
  data() {
    return {
    }
  },
  computed: {
    parentInfo() {
      return this.$store.getters['task/parentInfo']
    }
  }
}
</script>
<style lang="scss" scoped>
.task-main {
  &-title {
    box-sizing: border-box;
    height: 40px;
    padding: 10px 6px;
    display: flex;
    justify-content: space-between;
    &__text {
      font-size: 15px;
      color: rgba(0, 0, 0, 0.65);
    }

    &__buttons {
      padding: 2px 0;
      display: flex;
      justify-content: space-between;
      .icon-btn {
        width: 16px;
        height: 16px;
        display: block;
        cursor: pointer;
      }
      .icon-btn + .icon-btn {
        margin-left: 6px;
      }
    }
  }
}
</style>
