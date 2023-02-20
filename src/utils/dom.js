export function getClientViewHeight() {
  return document.documentElement.clientHeight || document.body.clientHeight
}

export function getRect(domNode) {
  let { x, y, width: w, height: h } = domNode.getBoundingClientRect()
  return { x, y, w, h }
}
