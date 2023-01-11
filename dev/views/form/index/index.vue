<template>
  <dp-layout-container drag>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题22" />
        <dp-subtitle text="小标题22" />
      </div>
    </template>
    <template #main>
      <div style="padding: 6px">
        <div class="line" style="background: #eee">
          <dp-form-inline :configs="formConfigs" :model="form" />
        </div>
        <div class="line">
          <dp-query-bar :inputConfigs="formConfigs" :searchForm="form" inline />
          <!-- <dp-search-bar hideSearchInput /> -->
        </div>
      </div>
    </template>
  </dp-layout-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        region: ''
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
          label: '活动名1',
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
.line {
  width: 847px;
  // line-height: 40px;
  // align-items: center;
  // height: 80px;
  // overflow: hidden;
}
</style>
