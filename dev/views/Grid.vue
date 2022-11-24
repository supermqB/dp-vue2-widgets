<template>
  <dp-layout-container>
    <template #asideLeft>
      <div class="section asideLeft">
        <dp-title text="大标题" />
      </div>
    </template>
    <template #main>
      <div class="main">
        <div class="main__header">
          <dp-title text="Main" />
        </div>
        <div class="main__content">
          <div class="content">content</div>
        </div>
      </div>
    </template>
  </dp-layout-container>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  display: flex;
  flex-direction: column;
  &__header {
    flex: 0 0 40px;
  }
  &__content {
    flex: 1;
    min-height: 0;
    overflow: auto;
    padding: 6px;
    .content {
      height: 800px;
    }
  }
}
</style>
