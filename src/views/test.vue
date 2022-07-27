<template>
  <div>
    <Father >
      <template #s>
        <Son ></Son>
      </template>
    </Father>
  </div>
</template>

<script>
import Father from './Father'
import Son from './Son'
export default {
  components: { Father, Son }
}
</script>