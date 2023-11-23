<template>
  <div class="btn_grp_wrapper">
    <div class="group" v-for="(btnGrp, idx) in btnCfgs" :key="'btngrp_' + idx">
      <el-button
        v-for="btnCfg in btnGrp"
        type="primary"
        :key="btnCfg.name"
        v-bind="btnCfg.props"
        plain
        @click="btnClickHandler(btnCfg.name)"
        >{{ btnCfg.label }}</el-button
      >
    </div>
  </div>
</template>
<script>
export default {
  props: {
    btnCfgs: {
      type: Array,
      default: () => {
        return [
          [
            {
              name: 'search',
              label: '筛 选',
              props: {
                disabled: true
              }
            },
            {
              name: 'adv_search',
              label: '检 索'
            },
            {
              name: 'export',
              label: '导 出'
            }
          ],
          [
            {
              name: 'approve',
              label: '通 过'
            },
            {
              name: 'revoke',
              label: '退 回'
            }
          ],
          [
            {
              name: 'add',
              label: '新 增'
            },
            {
              name: 'import',
              label: '导 入'
            }
          ],
          [
            {
              name: 'delete',
              label: '删 除'
            }
          ]
        ]
      }
    }
  },
  methods: {
    btnClickHandler(name) {
      this.$emit(`${name}Clicked`)
    }
  }
}
</script>
<style lang="scss">
.btn_grp_wrapper {
  display: flex;
  padding: 0 6px;
  height: 100%;
  align-items: center;
  .group {
    height: 28px;
    line-height: 24px;
    white-space: nowrap;
    .el-button + .el-button {
      margin-left: 4px;
    }
  }
  .group + .group {
    border-left: 1px solid #95a8c7;
    padding-left: 4px;
    margin-left: 4px;
  }
}
</style>
