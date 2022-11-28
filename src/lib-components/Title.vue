<template>
  <div class="dptitle_wrapper">
    <DpTitle :text="title" v-if="size == 'l1' || size == 'l2'" :class="size" />
    <DpSubtitle :text="title" v-if="size == 'l3'" />
  </div>
</template>
<script>
import DpTitle from '@/lib-components/common/title/main'
import DpSubtitle from '@/lib-components/common/title/sub'
export default {
  props: {
    title: String,
    size: {
      type: String /*l1, l2, l3*/,
      default: () => 'l1'
    }
  },
  components: {
    DpTitle,
    DpSubtitle
  }
}
</script>
<style lang="scss" scoped>
.dptitle_wrapper {
  ::v-deep.dp-title.l2 {
    .dp-title__text {
      font-size: 13px;
      color: #303133;
    }
    .dp-title__text::before {
      background-color: #2f63b966;
      height: 10px;
      width: 3px;
    }
  }
}
</style>