export default function (newValue, oldValue) {
  const { curPage: newCurPage, pageSize: newPageSize } = newValue
  const { curPage: oldCurPage, pageSize: oldPageSize } = oldValue
  Object.assign(oldValue, newValue)
  // 是否需要重新请求
  return newCurPage !== oldCurPage || newPageSize !== oldPageSize
}
