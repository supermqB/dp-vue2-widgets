<template>
  <div
    ref="popup"
    v-show="visible"
    class="popupWrap"
    :style="{
      ...popupPos,
      ...popupSize
    }"
  >
    <i class="anchor" :class="[placement]" :style="anchorOffset" />
    <div v-if="visible" class="popup">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { getRect } from '@/utils/dom'
const [TOP, BOTTOM, LEFT, RIGHT] = ['top', 'bottom', 'left', 'right']
export default {
  props: {
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
    },
    placement: {
      type: String,
      default: BOTTOM
    },
    offset: {
      type: Number,
      default: 0
    },
    space: {
      type: Number,
      default: 0
    },
    baseWindow: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    popupSize() {
      if (!this.width * this.height) return {}
      return {
        width: `${this.width}px`,
        height: `${this.height}px`
      }
    }
  },
  data() {
    return {
      visible: false,
      popupPos: {},
      anchorOffset: {}
    }
  },
  mounted() {
    if (!this.baseWindow) {
      const popupParentNode = this.getPopupParentNode()
      popupParentNode.style.transform = 'rotate(0deg)'
    }
  },
  methods: {
    getPopupParentNode() {
      return this.$refs.popup.parentNode
    },
    getTargetRect(targetNode) {
      const getPopupParentNode = this.getPopupParentNode()
      const popupParentRect = getRect(getPopupParentNode)
      const { x, y, w, h } = getRect(targetNode)
      return {
        w,
        h,
        x: x - popupParentRect.x,
        y: y - popupParentRect.y
      }
    },
    open(target) {
      this.visible && this.close()
      setTimeout(() => {
        this.visible = true
        document.addEventListener('click', this.onOutClick)
        this.setPopupPos(target)
      })
    },
    close() {
      this.visible = false
      this.$emit('onClose')
      document.removeEventListener('click', this.onOutClick)
    },
    setPopupPos(target) {
      const targetRect = target
        ? this.getTargetRect(target)
        : { w: 0, h: 0, x: 0, y: 0 }
      const width = this.$refs.popup.style.width.slice(0, -2) * 1
      const height = this.$refs.popup.style.height.slice(0, -2) * 1
      const { popupPos, anchorOffset } = this[`${this.placement}Style`]({
        ...targetRect,
        width,
        height,
        offset: this.offset
      })
      this.popupPos = popupPos
      this.anchorOffset = anchorOffset
    },
    onOutClick(e) {
      if (!this.visible || !this.$refs.popup) return
      if (!this.$refs.popup.contains(e.target)) {
        this.close()
        // this.$emit('onClose')
      }
    },
    leftStyle({ x, y, w, h, offset, width, height }) {
      const top = Math.max(y + h / 2 - height / 2 + offset, 0)
      return {
        popupPos: {
          left: `${x - width - (10 + this.space)}px`,
          top: `${top}px`
        },
        anchorOffset: {
          top: `${top > 0 ? height / 2 - 5 - offset : y + h / 2 - 5}px`
        }
      }
    },
    rightStyle({ x, y, w, h, offset, height }) {
      const top = Math.max(y + h / 2 - height / 2 + offset, 0)
      return {
        popupPos: {
          left: `${x + w + (10 + this.space)}px`,
          top: `${top}px`
        },
        anchorOffset: {
          top: `${top > 0 ? height / 2 - 5 - offset : y + h / 2 - 5}px`
        }
      }
    },
    topStyle({ x, y, w, h, offset, width, height }) {
      const left = Math.max(x + w / 2 - width / 2 + offset, 0)
      return {
        popupPos: {
          left: `${left}px`,
          top: `${y - height - 0.5 * h - this.space}px`
        },
        anchorOffset: {
          left: `${left > 0 ? width / 2 - 5 - offset : x + w / 2 - 5}px`
        }
      }
    },
    bottomStyle({ x, y, w, h, offset, width }) {
      const left = Math.max(x + w / 2 - width / 2 + offset, 0)
      return {
        popupPos: {
          left: `${left}px`,
          top: `${y + 1.5 * h + this.space}px`
        },
        anchorOffset: {
          left: `${left > 0 ? width / 2 - 5 - offset : x + w / 2 - 5}px`
        }
      }
    }
  }
}
</script>

<style scoped lang="scss">
.popupWrap {
  position: fixed;
  padding: 1px;
  min-width: 50px;
  border: 1px solid #eee;
  border-radius: 4px;
  background: #ffffff;
  border: 1px solid #e4e7ed;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.06);
  z-index: 100;
}

.popup {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.anchor {
  display: inline-block;
  height: 10px;
  width: 10px;
  background-color: #fff;
  border: 1px solid #eee;
  position: absolute;
  transform: rotate(45deg);
  &.bottom {
    border-right: 0;
    border-bottom: 0;
    top: -5px;
  }
  &.left {
    border-left: 0;
    border-bottom: 0;
    right: -6px;
  }
  &.right {
    border-right: 0;
    border-top: 0;
    left: -6px;
  }
  &.top {
    border-left: 0;
    border-top: 0;
    bottom: -5px;
  }
}
</style>
