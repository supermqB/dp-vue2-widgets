<template>
  <div>
    <span v-if="currentState === RUNNINGSTATE" class="status running">已启动</span>
    <span v-else-if="currentState === EDITINGSTATE" class="status editing">编辑中</span>
  </div>
</template>

<script>
import { RUNNINGSTATE, EDITINGSTATE } from '@/utils/const'
export default {
  props: {
    currentState: {
      type: String,
      default: ''
    }
  },
  created() {
    this.RUNNINGSTATE = RUNNINGSTATE
    this.EDITINGSTATE = EDITINGSTATE
  }
}
</script>

<style scoped lang="scss">
.status {
  width: 46px;
  height: 18px;
  display: inline-block;
  margin-top: 1px;
  margin-left: 10px;
  line-height: 18px;
  text-align: center;
  border-radius: 10px;
  font-size: 10px;
  &.running {
    color: #67C23A;
    background-color: rgba(103,194,58,0.2);
  }
  &.editing {
    color: #EB9E05;
    background-color: rgba(235,158,5,0.2)
  }
}
</style>