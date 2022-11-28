<template>
  <div>
    <DpTitle :text="title" v-if="size == 'l1'" />
    <DpSubtitle :text="title" v-if="size == 'l2'" />
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
