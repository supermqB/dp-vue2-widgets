
<script>
const typeArr = ['start', 'process', 'recall', 'done', 'error'] // 标签类型数组
const sizeType = ['big', 'medium', 'small'] // 标签大小数组
export default {
  name: 'DpTag',
  props: {
    color: String, // 标签文字的颜色
    bgColor: String, // 标签背景色
    borderColor: String, // 标签边框颜色
    // 五种标签类型
    type: {
      type: String,
      validator(val) {
        return typeArr.includes(val) // 校验类型
      }
    },
    // 三种标签大小
    sizeType: {
      type: String,
      validator(val) {
        return sizeType.includes(val) // 校验大小
      }
    }
  },
  methods: {
    handleClick(event) {
      this.$emit('click', event)
    }
  },
  // render函数jsx语法更加灵活
  render(h) {
    // 1. 准备样式类 class绑定classArr数组常用样式，style绑定props变量自定义样式
    const classArr = ['dp-tag', this.type, this.sizeType]
    // 2. 准备一个dom，并绑定相关class、style、event
    const tagEl = (
      <span
        class={classArr}
        style={{
          //backgroundColor: this.bgColor,
          color: this.color
          //borderColor: this.borderColor,
        }}
        on-click={this.handleClick}
      >
        {/* 默认插槽渲染内容即dp-tag标签中的文字 */}
        {this.$slots.default}
      </span>
    )
    // 3. 返回render渲染
    return tagEl
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
  cursor: pointer;
}

/* 5种类型标签样式 */
.start {
  color: #0000ff;
  border: 1px solid $border-color;
  background-color: $background-color;
}
.process {
  background-color: $background-color;
  border-color: $border-color;
  color: #d9001b;
}
.recall {
  background-color: $background-color;
  border-color: $border-color;
  color: #f59a23;
}
.done {
  background-color: $background-color;
  border-color: $border-color;
  color: #27b937;
}
.error {
  background-color: $background-color;
  border-color: $border-color;
  color: #f56c6c;
}

.big {
  font-size: 24px;
}
.medium {
  font-size: 18px;
}
</style>