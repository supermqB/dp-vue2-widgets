<template>
  <dp-blocks class="main-header">
    <dp-block>
      <dp-search-form :configs="searchConfigs" @change="handleChange" />
    </dp-block>
  </dp-blocks>
</template>

<script>
export default {
  data() {
    return {
      searchConfigs: [
        {
          type: 'el-input',
          // label: '活动名称',
          id: 'name',
          elOptions: {
            clearable: true,
            placeholder: '请输入'
          }
        },
        {
          type: 'el-select',
          // label: '状态',
          id: 'status',
          elOptions: {
            clearable: true,
            placeholder: '请选择状态'
          },
          options: [
            {
              label: '未开始',
              value: 0
            },
            {
              label: '进行中',
              value: 1
            },
            {
              label: '已完成',
              value: 2
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleChange(v) {
      this.$emit('change', v)
    }
  }
}
</script>

<style lang="scss" scoped>
.main-header {
  padding: 0 6px;
  box-sizing: border-box;
}
</style>
