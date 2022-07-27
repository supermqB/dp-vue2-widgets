<template>
  <div class="task-aside-form">
    <div class="task-aside-form__filter">
      <el-select v-model="status" slot="prepend" multiple placeholder="筛选">
        <el-option
          v-for="item in selectOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
          <el-checkbox v-model="item.value">{{ item.label }}</el-checkbox>
        </el-option>
        <div class="task-input-do">
          <el-button size="mini">重置</el-button>
          <el-button type="primary" size="mini">确定</el-button>
        </div>
      </el-select>
    </div>
    <div class="task-aside-form__search">
      <el-input />
    </div>
  </div>
</template>
<script>
export default {
  name: 'TaskAssignAsideForm',
  data() {
    return {
      status: [],
      selectOptions: [
        {
          value: 1,
          label: '已完成'
        },
        {
          value: 2,
          label: '执行中'
        },
        {
          value: 3,
          label: '新任务'
        }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.task-aside {
  &-form {
    display: flex;
    &__filter {
      width: 56px;
    }

    &__search {
      flex: 1;
      input {
        width: 100%;
      }
    }
  }
}
</style>
