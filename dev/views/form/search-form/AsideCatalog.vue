<template>
  <dp-catalog
    :search-configs="searchConfigs"
    :search-model="searchModel"
    :load="load"
    @node-selected="handleNodeSelected"
  />
</template>

<script>
import { cloneDeep } from 'lodash'

export default {
  data() {
    return {
      searchModel: {
        // name: ''
      },
      searchConfigs: [
        {
          type: 'el-select',
          // label: '活动名称',
          id: 'region',
          elOptions: {
            clearable: true
          },
          width: '100px',
          options: [
            {
              label: '区域一',
              value: 'shanghai'
            },
            {
              label: '区域二',
              value: 'beijing'
            }
          ]
        }
      ],
      data: [
        {
          id: '1',
          label: '目录 1',
          children: [
            {
              id: '1-1',
              label: '目录 1.1',
              children: [
                {
                  id: '1-1-1',
                  label: '目录 1.1.1 (叶)'
                },
                {
                  id: '1-1-2',
                  label: '目录 1.1.2 (叶)'
                },
                {
                  id: '1-1-3',
                  label: '目录 1.1.3 (叶)'
                }
              ],
              state: true
            },
            {
              id: '1-2',
              label: '目录 1.2',
              children: [],
              state: false // 是否显示标识
            },
            {
              id: '1.3',
              label: '目录 1.3',
              children: [
                {
                  id: '1-3-1',
                  label: '目录 1.2.1 (叶)'
                },
                {
                  id: '1-3-2',
                  label: '目录 1.3.2 (叶)'
                }
              ],
              state: true
            },
            {
              id: '1.4',
              label: '目录 1.4 (叶)'
            },
            {
              id: '1.5',
              label: '目录 1.5 (叶)'
            }
          ],
          state: true
        },
        {
          id: '2',
          label: '目录 2',
          children: [
            {
              id: '2-1',
              label: '目录 2.1 (叶)',
              state: true
            },
            {
              id: '2-2',
              label: '目录 2.2',
              children: [
                {
                  id: '2.2.1',
                  label: '目录 2.2.1 (叶)'
                },
                {
                  id: '2.2.2',
                  label: '目录 2.2.2 (叶)'
                }
              ],
              state: true
            },
            {
              id: '2-3',
              label: '目录 2.3 (叶)',
              state: true
            },
            {
              id: '2-4',
              label: '目录 2.4',
              children: []
            }
          ]
        }
      ]
    }
  },
  methods: {
    // load(v) {
    //   console.log({ load: JSON.stringify(v) })
    // },

    async load(params = {}) {
      console.log({ load: JSON.stringify(params) })

      const catalogFilter = (data, filterText, prop = 'label') => {
        return data.filter(v => {
          if (typeof v[prop] !== 'undefined') {
            if (typeof v.children !== 'undefined' && v.children.length > 0) {
              v.children = catalogFilter(v.children, filterText)
            }
            if (
              (v.children && v.children.length > 0) ||
              v[prop].indexOf(filterText) > -1
            ) {
              return true
            }
          }
          return false
        })
      }

      return await new Promise(resolve => {
        console.log('load start')
        setTimeout(() => {
          const result = catalogFilter(
            cloneDeep(this.data),
            params.name ? params.name : ''
          )
          console.log('load end')
          resolve(result)
        }, 1000)
      })
    },
    handleNodeSelected(v) {
      console.log('asidecatalog - node selected', v)
    }
  }
}
</script>

<style></style>
