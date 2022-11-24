<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题22" />
        <dp-subtitle text="小标题22" />
      </div>
    </template>
    <template #main>
      <div style="padding: 6px">
        <div class="line">
          <dp-search-bar placeholder="可自定义文本" />
        </div>
        <div class="line">
          <dp-search-bar hideSearchInput />
        </div>
      </div>
    </template>
  </dp-layout-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scope>
.line {
  height: 40px;
}
</style>
