import plugin, * as components from '@/entry.esm'
import utils from '@/utils'
import productStyle from '@/lib-product-style'

Object.entries(components).forEach(([componentName, component]) => {
  if (componentName !== 'default') {
    plugin[componentName] = component
  }
})

export default plugin
export * from '@/entry.esm'
export { utils, productStyle }
