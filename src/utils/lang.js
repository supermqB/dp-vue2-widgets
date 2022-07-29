export function keysObject(ar, keyName) {
  let re = {}
  ar.forEach(item => {
    re[item[keyName]] = ''
  })
  return re
}
