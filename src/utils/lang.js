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
