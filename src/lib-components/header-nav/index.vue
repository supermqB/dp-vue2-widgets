<template>
  <div class="dp-header-nav">
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      :background-color="backgroundColor"
      :text-color="textColor"
      :active-text-color="activeTextColor"
    >
      <template v-for="item in menuItems">
        <menuItem :item="item" :key="item.value" />
      </template>
    </el-menu>
  </div>
</template>

<script>
import menuItem from './MenuItem.vue'
export default {
  name: 'DpHeaderNav',
  props: {
    menuItems: {
      type: Array,
      default: () => []
    },
    backgroundColor: {
      type: String,
      default: '#2F63B9'
    },
    textColor: {
      type: String,
      default: '#fff'
    },
    activeTextColor: {
      type: String,
      default: '#fff'
    },
    activeIndex: {
      type: String,
      default: ''
    }
  },
  components: { menuItem },
  methods: {
    handleSelect(index, indexPath, item) {
      this.$emit('select', index, indexPath, item)
    }
  }
}
</script>
