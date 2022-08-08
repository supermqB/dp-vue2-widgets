export function keysObject(ar, keyName) {
  let re = {}
  ar.forEach(item => {
    re[item[keyName]] = ''
  })
  return re
}

export function isEmpty(val) {
  if (val == null) return true
  if (typeof val == 'string' && val.trim() == '') {
    return true
  }
  return false
}

export function toFixedNumStr(num, digits) {
  let numArr = (num + '').split('')
  return [...new Array(digits - numArr.length).fill(0), ...numArr].join('')
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}
