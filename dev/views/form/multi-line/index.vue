<template>
  <dp-layout-container drag>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题22" />
        <dp-subtitle text="小标题22" />
      </div>
    </template>
    <template #main>
      <div class="main">
        <div class="form">
          <div>
            <div>组件配置</div>
            <div>
              表单域标签的宽度
              <input v-model.number="labelWidth" type="number" />
            </div>
            <div>
              表单域的最小宽度
              <input v-model.number="itemMinWidth" type="number" />
            </div>
            <div>
              表单域的最大宽度
              <input v-model.number="itemMaxWidth" type="number" />
            </div>
          </div>

          <!-- <div class="line" style="background: #eee"> -->
          <dp-form-multi-line
            :configs="formConfigs"
            :model="form"
            :rules="formRules"
            :label-width="labelWidth + 'px'"
            :item-min-width="itemMinWidth + 'px'"
            :item-max-width="itemMaxWidth + 'px'"
          />
          <!-- </div> -->

          <!-- <div class="line" style="background: #ccc">
            <dp-form :configs="formConfigs" :model="form" inline />
          </div>

          <div class="line">
            <dp-query-bar
              :inputConfigs="formConfigs"
              :searchForm="form"
              inline
            />
          </div> -->

          <div>{{ form }}</div>
        </div>
        <div class="right">
          <!-- <dp-icon-button text="检索" :icon="searchIcon" /> -->
        </div>
      </div>
    </template>
  </dp-layout-container>
</template>

<script>
import searchIcon from '@/assets/images/icons/filter.png'

export default {
  data() {
    return {
      searchIcon,
      labelWidth: '80',
      itemMinWidth: '240',
      itemMaxWidth: '360',
      form: {
        name: '22',
        regio2n: ''
      },
      formRules: {
        name: [{ required: true }]
      },
      formConfigs: [
        {
          type: 'el-input',
          label: '活动名称',
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
        {
          type: 'el-input',
          label: '活动名2',
          id: 'name2',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        },
        {
          type: 'el-input',
          label: '活动名2',
          id: 'name25',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        },
        {
          type: 'el-input',
          label: '活动名2',
          id: 'name24',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        },
        {
          type: 'el-input',
          label: '名2',
          id: 'name23',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        },
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
  }
}
</script>

<style lang="scss" scope>
.main {
  display: flex;
  padding: 6px;
  .form {
    flex: 1;
    // background: #efefef;
  }
  .right {
    flex: 0 0 300px;
    line-height: 40px;
    // background: #e1e1e1;
  }
}

// .line {
//   width: 847px;
//   // line-height: 40px;
//   // align-items: center;
//   // height: 80px;
//   // overflow: hidden;
// }
</style>
