<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题22" />
        <dp-subtitle text="小标题22" />
      </div>
    </template>
    <template #main>
      <dp-blocks>
        <dp-block>
          <template slot="header">
            <dp-title text="检索表单" />
          </template>
          <dp-blocks>
            <dp-block height="100px">
              <div>
                容器宽度
                <input
                  v-model.number="containerWidth"
                  type="number"
                  step="20"
                />
              </div>
              <!-- <div>
              表单域的最小宽度
              <input v-model.number="itemMinWidth" type="number" />
            </div>
            <div>
              表单域的最大宽度
              <input v-model.number="itemMaxWidth" type="number" />
            </div> -->
            </dp-block>
            <dp-block style="padding: 0 6px">
              <div
                :style="{
                  width: containerWidth + 'px',
                  border: '1px solid #333'
                }"
              >
                <dp-search-form
                  :configs="formConfigs"
                  :model="formModel"
                  @change="handleChange"
                />
              </div>
            </dp-block>
          </dp-blocks>
        </dp-block>
      </dp-blocks>
    </template>
  </dp-layout-container>
</template>

<script>
export default {
  data() {
    return {
      containerWidth: '800',
      formModel: {
        name: '222'
      },
      formConfigs: [
        {
          type: 'el-input',
          label: '活动名称12312312',
          id: 'name',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        },
        {
          type: 'el-select',
          label: '活动区2',
          id: 'regio2n',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          },
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
        },
        {
          type: 'el-input',
          // label: '活动名1',
          id: 'name1',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        },
        // {
        //   type: 'el-input',
        //   label: '活动名2',
        //   id: 'name2',
        //   elOptions: {
        //     clearable: true,
        //     placeholder: '请输入'
        //   }
        // },
        // {
        //   type: 'el-input',
        //   label: '活动名2',
        //   id: 'name25',
        //   elOptions: {
        //     clearable: true,
        //     placeholder: '请输入'
        //   }
        // },
        {
          type: 'el-input',
          label: '活动名2',
          id: 'name24',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        },
        // {
        //   type: 'el-input',
        //   label: '活动撒是',
        //   id: 'name23',
        //   elOptions: {
        //     clearable: true,
        //     placeholder: '请输入'
        //   }
        // },
        {
          type: 'el-select',
          label: '活动区域',
          id: 'region',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          },
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
      ]
    }
  },
  watch: {
    // formModel: {
    //   handler(v) {
    //     console.log({ search: v })
    //   },
    //   deep: true
    // }
  },
  methods: {
    handleChange(v) {
      console.log({ change137: v })
    }
  }
}
</script>

<style lang="scss" scope>
.line {
  height: 40px;
}
</style>
