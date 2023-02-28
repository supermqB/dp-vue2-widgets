<template>
  <span :class="classArr" @click="handleClick">
    <slot></slot>
  </span>
</template>

<script>
const typeArr = ['start', 'process', 'recall', 'done', 'error'] // 标签类型数组
const size = ['big', 'medium', 'small'] // 标签大小数组
export default {
  name: 'DpStatus',
  props: {
    color: String, // 标签文字的颜色
    //bgColor: String, // 标签背景色
    //borderColor: String, // 标签边框颜色
    // 五种标签类型
    type: {
      type: String,
      validator(val) {
        return typeArr.includes(val) // 校验类型
      }
    },
    // 三种标签大小
    size: {
      type: String,
      validator(val) {
        return size.includes(val) // 校验大小
      }
    }
  },
  computed:{
    classArr(){
      return ['dp-tag', this.type, this.size]
    }

  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss" scoped>
$background-color: #ffffff;
$border-color: #ffffff;
/* 默认标签样式 */
.dp-tag {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 8px;
  color: #252525;
  background-color: $background-color;
  font-size: 13px;
  white-space: nowrap;
  height: auto;
  // border-color: $border-color;
}

/* 5种类型标签样式 */
.start {
  color: #0000ff;
}
.process {
  color: #d9001b;
}
.recall {
  color: #f59a23;
}
.done {
  color: #27b937;
}
.error {
  color: #f56c6c;
}

.big {
  font-size: 24px;
}
.medium {
  font-size: 18px;
}
</style>
