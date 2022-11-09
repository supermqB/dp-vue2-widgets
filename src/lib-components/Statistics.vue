<template>
  <div>
    <slot></slot>
    <ul>
      <li v-for="(item, index) in options" :key="index">
        <span class="label">{{ `${item.label}:` }}</span>
        <span class="value">
          <span v-if="item['data']">
            <span class="numerator">{{ `${unitFmt(item['data'][0])}` }}</span>
            <span v-if="item['data'][1]">{{
              `/${unitFmt(item['data'][1])}`
            }}</span>
          </span>
          <span v-else></span>
          <span class="unit">{{ item.unit }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { unitFmt } from '@/utils/format'
export default {
  props: {
    options: {
      type: Array,
      default: () => [
        {
          label: '值域种类',
          unit: '个',
          data: [12, 200]
        },
        {
          label: '代码数量',
          unit: '种',
          data: [12, 20]
        },
        {
          label: '赋值数量',
          unit: '个',
          data: [12, 300]
        },
        {
          label: '异常统计',
          unit: '次',
          data: [0, 20000]
        }
      ] // label, unit
    }
  },
  methods: {
    unitFmt(number) {
      return unitFmt(number)
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  padding: 3px 1px 5px 12px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  font-size: 12px;
  li {
    padding: 6px;
    width: 50%;
    max-width: 150px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .label {
      color: #999999;
    }
    .value {
      /* display: inline-block;
      width: 100px; */
    }
    .numerator {
      color: #2f63b9;
    }
    .unit {
      margin-left: 3px;
    }
  }
}
</style>
