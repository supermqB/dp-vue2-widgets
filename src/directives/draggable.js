// v-draggable: 拖拽容器
export default {
  name: 'draggable',
  value: {
    bind(el, binding) {
      if (!binding.value) return // 如果false就不拖动了
      let bodyW = document.body.clientWidth // 获取父级的可是宽度
      let leftDom = el.children[0] // 获取左侧dom
      let dragDom = el.children[1] // 获取拖拽dom
      dragDom.style.cursor = 'ew-resize'
      dragDom.onmousedown = function (e) {
        dragDom.style.width = '3px'
        dragDom.style.background = 'rgb(47, 99, 185)'
        document.onmousemove = function (e) {
          e.stopPropagation()
          let x = e.pageX
          let minW = bodyW * 0.2
          let maxW = bodyW * 0.38
          if (x < minW) {
            x = minW
          } else if (x > maxW) {
            x = maxW
          }
          let widthProgress = parseInt((x / bodyW) * 100) + '%'
          leftDom.style.width = dragDom.style.left = widthProgress
        }
        document.onmouseup = function () {
          dragDom.style.width = '1px'
          dragDom.style.background = '#e5e5e5'
          document.onmousemove = document.onmouseup = null
        }
      }
    }
  }
}
