const wan = 9999
const yi = 99999999
export function unitFmt(num) {
  if (num > yi) {
    return (num / 100000000).toFixed(2) + '亿'
  }
  if (num > wan) {
    return (num / 10000).toFixed(2) + '万'
  }
  return num + ''
}
export function stdTimeFmt(time) {
  if (time.indexOf('.') == -1) return time
  return time.substr(0, time.indexOf('.'))
}
