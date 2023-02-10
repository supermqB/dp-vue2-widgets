<template>
  <div class="dp-search-form">
    <dp-form
      :configs="configsVisible"
      :model="model"
      inline
      class="form-visible"
    />
    <div
      class="display-more"
      v-if="configs.length > itemVisibleNum"
      :style="{ left: formVisibile + 6 + 'px' }"
    >
      <el-popover
        placement="bottom-end"
        width="300"
        trigger="click"
        v-model="moreFormVisible"
        :close-delay="0"
        popper-class="dp-search-form__popper"
      >
        <dp-form
          :configs="configsInvisible"
          :model="model"
          class="form-invisible"
          label-width="80px"
        />
        <el-button slot="reference">更多</el-button>
      </el-popover>
    </div>
    <dp-form ref="form" :configs="configs" :model="model" inline />
  </div>
</template>
<script>
import { debounce, cloneDeep } from 'lodash'
import elementResizeDetectorMaker from 'element-resize-detector'
export default {
  props: {
    // 表单项配置
    configs: Array,
    // 表单数据对象
    model: Object,
    // 触发change事件的防抖延迟时长(单位:毫秒ms)
    debounceWait: {
      type: Number,
      default: 200
    }
  },
  data() {
    return {
      changeEvent: null, // change 事件函数
      erd: null, // element-resize-detector实例
      itemVisibleNum: 0, // 直接可展示的表单项数量
      formVisibile: 0, // 直接可展示的表单宽度
      moreFormVisible: false // "更多"表单是否显示
    }
  },
  computed: {
    configsVisible() {
      return cloneDeep(this.configs).splice(0, this.itemVisibleNum)
    },
    configsInvisible() {
      return cloneDeep(this.configs).splice(
        this.itemVisibleNum,
        this.configs.length
      )
    }
  },
  mounted() {
    this.changeEvent = debounce(v => {
      this.$emit('change', v)
      if (this.moreFormVisible) this.moreFormVisible = false
    }, this.debounceWait)

    this.erd = elementResizeDetectorMaker()
    this.$nextTick(() => {
      // console.log({ s: this, t: document.getElementById('form') })
      this.erd.listenTo(this.$refs.form.$el, el => {
        // console.log({ el, ss: el.children })
        let cfgLen = this.configs.length // 配置项数量
        let w = el.offsetWidth // 容器宽度
        // console.log({ w, cfgLen })
        // console.log('========')
        // console.log('容器宽: ' + w)

        let itemVisibleNum = 0 // 直接可展示的表单项数
        let formVisibile = 0 // 直接可展示的表单宽度
        let addWidth = 0 // 累计的表单项宽度
        for (let i = 0; i < cfgLen; i++) {
          // console.log('表单项 - ' + i + ': ' + el.children[i].offsetWidth)
          addWidth += el.children[i].offsetWidth
          if (addWidth <= w - 72) {
            itemVisibleNum++
            formVisibile = addWidth - 12
          }
        }

        // console.log('表单项可展示数: ' + itemVisibleNum)
        this.itemVisibleNum = itemVisibleNum
        this.formVisibile = formVisibile
      })
    })
  },
  watch: {
    model: {
      handler(v) {
        this.changeEvent(v)
      },
      deep: true
    }
  }
}
</script>
<style lang="scss" scoped>
.dp-search-form {
  position: relative;
  height: 40px;
  overflow: hidden;
  ::v-deep {
    .el-form {
      .el-form-item {
        margin-bottom: 0;
        margin-right: 0;
        padding-right: 12px;
        &__label {
          padding-right: 6px;
        }
      }
      &:not(.form-visible) > *:nth-last-child(2) {
        padding-right: 0;
      }

      &.form-visible {
        > *:nth-last-child(1) {
          padding-right: 0;
        }
      }
    }
  }

  .display-more {
    position: absolute;
    top: 0;
    height: 40px;
    display: flex;
    align-items: center;
  }
}
</style>
<style lang="scss">
.dp-search-form__popper {
  .el-form {
    .el-form-item {
      margin-bottom: 0;
      &__label {
        padding-right: 6px;
        max-width: 110px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
  }
}
</style>
