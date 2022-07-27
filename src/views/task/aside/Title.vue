<template>
  <div class="task-aside-title">
    <div class="task-aside-title__text">任务列表</div>
    <div class="task-aside-title__buttons">
      <!-- TODO  icon 统一处理 -->
      <img :src="iconSettingSrc" class="icon-btn" />
      <img :src="iconAddSrc" class="icon-btn" />
    </div>
  </div>
</template>

<script>
import IconSetting from '@img/common/icons/setting.svg'
import IconAdd from '@img/common/icons/add.svg'
export default {
  name: 'TaskAssignAsideTitle',
  data() {
    return {
      iconAddSrc: IconAdd,
      iconSettingSrc: IconSetting
    }
  }
}
</script>
<style lang="scss" scoped>
.task-aside {
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
