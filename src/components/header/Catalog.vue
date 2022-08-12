<template>
  <div class="catalogTitleWrap">
    <h3>{{ title }}</h3>
    <div class="buttons">
      <!--img
        v-for="action in actions"
        :src="action.icon"
        :key="action.type"
        @click="click(action.type)"
      /-->
      <div
        v-for="action in actions"
        :key="action.type"
        :class="['action', action.type]"
        @click="click(action.type)"
      ></div>
    </div>
  </div>
</template>

<script>
const ADDICON = require('@/assets/images/common/icons/add.png')
const EDITICON = require('@/assets/images/common/icons/edit.png')
const RUNICON = require('@/assets/images/common/icons/run.png')
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    actionTypes: {
      type: Array,
      default: () => {
        return ['add', 'edit', 'run']
      }
    }
  },
  computed: {
    actions() {
      return this.actionTypes.map(a => ({ type: a }))
    }
  },
  methods: {
    click(type) {
      if (type.indexOf('disable') == -1) {
        this.$emit(type)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.catalogTitleWrap {
  height: 41px;
  padding: 0 5px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
  h3 {
    font-size: 16px;
    font-weight: normal;
  }
  .buttons {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    img {
      margin: 0 4px;
      cursor: pointer;
    }
    .action {
      height: 16px;
      width: 16px;
      cursor: pointer;
      &.run {
        background-image: url('@/assets/images/common/icons/run.png');
      }
      &.run_disable {
        background-image: url('@/assets/images/common/icons/run_disable.png');
      }
      &.add {
        background-image: url('@/assets/images/common/icons/add.png');
      }
      &.edit {
        background-image: url('@/assets/images/common/icons/edit.png');
      }
    }
  }
}
</style>
