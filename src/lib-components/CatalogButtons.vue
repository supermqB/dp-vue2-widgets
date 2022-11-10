<template>
  <ul class="dpui_catalogbuttons_wraper">
    <li
      v-for="item in list"
      :class="item"
      :key="item"
      :title="labels[item]"
      @click="emit(item)"
    ></li>
  </ul>
</template>

<script>
export default {
  name: 'CatalogButtons',
  props: {
    list: {
      type: Array,
      default: () => ['add', 'delete'],
    },
  },
  data() {
    return {
      labels: {
        add: '添加',
        delete: '删除',
      },
    }
  },
  methods: {
    emit(event) {
      this.$emit(event)
    },
  },
}
</script>

<style scoped lang="scss">
ul {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  li {
    width: 16px;
    height: 16px;
    margin-left: 2px;
    cursor: pointer;
    background-size: cover;
    &.add {
      background-image: url('../assets/images/icons/add.svg');
      &:hover {
        background-image: url('../assets/images/icons/add_hover.svg');
      }
    }
    &.delete {
      background-image: url('../assets/images/icons/delete.svg');
      &:hover {
        background-image: url('../assets/images/icons/delete_hover.svg');
      }
    }
  }
}
</style>
