<template>
  <el-select
    v-model="status"
    slot="prepend"
    multiple
    clearable
    class="task-input-select"
    placeholder="筛选"
    size="55px"
    suffix-icon="el-icon-caret-bottom"
  >
    <el-option
      v-for="item in options"
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
</template>
