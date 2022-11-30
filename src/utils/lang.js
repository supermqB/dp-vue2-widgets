export function keysObject(ar, keyName, defaultValName) {
  let re = {}
  ar.forEach(item => {
    re[item[keyName]] = item[defaultValName]
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

export function toPrecentStr(num) {
  return `${parseInt(num * 100) / 100}%`
}

export function clone(obj) {
  return JSON.parse(JSON.stringify(obj))
}

export function keysClone(data, value) {
  Object.keys(data).forEach(key => {
    if (key in value) {
      data[key] = value[key]
    }
  })
}

export function getMax(value) {
  const prefix = value.slice(0, -2)
  const code = parseInt(value.slice(-2)) + 1
  return `${prefix}${code < 10 ? '0' + code.toString() : code}`
}

export function getMaxNumber(value, len) {
  let max = (parseInt(value) + 1).toString()
  for (let i = max.length; i < len; i++) {
    max = `0${max}`
  }
  return max
}

export function treeTraverse(tree, func, deep = true) {
  tree.forEach(node => {
    !deep && func(node)
    node.children && treeTraverse(node.children, func, deep)
    deep && func(node)
  })
}

export function treeFilter(tree, filterFunc, processFunc) {
  let filteredArr = []
  tree.forEach(node => {
    if (filterFunc(node)) {
      let tNode = { ...node }
      if (tNode.children) {
        tNode.children = treeFilter(tNode.children, filterFunc, processFunc)
        !tNode.children.length && delete tNode.children
      }
      filteredArr.push(!processFunc ? tNode : processFunc(tNode))
    }
  })
  return filteredArr
}

export function treeSome(tree, func) {
  return tree.some(node => {
    let nodeCheck = func(node)
    if (!nodeCheck && node.children) {
      return treeSome(node.children, func)
    }
    return nodeCheck
  })
}

export function treeFind(tree, func) {
  let findObj = null
  for (let node of tree) {
    if (func(node)) {
      return node
    }
    if (node.children) {
      findObj = treeFind(node.children, func)
    }
    if (findObj) return findObj
  }
}

export function getTreeParentNodes(tree, key) {
  if (!tree) return []
  for (let node of tree) {
    if (node.id === key) {
      return [node]
    } else {
      const res = getTreeParentNodes(node.children, key)
      if (res && res.length) return [node, ...res]
    }
  }
  return []
}

export function reMapTree(tree, func) {
  if (!tree) return null
  return tree.map(node => {
    const children = reMapTree(node.children, func)
    return Object.assign({}, func ? func(node) : node, {
      children
    })
  })
}

export function getFirstActiveNode(tree, type) {
  if (!tree) return null
  for (const node of tree) {
    if (node.state && (!type || type === node.type)) {
      return node
    } else {
      const res = getFirstActiveNode(node.children, type)
      if (res) return res
    }
  }
  return null
}
export function getFirstNode(tree, type) {
  if (!tree) return null
  for (const node of tree) {
    if (!type || type === node.type) {
      return node
    } else {
      const res = getFirstNode(node.children, type)
      if (res) return res
    }
  }
  return null
}

export function getFirstLeafNode(tree, type) {
  if (!tree) return null
  for (const node of tree) {
    if (!node.children && (!type || type === node.type)) {
      return node
    } else {
      const res = getFirstLeafNode(node.children, type)
      if (res) return res
    }
  }
  return null
}

export const objectKeysToNull = (obj, exclude = []) => {
  Object.keys(obj).forEach(key => {
    if (exclude.indexOf(key) === -1) {
      obj[key] = null
    }
  })
}

// export function getFirstLeaf(tree, checkFunc) {
//   if (!tree) return null
//   for (const node of tree) {
//     return !node.children && checkFunc(node)
//       ? getFirstLeaf(node.children, checkFunc)
//       : node
//   }
//   return tree.find(node => )
// }
